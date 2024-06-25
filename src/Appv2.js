import { useEffect, useState } from "react";
import logo from "../src/data/Humaaans - Plant 1.png";
let nextid = 0;

export default function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Nav number={number} />
      <Section setNumber={setNumber} />
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

function Section({ setNumber }) {
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState([]);
  const [editable2, setEditable2] = useState(true);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setDisplay(storedTasks);
      setNumber(storedTasks.length);
      nextid =
        storedTasks.length > 0 ? storedTasks[storedTasks.length - 1].id + 1 : 0;
    }
  }, [setNumber]);

  // Save tasks to local storage whenever the display state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(display));
  }, [display]);

  function handleMessage(e) {
    setMessage(e.target.value);
  }

  function handleDisplay() {
    if (message.trim() !== "") {
      const newDisplay = [...display, { id: nextid++, name: message }];
      setDisplay(newDisplay);
      setNumber(newDisplay.length);
      setMessage("");
    }
  }

  function handleEditable() {
    setEditable2((prev) => !prev);
  }

  function handleClear(id) {
    const newDisplay = display.filter((item) => item.id !== id);
    setDisplay(newDisplay);
    setNumber(newDisplay.length);
  }

  return (
    <section>
      <Inputbar
        message={message}
        handleMessage={handleMessage}
        handleDisplay={handleDisplay}
      />
      <Card
        display={display}
        handleEditable={handleEditable}
        handleClear={handleClear}
        editable2={editable2}
      />
    </section>
  );
}

function Inputbar({ handleMessage, handleDisplay, message }) {
  return (
    <div className="input-ctn">
      <input
        placeholder="add your to do"
        onChange={handleMessage}
        value={message}
      />
      <div className="Add-ctn">
        <button onClick={handleDisplay}>Add</button>
      </div>
    </div>
  );
}

function Card({ display, handleEditable, handleClear, editable2 }) {
  return (
    <div className="data">
      <Cardone
        display={display}
        handleEditable={handleEditable}
        handleClear={handleClear}
        editable2={editable2}
      />
    </div>
  );
}

function Cardone({ display, handleEditable, handleClear, editable2 }) {
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
              handleEditable={handleEditable}
              handleClear={handleClear}
              id={each.id}
            />
          </div>
          <Longbar />
        </div>
      ))}
    </div>
  );
}

function Theicons({ handleEditable, handleClear, id }) {
  return (
    <div className="bar-icons">
      <i className="fa-solid fa-trash" onClick={() => handleClear(id)}></i>
      <i className="fa-solid fa-pen-to-square" onClick={handleEditable}></i>
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
