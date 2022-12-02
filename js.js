const options = {
  width: 640,
  autopause: false,
  muted: true,
  loop: true,
  controls: false,
};

const player1 = new Vimeo.Player('video1', {
  url: 'https://player.vimeo.com/video/772410430?h=dfaaee220c',
  ...options,
});

const player2 = new Vimeo.Player('video2', {
  url: 'https://player.vimeo.com/video/772410499?h=dc0b01c09d',
  ...options,
});

Promise.all([player1.ready, player2.ready]).then(() => {
  player1.play();
  player2.play();
});