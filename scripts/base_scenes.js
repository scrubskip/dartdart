/**
 * Basic scene that plays a kaboom animation where the pointer goes.
 * Used as an overlay.
 */
class HitDetectScene extends Phaser.Scene {
    constructor() {
        super({key:'HitDetectScene', active:true});
    }

    preload() {
        this.load.spritesheet('kaboom', 'assets/kaboom.png', {
            frameWidth: 64,
            frameHeight: 64
        });
    }

    create() {
        this.anims.create({
            key: 'kaboom-boom',
            frames: this.anims.generateFrameNumbers('kaboom', {
                start: 0,
                end: 7
            }),
            repeat: 0,
            frameRate: 20
            });
        const kaboom = this.add.sprite(100,100,'kaboom')
        kaboom.setScale(1);
        kaboom.setVisible(false);
        kaboom.on('animationcomplete', () => {
            kaboom.setVisible(false);
        })
        this.input.on('pointerdown', pointer => {
            kaboom.setPosition(pointer.x, pointer.y);
            kaboom.setVisible(true);
            kaboom.play('kaboom-boom');
        });
    }
}
