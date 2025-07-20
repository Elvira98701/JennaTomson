import { AppRoutes, Footer, Header } from "@/components";
import { ScrollToTop } from "@/utils";
import "@/styles/index.scss";

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
