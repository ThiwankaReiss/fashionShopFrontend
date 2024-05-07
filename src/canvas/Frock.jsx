import React, { useState, useEffect } from 'react'
import { easing } from 'maath'

import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import * as THREE from 'three';


const Frock = ({beltColor, topColor, bottomColor, buckelColor, bottomTextureImage, imageRepeate , topDecalImage, decalScale,glbPath,model}) => {

  if(model==null){
    model=0;
  }
  const { nodes, materials } = useGLTF(`/frock_baked_all${model}.glb`);

  const fullTexture=useTexture('http://localhost:8080/proxy/'+topDecalImage);
  
  
  useFrame((state, delta) => easing.dampC(materials.FrockBeltMaterial.color, beltColor, 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockTopMaterial.color, topColor, 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockBottomMaterial.color, bottomColor, 0.25, delta));
  useFrame((state, delta) => easing.dampC(materials.FrockBuckelMaterial.color, buckelColor, 0.25, delta));


  // Define texture properties
  const textureRepeat = imageRepeate; // Number of times the texture repeats
  const flowerTexture = useTexture('http://localhost:8080/proxy/'+bottomTextureImage); // Replace '/flower_texture.png' with your image path

  // Apply texture repetition
  flowerTexture.wrapS = flowerTexture.wrapT = THREE.RepeatWrapping;
  flowerTexture.repeat.set(textureRepeat, textureRepeat);
  flowerTexture.flipY=false;


  return (
    <group
    
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
        
        
              <Decal 
                position={[0,  2.15,-0.9]}
                rotation={[0, Math.PI, 0]}
                scale={decalScale}
                map={fullTexture}
              />
            

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