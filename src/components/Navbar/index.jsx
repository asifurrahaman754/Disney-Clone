import { AiFillHome, AiOutlineSearch, AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";
import { auth, provider } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";

import * as s from "./style";
import logo from "../../assets/images/logo.svg";
import { userLogin } from "../../redux/userSLice";

export default function Navbar() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.name);
  const photoURL = useSelector(state => state.user.photo);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch(
          userLogin({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
      })
      .catch(err => console.log(err));
  };

  return (
    <s.Header>
      <s.Navbar>
        <s.NavLogo src={logo} />
        {username ? (
          <>
            <HomeNavbar />
            <s.UserProfile src={photoURL} />
          </>
        ) : (
          <s.LoginButton onClick={handleAuth}>login</s.LoginButton>
        )}
      </s.Navbar>
    </s.Header>
  );
}

function HomeNavbar() {
  return (
    <s.NavItems>
      <a href="#">
        <AiFillHome /> Home
      </a>
      <a href="#">
        <AiOutlineSearch /> Search
      </a>
      <a href="#">
        <TiPlus /> Watchlist
      </a>
      <a href="#">
        <AiFillStar /> Originals
      </a>
      <a href="#">
        <RiMovie2Fill /> Movies
      </a>
      <a href="#">
        <BiCameraMovie /> Series
      </a>
    </s.NavItems>
  );
}
