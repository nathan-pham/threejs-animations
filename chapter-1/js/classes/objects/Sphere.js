import * as THREE from "https://esm.sh/three"

export default class Sphere {
    constructor() {
        this.geometry = new THREE.SphereGeometry(4, 20, 20)
        this.material = new THREE.MeshBasicMaterial({color: 0x7777FF, wireframe: true})

        const sphere = new THREE.Mesh(this.geometry, this.material)
        sphere.position.set(20, 4, 2)
        
        this.object = sphere
    }
}