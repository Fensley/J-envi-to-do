import { useEffect, useState } from "react";
import logo from "../src/data/Humaaans - Plant 1.png";
let nextid = 0;

export default function App() {
  const [number, setnumber] = useState(0);

  return (
    <>
      <Nav number={number} setnumber={setnumber} />
      <Section setnumber={setnumber} />
      <Footer />
    </>
  );
}

function Nav({ number }) {
  return (
    <nav>
      <Datenow number={number} />
      <Todo />
      <ImgLogo />
    </nav>
  );
}

function Datenow({ number }) {
  const currentDate = new Date().toDateString();

  return (
    <div className="first-nav nav">
      <h4>{currentDate}</h4>
      <p className="xxx">
        <span className="number">
          {number} {}
        </span>{" "}
        active Tasks
      </p>
    </div>
  );
}

function Todo() {
  return (
    <div className="first-nav nav">
      <h1 className="todo">To do List</h1>
    </div>
  );
}

function ImgLogo() {
  return (
    <div className="first-nav nav">
      <img src={logo} alt="logo" height={70} />
    </div>
  );
}

function Section({ setnumber }) {
  const [message, setmessage] = useState("");
  const [display, setDisplay] = useState([]);
  const [editable2, seteditable2] = useState(true);

  function handlemessage(e) {
    setmessage(e.target.value);
  }

  function handledisplay() {
    if (message.trim() !== "") {
      const newDisplay = [...display, { id: nextid++, name: message }];
      setDisplay(newDisplay);
      setnumber(newDisplay.length);
      setmessage("");
    }
  }

  function handleeditable() {
    seteditable2((not) => !not);
  }

  function handleclear(id) {
    const newDisplay = display.filter((a) => a.id !== id);
    setDisplay(newDisplay);
    setnumber(newDisplay.length);
  }

  return (
    <section>
      <Inputbar
        message={message}
        handlemessage={handlemessage}
        handledisplay={handledisplay}
      />
      <Card
        display={display}
        handleeditable={handleeditable}
        setDisplay={setDisplay}
        handleclear={handleclear}
        editable2={editable2}
      />
    </section>
  );
}

function Inputbar({ handlemessage, handledisplay, message }) {
  return (
    <div className="input-ctn">
      <input
        placeholder="add your to do"
        onChange={handlemessage}
        value={message}
      />
      <div className="Add-ctn">
        <button onClick={handledisplay}>Add</button>
      </div>
    </div>
  );
}

function Card({ display, editable, handleeditable, handleclear, editable2 }) {
  return (
    <div className="data">
      <Cardone
        display={display}
        editable={editable}
        handleeditable={handleeditable}
        handleclear={handleclear}
        editable2={editable2}
      />
    </div>
  );
}

function Cardone({
  display,
  handleeditable,
  handleclear,
  editable,
  editable2,
}) {
  console.log(display);
  return (
    <div className="each">
      {display.map((each) => (
        <div key={each.id}>
          <div className="bar1">
            <p
              suppressContentEditableWarning={true}
              contentEditable={editable2 ? false : true}
              id="forlong"
            >
              {each.name}
            </p>
            <Theicons
              handleeditable={handleeditable}
              handleclear={handleclear}
              id={each.id}
            />
          </div>
          <Longbar />
        </div>
      ))}
    </div>
  );
}

function Theicons({ handleeditable, handleclear, id }) {
  return (
    <div className="bar-icons">
      <i className="fa-solid fa-trash" onClick={() => handleclear(id)}></i>
      <i className="fa-solid fa-pen-to-square" onClick={handleeditable}></i>
    </div>
  );
}

function Longbar() {
  return <div className="long-bar"></div>;
}

function Footer() {
  return <Footerdata />;
}

function Footerdata() {
  return (
    <footer>
      <p>
        Made with <i className="fa-solid fa-heart" style={{ color: "red" }}></i>
      </p>
      <a href="https://github.com/fensley">
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}
