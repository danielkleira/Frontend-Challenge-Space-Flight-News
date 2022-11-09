import { ArticleContext } from "../../Providers/Articles";
import { useEffect, useState, useContext } from "react";
import RightCard from "../RigthCard";

export const ListArticle = () => {
  const { articles, listArticles, listArticlesTitle, moreArticles } =
    useContext(ArticleContext);
  useEffect(() => {
    listArticles();
  }, []);

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <>
      {articles.length > 0 ? (
        <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
          {articles.map((article) => (
            <>
              <div></div>
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
            </>
          ))}
        </div>
      ) : (
        <span>ainda nao</span>
      )}

      <div>
        <button onClick={() => moreArticles()}>Carregar mais</button>
      </div>
    </>
  );
};
