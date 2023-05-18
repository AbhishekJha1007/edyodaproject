import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import BulletContainer from "./BulletContainer";
import Subcription from "./Subcription";

function App() {
  let textValue = [
    {
      id: 1,
      icon: "Group11.png",
      text: "100+ Job relevant courses ",
      bluetext: "100+",
    },
    {
      id: 2,
      icon: "Group 19.png",
      text: "20,000+ Hours of content",
      bluetext: "20,000+",
    },
    {
      id: 3,
      icon: "Group 16.png",
      text: "Exclusive webinar access",
      bluetext: "Exclusive",
    },
    {
      id: 4,
      icon: "Group 17.png",
      text: "Scholarship worth ₹94,500",
      bluetext: "₹94,500",
    },
    {
      id: 5,
      icon: "Group 15.png",
      text: "AdFree learning experience",
      bluetext: "AdFree",
    },
  ];
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="columns" style={{ height: '94vh'}}>
        <div className="column ">
          <div className="main-title-container">
          <p className="top-text">Access curated courses worth</p>
          <p className="inline-text-margin">
            <span className="top-text-inline ">₹ 18,500</span>
            <span className="top-text-inline">at just</span>
            <span className="top-text-blue"> ₹ 99</span>
            <span className="top-text-inline">per year!</span>
          </p>
          <div id="bullet-container">
            <BulletContainer value={textValue}></BulletContainer>
          </div>
          </div>
        </div>
        <div className="column center-imp">
        <div>
          <Subcription></Subcription>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default App;
