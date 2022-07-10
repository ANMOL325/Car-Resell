import React from 'react'
import "./Form.css"
import Header from './Header'

const Home = () => {
  return (
    <div className='Form'>

        <Header/>

        <center>
            <h1 className='SellTitle'>SELL YOUR CAR AT <span className='Finest'>THE FINEST PRICE</span></h1>
           
        </center>

       
        <div className='WhyChooseUs'>
            <h3>Why Choose Us..</h3>

            <center>
            <span>
                <div>1</div>
                <p>🚗</p>
                <strong>Sell in 1 Hour</strong><br></br>
                <a>at your place or ours.</a>
            </span>

            <span>
                <div>2</div>
                <p>💲</p>
                <strong>Best Price</strong><br></br>
                <a>through our online auction</a>
            </span>

            <span>
                <div>3</div>
                <p>🤝</p>
                <strong>Instant Payment</strong><br></br>
                <a>in your bank account</a>
            </span>

            <span>
                <div>4</div>
                <p>🏧</p>
                <strong>Free RC Transfer</strong><br></br>
                <a>we take care of it</a>
            </span>

            </center>

        

        </div>

    </div>
  )
}

export default Home