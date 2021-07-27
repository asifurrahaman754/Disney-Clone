import * as s from "./style";
import { Link } from "react-router-dom";

export default function MovieRow({ title, movies }) {
  return (
    <s.Container>
      <h3>{title}</h3>
      {!movies && <h5>Loading...</h5>}

      <s.Content>
        {movies &&
          movies.map(movie => (
            <s.ImgWrap key={movie.id}>
              <Link to={"/details/" + movie.id}>
                <img loading="lazy" src={movie.cardImg} alt={movie.title} />
              </Link>
            </s.ImgWrap>
          ))}
      </s.Content>
    </s.Container>
  );
}
