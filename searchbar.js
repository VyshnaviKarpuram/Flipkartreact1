import React from'react';
import logo from '../images/logo.png'
function searchbar(){
    return(
        <>
        <div className='row com mt-4'>
            <div className='col-md-2 '>
                 <img src={logo} height={50} width={100}/>
            </div>
            <div className='col-md-5 '>
            <input type="text" placeholder='search' className="form-control dis" style={{ borderRadius: "30px 30px 30px 30px"}}  ></input>

            </div>
            <div className='col-md-2 '>
            <p className='mb-2  ' > <i class="fa-solid fa-store"></i>  Become a Seller</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2 ' > <i class="fa-regular fa-user"></i>  Vyshnavi<i class="fa-solid fa-angle-down"></i></p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2  ' > <i class="fa-solid fa-cart-shopping"></i>  Cart</p>
            </div>
            <div className='col-md-1 '>
            <p className='mb-2  ' > <i class="fa-solid fa-ellipsis-vertical"></i>  </p>
            </div>
        </div>
        </>
       
        );
    }
    
    
    export default searchbar;