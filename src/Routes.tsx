import { Routes, Route} from "react-router-dom";

import Pagina404 from "./pages/Page404";
import { Home } from "./pages/Home";


export function Routess() {

  return (
    
    <Routes>
      
      <Route path="/" element={ <Home />} />

      <Route path="/home" element={<Home />} />

      <Route path="*" element={<Pagina404 />} />

    </Routes>
  );
}
