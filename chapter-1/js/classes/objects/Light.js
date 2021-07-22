import * as THREE from "https://esm.sh/three"

export default class Light {
    constructor() {
        const light = new THREE.DirectionalLight(0xffffff)
        light.position.set(-40, 40, -15)
        light.target.position.set(0, 0, 0)
        light.castShadow = true

        light.shadow.bias = -0.001
        Object.assign(light.shadow.mapSize, {width: 2048, height: 2048})
        Object.assign(light.shadow.camera, {near: 1, far: 500, left: 200, right: -200, top: 200, bottom: -200})

        this.object = light
    }
}