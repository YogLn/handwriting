// 生成随机的十六进制颜色
function generateHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// 将十六进制颜色转换为RGBA格式
function hexToRGBA(hex, alpha = 1) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// 将RGBA格式转换为十六进制颜色
function RGBAToHex(rgba) {
  const match = rgba.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
  if (!match) return null;
  const [_, r, g, b, a] = match;
  const alpha = a !== undefined ? parseFloat(a) : 1;
  const rHex = parseInt(r).toString(16).padStart(2, '0');
  const gHex = parseInt(g).toString(16).padStart(2, '0');
  const bHex = parseInt(b).toString(16).padStart(2, '0');
  return `#${rHex}${gHex}${bHex}`;
}

// 示例使用
const hexColor = generateHexColor();
console.log('Generated Hex Color:', hexColor);

const rgbaColor = hexToRGBA(hexColor, 0.5);
console.log('Converted to RGBA:', rgbaColor);

const convertedHexColor = RGBAToHex(rgbaColor);
console.log('Converted back to Hex Color:', convertedHexColor);
