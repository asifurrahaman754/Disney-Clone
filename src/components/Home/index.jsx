import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import db from "../../firebase";
import * as s from "./style";
import ImgSlider from "./home components/ImgSlider";
import Viewers from "./home components/Viewers";
import Row from "./home components/Movie Row";
import { setMovies } from "../../redux/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const {
    recommend: recommendMovies,
    newDisney: newDisneyMovies,
    original: originalMovies,
    trending: trendingMovies,
  } = useSelector(state => state.movie);

  let recommend = [];
  let original = [];
  let trending = [];
  let newDisney = [];

  //get all the movies from firebase store
  useEffect(() => {
    db.collection("movies").onSnapshot(snapshot => {
      snapshot.docs.map(doc => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      //after getting the movies send them to redux movies store
      dispatch(
        setMovies({
          recommend: recommend,
          newDisney: newDisney,
          original: original,
          trending: trending,
        })
      );
    });
  }, []);

  return (
    <s.Section>
      <ImgSlider />
      <Viewers />
      <Row title="Recomanded for you" movies={recommendMovies} />
      <Row title="New Disney+" movies={newDisneyMovies} />
      <Row title="Originals" movies={originalMovies} />
      <Row title="Trending" movies={trendingMovies} />
    </s.Section>
  );
}
