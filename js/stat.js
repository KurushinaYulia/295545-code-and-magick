'use strict'

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура! Вы победили!', 220, 40);
  ctx.fillText('Список результатов:', 150, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = 150;
  var columnWidth = 40;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 50;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;


    ctx.fillText(time.toFixed(0), histoX + columnWidth*i + columnIndent * i, 1.6 * histoHeight - height);

    if(names[i] == 'Вы'){
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else ctx.fillStyle = "blue";

    ctx.fillRect(histoX + columnWidth*i + columnIndent * i, 1.6 * histoHeight - height, columnWidth, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnWidth*i + columnIndent * i, 260);
  }
};

var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), [], []);





