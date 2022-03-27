import Profilecomponent from './profile/Profilecomponent'
import './App.css';
//import Photo from './profile/Photo';
import my_image1 from './profile/mypicture.jpg'
function App() {
  const handleName = () => alert (`My name is ${fullName}`)
  let fullName ="Sofia khayati"
  let bio = `My name is ${fullName}, I'm from Jendouba and I live now in Sousse. I'm graduate from the national school of engineering of sousse in 2014. I work as a manager in a manufactoring firm. One of my ambitions is to be a web developer`
  let profession = "web developer"
  return (
    <div className="App">
    <Profilecomponent fullName={fullName}  bio={bio} profession={profession} handleName = {handleName}>
      {my_image1}
    </Profilecomponent>
    </div>

  );
}

export default App;
