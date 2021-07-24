import * as THREE from "https://esm.sh/three"

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min

export default class Cube {
    constructor({spawn: {width, height}}={}) {
        const size = random(1, 4)
        this.geometry = new THREE.BoxGeometry(size, size, size)
        this.material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff})

        const cube = new THREE.Mesh(this.geometry, this.material)
        cube.receiveShadow = true
        cube.castShadow = true
        cube.position.set(
            random(size, width - size) - 15,
            random(0, 5),
            random(size, height - size) - 10,
        )

        this.object = cube
    }

    update() {
        this.object.rotation.x += 0.02
        this.object.rotation.y += 0.02
        this.object.rotation.z += 0.02
    }
}