import Phaser from "phaser";

export default class HelloWorldScene extends Phaser.Scene {
  cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  player!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

  constructor() {
    super("hello-world");
  }

  preload() {
    this.load.image("sky", "assets/space3.png");
    this.load.image("player", "assets/playerShip1_blue.png");
    this.load.image("red", "assets/red.png");
  }

  create() {
    this.add.image(512, 384, "sky");

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: "ADD",
    });

    this.player = this.physics.add.image(400, 100, "player");

    this.player.setBounce(1, 1);
    this.player.setCollideWorldBounds(true);

    emitter.startFollow(this.player);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.setVelocity(0, 0);
    if (this.cursors.up.isDown) {
      this.player.setVelocityY(-300);
    }
    if (this.cursors.down.isDown) {
      this.player.setVelocityY(300);
    }
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300);
    }
    if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
    }
  }
}
