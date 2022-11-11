import { ReactNode } from "react";

import ArticleProvider from "./Articles";

interface IContext {
  children: ReactNode;
}

const Providers = ({ children }: IContext) => {
  return <ArticleProvider>{children}</ArticleProvider>;
};

export default Providers;
