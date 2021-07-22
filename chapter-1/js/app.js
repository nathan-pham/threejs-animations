import Sketch from "./classes/Sketch.js"

import Axes from "./classes/objects/Axes.js"
import Cube from "./classes/objects/Cube.js"
import Plane from "./classes/objects/Plane.js"
import Sphere from "./classes/objects/Sphere.js"

const sketch = new Sketch({container: "#webgl__container", controls: true})

sketch.add(
    new Axes(),
    new Plane(),

    new Cube(),
    new Sphere()
)

sketch.render()