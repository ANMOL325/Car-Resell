import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import "./OpenApp.css";
import Buy from './Buy';
import Sell from './Sell';

const OpenApp = (props) => {
    const [BuyCarColor, setBuyCarColor] = useState("");
    const [SellColor, setSellColor] = useState("");
    const [ExchangeColor, setExchangeColor] = useState("");
    const [BuyDisplay, setBuyDisplay] = useState("none");
    const [SellDisplay, setSellDisplay] = useState("none");

    const Buy = () => {
        setBuyCarColor("rgba(135, 98, 255, 0.423)");
        setExchangeColor("");
        setSellColor("")
        setSellDisplay("none");
        setBuyDisplay("block");
    }

    const Sell = () => {
        setSellColor("rgba(135, 98, 255, 0.423)");
        setExchangeColor("");
        setBuyCarColor("");
        setBuyDisplay("none");
        setSellDisplay("block");
    }

    const Exchange = () => {
        setExchangeColor("rgba(135, 98, 255, 0.423)");
        setBuyCarColor("");
        setSellColor("");
        setBuyDisplay("none");
    }


  return (
    <div className='Form'>
         <center className="LogoBox">
         <div className='CompanyOnlyLogo'></div>
         </center>

         <div className='CompanyHeading'>Kanishk <span>Auto</span>
         <p>Certified Pre-Owned</p>
         </div>

         <div className='AppOption'>
            <button style={{backgroundColor: `${BuyCarColor}`}} onClick={Buy}>BUY A USED CAR</button>
            <button style={{backgroundColor: `${SellColor}`}} onClick={Sell}>SELL MY CAR</button>
            <button style={{backgroundColor: `${ExchangeColor}`}} onClick={Exchange}>EXCHANGE</button>
         </div>

        {/* .............................BUY................................. */}

        <div style={{display: `${BuyDisplay}`}} className='Buy'>
              <p>Please Select Your Brand.</p>
              <details>
                      <summary>Select Brand</summary>
                      <ol>
                        <li>Audi</li>
                        <li>Maruti</li>
                        <li>Honda</li>
                        <li>Ferrari</li>
                      </ol>
              </details>
            
              <div className='BuyCar'>
                   <div className='CarImage'>
                       
                  
                   </div>
                   
                   
                   <div className='CardFooter'>
                        Footer
                   </div>
              </div>

         
              
        </div>


        







    {/* ...............................Sell......................... */}
    
    <div style={{display:`${SellDisplay}`}} className='Sell'>
         <center className="CarInfo">
            <p>Fill Car Details</p>
            <p>This Is Error</p>
            <input type={"file"} id='file'/>
        <label for="file">
        📄 Upload 🚗 Image
        </label><br></br>
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

    </div>
  )
}

export default OpenApp