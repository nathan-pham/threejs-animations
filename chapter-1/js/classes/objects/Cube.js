import * as THREE from "https://esm.sh/three"

export default class Cube {
    constructor() {
        this.geometry = new THREE.BoxGeometry(4, 4, 4)
        this.material = new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: true})

        const cube = new THREE.Mesh(this.geometry, this.material)
        cube.position.set(-4, 3, 0)

        this.object = cube
    }
}