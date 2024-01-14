import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { vertexShaderGLSL, fragmentShaderGLSL } from "../shaders";
import { useTheme } from "next-themes";

const SphereAnimation = () => {
  const { theme } = useTheme();
  const [windowDimensions, setWindowDimensions] = useState({
    width: 800,
    height: 600,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.setZ(50);

    const light = new THREE.SpotLight(0xffffff, 100);
    light.castShadow = true;
    light.position.set(0, 0, 0);
    const uniforms = {
      u_time: { type: "f", value: 0.0 },
      u_resolution: {
        type: "v2",
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      u_lightColor: { type: "c", value: new THREE.Color(0xffffff) },
      u_lightPosition: { type: "v3", value: light.position },
      u_ambientLight: { type: "c", value: new THREE.Color(0x000000) },
      u_mousePosition: { type: "v2", value: new THREE.Vector2(0, 0) },
      u_cameraPosition: { type: "v3", value: camera.position },
    };
    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      wireframe: true,
      vertexShader: vertexShaderGLSL,
      fragmentShader: fragmentShaderGLSL,
    });

    const geometry = new THREE.IcosahedronGeometry(16, 60);
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    scene.add(light);
    scene.add(sphere);

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const clearColor = theme === "dark" ? 0x000000 : 0xffffff;
    renderer.setClearColor(clearColor);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;

    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });

        camera.aspect = windowDimensions.width / windowDimensions.height;
        camera.updateProjectionMatrix();
        renderer.setSize(windowDimensions.width, windowDimensions.height);
      }
    };

    function animate() {
      uniforms.u_time.value += 0.003;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    window.addEventListener("resize", handleResize);

    animate();

    const handleMouseMove = (event: any) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });

      // Update the mouse position uniform
      uniforms.u_mousePosition.value.set(x, y);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme, windowDimensions]);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden">
      <canvas id="bg" className=""></canvas>
    </div>
  );
};

export default SphereAnimation;
