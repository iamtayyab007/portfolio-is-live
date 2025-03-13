import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Techstack from "./pages/Techstack/Techstack";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Educations/Education";
import WorkExp from "./pages/WorkExp/WorkExp";
import Contact from "./pages/Contact/Contact";

import { useTheme } from "./context/context";
import Tada from "react-reveal/Tada";
import "./App.css";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>

        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">My Portfolio Website &copy; 2025</h4>
          </Tada>
        </div>
      </div>
    </>
  );
}

export default App;
