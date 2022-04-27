import Phaser from "phaser";
import HelloWorldScene from "./HelloWorldScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1024,
  height: 768,
  physics: {
    default: "arcade",
    arcade: {},
  },
  scene: [HelloWorldScene],
};

export default new Phaser.Game(config);
