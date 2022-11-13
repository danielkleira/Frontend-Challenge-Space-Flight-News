import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "../Pages/Main";

function RoutesProject() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesProject;
