namespace SpriteKind {
    export const eggsntoost = SpriteKind.create()
    export const pizzza = SpriteKind.create()
    export const egg_shoot = SpriteKind.create()
    export const pizza_shoot = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    if (tomato == false) {
        tomato = true
        ingreedint += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    if (dou == false) {
        dou = true
        ingreedint += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (egggg == false) {
        egggg = true
        ingreedint += 1
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (has_eggsn_toast) {
        projectile = sprites.createProjectileFromSprite(img`
            . f e e e e . . . . e e e e e . 
            . e e f e e e e e e e e e f e . 
            . e e e e e f f f f f f e e e . 
            . . e e f f 1 1 1 1 1 1 f e . . 
            . . e f 1 1 1 1 1 1 5 1 f e . . 
            . . e f 1 1 5 1 1 5 1 1 f e . . 
            . . e f 1 5 5 5 5 5 1 f e e . . 
            . . e f 1 5 5 5 5 5 1 f e e . . 
            . . e f 1 5 5 5 5 1 1 1 f e . . 
            . . e f 1 1 5 1 1 1 5 1 f e . . 
            . . e e f 1 1 1 1 1 1 1 f e . . 
            . . e e e f f f f f f f e e . . 
            . . e f e e e e e e e e e e . . 
            . . e e e e e e e e e e f e . . 
            . . e e e e e f e e e e e e . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 50)
        projectile.setKind(SpriteKind.egg_shoot)
        reset_ingredent()
    } else if (has_pizza) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . b b b b . . . . . . 
            . . . . . . b 4 4 4 b . . . . . 
            . . . . . . b b 4 4 4 b . . . . 
            . . . . . b 4 b b b 4 4 b . . . 
            . . . . b d 5 5 5 4 b 4 4 b . . 
            . . . . b 3 2 3 5 5 4 e 4 4 b . 
            . . . b d 2 2 2 5 7 5 4 e 4 4 e 
            . . . b 5 3 2 3 5 5 5 5 e e e e 
            . . b d 7 5 5 5 3 2 3 5 5 e e e 
            . . b 5 5 5 5 5 2 2 2 5 5 d e e 
            . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
            . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
            b d 3 2 d 5 5 5 d d d 4 4 . . . 
            b 5 5 5 5 d d 4 4 4 4 . . . . . 
            4 d d d 4 4 4 . . . . . . . . . 
            4 4 4 4 . . . . . . . . . . . . 
            `, mySprite, 0, 50)
        projectile.setKind(SpriteKind.pizza_shoot)
        reset_ingredent()
    }
})
scene.onOverlapTile(SpriteKind.pizzza, sprites.dungeon.stairLarge, function (sprite, location) {
    mySprite2.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    reset_ingredent()
})
function reset_ingredent () {
    chweese = false
    egggg = false
    tomato = false
    dou = false
    ingreedint = 0
    has_eggsn_toast = false
    has_pizza = false
    mySprite.setImage(img`
        . . . . . . . . . . . . . 
        . . . f f f f f f . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f f . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f f . . 
        . f f f e e 4 4 4 f . . . 
        . . f e 4 4 e e f f . . . 
        . . f e 4 4 e 7 7 f . . . 
        . f f f e e f 6 6 f f . . 
        . f f f f f f f f f f . . 
        . . f f . . . f f f . . . 
        `)
}
sprites.onOverlap(SpriteKind.egg_shoot, SpriteKind.eggsntoost, function (sprite, otherSprite) {
    mySprite2.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (chweese == false) {
        chweese = true
        ingreedint += 1
    }
})
sprites.onOverlap(SpriteKind.pizzza, SpriteKind.pizza_shoot, function (sprite, otherSprite) {
    mySprite2.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.eggsntoost, sprites.dungeon.stairLarge, function (sprite, location) {
    mySprite2.destroy()
})
let food_item = 0
let chweese = false
let mySprite2: Sprite = null
let projectile: Sprite = null
let has_pizza = false
let has_eggsn_toast = false
let egggg = false
let dou = false
let ingreedint = 0
let tomato = false
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000202020202020202020302020202020202020203020902080207020102030202020202020202020302020202020202020203030303030306030303030505050505050504050505050505050505050505`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,sprites.castle.tileGrass1,sprites.dungeon.floorLight0,sprites.dungeon.stairLarge,sprites.builtin.brick,sprites.dungeon.doorClosedNorth,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . f f f f f f . . . . 
    . f f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f c f f f c f f f . 
    f c f f c c f f f c c f f 
    f c c f f f f e f f f f f 
    f f f f f f f e e f f f . 
    f f e e f b f e e f f . . 
    . f e 4 e 1 f 4 4 f f . . 
    . f f f e e 4 4 4 f . . . 
    . . f e 4 4 e e f f . . . 
    . . f e 4 4 e 7 7 f . . . 
    . f f f e e f 6 6 f f . . 
    . f f f f f f f f f f . . 
    . . f f . . . f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setLife(5)
game.onUpdate(function () {
    if (chweese && tomato && dou && ingreedint == 3) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f c c c e e 4 4 4 . 
            . . . f 5 2 5 c e 4 4 e . 
            . . f f 5 5 5 2 c e e f . 
            . . f 5 2 5 2 5 c f f f . 
            . . . 5 5 2 5 . . f f . . 
            `)
        has_pizza = true
    } else if (egggg && dou && ingreedint == 2) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . . f f f f f f . . . 
            . . . f f f f f f f f f . 
            . . f f f c f f f f f f . 
            . f f f c f f f c f f f f 
            f f c c f f f c c f f c f 
            f f f f f e f f f f c c f 
            . f f f e e f f f f f f f 
            . f f f e e f b f e e f f 
            . . f f 4 4 f 1 e 4 e f f 
            . . . f 4 4 4 4 e f f f . 
            . . . f 1 e e e e 4 4 4 . 
            . . . f e 1 1 e e 4 4 e . 
            . . f f e 1 5 1 e e e f . 
            . . f f e 1 1 1 f f f f . 
            . . . f e e e e . f f . . 
            `)
        has_eggsn_toast = true
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . . . . 
            . . . f f f f f f . . . . 
            . f f f f f f f f f . . . 
            . f f f f f f c f f f . . 
            f f f f c f f f c f f f . 
            f c f f c c f f f c c f f 
            f c c f f f f e f f f f f 
            f f f f f f f e e f f f . 
            f f e e f b f e e f f . . 
            . f e 4 e 1 f 4 4 f f . . 
            . f f f e e 4 4 4 f . . . 
            . . f e 4 4 e e f f . . . 
            . . f e 4 4 e 7 7 f . . . 
            . f f f e e f 6 6 f f . . 
            . f f f f f f f f f f . . 
            . . f f . . . f f f . . . 
            `)
        has_eggsn_toast = false
        has_pizza = false
    }
})
game.onUpdateInterval(5000, function () {
    food_item = randint(0, 1)
    if (food_item == 0) {
        mySprite2 = sprites.create(img`
            . . . f 4 4 f f f f . . . . . . 
            . . f 4 5 5 4 5 f b f f . . . . 
            . . f 5 5 5 5 4 e 3 3 b f . . . 
            . . f e 4 4 4 e 3 3 3 3 b f . . 
            . . f 3 3 3 3 3 3 3 3 3 3 f . . 
            . f 3 3 e e 3 b e 3 3 3 3 f . . 
            . f 3 3 e e e f f 3 3 3 3 f . . 
            . f 3 e e e f b f b b b b f . . 
            . . f e 4 4 f 1 e b b b b f . . 
            . . . f 4 4 4 4 f b b b b f f . 
            . . . f e e e f f f b b b b f . 
            . . . f d d d e 4 4 f b b f . . 
            . . . f d d d e 4 4 e f f . . . 
            . . f b d b d b e e b f . . . . 
            . . f f 1 d 1 d 1 d f f . . . . 
            . . . . f f b b f f . . . . . . 
            `, SpriteKind.eggsntoost)
        mySprite2.say("eggs andtoast", 2000)
        mySprite2.setPosition(-5, 110)
        mySprite2.ax = 10
    }
    if (food_item == 1) {
        mySprite2 = sprites.create(img`
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 e f f . 
            . f f 4 4 f b f 4 4 e f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f 4 d d d d f . . . 
            . . . f e e 4 4 4 e f . . . 
            . . . 4 d d e 3 3 3 f . . . 
            . . . e d d e 3 3 3 f . . . 
            . . . f e e f 6 6 6 f . . . 
            . . . . f f f f f f . . . . 
            . . . . . f f f . . . . . . 
            `, SpriteKind.pizzza)
        mySprite2.say("gime pizza", 2000)
        mySprite2.setPosition(-5, 110)
        mySprite2.ax = 10
    }
})
forever(function () {
    mySprite.say(ingreedint)
})
