import React, { useState } from "react";
import "./App.css";
// import About1 from "./components/About1";
import { Navbar } from "./components/Navbar";
// import { TextForm } from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import { TextForm } from "./components/TextForm";

// import Home from "./pages/Home";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showmsg = (Message, type) => {
    setAlert({
      msg: Message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showmsg("Dark mode is enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showmsg("Light mode is enabled ", "Success");
    }
  };
  return (
    <>

      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="conatiner mb-3">
        {/* <Switch>
          <Route path="/about">
            <About1 />
          </Route>

          <Route path="/">
            {" "}
            <TextForm showmsg={showmsg} heading="Enter Text To Analyze" />{" "}
          </Route>
        </Switch> */}
        <TextForm showmsg={showmsg} heading="Enter Text To Analyze" />{" "}
      </div>
    </>
  );
}

export default App;
