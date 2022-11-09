import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ICardProps {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
}

export default function RightCard({
  id,
  title,
  url,
  imageUrl,
  newsSite,
  summary,
  publishedAt,
  updatedAt,
}: ICardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: "70vw",
        maxHeight: "350px",
        display: "flex",
        marginTop: "5vh",
        width: "70vw",
        backgroundColor: "#302E53",
        gap: "5vh"
      }}
    >
      <CardMedia
        sx={{ display: { xs: "none", md: "block" }, maxWidth: "35vh" }}
        component="img"
        height='auto'
        image={imageUrl}
        alt="Paella dish"
      />

      <Card
        sx={{
          maxHeight: "350px",
          backgroundColor: "transparent",
          color: "#D07017",
        }}
      >
        <CardHeader
          sx={{ display: "flex", textAlign: "left", color: "#D07017" }}
          title={title}
          subheader={
            <Typography sx={{ color: "#D07017" }}>
              {publishedAt.replace(/T.*/, "").split("-").reverse().join("-")}
            </Typography>
          }
        />

        <CardContent>
          <Typography variant="body2"sx={{ color: "#D07017" }} >
            {summary}
          </Typography>
        </CardContent>
        <Button variant="contained">Contained</Button>
      </Card>
    </Card>
  );
}
