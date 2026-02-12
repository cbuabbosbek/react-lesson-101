import MovieCard from "../components/MovieCard";
// Images
import Image1 from "../assets/Image-1.jpg";
import Image2 from "../assets/Image-2.jpg";
import Image3 from "../assets/Image-3.webp";
import Image4 from "../assets/Image-3.jpg";
import Image5 from "../assets/Image-4.jpg";
import Image6 from "../assets/Image-5.jpg";

function Movies() {
  return (
    <>
      <div className="movies-container">
        <h1>Movies Search Engine</h1>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="search">
          <input className="search-input" type="text" placeholder="Write..." />

          <button className="search-button">Search</button>
        </div>
        <div className="cards">
          <MovieCard title={"Lorem"} year={1985} image={Image1} />
          <MovieCard title={"Joshua"} year={2020} image={Image2} />
          <MovieCard title={"Alemdar"} year={2005} image={Image3} />
          <MovieCard title={"Polat"} year={1995} image={Image2} />
          <MovieCard title={"Memati"} year={2012} image={Image4} />
          <MovieCard title={"Zaza"} year={2015} image={Image6} />
        </div>
      </div>
    </>
  );
}

export default Movies;
