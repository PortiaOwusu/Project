import React from "react";
import Carousel from "./Carousel";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <img className="home_image" src="picture6.jpg" alt="medicine" /> */}
        <Carousel classc="home_image" />

        <div className="home_row">
          <Product
            id="123456"
            title="Tothema"
            price={45.5}
            image="med7.png"
            rating={4}
          />
          <Product
            id="123457"
            title="Wellwoman"
            price={15.0}
            image="med8.png"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="128556"
            title="Rotho cooling eye drops"
            price={100.0}
            image="med18.jpg"
            rating={5}
          />
          <Product
            id="120856"
            title=" Zincovit Multivitamin"
            price={50.0}
            image="med1.webp"
            rating={4}
          />
          <Product
            id="131456"
            title="Nugel-O"
            price={25.0}
            image="med16.png"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="123429"
            title="Nacxel Injections"
            price={80.0}
            image="med6.png"
            rating={4}
          />
          <Product
            id="121756"
            title="Vactulose Syrup"
            price={70.0}
            image="med15.png"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="128556"
            title="Skin Care"
            price={100.0}
            image="picture3.png"
            rating={5}
          />
          <Product
            id="120856"
            title="Postinor2 Contraceptive"
            price={50.0}
            image="med4.png"
            rating={4}
          />
          <Product
            id="131456"
            title="Metformin Tablets"
            price={25.0}
            image="med11.png"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="123456"
            title="Cardixin Tablet"
            price={45.5}
            image="med14.png"
            rating={4}
          />
          <Product
            id="123457"
            title="lydia Contraceptive"
            price={15.0}
            image="med2.jpeg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="128556"
            title="Nurofen Syrup"
            price={100.0}
            image="med17.png"
            rating={5}
          />
          <Product
            id="120856"
            title="Potex Contraceptive"
            price={50.0}
            image="med3.png"
            rating={4}
          />
          <Product
            id="131456"
            title="Ceftriaxone Injectiom"
            price={25.0}
            image="med5.png"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
