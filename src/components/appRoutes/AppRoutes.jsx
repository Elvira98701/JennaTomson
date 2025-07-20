import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";

import { Home, Projects, Project, About, Contact } from "@/pages";

export const AppRoutes = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};
