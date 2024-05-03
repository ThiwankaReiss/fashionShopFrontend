import React from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei';
import state from '../store';
import * as THREE from 'three';

const Frock = ({beltColor, topColor, bottomColor, buckelColor, bottomTextureImage, imageRepeate , topDecalImage, decalScale}) => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/frock_baked_all.glb');

  const fullTexture = useTexture('/vite.svg');

  useFrame((state, delta) => easing.dampC(materials.FrockBeltMaterial.color, beltColor, 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockTopMaterial.color, snap.color, 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockBottomMaterial.color, "#FF0000", 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockBuckelMaterial.color, buckelColor, 0.25, delta));
  const stateString = JSON.stringify(snap);

  // Define texture properties
  const textureRepeat = 10; // Number of times the texture repeats
  const flowerTexture = useTexture('http://localhost:8080/proxy/1lAjGvKnX2rYGq6BWJ0X_8IWce-N1EEbt'); // Replace '/flower_texture.png' with your image path

  // Apply texture repetition
  flowerTexture.wrapS = flowerTexture.wrapT = THREE.RepeatWrapping;
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
        
        {snap.isLogoTexture && (
              <Decal 
                position={[0,  2.15,-0.9]}
                rotation={[0, 0, 0]}
                scale={1}
                map={fullTexture}
              />
            )}

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


    </group>


  )
}

export default Frock