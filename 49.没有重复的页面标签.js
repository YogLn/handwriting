function getAllTagNames() {
  const tagNames = new Set(); // 使用 Set 集合来存储标签名，保证不重复

  // 获取页面上的所有标签
  const allTags = document.querySelectorAll('*');

  // 遍历所有标签，将标签名存储到 Set 集合中
  allTags.forEach((tag) => {
    tagNames.add(tag.tagName.toLowerCase()); // 标签名转换为小写，确保统一格式
  });

  // 将 Set 转换为数组并返回
  return Array.from(tagNames);
}

// 使用示例
const tagNames = getAllTagNames();
console.log(tagNames);
