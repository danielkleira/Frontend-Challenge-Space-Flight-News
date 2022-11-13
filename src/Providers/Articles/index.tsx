import { createContext, ReactNode, useState } from "react";

import { Api } from "../../Services/Api";

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
  sorter: string;
  setSort: (value: string) => void;
  moreArticles: () => void;
  listArticles: () => void;
  listArticlesTitle: (title: string | undefined) => void;
}

export const ArticleContext = createContext<ArticleProviderData>(
  {} as ArticleProviderData
);

const ArticleProvider = ({ children }: IArticlesProps) => {
  const [articles, setArticles] = useState<IArticles[]>([]);
  const [totalArticles, setTotalArticles] = useState(10);
  const [sorter, setSort] = useState("");

  const listArticles = async () => {
    await Api.get("articles/").then((response) => {
      setArticles(response.data);
    });
  };

  const moreArticles = async () => {
    await Api.get(`articles?_limit=${totalArticles + 10}`).then((response) => {
      setArticles(response.data);
    });
    setTotalArticles(totalArticles + 10);
  };

  const listArticlesTitle = async (title: string | undefined) => {
    await Api.get(
      `articles?title_contains=${title}&_limit=${totalArticles}`
    ).then((response) => {
      setArticles(response.data);
    });
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        sorter,
        setSort,
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
