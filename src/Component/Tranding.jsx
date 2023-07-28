import { Button, Container, Grid, Typography } from "@mui/material";
import mystyle from "../Style.module.css";
import { useEffect, useState } from "react";

const Tranding = () => {
  const [data, setData] = useState();
  const apiUrl = `https://api.coingecko.com/api/v3/search/trending`;

  const fetchApi = async () => {
    try {
      const res = await fetch(apiUrl);
      const resToJson = await res.json();
      setData(resToJson);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <Container>
        <Grid
          className={mystyle.trendingHeder}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid sx={12} md={4}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">🔥 Trending</Typography>
              <Button>More</Button>
            </div>
            <div style={{ textAlign: "start", margin: 15 }}>
              {data?.coins.slice(0, 4).map((coin) => {
                return (
                  <Typography
                    variant="subtitle1"
                    key={coin.item.id}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img
                      src={coin.item.small}
                      alt={"logo"}
                      height="30"
                      style={{ marginBottom: 10 }}
                    />
                    <div> {coin.item.symbol}</div>
                    {coin.item.price_btc.toFixed(6)}
                  </Typography>
                );
              })}
            </div>
          </Grid>
          <Grid sx={12} md={4}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">🚀 Top Gainers</Typography>
              <Button>More</Button>
            </div>
            <div style={{ textAlign: "start", margin: 15 }}>
              {data?.coins.slice(0, 4).map((coin) => {
                return (
                  <Typography
                    variant="subtitle1"
                    key={coin.item.id}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img
                      src={coin.item.small}
                      alt={"logo"}
                      height="30"
                      style={{ marginBottom: 10 }}
                    />
                    <div> {coin.item.symbol}</div>
                    {coin.item.price_btc.toFixed(6)}
                  </Typography>
                );
              })}
            </div>
          </Grid>
          <Grid sx={12} md={4}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4">🚨 Top Losers</Typography>
              <Button>More</Button>
            </div>

            <div style={{ textAlign: "start", margin: 15 }}>
              {data?.coins.slice(0, 4).map((coin) => {
                return (
                  <Typography
                    variant="subtitle1"
                    key={coin.item.id}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <img
                      src={coin.item.small}
                      alt={"logo"}
                      height="30"
                      style={{ marginBottom: 10 }}
                    />
                    <div> {coin.item.symbol}</div>
                    {coin.item.price_btc.toFixed(6)}
                  </Typography>
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Tranding;
