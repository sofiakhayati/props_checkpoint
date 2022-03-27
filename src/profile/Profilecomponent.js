import './style.css'
const Profilecomponent = ({fullName, bio, profession, handleName, children}) => {
   
    return (
        <div className = "profilecss">

        <h1>{fullName}</h1>
        <p style = {{fontFamily: "cursive", textAlign : "center"}}>{bio}</p>
        <p>My profession is a <b style = {{color : "blue", fontFamily :"cursive", fontSise: "200%"}}> {profession} </b></p>
        {handleName()}
        <img src = {children} alt = "" style = {{borderRadius : "50%", height : "500px"}}/>

        </div>
    );
    
   };
   

   Profilecomponent.defaultProps = {
    fullName: "User Name",
    bio: "User bio",
    profession:"User profession",
     
  }
  
  

export default Profilecomponent;
