import * as THREE from "https://esm.sh/three"
import {SceneUtils} from "https://esm.sh/three/examples/jsm/utils/SceneUtils.js"

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

export default class Cube {
    constructor({spawn: {width, height}}={}) {
        const size = random(1, 4)
        this.speed = random(-100, 100) / 10000
        this.geometry = new THREE.BoxGeometry(size, size, size)
        this.materials = [
            new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true}),
            new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff, opacity: 0.6})
        ] 
        
        const cube = SceneUtils.createMultiMaterialObject(this.geometry, this.materials)
        // cube.receiveShadow = true
        // cube.castShadow = true
        cube.position.set(
            random(size, width - size) - 15,
            random(size, size + 5),
            random(size, height - size) - 10,
        )

        this.object = cube
    }

    update() {
        this.object.rotation.x += this.speed
        this.object.rotation.y += this.speed
        this.object.rotation.z += this.speed
    }
}