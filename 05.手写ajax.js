/**
 * ajax就是记住4中API
 * 1个构造函数:XMLHttpRequest；用于创建
 * 1个时间:readystatechange；用于判断状态
 * 2个方法:open，send。用于开始
 * 3个属性:readState，status，responseText。用于结束
 */

/**
 * 顺序：
 * 1.XMLHttpRequest()创建        const xhr = new XMLHttpRequest(); xhr.readyState = 0;
 * 2.open()准备                  xhr.open(method, url);            xhr.readyState = 1;
 * 3.onReadyStateChange事件处理  xhr.onreadystatechange -xhr.status状态码 -xhr.responseText值  xhr.readyState = 4;
 *  - readyState返回
 *  - status 结果状态码。 responseText返回值
 * 4. send()发送                 xhr.send();无参数
 */

const ajax = {
  get: function (url, fn) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if ((xhr.status > 200 && xhr.status < 300) || xhr.status === 304) {
          fn(xhr.responseText);
        }
      }
    };
    xhr.send();
  },
};

// ajax.get('http://127.0.0.1:3000/', console.log);
