import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState ,useEffect} from "react";
import { collection, query ,onSnapshot} from "firebase/firestore";
import { auth, db } from "./Firebase/firebase";
import useAuthState from "./Firebase/hooks";


// import { makeStyles } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   card: {
//     "&:hover": {
//       border: "5px solid #fff",
//     },
//   },
// }));
function LikeArticle({id,likes}){
   return(
    <div>hello
      
    </div>
   )
}

export default function BlogCard() { 
   // const classes = useStyles();
   const [articles,setArticles]=useState([]);
   const {user} = useAuthState(auth);

  {/* const [user]= useAuthState(auth);*/}
   useEffect(()=>{
       const articleRef=collection(db,"Blogs")
       const q=query(articleRef);
       onSnapshot(q,(snapshot)=>{
           const articles = snapshot.docs.map((doc)=>({
               id:doc.id,
               ...doc.data(),
           }));
           setArticles(articles);
           console.log(articles);
       })
   },[]);
  return (
    <div>
             {
    articles.length === 0 ?(
        <p>no articles found</p>
    ):(
    articles.map(({id,Title,Link,Topic,userId,likes,comments})=><div class="BlogCard" key={id}>
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(70, 43, 136, 0.4)",
        color: "white",
      }}
    >
      {/*<CardMedia component="img" height="140" image={props.img} alt="media" />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="white">
          {Topic}
        </Typography>
      </CardContent>
      
      <CardActions>
        {/*<div className="like-heart-button">
          {user ?<LikeArticle id={id} likes={likes}/>:null}
        </div>*/}<Button
          size="small"
          sx={{ backgroundColor: "none", color: "#c69af6" }}
        >
        
          <i class="fas fa-2x fa-heart"></i>
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "none", color: "#c69af6" }}
        >
          <i class="fas fa-2x fa-comments"></i>
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "none", color: "#c69af6" }}
        >
          <i class="fas fa-2x fa-bookmark"></i>
        </Button>
        <Button
          size="small"
          sx={{ backgroundColor: "none", color: "#c69af6" }}
        >
          <i class="fas fa-2x fa-share"></i>
        </Button>
      </CardActions>
    </Card>
    
  </div>)
    )
}
</div>
    
)}
 
 
    
