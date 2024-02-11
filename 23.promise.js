const PENDING = Symbol('PENDING');
const FULFILLED = Symbol('FULFILLED');
const REJECTED = Symbol('REJECTED');

/**
 * 运行一个微任务队列，把传递的函数放到微队列中
 * @param {Function} callback
 */
function runMicroTask(callback) {
  if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
    // node 环境: Process.nextTick(callback)
    return process.nextTick(callback);
  } else if (typeof MutationObserver === 'function') {
    // 浏览器 MutationObserver
    const ob = new MutationObserver(callback);
    const textNode = document.createTextNode('1');
    ob.observe(textNode, {
      characterData: true,
    });
    textNode.data = '0';
  } else {
    setTimeout(callback, 0);
  }
}

/**
 * 判断是否是promise
 * @param {Object} obj
 * @returns
 */
function isPromise(obj) {
  return !!(obj && typeof obj === 'object' && typeof obj.then === 'function');
}

class MyPromise {
  /**
   * 创建一个promise
   * @param {Function} executor  任务执行器 立即执行
   */
  constructor(executor) {
    this._state = PENDING;
    this._value = undefined;
    this._handlers = []; // 处理函数形成的队列 [{executor: fn1, state: FULFILLED}, {executor: fn2, state: REJECTED}]
    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (error) {
      this._reject(error);
    }
  }

  _changeState(newState, value) {
    if (this._state !== PENDING) {
      return;
    }
    this._state = newState;
    this._value = value;
    this._runHandlers();
  }

  /**
   * 编辑当前任务完成
   */
  _resolve(data) {
    this._changeState(FULFILLED, data);
  }

  /**
   * 标记当前任务失败
   */
  _reject(reason) {
    this._changeState(REJECTED, reason);
  }

  /**
   * A+规范的then
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._pushHandlers(onFulfilled, FULFILLED, resolve, reject);
      this._pushHandlers(onRejected, REJECTED, resolve, reject);
      this._runHandlers(); // 执行队列
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  /**
   * 向处理队列中接入一个函数
   * @param {Function} executor
   * @param {String | Symbol} state
   * @param {Function} resolve 让then返回成功
   * @param {Function} reject 让then返回失败
   */
  _pushHandlers(executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject,
    });
  }

  /**
   * 根据实际情况执行队列
   */
  _runHandlers() {
    if (this._state === PENDING) {
      return;
    }
    while (this._handlers[0]) {
      const handler = this._handlers[0];
      this._runOneHandler(handler);
      this._handlers.shift();
    }
  }

  /**
   * 处理一个handler
   * @param {Object} handler
   */
  _runOneHandler({executor, state, resolve, reject}) {
    runMicroTask(() => {
      if (this._state !== state) {
        // 状态不一致，不处理
        return;
      }
      if (typeof executor !== 'function') {
        this._state === FULFILLED ? resolve(this._value) : reject(this._value);
        return;
      }

      try {
        const result = executor(this._value);
        if (isPromise(result)) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
