'use strict';

function rectangle(ctx, x, y, widthR, heightR, r, g, b, a) {
  ctx.fillStyle = 'rgba('+r+','+ g+','+ b+','+ a+')';
  ctx.strokeRect(x, y, widthR, heightR);
  ctx.fillRect(x, y, widthR, heightR);
}

function message(ctx, yourMessage, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(yourMessage, x, y);
}

function maxTime(times) {
  var max = -1;
  for ( var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}

function randomBlue() {
  return 'rgba(0, 0, ' + (Math.random() * 250).toFixed(0) + ',1)';
}


function columnDraw(ctx, name, time, height, position, settings) {
  message(ctx,time.toFixed(0),settings.histoX + settings.columnWidth * position + settings.columnIndent * position, 1.6 * settings.histoHeight - height);

  ctx.fillStyle = ( name === "Вы" ) ? 'rgba(255, 0, 0, 1)' : randomBlue();
  ctx.fillRect(settings.histoX + settings.columnWidth * position + settings.columnIndent * position, 1.6 * settings.histoHeight - height, settings.columnWidth, height);


  message(ctx,name,settings.histoX + settings.columnWidth * position + settings.columnIndent * position, 260);
}

function diagramDraw(ctx, times, names, settings) {
  var step = settings.histoHeight / maxTime(times);

  for (var i = 0; i < times.length; i++) {
    var height = step * times[i];
    columnDraw(ctx, names[i], times[i], height, i, settings);
  }
}

window.renderStatistics = function(ctx, names, times) {

  rectangle(ctx,110, 20, 420, 270, 0, 0, 0, 0.7);
  rectangle(ctx,100, 10, 420, 270, 256, 256, 256, 1.0);

  message(ctx, 'Ура! Вы победили!', 220, 40);
  message(ctx, 'Список результатов:', 150, 60);
  diagramDraw(ctx, times, names, { histoHeight : 150, columnWidth : 40, histoX : 140, columnIndent : 50 });
};

