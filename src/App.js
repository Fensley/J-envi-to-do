import { useState } from "react";
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
      <h4> {currentDate}</h4>
      <p className="xxx">
        {" "}
        <span className="number">{number}</span> active Tasks
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
  const [editable, seteditable] = useState(true);
  const [editable2, seteditable2] = useState(true);

  function handlemessage(e) {
    setmessage(e.target.value);
  }

  function handledisplay() {
    setDisplay([...display, { id: nextid++, name: message }]);
    setmessage("");
    setnumber((not) => +1);
  }
  function handleeditable() {
    seteditable2((not) => !not);
  }

  function handleclear() {
    setDisplay(display.filter((a) => a.id !== display.id));
    console.log(display);
    seteditable((not) => !not);
  }

  return (
    <section>
      <Inputbar
        message={message}
        handlemessage={handlemessage}
        handledisplay={handledisplay}
      />
      <Card
        message={message}
        display={display}
        editable={editable}
        handleeditable={handleeditable}
        setDisplay={setDisplay}
        handleclear={handleclear}
        editable2={editable2}
      />
    </section>
  );
}
function Inputbar({ handlemessage, handledisplay, display, message }) {
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

function Card({
  message,
  display,
  editable,
  handledisplay,
  handleeditable,
  handleclear,
  setDisplay,
  editable2,
}) {
  return (
    <div className="data">
      <Cardone
        display={display}
        editable={editable}
        handleeditable={handleeditable}
        handleclear={handleclear}
        setDisplay={setDisplay}
        editable2={editable2}
      />
    </div>
  );
}

function Cardone({
  message,
  display,
  handleeditable,
  editable,
  handleclear,
  setDisplay,
  editable2,
}) {
  return (
    <div>
      {display.map((each) => (
        <>
          <div className="bar1" key={each.id}>
            <p
              className={editable ? "" : "para"}
              suppressContentEditableWarning={true}
              contentEditable={editable2 ? false : true}
              key={each.id}
              id="forlong"
            >
              {each.name}
            </p>
            <Theicons
              handleeditable={handleeditable}
              handleclear={handleclear}
              display={display}
              setDisplay={setDisplay}
              editable2={editable2}
            />
          </div>
          <Longbar />
        </>
      ))}
    </div>
  );
}

function Theicons({
  handleeditable,
  editable,
  handleclear,
  setDisplay,
  display,
}) {
  return (
    <div className="bar-icons">
      <i className="fa-solid fa-trash" onClick={handleclear}></i>
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
