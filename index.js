'use strict';

var Simulation = require('d3-simulation').Simulation;
var d3 = require('d3');

// Derived from [Canvas Swarm](http://bl.ocks.org/mbostock/2647922)
// See also [DOM-to-Canvas using D3](http://bl.ocks.org/mbostock/1276463)
// And [Working with D3.js and Canvas: When and How](http://bocoup.com/weblog/d3js-and-canvas/)

var data = d3.range(500).map(function () {
  return {
    xloc: 0,
    yloc: 0,
    xvel: 0,
    yvel: 0
  };
});

function renderFrame(ctx, x, y) {
  ctx.fillStyle = "steelblue";
  ctx.strokeStyle = "#666";
  ctx.strokeWidth = 1.5;
  var angle = 2 * Math.PI;
  data.forEach(function renderDatum(d) {
    d.xloc += d.xvel;
    d.yloc += d.yvel;
    d.xvel += 0.04 * (Math.random() - 0.5) - 0.05 * d.xvel - 0.0005 * d.xloc;
    d.yvel += 0.04 * (Math.random() - 0.5) - 0.05 * d.yvel - 0.0005 * d.yloc;
    ctx.beginPath();
    ctx.arc(x(d.xloc), y(d.yloc), Math.min(1 + 1000 * Math.abs(d.xvel * d.yvel), 10), 0, angle);
    ctx.fill();
    ctx.stroke();
  });
}

var simulation = new Simulation({
  renderFrame: renderFrame
});

simulation.run();
