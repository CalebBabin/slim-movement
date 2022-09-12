# slim-movement
A simple three.js Object3D animation utility

```js
const myCube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1),
    new THREE.MeshNormalMaterial()
);

animateVector(
    myCube.position, // THREE.Vector3
    [], // array of Vector3's
    1000, // duration in milliseconds
    true // uses CatmullRomCurve to smooth the path
);
```
