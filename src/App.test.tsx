import {
  render,
  screen,
  waitFor,
  getByRole,
  getByText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Components/Header";
import LeftCard from "./Components/LeftCard";
import ListArticle from "./Components/ListArticles";
import RightCard from "./Components/RigthCard";
import Main from "./Pages/Main";

test("renders text from leftCard", () => {
  render(
    <LeftCard
      id={1}
      title={"title"}
      url={"url"}
      imageUrl={"url"}
      newsSite={"url"}
      summary={"text"}
      publishedAt={"data"}
      updatedAt={"data"}
    />
  );

  expect(screen.getByText(/Ver Mais/i)).toBeInTheDocument();
  expect(screen.getByText(/News Site/i)).toBeInTheDocument();
});

test("renders text from rightCard", () => {
  render(
    <RightCard
      id={1}
      title={"title"}
      url={"url"}
      imageUrl={"url"}
      newsSite={"url"}
      summary={"text"}
      publishedAt={"data"}
      updatedAt={"data"}
    />
  );

  expect(screen.getByText(/Ver Mais/i)).toBeInTheDocument();
  expect(screen.getByText(/News Site/i)).toBeInTheDocument();
});

test("renders text from hearder", async () => {
  render(<Header />);

  expect(screen.getByLabelText(/Search/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Sort/i)).toBeInTheDocument();
});


