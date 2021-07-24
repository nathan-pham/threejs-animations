import Sketch from "./classes/Sketch.js"

import DirectionalLight from "../../chapter-1/js/classes/objects/Light.js"
import AmbientLight from "./classes/objects/lights/AmbientLight.js"
import SpotLight from "./classes/objects/lights/SpotLight.js"

import Plane from "../../chapter-1/js/classes/objects/Plane.js"
import Cube from "./classes/objects/Cube.js"

const sketch = new Sketch({container: "#webgl__container", controls: true})

const modes = {
    cubes() {
        const plane = new Plane()
    
        const cubes = []
        for(let i = 0; i < 40; i++){
            cubes.push(new Cube({spawn: plane.geometry.parameters}))
        }
    
        sketch.add(
            new DirectionalLight(),
            new AmbientLight(),
            new SpotLight(),
            
            ...cubes,
            plane
        )
        
        sketch.render()
    }
}

modes.cubes()