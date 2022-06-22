import { FullPage, Slide } from "react-full-page";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import { useWindowSize } from "./hooks/useWindowSize";
const CustomControls = ({ getCurrentSlideIndex, scrollToSlide }) => {
  const currentSlideIndex = getCurrentSlideIndex();

  return (
    <>
      <div className="fixed right-[2%] top-1/2 z-50">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`control-item ${
              currentSlideIndex === index && "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
};
function App() {
  const size = useWindowSize();
  // eslint-disable-next-line no-lone-blocks
  {
    if (size.width < 750)
      return (
        <>
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Slide />
        </>
      );
    else
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
}

export default App;
