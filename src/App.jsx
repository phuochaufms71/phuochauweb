import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProject from "./components/ListProject/ListProject";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
