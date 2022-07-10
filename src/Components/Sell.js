import React from 'react'

const Sell = () => {
  return (
    <>
        <div className='Sell'>
         <center className="CarInfo">
            <p>Fill Car Details</p>
            <input placeholder='Write Current Year'/><br></br>
            <input placeholder='Write Car Brand'/><br></br>
            <input placeholder='Write Car Model'/><br></br>
            <input placeholder='Write City'/><br></br>
            <input placeholder='Write Your Name'/><br></br>
            <input placeholder='Write Email'/><br></br>
            <input placeholder='Write MobileNo.'/><br></br>
         </center>

         <div>
           {/* <input/> */}
        </div>




    </div>
    <input type={"file"} id='file'/>
    <label for="file">
        📄 Upload 🚗 Image
    </label>
    </>
  )
}

export default Sell