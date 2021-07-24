import { useEffect, useState } from "react";

import { AiFillHome, AiOutlineSearch, AiFillStar } from "react-icons/ai";
import { RiMovie2Fill } from "react-icons/ri";
import { BiCameraMovie } from "react-icons/bi";
import { TiPlus } from "react-icons/ti";
import { auth, provider } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";

import * as s from "./style";
import logo from "../../assets/images/logo.svg";
import { userLogin, signOut } from "../../redux/userSLice";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const [logout, setlogout] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.name);
  const photoURL = useSelector(state => state.user.photo);

  console.log("navbar renderd");

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        storeUserAuth(user);
        history.push("/home");
      } else {
        dispatch(signOut());
        history.push("/");
      }
    });
  }, [username]);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        storeUserAuth(result);
      })
      .catch(err => alert(err));
  };

  const storeUserAuth = result => {
    dispatch(
      userLogin({
        name: result.displayName,
        email: result.email,
        photo: result.photoURL,
      })
    );
  };

  return (
    <s.Header>
      <s.Navbar>
        <s.NavLogo src={logo} />

        {username ? (
          <>
            <HomeNavbar />

            <div style={{ position: "relative" }}>
              <s.UserProfile
                onClick={() => setlogout(!logout)}
                src={photoURL}
              />
              {logout && (
                <s.UserLogOutBtn onClick={() => auth.signOut()}>
                  Logout
                </s.UserLogOutBtn>
              )}
            </div>
          </>
        ) : (
          <s.LoginButton onClick={handleAuth}>Login</s.LoginButton>
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
