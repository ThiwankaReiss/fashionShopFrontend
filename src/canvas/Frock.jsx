import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
import * as THREE from 'three';

const Frock = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/frock_baked_All.glb');
  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);
  const beltTexture = useTexture(snap.belt);
  useFrame((state, delta) => easing.dampC(materials.FrockBeltMaterial.color, snap.color, 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockTopMaterial.color, snap.color, 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockBottomMaterial.color, "#FF0000", 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockBuckelMaterial.color, "#FF0000", 0.25, delta));
  const stateString = JSON.stringify(snap);

  // Define texture properties
  const textureRepeat = 10; // Number of times the texture repeats
  const flowerTexture = useTexture('/threejs.png'); // Replace '/flower_texture.png' with your image path

  // Apply texture repetition
  flowerTexture.wrapS = flowerTexture.wrapT= THREE.RepeatWrapping;
  flowerTexture.repeat.set(textureRepeat, textureRepeat);



  return (
    <group
      key={stateString}
    >
      <mesh
        castShadow
        geometry={nodes.Frock_Belt.geometry}
        material={materials.FrockBeltMaterial}
        material-roughness={1}
        dispose={null}
        rotation={[0, Math.PI, 0]}
        position={[0, 1.3, 0]}
      >

      </mesh>
      <mesh
        castShadow
        geometry={nodes.Frock_Top.geometry}
        material={materials.FrockTopMaterial}
        material-roughness={1}
        dispose={null}
        rotation={[0, Math.PI, 0]}
        position={[0, 1.2, 0]}
      >

      </mesh>

      
      <mesh
        castShadow
        geometry={nodes.Frock_Buckel.geometry}
        material={materials.FrockBuckelMaterial}
        material-roughness={1}
        dispose={null}
        rotation={[0, Math.PI, 0]}
        position={[0, 1.3, -0.01]}
      >


      </mesh>
      <mesh
        castShadow
        geometry={nodes.Frock_Bottom.geometry}
        material={materials.FrockBottomMaterial}
        material-roughness={1}
        dispose={null}
        rotation={[0, Math.PI, 0]}
        position={[0, 1.4, 0]}
      >

      </mesh>
      <mesh
        castShadow
        geometry={nodes.Frock_Bottom_Over.geometry}
        material={materials.FrockBottomOverMaterial}
        material-roughness={1}
        dispose={null}
        rotation={[0, Math.PI, 0]}
        position={[0, 1.4, 0]}
      >
        <meshStandardMaterial
          map={flowerTexture}
          transparent
          opacity={1.5} // Adjust opacity as needed
          depthTest={true} // Enable depth testing for transparency
          depthWrite={false} // Disable depth writing for transparency
        />

      </mesh>

      {/* <mesh
                castShadow
                geometry={nodes.testCube.geometry} // Assuming nodes.tie is the geometry of the tie
                material={materials.CubeMaterial} // Assuming materials.tieMaterial is the material for the tie
                material-roughness={1}
                dispose={null}
                rotation={[0, Math.PI , 0]}
                position={[0,0.5,0]}
            /> */}
      {/* <Decal 
                position={[0.34, 1.25, -0.8]}
                rotation={[0, 0, 0]}
                scale={0.23}
                map={beltTexture}
                // map-anisotropy={16}
                depthTest={false}
                depthWrite={true}
              />
              <Decal 
                position={[0.48, 1.25, -0.7]}
                rotation={[0, 0, 0]}
                scale={0.225}
                map={beltTexture}
                // map-anisotropy={16}
                depthTest={false}
                depthWrite={true}
              />
              <Decal 
                position={[0.645, 1.25, -0.5]}
                rotation={[0, 0, 0]}
                scale={0.225}
                map={beltTexture}
                // map-anisotropy={16}
                depthTest={false}
                depthWrite={true}
              />
              <Decal 
                position={[0.76, 1.25, -0.3]}
                rotation={[0, 1.1, 0]}
                scale={0.225}
                map={beltTexture}
                // map-anisotropy={16}
                depthTest={false}
                depthWrite={true}
              /> */}
      {/* {snap.isFullTexture && (
              <Decal 
                position={[0, 0,-0.9 ]}
                rotation={[0, 0, 0]}
                scale={2}
                map={fullTexture}
              />
            )}
    
            {snap.isLogoTexture && (
              <Decal 
                position={[0, 0.04, -0.9]}
                rotation={[0, 0, 0]}
                scale={1}
                map={logoTexture}
                // map-anisotropy={16}
                depthTest={false}
                depthWrite={true}
              />
            )} */}

    </group>


  )
}

export default Frock