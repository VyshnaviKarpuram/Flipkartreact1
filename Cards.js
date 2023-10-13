import React from "react";
import pa from  '../images/pa.png'
import pb from  '../images/pb.png'
import pc from  '../images/pc.png'
import pd from  '../images/pd.png'
import pe from  '../images/pe.png'
import pf from  '../images/pf.png'


function Cards(){
    return(
        <>
        <div className="row mt-4">
              <div className="col-md-10 ">
                   <div className="row">
                     <h2>Best Mobile</h2>
                   </div>
                   <div className="row mt-4">
                        <div className="col-md-2">
                           <img src={pa}/>
                            <p className="mt-3" >Google Pixel 7a<br></br><b>incl of offers</b></p>
                           
                        </div>
                        <div className="col-md-2">
                        <img src={pb}/>
                        <p className="mt-3" >Samsung S22 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={pc}/>
                        <p className="mt-3" >Realme 11 Pro 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={pd}/>
                        <p className="mt-3" >Redmi 12<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={pe}/>
                        <p className="mt-3" >Samsung F34 5G<br></br><b>incl of offers</b></p>
                        </div>
                        <div className="col-md-2">
                        <img src={pf}/>
                        <p className="mt-3" >Realme 11X 5g<br></br><b>incl of offers</b></p>
                        </div>
                   </div>
              </div>
             
        </div>
        </>
       
        );
    }
   
    
    export default Cards;