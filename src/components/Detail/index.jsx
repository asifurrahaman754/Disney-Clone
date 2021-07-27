import { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router";
import { BsFillPlayFill } from "react-icons/bs";

import * as s from "./style";
import db from "../../firebase";

export default function Detail() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const history = useHistory();

  //get the specific movie data with the specific {id}
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then(doc => {
        setDetails(doc.data());
      })
      .catch(err => {
        alert(err);
        //if anything error happens redirect user to the home page
        history.push("/home");
      });
  }, []);

  let { backgroundImg, titleImg, title, subTitle, description } = details;
  return !Object.keys(details).length ? (
    <s.Error>Loading...</s.Error>
  ) : (
    <>
      <s.Container bgImg={backgroundImg}>
        <s.Content>
          <s.titleImg src={titleImg} alt={title} />

          <s.BtnGroup>
            <s.Button>
              <BsFillPlayFill />
              <span>Play</span>
            </s.Button>
            <s.Button outlined>
              <BsFillPlayFill />
              <span>Trailer</span>
            </s.Button>
          </s.BtnGroup>

          <s.Subtitle>{subTitle}</s.Subtitle>
          <s.Description>{description}</s.Description>
        </s.Content>
      </s.Container>
    </>
  );
}
