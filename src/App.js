import "./App.css";
import { FullPage, Slide } from "react-full-page";
import Typed from "react-typed";
const colors = [
  "purple",
  "medium-blue",
  "light-blue",
  "red",
  "orange",
  "yellow",
  "cyan",
  "light-green",
  "lime",
  "magenta",
  "lightish-red",
  "pink",
];

function App() {
  return (
    <FullPage>
      <Slide className="overflow-hidden">
        <div className="section_1">
          {colors.map((item) => (
            <div key={item} className={`${item} section_1_item`}></div>
          ))}
          <div className="absolute top-[42vh] left-1/2 -translate-x-1/2  z-20 font-semibold">
            <Typed
              className="text-white text-4xl"
              strings={["Hi, I'm Phu Quy"]}
              typeSpeed={60}
              showCursor={false}
            />
            <br />
            <Typed
              className="text-[#ff7675] text-6xl pt-6 block"
              strings={["Software Engineer"]}
              typeSpeed={60}
              startDelay={1400}
              showCursor={false}
            />
          </div>
        </div>
      </Slide>
      <Slide>abc</Slide>
      <Slide>abc</Slide>
    </FullPage>
  );
}

export default App;
