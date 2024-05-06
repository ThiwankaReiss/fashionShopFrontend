import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center, RandomizedLight } from '@react-three/drei'
import CameraRig from './CameraRig'
import Shirt from './Shirt'
import Backdrop from './Backdrop.jsx'
import Frock from './Frock.jsx'

const CanvasModel = ({ modelName, beltColor, topColor, bottomColor, buckelColor, bottomTextureImage, imageRepeate, topDecalImage, decalScale, model }) => {
    return (

        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 20 }}
            gl={{ preserveDrawingBuffer: true }}

        >
            <ambientLight intensity={0.3} position={[0, 0, -10]} />
            <ambientLight intensity={0.3} position={[0.28, 0.045, -0.012]} />

            <Environment preset='city' />
            {modelName && modelName == "frock" && (
                <CameraRig cameraCordinates={[0, 0, 20]}>
                    <Backdrop></Backdrop>
                    <Center>


                        <Frock

                            beltColor={beltColor}
                            buckelColor={buckelColor}
                            topColor={topColor}
                            bottomColor={bottomColor}
                            topDecalImage={topDecalImage}
                            decalScale={decalScale}
                            bottomTextureImage={bottomTextureImage}
                            imageRepeate={imageRepeate}
                            model={model}
                        ></Frock>


                    </Center>
                </CameraRig>
            )}
        </Canvas>


    )
}

export default CanvasModel