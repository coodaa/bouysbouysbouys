import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

function Model({ url }) {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} />;
}

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Suspense fallback={null}>
        <Model url="/Volksbuehne.glb" />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
