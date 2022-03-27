import React, { useEffect } from "react";
import { useRef } from "react";

import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
            flex: 1,
            color: '#white',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontSize: 20,
        }
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const history = useHistory();
  const refNotify = useRef(null);
  const refBtnNotify = useRef(null);
  const refPhoneNumber = useRef(null);
  const refCrypto = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://hackabull-crypto-tracker.herokuapp.com/api/user",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phoneNumber: refPhoneNumber.current.value.toString(),
            cryptoList: refCrypto.current.value.slice(","),
          }),
        }
      );
    } catch(e) {
      console.error(e);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar background color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
             <span style={{color: "#27CF59"}}>Crypto </span> Tracker
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <section
              className="notify_box"
              style={{
                position: "absolute",
                top: 120,
                left: "50%",
                transform: "translateX(-50%)",
                padding: 40,
                background: "#f7f7f7",
                color: "black",
                borderRadius: "15px",
                display: "none",
                transition: "all 1s",
              }}
              ref={refNotify}
            >
              <form>
                <h3>
                  Please enter your phone number to get notified when the price
                  drop below a certain level
                </h3>
                <br />
                <section
                  style={{
                    display: "grid",
                    gridTemplateRows: "repeat(2, 90px)",
                    gridTemplateColumns: "repeat(2, 200px)",
                  }}
                >
                  <label style={{ marginRight: "60px" }} for="phone_number">
                    Phone Number:{" "}
                  </label>
                  <div>
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      ref={refPhoneNumber}
                    />
                  </div>
                  <label style={{ marginRight: "60px" }} for="crypto">
                    Crypto:{" "}
                  </label>
                  <div>
                    <input
                      type="text"
                      id="crypto"
                      name="crypto"
                      ref={refCrypto}
                    />
                  </div>
                </section>
                <br></br>
                <button
                  style={{
                    padding: "8px 20px",
                    borderRadius: "10px",
                    background: "#1ed14b",
                    border: "none",
                    color: "#fff",
                    marginTop: "40px",
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                    cursor: "pointer",
                  }}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </section>
            <Typography>
              <button
                className="btn_notify"
                style={{
                  padding: "10px 20px",
                  borderRadius: 10,
                  background: "#1ed14b",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
                ref={refBtnNotify}
                onClick={() => {
                  if (refBtnNotify.current.innerText === "Notify Me") {
                    refBtnNotify.current.innerText = "X";
                    refBtnNotify.current.style.background = "red";
                  } else {
                    refBtnNotify.current.innerText = "Notify Me";
                    refBtnNotify.current.style.background = "#1ed14b";
                  }
                  if (refNotify.current.style.display !== "block")
                    refNotify.current.style.display = "block";
                  else refNotify.current.style.display = "none";
                }}
              >
                Notify Me
              </button>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
