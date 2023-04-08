import { Route, Routes } from "react-router-dom";
import Authorpage from "./components/author/Authorpage";
import Blogpage from "./components/blog/Blogpage";
import Homepage from "./components/home/Homepage";
import Mainlayout from "./components/layout";
import Scrolltotop from "./components/shared/Scrolltotop";

function App() {
  return (
    <div>
      <Mainlayout>
        <Scrolltotop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blogs/:slug" element={<Blogpage />} />
          <Route path="/authors/:slug" element={<Authorpage />} />
        </Routes>
      </Mainlayout>
    </div>
  );
}

export default App;
