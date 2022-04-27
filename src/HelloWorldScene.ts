import Phaser from "phaser";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super("hello-world");
  }

  preload() {
    this.load.image("sky", "assets/space3.png");
    this.load.image("player", "assets/playerShip1_blue.png");
    this.load.image("red", "assets/red.png");
  }

  create() {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    const player = this.physics.add.image(400, 100, "player");

    player.setVelocity(100, 200);
    player.setBounce(1, 1);
    player.setCollideWorldBounds(true);

    emitter.startFollow(player);
  }
}
