import React from "react";
import Home from "../components/Home";

const Index =(user)=>{

    const [user,setUser] = useState(null);
    onAuthStateChanged(auth,(firebaseUser)=>{

        if(firebaseUser){
            setUser(firebaseUser)
        }
        else{
            setUser(null)
        }
    })

return(
    {user }
)

}

export default Index;