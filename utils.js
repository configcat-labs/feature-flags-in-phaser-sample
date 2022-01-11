export const initializeDrumpad = (game) => {
  const drumpad = game.add.sprite(340, 280, 'drumpad');
  drumpad.scale = 0.6;

  const kick = game.sound.add('kick');
  const clap = game.sound.add('clap');
  const hat = game.sound.add('hat');

  const drumpadKeys = ['A for kick', 'S for clap', 'D for hihat'];
  const drumpadInstructions = game.add.text(50, 640, drumpadKeys, { font: '32px Courier', fill: '#000000' });

  const kickControl = game.add.text(320, 288, 'kick', { font: '24px Courier', fill: '#000000' });
  const clapControl = game.add.text(404, 288, 'clap', { font: '24px Courier', fill: '#000000' });
  const hatControl = game.add.text(496, 288, 'hat', { font: '24px Courier', fill: '#000000' });

  drumpadInstructions.setText(drumpadKeys);

  game.input.keyboard.on('keydown-A', function () {
    kickControl.visible = false;
    kick.play();
  });

  game.input.keyboard.on('keyup-A', function () {
    kickControl.visible = true;
  });

  game.input.keyboard.on('keydown-S', function () {
    clapControl.visible = false;
    clap.play();
  });

  game.input.keyboard.on('keyup-S', function () {
    clapControl.visible = true;
  });

  game.input.keyboard.on('keydown-D', function () {
    hatControl.visible = false;
    hat.play();
  });

  game.input.keyboard.on('keyup-D', function () {
    hatControl.visible = true;
  });
};

export const initializePiano = (game) => {
  const piano = game.add.sprite(910, 280, 'piano');
  piano.scale = 1.08;

  const fKey = game.sound.add('f');
  const gKey = game.sound.add('g');
  const aKey = game.sound.add('a');
  const bKey = game.sound.add('b');
  const fsKey = game.sound.add('fs');
  const gsKey = game.sound.add('gs');
  const asKey = game.sound.add('as');

  const pianoKeys = [
    ' F - F key',
    ' G - G key',
    ' H - A key',
    ' J - B key',
    ' T - F# key',
    ' Y - G# key',
    ' U - A# key',
  ];

  const pianoInstructions = game.add.text(654, 560, pianoKeys, { font: '26px Courier', fill: '#000000' });

  const fControl = game.add.text(724, 400, 'F', { font: '42px Courier', fill: '#0e8f31' });
  const gControl = game.add.text(840, 400, 'G', { font: '42px Courier', fill: '#a80022' });
  const aControl = game.add.text(954, 400, 'A', { font: '42px Courier', fill: '#0800f0' });
  const bControl = game.add.text(1068, 400, 'B', { font: '42px Courier', fill: '#d8eb34' });
  const fSharpControl = game.add.text(770, 260, 'F#', { font: '42px Courier', fill: '#ffffff' });
  const gSharpControl = game.add.text(884, 260, 'G#', { font: '42px Courier', fill: '#ffffff' });
  const aSharpControl = game.add.text(1002, 260, 'A#', { font: '42px Courier', fill: '#ffffff' });

  pianoInstructions.setText(pianoKeys);

  game.input.keyboard.on('keydown-F', function () {
    fControl.visible = false;
    fKey.play();
  });

  game.input.keyboard.on('keyup-F', function () {
    fControl.visible = true;
  });

  game.input.keyboard.on('keydown-G', function () {
    gControl.visible = false;
    gKey.play();
  });

  game.input.keyboard.on('keyup-G', function () {
    gControl.visible = true;
  });

  game.input.keyboard.on('keydown-H', function () {
    aControl.visible = false;
    aKey.play();
  });

  game.input.keyboard.on('keyup-H', function () {
    aControl.visible = true;
  });

  game.input.keyboard.on('keyup-J', function () {
    bControl.visible = true;
  });

  game.input.keyboard.on('keydown-J', function () {
    bControl.visible = false;
    bKey.play();
  });

  game.input.keyboard.on('keyup-T', function () {
    fSharpControl.visible = true;
  });

  game.input.keyboard.on('keydown-T', function () {
    fSharpControl.visible = false;
    fsKey.play();
  });

  game.input.keyboard.on('keyup-Y', function () {
    gSharpControl.visible = true;
  });

  game.input.keyboard.on('keydown-Y', function () {
    gSharpControl.visible = false;
    gsKey.play();
  });

  game.input.keyboard.on('keyup-U', function () {
    aSharpControl.visible = true;
  });

  game.input.keyboard.on('keydown-U', function () {
    aSharpControl.visible = false;
    asKey.play();
  });
};
