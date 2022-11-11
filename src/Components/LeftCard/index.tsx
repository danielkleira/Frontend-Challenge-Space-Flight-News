import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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

const style = {
  position: "absolute" as "absolute",
  display: "flex",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: "black",
  bgcolor: "background.paper",
  border: "2px solid #fff",
  p: 4,
};


export default function LeftCard({
  id,
  title,
  url,
  imageUrl,
  newsSite,
  summary,
  publishedAt,
  updatedAt,
}: ICardProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        sx={{
          maxWidth: "59vw",
          display: "flex",
          marginTop: "10vh",
          marginBottom: "5vh",
          width: "59vw",
          backgroundColor: "#1E2022",
        }}
      >
        <CardMedia
          sx={{
            display: { xs: "none", md: "block" },
            maxWidth: "45vh",
            width: "22vw",
          }}
          component="img"
          height="auto"
          image={imageUrl}
          alt="Image site"
        />
        <Card
          sx={{
            backgroundColor: "transparent",
            color: "white",
            padding: "5px 10px 10px 20px",
            textAlign: "left",
          }}
        >
          <CardHeader
            sx={{ display: "flex", textAlign: "left", color: "white" }}
            title={
              <Typography sx={{ display: "flex", width: "100%" }}>
                {title}
              </Typography>
            }
            subheader={
              <Typography
                sx={{
                  color: "#878788",
                  fontSize: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "95%",
                }}
              >
                <span>
                  {publishedAt
                    .replace(/T.*/, "")
                    .split("-")
                    .reverse()
                    .join("/")}
                </span>
                <a href={url} style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{ p: 2, display: { xs: "none", md: "block" } }}
                    style={{
                      backgroundColor: "#D07017",
                      fontSize: "12px",
                      height: "1vw",
                      display: "flex",
                      color: "#1E2022",
                      border: "none",
                      textTransform: "none",
                    }}
                  >
                    News Site
                  </Button>
                </a>
              </Typography>
            }
          />

          <CardContent>
            <Typography
              variant="body2"
              sx={{
                display: "-webkit-box",
                textAlign: "left",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                opacity: "0.8",
              }}
            >
              {summary}
            </Typography>
          </CardContent>
          <Button
            variant="contained"
            sx={{}}
            style={{
              backgroundColor: "#D07017",
              marginBottom: "1vh",
              color: "#1E2022",
              fontWeight: "bold",
              fontSize: "12px",
              textTransform: "none",
              marginLeft: "15px",
            }}
            onClick={handleOpen}
          >
            Ver Mais
          </Button>
        </Card>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            sx={{
              display: { xs: "none", md: "block" },
              maxWidth: "25vh",
              width: "22vw",
            }}
            component="img"
            height="auto"
            image={imageUrl}
            alt="Image site"
          />
          <Card
            sx={{
              padding: "5px 10px 10px 20px",
            }}
          >
            <CardHeader
              sx={{ display: "flex", textAlign: "left" }}
              title={
                <Typography sx={{ display: "flex", width: "100%" }}>
                  {title}
                </Typography>
              }
              subheader={
                <Typography
                  sx={{
                    color: "#878788",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "95%",
                  }}
                >
                  <span>
                    {publishedAt
                      .replace(/T.*/, "")
                      .split("-")
                      .reverse()
                      .join("/")}
                  </span>
                </Typography>
              }
            />

            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "left",
                }}
              >
                {summary}
              </Typography>
            </CardContent>
            <a href={url} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                sx={{}}
                style={{
                  backgroundColor: "#D07017",
                  marginBottom: "1vh",
                  fontWeight: "bold",
                  fontSize: "12px",
                  textTransform: "none",
                }}
                onClick={handleOpen}
              >
                Ir para o site
              </Button>
            </a>
          </Card>
        </Box>
      </Modal>
    </>
  );
}
