import { useState } from "react";
import logo from "../src/data/Humaaans - Plant 1.png";
export default function App() {
  return (
    <>
      <Nav />
      <Section />
      <Footer />
    </>
  );
}

function Nav() {
  return (
    <nav>
      <Datenow />
      <Todo />
      <ImgLogo />
    </nav>
  );
}
function Datenow() {
  const currentDate = new Date().toDateString();
  return (
    <div className="first-nav nav">
      <h4> {currentDate}</h4>
      <p className="xxx">X active Tasks</p>
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

function Section() {
  const [message, setmessage] = useState("");
  const [display, setDisplay] = useState("");
  const [editable, seteditable] = useState(true);
  // const [clear, setclear] = useState("");
  function handlemessage(e) {
    setmessage(e.target.value);
  }

  function handledisplay() {
    setDisplay(message);
    setmessage("");
  }

  function handleeditable() {
    seteditable((not) => !not);
  }

  function handleclear() {
    setDisplay("");
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
        handleclear={handleclear}
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
}) {
  return (
    <div className="data">
      <Cardone
        display={display}
        editable={editable}
        handleeditable={handleeditable}
        handleclear={handleclear}
      />
      <Longbar />
      <Cardtwo
        message={message}
        editable={editable}
        handleeditable={handleeditable}
      />
      <Longbar />
      <Cardthree
        message={message}
        editable={editable}
        handleeditable={handleeditable}
      />
      <Longbar />
      <Cardfour
        message={message}
        editable={editable}
        handleeditable={handleeditable}
      />
      <Longbar />
      <Cardfive
        message={message}
        editable={editable}
        handleeditable={handleeditable}
      />
    </div>
  );
}

function Cardone({ message, display, handleeditable, editable, handleclear }) {
  return (
    <div className="bar1">
      <p
        suppressContentEditableWarning={true}
        contentEditable={editable ? false : true}
      >
        {" "}
        {display}
      </p>
      <Theicons handleeditable={handleeditable} handleclear={handleclear} />
    </div>
  );
}

function Cardtwo({ handleeditable, editable }) {
  return (
    <div className="bar1">
      <p
        suppressContentEditableWarning={true}
        contentEditable={editable ? false : true}
      >
        Deploy App and then get into meeting with team{" "}
      </p>
      <Theicons handleeditable={handleeditable} />
    </div>
  );
}

function Cardthree({ handleeditable, editable }) {
  return (
    <div className="bar1">
      <p
        suppressContentEditableWarning={true}
        contentEditable={editable ? false : true}
      >
        Go pick up pizza tonight
      </p>
      <Theicons handleeditable={handleeditable} />
    </div>
  );
}

function Cardfour({ handleeditable, editable }) {
  return (
    <div className="bar1">
      <p
        suppressContentEditableWarning={true}
        contentEditable={editable ? false : true}
      >
        Going to soho house with my friends
      </p>
      <Theicons handleeditable={handleeditable} />
    </div>
  );
}

function Cardfive({ handleeditable, editable }) {
  return (
    <div className="bar1">
      <p
        suppressContentEditableWarning={true}
        contentEditable={editable ? false : true}
      >
        Get prepare for an marathon
      </p>
      <Theicons handleeditable={handleeditable} editable={editable} />
    </div>
  );
}

function Theicons({ handleeditable, editable, handleclear }) {
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
