import {
  render,
  screen,
} from "@testing-library/react";
import LeftCard from "./Components/LeftCard";
import RightCard from "./Components/RigthCard";

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




