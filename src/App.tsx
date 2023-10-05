import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import MainView from "./Components/MainView";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Management from "./Components/ViewComponents/Management";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header></Header>
              <Routes>
                  <Route path="/"  element={<MainView/>} />
                  <Route path="/m"  element={<Management/>} />
              </Routes>
              <Footer></Footer>
          </div>
      </BrowserRouter>

  );
}

export default App;
