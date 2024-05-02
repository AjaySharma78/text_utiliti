import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Textbox from "./component/Textbox";

function App() {
  const current = localStorage.getItem('current');
  const [mode, setmode] = useState(current ? current : "light");


  const current_text = localStorage.getItem('current_text');
  const [texts, setTexts] = useState(current_text ? current_text : "D.D.M");

  const current_back = localStorage.getItem('current_back');
  const [backgroundColor, setBackgroundColor] = useState(current_back ? current_back : "#d3d9df")

  useEffect(() => {
    localStorage.setItem('current', mode)
    localStorage.setItem('current_text', texts)
    localStorage.setItem('current_back', backgroundColor);
  }, [mode, texts, backgroundColor])

  const toogleMode = () => {
    if (mode === "dark") {
      setmode("light");
      setTexts("E.D.M");
      setBackgroundColor("#d3d9df");
    } else {
      setmode("dark");
      setTexts("D.D.M");
      setBackgroundColor("#171b1f");
    }
  };
  return (
    <>
      <Navbar title="Text" texts={texts} mode={mode} toogleMode={toogleMode} />
      <Textbox mode={mode} backgroundColor={backgroundColor} />
    </>
  );
}

export default App;
