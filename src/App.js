import "./App.css";
import { FullPage, Slide } from "react-full-page";
import Typed from "react-typed";
import { useCallback } from "react";
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
const CustomControls = ({ getCurrentSlideIndex, scrollToSlide }) => {
  const currentSlideIndex = getCurrentSlideIndex();

  return (
    <>
      <div className="fixed right-[2%] top-1/2 z-50">
        <div
          onClick={() => scrollToSlide(0)}
          className={`control-item ${currentSlideIndex === 0 && "bg-white"}`}
        ></div>
        <div
          onClick={() => scrollToSlide(1)}
          className={`control-item ${currentSlideIndex === 1 && "bg-white"}`}
        ></div>
        <div
          onClick={() => scrollToSlide(2)}
          className={`control-item ${currentSlideIndex === 2 && "bg-white"}`}
        ></div>
      </div>
    </>
  );
};
function App() {
  return (
    <FullPage controls={CustomControls}>
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
      <Slide className="bg-red-200">abc</Slide>
      <Slide>abc</Slide>
    </FullPage>
  );
}

export default App;
