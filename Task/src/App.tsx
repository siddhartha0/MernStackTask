import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col bg-primary w-[100%]">
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
