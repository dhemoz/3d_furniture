import React from "react";
import '../style/style.css';
import { Model1 } from '../assets/3d/Furniture1.jsx';


export default function content() {

    return (
        <>
            <div className="content">
                <div className="flex justify-content-center">
                    <div className="card-project">
                        <div className="card flex">
                            <div>
                                <span style={{color: 'black'}}>
                                    Old Chair Carpenter
                                </span>{' '}    
                            </div>
                            <div>
                                <Model1/>
                            </div>
                        </div>
                    </div>
                    <div className="card-project">
                        <div className="card flex">
                            <div>
                                <span style={{color: 'black'}}>
                                    Lazy Couch
                                </span>{' '} 
                            </div>
                        </div>
                    </div>

                    <div className="card-project">
                        <div className="card flex">
                            <div>
                                <span style={{color: 'black'}}>
                                    Brookly Green Sofa
                                </span>{' '} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <image src="../assets/img/products/cover.png" alt="cover" />
        </>        
    )   
}