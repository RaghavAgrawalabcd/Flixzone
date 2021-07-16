import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";
import laptop from "../images/laptop.png";
import digital from "../images/digital.png";
import headphone from "../images/headphone.png";
import screen from "../images/screen.png";
import watch from "../images/watch.png";
import earbuds from "../images/earbuds.png";

function Home() {

  return (
    <div className="Home">
      <div className="HomeContainer">
        <Link to="/AmazonPrime">
       <div className="HomeImageGradient"></div>
        </Link>
        <div className="HomeRow">
          <Product
            id="1"
            title="Lenovo IdeaPad 3 (2021) | Intel Core i3 11th Gen |14 FHD IPS |Thin & Light Laptop | 4-Side Narrow Bezel (8GB/256GB SSD/Win10/Office2019/Backlit KB/Fingerprint Reader/Arctic"
            price={299.99}
            image={laptop}
            rating={4}
          />
          <Product
            id="2"
            title="OneOdio Adapter-Free DJ Headphones for Studio Monitoring and Mixing,Sound Isolation, 90° Rotatable Housing with Top Protein Leather Earcups, 50mm Driver Unit Over Ear DJ Headset"
            price={29.99}
            image={headphone}
            rating={3}/>
        </div>
        <div className="HomeRow">
          <Product
            id="3"
            title="SKMEI Analogue - Digital Men's Watch (Black Dial Black Colored Strap)"
            price={59.99}
            image={digital}
            rating={4} />
          <Product
            id="4"
            title="Philips Audio UpBeat TAUT102BK True Wireless TWS Black Bluetooth Earbuds with 12 Hrs Playtime (3+9), Voice Assistant"
            price={99.99}
            image={earbuds}
            rating={5} />
          <Product
            id="5"
            title="Casio Edifice Chronograph Black Dial Men's Watch EFR-569BL-2AVUDF(ED491)"
            price={39.99}
            image={watch}
            rating={3}/>
        </div>
        <div className="HomeRow">
          <Product
            id="6"
            title="LG  cm (65 inches) 4K Ultra HD Smart IPS LED TV 65UM7290PTD (Ceramic Black) (2020 Model)"
            price={699.99}
            image={screen}
            rating={5}
            />
        </div>
      </div>
    </div>
  );
}

export default Home;
