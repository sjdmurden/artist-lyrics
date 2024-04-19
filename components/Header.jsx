import React from "react";
import "../src/App.css";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { Grid, Typography, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  margin: "0.8rem",
  backgroundColor: "transparent",
  boxShadow: "none",
  color: "white",
}));

function Header() {
  return (
    <div className="header">
      <Grid container rowSpacing={{ xs: 0, sm: 0 }} justifyContent={'center'}>
        <Grid item sm={4} xs={2}>
          <Item style={homeButton}>
            <Link to={"/"} color="white">
              <FontAwesomeIcon
                className="disk"
                icon={faCompactDisc}
                color="white"
                size="3x"
              />
            </Link>
          </Item>
        </Grid>
        <Grid item sm={4} xs={8}>
          <Item>
            <a className="image" href="https://skamuk.com/" target="_blank">
              <img src={"/assets/logo-top2.png"} alt="SKAM's logo" />
            </a>
          </Item>
        </Grid>
        <Grid item sm={4} xs={8} >
          <Item>
            <SearchBar />
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

const homeButton = {
  color: "white",
  textAlign: "right",
};

export default Header;
