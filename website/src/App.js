import logo from "./logo.svg";
import "./App.css";
import glasses from "./images/glasses.png";
// import gradient from "./images/gradient.jpg";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="cardMain" className="flex flex-col gap-8 max-w-6xl">
          <div className="main-back">
            <div className="hero items-center bg-black p-10 rounded-3xl backdrop-blur-xl bg-black bg-opacity-50">
              <div className="flex flex-col text-left gap-2">
                <div className="text-7xl font-bold">SightSense</div>
                <div className="text-2xl font-bold italic">Your Third Eye</div>
              </div>
              <div className="rounded-2xl img-cont justify-end flex">
                <img
                  src={glasses}
                  className="rounded-3xl max-h-[300px]"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="main-back">
            <div
              id="card1"
              className="child-hero items-center p-10 rounded-3xl card-right backdrop-blur-xl bg-black bg-opacity-50"
            >
              <div className="flex flex-col text-desc  text-left gap-2">
                <div className="text-5xl font-bold">Who will this help?</div>
                <hr></hr>
                <div className="text-xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis mi maximus nibh euismod Sed quis Sed quis mi maximus nibh
                  euismod Sed quis mi maximus nibh euismod Sed quis mi maximus
                  nibh euismod Sed quis mi maximus nibh euismodmi maximus nibh
                  euismod Sed quis mi maximus nibh euismod.
                </div>
              </div>
              <div className="rounded-2xl img-cont justify-end flex">
                <img
                  src={glasses}
                  className="rounded-3xl max-h-[300px]"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="main-back">
            <div
              id="card2"
              className="child-hero items-center p-10 rounded-3xl card-left backdrop-blur-xl bg-black bg-opacity-50"
            >
              <div className="rounded-2xl img-cont justify-start flex">
                <img
                  src={glasses}
                  className="rounded-3xl max-h-[300px]"
                  alt="logo"
                />
              </div>
              <div className="flex flex-col text-desc text-right gap-2">
                <div className="text-5xl font-bold">What does this do?</div>
                <hr></hr>
                <div className="text-xl font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis mi maximus nibh euismod Sed quis Sed quis mi maximus nibh
                  euismod Sed quis mi maximus nibh euismod Sed quis mi maximus
                  nibh euismod Sed quis mi maximus nibh euismodmi maximus nibh
                  euismod Sed quis mi maximus nibh euismod.
                </div>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="main-back">
            <div
              id="card3"
              className="try-hero flex flex-col items-center p-10 rounded-3xl card-left gap-4 backdrop-blur-xl bg-black bg-opacity-50 "
            >
              <div className="flex flex-col text-desc text-center gap-2">
                <div className="text-5xl font-bold">View A Demo!</div>
              </div>
              <div className="rounded-2xl img-cont justify-start flex">
                <Button>Start!</Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
