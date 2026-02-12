import MovieCard from "../components/MovieCard";
// Images
import Image1 from "../assets/Image-1.jpg";
import Image2 from "../assets/Image-2.jpg";
import Image3 from "../assets/Image-3.jpg";
import Image4 from "../assets/Image-4.jpg";

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
          <MovieCard title={"Polat"} year={1995} image={Image4} />
          <MovieCard title={"Joshua"} year={2020} image={Image2} />
          <MovieCard title={"Joshua"} year={2020} image={Image2} />
        </div>
      </div>
    </>
  );
}

export default Movies;
