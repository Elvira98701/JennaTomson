import AppRoutes from "./components/appRoutes/AppRoutes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ScrollToTop from "./helpers/scrollToTop";

import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
