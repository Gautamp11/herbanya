"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/models/standup-pouch-1.glb");
  return <primitive object={gltf.scene} scale={1.5} />;
};

const PouchModel = () => {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Model />
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default PouchModel;
