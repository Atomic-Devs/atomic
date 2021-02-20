import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, animated } from 'react-spring/three';

function AtomSphere() {
  // This reference will give us direct access to the mesh
  const mesh: any = useRef();

  // useFrame allows us to re-render/update rotation on each frame
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  // Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <animated.mesh
      position={[0, 1, 0]}
      ref={mesh}
      scale={props.scale}
      onClick={() => setExpand(!expand)}
      castShadow
    >
      <sphereBufferGeometry attach="geometry" args={[1, 50, 100]} />
      <meshStandardMaterial attach="material" color="cyan" />
    </animated.mesh>
  );
}

export default AtomSphere;
