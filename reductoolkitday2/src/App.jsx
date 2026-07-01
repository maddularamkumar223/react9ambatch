import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <section>
      <nav>
        <Navbar />
      </nav>
      <article>
        <Outlet />
      </article>
    </section>
  );
};

export default App;
