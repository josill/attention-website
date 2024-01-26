import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { vertexShaderGLSL, fragmentShaderGLSL } from "../shaders";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const [windowDimensions, setWindowDimensions] = useState({
    width: 800,
    height: 600,
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();
    scene.background = loader.load(
      theme === "light" ? "landing/grid-light.png" : "landing/grid-dark.png"
    );

    const width = window.innerWidth;
    const header = document.querySelector("nav") || { clientHeight: 0 };
    const titleBlock = document.getElementById("title-block") || {
      clientHeight: 0,
    };
    const height =
      window.innerHeight - header.clientHeight - titleBlock.clientHeight;

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / height,
      0.1,
      1000
    );
    camera.position.setZ(70);

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

    const geometry = new THREE.IcosahedronGeometry(
      16,
      theme === "dark" ? 60 : 20
    );
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    sphere.receiveShadow = true;

    scene.add(light);
    scene.add(sphere);

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    const clearColor = theme === "dark" ? 0x000000 : 0xffffff;
    renderer.setClearColor(clearColor);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableRotate = false;
    controls.dampingFactor = 0.25;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom = false;

    const handleResize = () => {
      if (typeof window !== "undefined") {
        const newWidth = window.innerWidth;

        if (newWidth !== windowDimensions.width) {
          setWindowDimensions({
            width: newWidth,
            height: height,
          });

          camera.aspect = newWidth / windowDimensions.height;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, windowDimensions.height);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    function animate() {
      uniforms.u_time.value += 0.003;
      const rotationSpeed = 0.002;

      // Update sphere rotation
      sphere.rotation.x += rotationSpeed;
      sphere.rotation.y += rotationSpeed;
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    const handleMouseMove = (event: any) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });

      uniforms.u_mousePosition.value.set(x, y);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme, windowDimensions]);

  return (
    <section className="flex flex-col mt-[140px]" id="hero">
      <div
        className="flex flex-col justify-center items-center"
        id="title-block"
      >
        <h3 className="text-[20px] text-darkGray mt-8 mb-4">
          Empowering tomorrow
        </h3>
        <h1 className="text-[30px] text-lightGray text-center px-4">
          Innovative{" "}
          <span className="text-darkBlue2 dark:text-lightBlue">
            IT Solutions
          </span>{" "}
          for a connected world
        </h1>
      </div>
      <canvas id="bg" />
    </section>
  );
}
