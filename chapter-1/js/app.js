import Sketch from "./classes/Sketch.js"
import Axes from "./classes/objects/Axes.js"
import Plane from "./classes/objects/Plane.js"

const sketch = new Sketch({container: "#webgl__container", controls: true})

sketch.add(
    new Axes(),
    new Plane()
)

sketch.render()