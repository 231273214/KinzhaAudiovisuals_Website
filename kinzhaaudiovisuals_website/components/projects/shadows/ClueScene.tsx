"use client";

import { Center, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { Suspense, useMemo, useRef, type RefObject } from "react";
import { Box3, Vector3, type Group } from "three";
import type { Clue3D } from "@/lib/data/shadows";

const TARGET_SIZE = 2.4; // tamaño al que se normaliza cualquier modelo

// Giro lento automático (se desactiva con prefers-reduced-motion)
function useSpin(ref: RefObject<Group | null>) {
  const reduce = useReducedMotion();
  useFrame((_, delta) => {
    if (ref.current && !reduce) ref.current.rotation.y += delta * 0.5;
  });
}

/** Modelo real (.glb): se centra y se escala solo */
function GlbModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const spin = useRef<Group>(null);
  const model = useMemo(() => scene.clone(), [scene]);
  const scale = useMemo(() => {
    const size = new Box3().setFromObject(model).getSize(new Vector3());
    const max = Math.max(size.x, size.y, size.z);
    return max > 0 ? TARGET_SIZE / max : 1;
  }, [model]);

  useSpin(spin);

  return (
    <group ref={spin}>
      <Center>
        <primitive object={model} scale={scale} />
      </Center>
    </group>
  );
}

/** Placeholder: metrónomo con la aguja a 60 BPM */
function MetronomeShape() {
  const spin = useRef<Group>(null);
  const arm = useRef<Group>(null);
  const reduce = useReducedMotion();

  useSpin(spin);
  useFrame(({ clock }) => {
    if (arm.current && !reduce) {
      arm.current.rotation.z = Math.sin(clock.elapsedTime * Math.PI) * 0.49;
    }
  });

  return (
    <group ref={spin}>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <cylinderGeometry args={[0.3, 0.8, 2, 4]} />
        <meshStandardMaterial color="#2a2118" roughness={0.6} />
      </mesh>
      <group ref={arm} position={[0, -0.8, 0.6]}>
        <mesh position={[0, 0.9, 0]}>
          <boxGeometry args={[0.05, 1.8, 0.05]} />
          <meshStandardMaterial color="#d69e2e" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[0.24, 0.26, 0.14]} />
          <meshStandardMaterial color="#d69e2e" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

/** Placeholder: carrete de cinta */
function ReelShape() {
  const spin = useRef<Group>(null);
  useSpin(spin);

  return (
    <group ref={spin}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <cylinderGeometry args={[1.1, 1.1, 0.14, 48]} />
          <meshStandardMaterial color="#3b2a1a" roughness={0.7} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.35, 0.35, 0.18, 32]} />
          <meshStandardMaterial color="#cbd5e0" metalness={0.9} roughness={0.25} />
        </mesh>
      </group>
    </group>
  );
}

function CubeShape() {
  const spin = useRef<Group>(null);
  useSpin(spin);

  return (
    <group ref={spin}>
      <mesh>
        <boxGeometry args={[1.4, 1.4, 1.4]} />
        <meshStandardMaterial color="#1a202c" roughness={0.4} metalness={0.6} />
      </mesh>
    </group>
  );
}

function ClueModel({ clue }: { clue: Clue3D }) {
  if (clue.model) return <GlbModel url={clue.model} />;
  if (clue.placeholder === "metronome") return <MetronomeShape />;
  if (clue.placeholder === "reel") return <ReelShape />;
  return <CubeShape />;
}

export default function ClueScene({ clue, active }: { clue: Clue3D; active: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
      frameloop={active ? "always" : "never"}
    >
      <ambientLight intensity={0.15} />
      {/* Luz cenital fría (RGB 180,170,140) */}
      <directionalLight position={[0, 5, 2]} color="#b4aa8c" intensity={1.6} />
      {/* Luz roja lateral (RGB 160,30,45) */}
      <pointLight position={[-3, 0.5, 1.5]} color="#a01e2d" intensity={40} />

      <Suspense fallback={null}>
        <ClueModel key={clue.id} clue={clue} />
      </Suspense>

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}