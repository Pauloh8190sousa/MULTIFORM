import { BrowserRouter, Route, Routes } from "react-router-dom";

import FormOne from "./pages/FormOne";
import FormThree from "./pages/FormThree";
import FormTwo from "./pages/FormTwo";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FormOne />} path="/" />
        <Route element={<FormTwo />} path="/formTwo" />
        <Route element={<FormThree />} path="/formThree" />
      </Routes>
    </BrowserRouter>
  );
}
