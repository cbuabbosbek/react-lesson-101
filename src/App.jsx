import "./App.css";
import Rasm from "./assets/rasm.webp";
import Welcome from "./components/Welcome";
import Car from "./components/Car";

function App() {
  return (
    <>
      <div>
        <img src={Rasm} width={200} alt="rasm" />
        <h1>Abbosbek</h1>
        <Welcome lang={"React JS"} />
        <Welcome lang={"Python"} />
        <Welcome lang={"C++"} />
        <Car name={"Lamborghini Urus"} description={"This is my lovely car"} />
        <Car
          name={"Chevrolet Malibu"}
          description={"Uzbek great and popular car"}
        />
      </div>
    </>
  );
}

export default App;
