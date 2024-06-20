// import myimage from "../src/data/Design tools-amico.png";
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
function Footer() {
  return (
    <footer>
      <p>
        Made with <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
      </p>
      <a href="https://github.com/fensley">
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}

function Section() {
  return (
    <section>
      <Inputbar />
      <Card />
    </section>
  );
}
function Inputbar() {
  return (
    <div className="input-ctn">
      <input placeholder="add your to do" />
      <div className="Add-ctn">
        <button>Add</button>
      </div>
    </div>
  );
}
function Card() {
  return (
    <div className="data">
      <div className="bar1">
        <p> Create my app API data before 6pm</p>
        <div className="bar-icons">
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>

      <div className="long-bar"></div>

      <div className="bar1">
        <p>Deploy App and then get into meeting with team </p>
        <div className="bar-icons">
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>

      <div className="long-bar"></div>

      <div className="bar1">
        <p>Go pick up pizza tonight</p>
        <div className="bar-icons">
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>

      <div className="long-bar"></div>

      <div className="bar1">
        <p>Going to soho house with my friends</p>
        <div className="bar-icons">
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>

      <div className="long-bar"></div>

      <div className="bar1">
        <p>Get prepare for an marathon</p>
        <div className="bar-icons">
          <i class="fa-solid fa-trash"></i>
          <i class="fa-solid fa-pen-to-square"></i>
        </div>
      </div>
    </div>
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
