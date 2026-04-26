import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useTransform, useSpring } from 'motion/react';

function CameraModel() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to rotation, position, and scale
  const rotationYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, Math.PI * 2, Math.PI * 6]);
  const positionYRaw = useTransform(scrollYProgress, [0, 0.5, 1], [2.2, 0, -2.2]);
  const positionXRaw = useTransform(scrollYProgress, 
    [0, 0.2, 0.5, 0.8, 1], 
    [3.5, 3.2, -3.2, 3.2, -3.5]
  );
  const positionZRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.5, -1]); // Depth parallax
  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.5, 0.35]);

  // Smooth springs for parallax feel
  const rotationY = useSpring(rotationYRaw, { stiffness: 45, damping: 25 });
  const positionY = useSpring(positionYRaw, { stiffness: 45, damping: 25 });
  const positionX = useSpring(positionXRaw, { stiffness: 45, damping: 25 });
  const positionZ = useSpring(positionZRaw, { stiffness: 45, damping: 25 });
  const scale = useSpring(scaleRaw, { stiffness: 45, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Mouse interaction multiplier (responsive)
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const lerpFactor = 0.08;
    
    // Position
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, positionX.get() + (mouse.current.x * 0.5), lerpFactor);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, positionY.get() + (mouse.current.y * 0.5), lerpFactor);
    groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, positionZ.get(), lerpFactor);
    
    // Rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, rotationY.get(), lerpFactor);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, mouse.current.y * 0.3, lerpFactor);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, -mouse.current.x * 0.2, lerpFactor);
    
    // Scale
    const s = scale.get();
    groupRef.current.scale.set(s, s, s);

    // Organic floating
    const time = state.clock.getElapsedTime();
    groupRef.current.position.y += Math.sin(time * 0.7) * 0.03;
    groupRef.current.position.x += Math.cos(time * 0.5) * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Abstract Camera Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 1, 1]} />
        <meshStandardMaterial color="#222" roughness={0.1} metalness={0.8} />
      </mesh>
      
      {/* Lens */}
      <mesh position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.4, 32]} />
        <meshStandardMaterial color="#111" roughness={0} metalness={1} />
      </mesh>
      
      <mesh position={[0, 0, 0.82]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.05, 32]} />
        <meshPhysicalMaterial 
          color="#3366ff" 
          transmission={0.9} 
          thickness={0.5} 
          roughness={0} 
          ior={1.5}
        />
      </mesh>
      
      {/* Viewfinder */}
      <mesh position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.4, 0.3, 0.4]} />
        <meshStandardMaterial color="#333" roughness={0.2} metalness={0.5} />
      </mesh>

      {/* Record Light */}
      <mesh position={[0.5, 0.55, 0.2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 16]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={2} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[15]">
      <Canvas 
        shadows 
        gl={{ alpha: true }}
        className="pointer-events-none"
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
          <CameraModel />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
