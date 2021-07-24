import Sketch from "./classes/Sketch.js"
import Plane from "../../chapter-1/js/classes/objects/Plane.js"
import DirectionalLight from "../../chapter-1/js/classes/objects/Light.js"
import AmbientLight from "./classes/objects/AmbientLight.js"
import SpotLight from "./classes/objects/SpotLight.js"

const sketch = new Sketch({container: "#webgl__container", controls: true})

sketch.add(
    new DirectionalLight(),
    new AmbientLight(),
    new SpotLight(),
    
    new Plane()
)

sketch.render()