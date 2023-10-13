import React from'react';

import ma from '../images/ma.png'
import mb from '../images/mb.png'
import mc from '../images/mc.png'
import md from '../images/md.png'
import me from '../images/me.png'
import mf from '../images/mf.png'
import mg from '../images/mg.png'
import mh from '../images/mh.png'
import mi from '../images/mi.png'
import mj from '../images/mj.png'
function Menu(){
    return(
        <>
        <div className='row mt-2 com'>
        <div className='col-md-1 '>
              <br></br>
        </div>
        <div className='col-md-1 '>
            <img src={ma}/>  
            <p>Top Offers</p>
        </div>
        <div className='col-md-1 '>
            <img src={mb}/>  
            <p>Mobile </p>
        </div>
        <div className='col-md-1 '>
            <img src={mc}/>  
            <p>Electronics</p> 
        </div>
        <div className='col-md-1'>
            <img src={md}/>  
            <p>TVs App</p> 
        </div>
        <div className='col-md-1 '>
        <img src={me}/>  
            <p>Fashion</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mf}/>  
            <p>Beauty</p> 
        </div>
        <div className='col-md-1'>
        <img src={mg}/>  
            <p>Kitchen</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mh}/>  
            <p>Furniture</p> 
        </div>
        <div className='col-md-1'>
        <img src={mi}/>  
            <p>Flights</p> 
        </div>
        <div className='col-md-1 '>
        <img src={mj}/>  
            <p>Grocery</p> 
        </div>
        <div className='col-md-1 '>
              <br></br>
        </div>
    </div>
    </>
        );
    }
    
    
    export default Menu;
