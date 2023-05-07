const canvas = document.getElementById('canvas');
const ctx = canvas.getcontext('2d');
ctx.fillStyle = "blue";
ctx.fillRect (10, 10, 150, 100)
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 50;

const gradient = context.createRadialGradient(
  centerX, centerY, 0,
  centerX, centerY, radius
);
gradient.addColorStop(0, 'yellow');
gradient.addColorStop(1, 'red');

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
context.fillStyle = gradient;
context.fill();
