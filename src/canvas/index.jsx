import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, RandomizedLight } from '@react-three/drei'
import CameraRig from './CameraRig'
import Shirt from './Shirt'
import Backdrop from './Backdrop.jsx'
import Frock from './Frock.jsx'

const CanvasModel = ({ modelName ,beltColor, topColor, bottomColor, buckelColor, bottomTextureImage, imageRepeate , topDecalImage, decalScale }) => {
    return (

        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}

        >
            <ambientLight intensity={0.3} position={[0, 0, -10]} />
            <ambientLight intensity={0.3} position={[0.28, 0.045, -0.012]} />

            <Environment preset='city' />
            <CameraRig cameraCordinates={[0, 0, 20]}>
                <Backdrop></Backdrop>
                <Center>
                    {modelName && modelName == "shirt" && (
                        // <Shirt />
                        <Frock beltColor={beltColor}></Frock>
                    )}

                </Center>
            </CameraRig>
        </Canvas>


    )
}

export default CanvasModel