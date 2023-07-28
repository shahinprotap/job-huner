import mystyle from "../Style.module.css";
import background from "../assets/img/banner2.jpg";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }}>
        <Container
          // className={mystyle.bannarcont}
          style={{
            height: 400,
            display: "flex",
            flexDirection: "column",
            paddingTop: 25,
            justifyContent: "space-around",
          }}
        >
          <div className={mystyle.tagline}>
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "monospace",
              }}
            >
              Job Hunter
            </Typography>
            <Typography
              variant="subtitle2"
              style={{
                color: "darkgray",
                textTransform: "capitalize",
                fontFamily: "monospace",
              }}
            >
              Get All The Info Regarding Your Favorite Crypto Currency
            </Typography>
          </div>
          <Carousel />
        </Container>
      </div>
    </>
  );
};

export default Banner;
