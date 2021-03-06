import * as THREE from "https://esm.sh/three"

export default class Sphere {
    constructor() {
        this.geometry = new THREE.SphereGeometry(4, 20, 20)
        this.material = new THREE.MeshLambertMaterial({color: 0x7777FF})

        const sphere = new THREE.Mesh(this.geometry, this.material)
        sphere.position.set(20, 4, 2)
        sphere.receiveShadow = true
        sphere.castShadow = true

        this.object = sphere
    }

    update({step}) {
        this.object.position.x = 20 + 10 * Math.cos(step)
        this.object.position.y = 2 + 10 * Math.abs(Math.sin(step))
    }
}