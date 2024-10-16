import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Projects from "../../pages/Projects/Projects";
import About from "../../pages/About/About";
import Contact from "../../pages/Contact/Contact";

import { AnimatePresence } from "framer-motion";

const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
