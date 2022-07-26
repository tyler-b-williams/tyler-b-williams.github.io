import * as THREE from 'three';
import { TetrahedronGeometry } from 'three';

// init

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.45, 0.2, 0.2);
const tetraGeometry = new THREE.TetrahedronGeometry(.3, 1);
const material = new THREE.MeshNormalMaterial();
const tetraMaterial = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh(geometry, material);
const tetraMesh = new THREE.Mesh(tetraGeometry, tetraMaterial);
scene.add(tetraMesh);
// scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

// animation
let tweakSpeed = 5000;

function animation(time) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    tetraMesh.rotation.x = time / tweakSpeed;
    tetraMesh.rotation.y = time / tweakSpeed * 2;;

    renderer.render(scene, camera);

}

document.addEventListener('keydown', function(event) { //*to detect singular input
    if (event.key == "Space") {
        tweakSpeed /= 4;
        console.log("tweaking");
    }
});