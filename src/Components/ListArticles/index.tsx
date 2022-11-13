import { ArticleContext } from "../../Providers/Articles";
import { useEffect, useContext } from "react";

import RightCard from "../RigthCard";
import LeftCard from "../LeftCard";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

export default function ListArticle() {
  const { articles, listArticles, moreArticles, sorter, listArticlesTitle } =
    useContext(ArticleContext);

  const param = useParams();

  useEffect(() => {
    if (param) {
      listArticlesTitle(param.id);
    } else {
      listArticles();
    }
  }, []);

  return (
    <>
      {articles.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {articles
            .sort((a, b) => (sorter === "oldest" ? a.id - b.id : b.id - a.id))
            .map((article, index) => {
              if (index % 2 === 0) {
                return (
                  <LeftCard
                    id={article.id}
                    imageUrl={article.imageUrl}
                    newsSite={article.newsSite}
                    publishedAt={article.publishedAt}
                    summary={article.summary}
                    title={article.title}
                    updatedAt={article.updatedAt}
                    url={article.url}
                    key={article.id}
                  />
                );
              } else {
                return (
                  <RightCard
                    id={article.id}
                    imageUrl={article.imageUrl}
                    newsSite={article.newsSite}
                    publishedAt={article.publishedAt}
                    summary={article.summary}
                    title={article.title}
                    updatedAt={article.updatedAt}
                    url={article.url}
                    key={article.id}
                  />
                );
              }
            })}
        </div>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={articles.length === 0}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1vh",
        }}
      >
        <Box
          sx={{
            width: 10,
            height: 10,
            backgroundColor: "transparent",
            border: "4px solid #D07017",
          }}
        />

        <Box
          sx={{
            width: 10,
            height: 10,
            backgroundColor: "transparent",
            border: "4px solid #D07017",
          }}
        />
        <Box
          sx={{
            width: 10,
            height: 10,
            backgroundColor: "transparent",
            border: "4px solid #D07017",
          }}
        />
        <Button
          sx={{
            marginBottom: "5vh",
            marginTop: "3vh",
            color: "#1E2022",
            fontWeight: "bold",
            border: "none",
            backgroundColor: "#D07017",
          }}
          variant="contained"
          size="large"
          onClick={() => moreArticles()}
        >
          Carregar mais
        </Button>
      </div>
    </>
  );
}
