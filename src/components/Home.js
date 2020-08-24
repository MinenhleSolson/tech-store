import React from 'react';
import Products from './Products';
import '../home.css';
import { useStateValue } from './StateProvider';


function Home() {
    return (
        <div>
            <img src="https://www.asus.com/campaign/Powered-by-ASUS-UK/images/ASUS-GeForce-RTX_20-Series_Banner_2396x1016.jpg" alt=""
                className="homeImage"
            />

<div className="homeRow">   
        <Products
        id="001"
        title="Asus ZenBook Pro Duo UX581 15.6” 4K UHD NanoEdge Bezel Touch, Intel Core i7-9750HT"
        price={47990}
        ratings={4}
        image="https://images-na.ssl-images-amazon.com/images/I/81deSneMCOL._AC_SX679_.jpg"
        />
        </div>









        <div className="homeRow">   
        <Products
        id="002"
        title="ASUS ROG STRIX GeForce RTX 2070 8G GDDR6 HDMI DP 1.4 "
        price={24900}
        ratings={5}
        image="https://images-na.ssl-images-amazon.com/images/I/91Qg5K-cmfL._AC_SX679_.jpg"
        />
         <Products
        id="003"
        title="SAMSUNG 32-inch Odyssey G7 – QHD 1000R Curved Gaming Monitor: 240hz,1ms"
        price={14000}
        ratings={4}
        image="https://images-na.ssl-images-amazon.com/images/I/810s87wc61L._AC_SX679_.jpg"
        />
        </div>








        <div className="homeRow">   
        <Products
        id="004"
        title="Asus Rog Swift PG35VQ 35” Curved HDR Gaming Monitor 200Hz (3440 X 1440)"
        price={42340}
        ratings={5}
        image="https://images-na.ssl-images-amazon.com/images/I/818OGKuH-GL._AC_SX679_.jpg"
        />
         <Products
        id="005"
        title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Space Gray"
        price={52999}
        ratings={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71pC69I3lzL._AC_SX425_.jpg"
        />
        </div>




        <div className="homeRow">   
        <Products
        id="007"
        title=" Microsoft Surface Pro 7 – 12.3 Touch-Screen  10th Gen Intel Core i5 8GB Memory  128GB SSD (Latest Model) Platinum with Black Type Cover"
        price={13770}
        ratings={4}
        image="https://images-na.ssl-images-amazon.com/images/I/714cHoaDUpL._AC_SX569_.jpg"
        />
        </div>


        </div>
    )
}

export default Home
