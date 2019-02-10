/// <reference path="../TSDef/p5.global-mode.d.ts" />

const iterations = 10000;
const phi = 137.5;
let rotation = phi;
let distance = 1;
let distanceModifier = 1;
let seedDize = 10;

function setup() {
  createCanvas(800, 800, P2D);
  angleMode(DEGREES);
  background(0);
  translate(width / 2, height / 2);
  ellipse(0, 0, seedDize, seedDize);

  for (let i = 0; i <= iterations; i++) {
    generatePattern(rotation, distance);
    rotation += phi;
    distance += distanceModifier / 10;
    fill(255);
  }
}

function draw() {
}

function generatePattern(_rotation, _distance) {
  push();
  rotate(_rotation);
  ellipse(_distance, 0, seedDize, seedDize);
  pop();
}