# slim-movement
A simple three.js Object3D animation utility

```js
const myCube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1),
    new THREE.MeshNormalMaterial()
);

animateObject3D(
    myCube, // THREE.Object3D
    [], // array of matrixes
    1000, // duration in milliseconds
    { loop: true, closed: true } // optional configuration
);
```