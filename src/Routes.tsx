import { Routes, Route} from "react-router-dom";
import { Main } from "./pages/Home";

import Pagina404 from "./pages/Page404";


export function Routess() {

  return (
    
    <Routes>
      
      <Route path="/" element={ <Main />} />

      <Route path="/home" element={<Main/>} />

      <Route path="*" element={<Pagina404 />} />

    </Routes>
  );
}
