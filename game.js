import { initializeDrumpad, initializePiano } from './utils.js';

const config = {
  width: 1200,
  height: 900,
  renderer: Phaser.AUTO,
  backgroundColor: '#d4feff',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: { preload: preload, create: create, update: update },
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('drumpad', 'assets/images/drumpad.png');
  this.load.image('piano', 'assets/images/piano.png');
  this.load.setPath('assets/sounds');

  this.load.audio('kick', 'kick.wav');
  this.load.audio('clap', 'clap.wav');
  this.load.audio('hat', 'hat.wav');

  this.load.audio('f', 'f.wav');
  this.load.audio('g', 'g.wav');
  this.load.audio('a', 'a.wav');
  this.load.audio('b', 'b.wav');
  this.load.audio('fs', 'fs.wav');
  this.load.audio('gs', 'gs.wav');
  this.load.audio('as', 'as.wav');
}

function create() {
  this.add.text(20, 560, 'Keyboard controls', { font: '44px Courier', fill: '#000000' });

  initializeDrumpad(this);
  const logger = configcat.createConsoleLogger(3);
  let configCatClient = configcat.createClient('VKjZCKsQDEOARlF8tTjlfQ/FID-1rd9EUK384xlMCNA_w', { logger: logger });

  configCatClient.getValueAsync('isMyFirstFeatureEnabled', false).then((flagValue) => {
    if (flagValue) {
      initializePiano(this);
    }
  });
}

function update() {}
