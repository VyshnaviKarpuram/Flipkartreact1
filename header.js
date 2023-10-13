import React from'react';


function header(){
    return(
        <>
        <div className='row mt-3 con'>
            <div className='col-md-9 con ' >
              <div className='row  con '>

                   <div className='col-md-8 con'>
                   <input type="text" placeholder='search' className="form-control dis" style={{ borderRadius: "30px 0px 0px 30px"}}  ></input>
                   </div>
                   <div className='col-md-2 con'>
                   <button className="form-control dis" style={{ borderRadius: "0px 30px 30px 0px"}}><i></i></button>
                   </div>
                  
                  
                   <div className='col-md-2 mt-2'>
                   <i class="fa-solid fa-microphone size"></i>
                    </div>



              {/* <input type="text" placeholder='search' className="form-control" style={{ borderRadius: "30px"}}  ></input> */}
              
              {/* <div className='col-md-9' >
              <input type="text" placeholder='search' className="form-control" style={{ borderRadius: "30px"}}  ></input>
              </div>
              <div className='col-md-3 mt-2 ' >
              {/* <i class="fa-solid fa-magnifying-glass size"></i> */}
              {/* <i class="fa-solid fa-microphone size"></i> */} 
             
              {/* </div> */}
                
              </div>  
            </div>
            <div className='col-md-3    '>
           <div className='row'>
                <div className='col-md-6'>
                        <br></br>
                </div>
                <div className='col-md-6'>
                      <div className='row'>
                              <div className='col-md-4 mt-101 hv'>
                              <i class="fa-regular fa-video size hv"></i>
                              </div>
                              <div className='col-md-4'>
                              <i class="fa-solid fa-bell size hv"></i>
                              </div>
                              <div className='col-md-4 '>
                              <i class="fa-solid fa-user size hv"></i>
                              </div>
                      </div>
                </div>
           </div>
           </div>

        </div>
        </>
    );
}


export default header;
