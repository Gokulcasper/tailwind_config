import React from "react";
import "./App.css";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="w-full flex flex-col bg-black">
      <Home />
    </div>
  );
};

export default App;

// browser only understand js ,css, html , es5 , arrow ternary destr,map ,filter,reduct convert pandraven babel ,(traspiler)
