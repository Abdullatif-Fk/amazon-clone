import React from "react";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import "./Home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            alt=""
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          />
          <div className="home__row">
            <Product
              id="1"
              title="All too often, when we think of SEO, we only think of Google. And of course you want great rankings in the search engines."
              price={29.98}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              rating={4}
            />
            <Product
              id="2"
              title="All too often, when we think of SEO, we only think of Google. And of course you want great rankings in the search engines."
              price={29.98}
              image="https://assets.wordstream.com/s3fs-public/styles/simple_image/public/images/media/images/amazon-seo-product-images.jpg?RTG4A4jxOolNLZ63fSqHL5uboAaRwXU6&itok=XSbikWqd"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="
            The Best Amazon Fire Stick and Fire TV Remote Apps and Controls | Remote, Tv remote, Amazon fire stick"
              price={29.98}
              image="https://i.pinimg.com/564x/5d/79/bd/5d79bd1b0d7f27ffc54adb0df206284d.jpg"
              rating={3}
            />
            <Product
              id="4"
              title="We have witnessed a lot of buzz in the tech-market due to AR and VR advancements. Mainly, due to the rise of VR games, the sale of these accessories is rising exponentially."
              price={29.98}
              image="https://www.ccsinsight.com/images/blog/2017/10/PlayStationVR_l.png"
              rating={5}
            />
            <Product
              id="5"
              title="M11 Pro Smartphone MTK6595 7.2 inch 3GB RAM 32GB ROM Android 9.1 5MP + 13MP Cameras 5600mAh Battery Face ID Fingerprint Recognition - Blue US Plug (2-pin)"
              price={29.98}
              image="https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/11/goods_img_big-v1/20201211104259_5fd2dcb38d13d.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="
            Brand will contact for free installation. Contact brand for assistance @ 9212-055-955 and due to the recent government restriction, installation service may be delayed. D"
              price={29.98}
              image="https://m.media-amazon.com/images/I/51oReLMf94L.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
