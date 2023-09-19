import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import MainView from "./Components/MainView";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainView></MainView>
      <Footer></Footer>
    </div>
  );
}

export default App;
