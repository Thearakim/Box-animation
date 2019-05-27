window.addEventListener('DOMContentLoaded', () => {
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#canvas')
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf1f2f6);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    100000000
  );
  camera.position.set(0, 0, +1000);
  const controls = new THREE.OrbitControls(camera);
  const whiteDirectionalLight = new THREE.DirectionalLight(0xffffff);
  whiteDirectionalLight.intensity = 2;
  whiteDirectionalLight.position.set(1, 1, 1);
  scene.add(whiteDirectionalLight);
  const boxGeometry = new THREE.BoxGeometry(500, 500, 500);
  const blueMaterial = new THREE.MeshStandardMaterial({
    color: 0x0097e6
  });

  const blueBoxMesh = new THREE.Mesh(boxGeometry, blueMaterial);
  blueBoxMesh.position.set(0, 0, 0);

  scene.add(blueBoxMesh);
  renderer.render(scene, camera);

  const tick = () => {
    requestAnimationFrame(tick);
    blueBoxMesh.rotation.z += 0.01; // 90° = 90*Math.PI/180
    controls.update();
    renderer.render(scene, camera);
  };
  tick();

  window.addEventListener('resize', () => {
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
});
