import React from'react';
import '../App'
import logo12 from '../images/banner.png'
import logo19 from '../images/ban1.png'
import logo18 from '../images/ban2.png'
import logo1 from '../images/ban3.png'
import logo2 from '../images/ban4.png'
import logo3 from '../images/ban5.png'

import '../css/bootstrap.css';

function Banner(){
    return(
        <>
            <div id="carouselExampleControls" class="carousel slide section3" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={logo12} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo19} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo18} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                        <img src={logo3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>

        );
  }
    
    
    export default Banner;