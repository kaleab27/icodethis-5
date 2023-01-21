import About from "./components/About";
import Pictures from "./components/Pictures";

function App() {
  return (
    <div className="max-w-3xl px-8 mt-16 bg-white flex flex-col gap-4">
      <About />
      <Pictures />
    </div>
  );
}

export default App;
