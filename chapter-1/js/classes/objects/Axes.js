import * as THREE from "https://esm.sh/three"

export default class Axes {
    constructor() {
        this.object = new THREE.AxesHelper(20)
    }
}