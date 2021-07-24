import * as THREE from "https://esm.sh/three"

export default class SpotLight {
    constructor() {
        const light = new THREE.SpotLight(0xffffff, 1.2, 150, 120)
        light.position.set(-40, 60, -10)
        light.castsShadow = true

        this.object = light
    }
}