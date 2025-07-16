import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!containerRef.current) return;
    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);
    // Create grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x9fef00, 0x1a1a1a);
    scene.add(gridHelper);
    // Create cube mesh
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({
      color: 0x9fef00,
      wireframe: true
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x9fef00
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    // Handle mouse movement
    const onMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      particlesMesh.rotation.y = x * 0.5;
      particlesMesh.rotation.x = y * 0.5;
    };
    window.addEventListener('mousemove', onMouseMove);
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      gridHelper.position.y = -2;
      gridHelper.rotation.x = Math.PI / 2;
      renderer.render(scene, camera);
    };
    animate();
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    // Clean up
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);
  return <div ref={containerRef} className="w-full h-full absolute inset-0" />;
}