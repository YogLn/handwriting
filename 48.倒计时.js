function countdown(endDate) {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    return '倒计时结束';
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return `${hours} 时 ${minutes} 分 ${seconds} 秒`;
}

// 使用示例
const endDate = new Date().getTime() + 10000; // 设定倒计时结束时间为当前时间的 10 秒后
const timer = setInterval(function () {
  console.log(countdown(endDate));
  if (countdown(endDate) === '倒计时结束') {
    clearInterval(timer);
  }
}, 1000);
