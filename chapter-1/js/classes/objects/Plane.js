import * as THREE from "https://esm.sh/three"

export default class Plane {
    constructor() {
        this.geometry = new THREE.PlaneGeometry(60, 20)
        this.material = new THREE.MeshBasicMaterial({color: 0xAAAAAA})

        const plane = new THREE.Mesh(this.geometry, this.material)
        plane.rotation.x = -Math.PI / 2
        plane.position.set(15, 0, 0)

        this.object = plane
    }
}