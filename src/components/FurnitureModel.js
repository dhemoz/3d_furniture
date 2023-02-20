import React from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import '../style/style.css';
import Model1 from '../assets/3d/Furniture1';
import { DirectionalLight } from "three";


export default function furnituremodel() {

    return (
        <div className="furniture-container">
            <Canvas>
                <ambientLight intensity={1.25}/>
                <DirectionalLight position={[1,0,0]}/>
                <Model1/>
                <OrbitControls/>
            </Canvas>
        </div>    
   )
}
