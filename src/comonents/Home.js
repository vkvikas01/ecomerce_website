import React from 'react'
import Products from './Products'

export default function Home() {
    return (
        <div className='homemain'>
        
            <div className="card text-bg-dark text-white border-0">
            
                <img src="/assets/bg1.jpg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-conter">
                    <div className="container text-right mx-8 fs-10">
                    <h1 className="card-title dispaly-3  fw-bolder ">New Season Comming</h1>
                    <p className="card-text lead "><h2>Check Out All trends.</h2></p>
                    </div>
                </div>
            </div>
            <Products/>    
        </div>
        
    );
}
