import React, { useState } from "react";

export const TextForm = (props) => {
  const [text, setText] = useState("");
  //  text="new text"  // wrong way to use text variables
  //  setText =(" new text" ) //Cporrect way to chg states


  const handleUpClick = () => {
    console.log("uppercase was click " + text);
    let upper = text.toUpperCase();

    setText(upper);
      props.showmsg("Converted to Upper case  ", "Success");
  };
  const handleLoClick = () => {
    console.log("uppercase was click " + text);
    let lower = text.toLowerCase();

    setText(lower);
      props.showmsg("Converted to lower case  ", "Success");
  };

  const handleClearClick = () => {
    let clear = "";
    setText(clear);
      props.showmsg("Cleard text  ", "Success");
  };

  const handleCopyClick = () => {
    let text = document.getElementById("copy");
    text.select();
    navigator.clipboard.writeText(text.value);
      props.showmsg("Text Copied To Clipboard ", "Success");
  };

  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
          props.showmsg("Removed Extra spaces ", "Success");

  };

  const handleOnChange = (event) => {
    console.log("You Have click on handleonchange");
    setText(event.target.value);
  };
  return (
    <div>
      <div
        className="mb-3 container mt-5 "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading} </h1>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor:
              props.mode === "dark" ? "grey" : "rgb(207 207 207)",
            color: props.mode === "dark" ? "white" : "black",
          }}
          id="copy"
          rows="8"
          placeholder="Enter Here"
        ></textarea>
        <butoon className="btn btn-primary mx-1 my-3" onClick={handleUpClick}>
          {" "}
          Convert UpperCase
        </butoon>
        <butoon className="btn btn-primary mx-1 my-3" onClick={handleLoClick}>
          {" "}
          Convert LowerCase
        </butoon>

        <butoon
          className="btn btn-primary mx-1 my-3"
          onClick={handleClearClick}
        >
          {" "}
          Clear
        </butoon>

        <butoon
          className="btn btn-primary mx-1 my-3"
          onClick={handleCopyClick}
          id="copy"
        >
          {" "}
          Copy text
        </butoon>

        <butoon
          className="btn btn-primary mx-1 my-3"
          onClick={handleSpaceClick}
        >
          {" "}
          Clear Extra Space
        </butoon>
      </div>

      <div
        className="container"
        style={{ Color: props.mode === `dark` ? `white` : `black` }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p> {0.008 * text.split(" ").length}Minutes Read</p>
        <h1> Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the textbox above to preview it here "}
        </p>
      </div>
    </div>
  );
};
