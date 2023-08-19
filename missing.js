// add contents from collectathon.js to edit

// placeholder for no code

const canvas = document.getElementById("game_screen");
const ctx = canvas.getContext("2d");

function drawStroked(text, x, y) {
  ctx.font = '80px Sans-serif';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 8;
  ctx.lineJoin="miter";
  ctx.miterLimit=2;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = 'white';
  ctx.fillText(text, x, y);
}

drawStroked("javascript file not found", 738, 449)
