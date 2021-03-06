import * as THREE from "https://esm.sh/three"

export default class Cube {
    constructor() {
        this.geometry = new THREE.BoxGeometry(4, 4, 4)
        this.material = new THREE.MeshLambertMaterial({color: 0xFF0000})

        const cube = new THREE.Mesh(this.geometry, this.material)
        cube.position.set(-4, 3, 0)
        cube.receiveShadow = true
        cube.castShadow = true

        this.object = cube
    }

    update() {
        this.object.rotation.x += 0.02
        this.object.rotation.y += 0.02
        this.object.rotation.z += 0.02
    }
}