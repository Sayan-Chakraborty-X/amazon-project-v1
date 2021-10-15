import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home--container">
                <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="" />

                <div className="home--row">
                    <Product
                        id="01"
                        title="See U in C by Ali Karim Sayad (Author)"
                        price={4450}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"

                    />
                    <Product
                        id="02"
                        title="ASUS VivoBook 14 (2021) FHD Thin and Light Laptop"
                        price={41450}
                        image="https://m.media-amazon.com/images/I/71WuDXpTAlL._SL1500_.jpg"

                    />
                    <Product
                        id="03"
                        title="OnePlus Nord 2 5G (Blue Haze, 12GB RAM, 256GB Storage)"
                        price={34000}
                        image="https://m.media-amazon.com/images/I/61TnX0PmqES._SL1500_.jpg"
                    />

                </div>
                <div className="home--row">
                    <Product
                        id="04"
                        title="INR 500 Steam Wallet Code (Digital Code- Email Delivery within 2 hours)"
                        price={450}
                        image="https://m.media-amazon.com/images/I/61QZvyzobtL._SL1100_.jpg"

                    />
                    <Product
                        id="05"
                        title="OnePlus Bullets Wireless Z Bass Edition (Bold Black)"
                        price={1999}
                        image="https://m.media-amazon.com/images/I/51R4FJdgbMS._SL1500_.jpg"

                    />

                </div>
                <div className="home--row">
                    <Product
                        id="06"
                        title="Samsung 163 cm (65 inches) Crystal 4K Pro Series Ultra HD Smart LED TV"
                        price={19040}
                        image="https://m.media-amazon.com/images/I/61GwJAhftvS._SL1500_.jpg"

                    />

                </div>
            </div>
        </div>
    )
}

export default Home
