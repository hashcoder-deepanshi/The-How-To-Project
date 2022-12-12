import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { auth, db } from "../Firebase/firebase";
import useAuthState from "../Firebase/hooks";

export default function LikeArticle({id,likes}){
    const [user] = useAuthState(auth);
    const likesRef= doc(db,"Blogs",id)

    const handleLike = ()=>{
        if(likes?.includes(user.uid)){
            updateDoc(likesRef,{
                likes:arrayRemove(user.uid),
            }).then(()=>{
                console.log("unliked");
            }).catch((e)=>{
                console.log(e);
            });
        }
        else{
            updateDoc(likesRef,{
                likes:arrayUnion(user.uid)
            }).then(()=>{
                console.log("liked");
            }).catch((e)=>{
                console.log(e);
            });
        }
    }
    return(
        <div>
           <i className={`fa fa-heart${!likes?.include(user.uid)?"-o":""}fa-lg`}
           style={{
            cursor:"pointer",
            color:likes?.includes(user.uid)?"red":null,
           }}
           onClick={handleLike}
           />

           
        </div>
    )
}