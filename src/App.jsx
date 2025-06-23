import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import EnrollmentsAdmin from "../pages/admin/enrollments.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin/enrollments" element={<EnrollmentsAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
