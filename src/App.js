import { FullPage, Slide } from "react-full-page";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Hero/Projects";

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
        <div
          onClick={() => scrollToSlide(3)}
          className={`control-item ${currentSlideIndex === 3 && "bg-white"}`}
        ></div>
      </div>
    </>
  );
};
function App() {
  return (
    <FullPage controls={CustomControls}>
      <Slide className="overflow-hidden">
        <Hero />
      </Slide>
      <Slide className="overflow-hidden">
        <About />
      </Slide>
      <Slide className="overflow-hidden">
        <Projects />
      </Slide>
      <Slide className="overflow-hidden">
        <Contact />
      </Slide>
    </FullPage>
  );
}

export default App;
