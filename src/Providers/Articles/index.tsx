import { Api } from "../../Services/Api";
import { createContext, ReactNode, useState } from "react";

export interface IArticles {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: any[];
  events: any[];
}

interface IArticlesProps {
  children: ReactNode;
}

interface ArticleProviderData {
  articles: IArticles[];
  moreArticles: () => void;
  listArticles: () => void;
  listArticlesTitle: (title: string) => void;
}

export const ArticleContext = createContext<ArticleProviderData>(
  {} as ArticleProviderData
);

const ArticleProvider = ({ children }: IArticlesProps) => {
  const [articles, setArticles] = useState<IArticles[]>([]);
  const [totalArticles, setTotalArticles] = useState(10);

  const listArticles = async () => {
    await Api.get("articles/").then((response) => {
      setArticles(response.data);
      console.log(articles);
    });
  };

  const moreArticles = async () => {
    await Api.get(`articles?_limit=${totalArticles + 10}`).then((response) => {
      setArticles(response.data);
    });
    setTotalArticles(totalArticles + 10);
  };

  const listArticlesTitle = async (title: string) => {
    await Api.get(`articles?title_contains=${title}`).then((response) => {
      setArticles(response.data);
    });
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        moreArticles,
        listArticles,
        listArticlesTitle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleProvider;
