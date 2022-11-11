import ListArticle from "../../Components/ListArticles";
import Header from "../../Components/Header";

import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import Divider from "@mui/material/Divider";

export default function Main() {
  return (
    <>
      <Header />
      <div style={{ height: "22vh" }}>
        <Brightness1Icon
          sx={{
            fontSize: "100px",
            color: "transparent",
            border: "1px solid #302E53",
            borderRadius: "100px",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: "15.5vh",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        />

        <RocketLaunchRoundedIcon
          sx={{
            fontSize: "70px",
            color: "#302E53",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            top: "17.2vh",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
        />
      </div>
      <h1 style={{ color: "#302E53" }}>Space Flight News</h1>
      <Divider variant="middle" color="grey" sx={{ marginTop: "4vh" }} />

      <ListArticle />
    </>
  );
}
