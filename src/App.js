import logo from './logo.svg';
import './App.css';
import SquareRoot from './SquarerRoot';
import Result from './Result';
import Page404 from './Page404';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SquareRoot />} />
          <Route path="/result" element={<Result/>} />
          <Route path="*" element={<Page404/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
