import React, { useState } from "react";
import BlogCard from "./BlogCards";
import NavBar from "./NavBar";
import Img1 from "./Images/6.png";
import Img2 from "./Images/7.png";
import PopUp from "./PopUp";
import Fab from "@mui/material/Fab";
import Login from "./Images/Login.png";
import {GoogleButton } from 'react-google-button'
import { UserAuth } from '../src/Firebase/AuthContext';
import useAuthState from "./Firebase/hooks";
import { auth } from "./Firebase/firebase";

function Feeds() {
  const {User,logOut} = UserAuth()
  const {user,initializing} = useAuthState(auth);
  const [openLogin, setOpenLogin] = useState(false);
  const {googleSignIn} = UserAuth();
  const handleGoogleSignIn = async () =>{
        try{
         await googleSignIn()
        }catch(error){
            console.log(error);
        }
      }
      if(initializing){
        return("loading...");
      }
  const handleSignOut = async()=>{
    try{
      await logOut()
    }catch(error){
      console.log(error)
    }
  }
  return (
    <>
      <img class="img1" src={Img1} alt="" />
      <img class="img2" src={Img2} alt="" />

      <div>
        <input
          class="search-bar"
          type="search"
          placeholder="Search"
          id="searchInput"
        ></input>
        <i class="fas fa-search search-icon"></i>
      </div>

      <Fab
        color="secondary"
        aria-label="Profile"
        onClick={() => setOpenLogin(true)}
        sx={{
          position: "absolute",
          display: "inline-block",
          right: "100px",
          top: "35px",
          color: "rgb(198, 154, 246)",
          bgColor: "transparent",
        }}
        class="profile-icon"
      >
        <i class=" fa-3x fas fa-user-circle"></i>
      </Fab>

      <PopUp
        trigger={openLogin}
        setTrigger={setOpenLogin}
        title="Login"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam in sapien elementum ipsum molestie dictum sit amet eu
                    lorem."
        
      >
        <img class="loginImg" src={Login} alt="" />
        <div >
          {user
          ?       <div>
            <p>{user.displayName}</p>  
                <button onClick={handleSignOut}>LOGOUT</button>

          </div>
          :        <GoogleButton onClick={handleGoogleSignIn}/>

        }
      </div>

      </PopUp>

      <NavBar />
      <div class="feed myfeed">
     {/*} {Blogs.map((blog) => (

          <BlogCard
          key={blog.id}
          img={blog.imgURL}
          heading={blog.heading}
          desc={blog.desc}/>
     ))}*/}
     <BlogCard/>

      </div>
      
    </>
  );
}

export default Feeds;
