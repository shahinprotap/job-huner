import { useEffect, useState } from "react";
import mystyle from "../Style.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Carousel = () => {
  const [trandinCoin, setTrandinCoin] = useState();
  const apiUrl = `https://api.coingecko.com/api/v3/search/trending`;

  const fatchApi = async () => {
    try {
      const res = await fetch(apiUrl);
      const rseToJson = await res.json();
      setTrandinCoin(rseToJson);
      console.log(trandinCoin);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fatchApi();
  }, []);
  console.log(trandinCoin);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const items = trandinCoin?.coins.map((singlecoin) => {
    return (
      <div key={singlecoin.item.id}>
        <img
          src={singlecoin.item.large}
          alt={"logo"}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <div>
          {singlecoin.item.symbol}
          {`  ${singlecoin.item.price_btc.toFixed(2)} `}
        </div>
        {`$ ${singlecoin.item.price_btc.toFixed(6)} `}
      </div>
    );
  });

  return (
    <>
      <div className={mystyle.carousel}>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          autoPlay
          items={items}
        />
      </div>
    </>
  );
};

export default Carousel;
