import React, { useState } from "react";
import "./DragAndDrop.css";
const DragAndDrop = () => {
  const [files, setFiles] = useState(null);
  //   console.log("filess===", files ? files[0] : "not a file");

  function drag(e) {
    e.preventDefault();
  }

  function dropFunction(e) {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
  }

  function browsefile(e) {
    setFiles(e.target.files);
  }
  return (
    <>
      {!files ? (
        <>
          <div className="container" onDragOver={drag} onDrop={dropFunction}>
            <h1>Drag and Drop to Uplode File</h1>
            <h3>Or</h3>
            <label htmlFor="inputfile">Browse File</label>
            <input
              type="file"
              id="inputfile"
              style={{ display: "none" }}
              onChange={browsefile}
            />
          </div>
        </>
      ) : (
        <>
          <h1>file uploaded</h1>
          <p>
            <b>List of files:</b>
          </p>
          <ol style={{ color: "red" }}>
            {Array.from(files).map((item, inx) => (
              <li key={inx}>{item.name}</li>
            ))}
          </ol>
          <button onClick={() => setFiles(null)}>Cancel</button>
          <p>NB* go to the console to see the file info</p>
        </>
      )}
    </>
  );
};
export default DragAndDrop;
