function createDOMFromVNode(vnode) {
  // 创建元素
  const element = document.createElement(vnode.tagName);

  // 设置属性
  if (vnode.attrs) {
    for (const [key, value] of Object.entries(vnode.attrs)) {
      element.setAttribute(key, value);
    }
  }

  // 设置子节点
  if (vnode.children) {
    vnode.children.forEach((child) => {
      // 如果是文本节点，则创建文本节点
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        // 否则递归创建子节点
        element.appendChild(createDOMFromVNode(child));
      }
    });
  }

  return element;
}

function render(vnode, container) {
  // 清空容器
  container.innerHTML = '';

  // 创建真实 DOM 结构
  const dom = createDOMFromVNode(vnode);

  // 将真实 DOM 插入到容器中
  container.appendChild(dom);
}

// 示例用法
const virtualDOM = {
  tagName: 'div',
  attrs: {
    id: 'app',
    class: 'container',
  },
  children: [
    'Hello, ',
    {
      tagName: 'span',
      attrs: {
        style: 'color: red;',
      },
      children: ['world!'],
    },
  ],
};

// 将虚拟 DOM 渲染到页面中的 #root 元素中
render(virtualDOM, document.getElementById('root'));
