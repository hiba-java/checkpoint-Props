
import './App.css';
import Profile from './profile/profile';

function App() {
  const handleName = e => { e.preventDefault()
    alert("I'am Hiba ")};
   
const mesInfo = {
      fullname: 'YAHMED Hiba',
       bio: 'Mon bio : Je suis Hiba yahmed ...' ,
       profession:'Ingénieur Informatique'
     }
          
  return (
    <div className="App">
  
      <Profile className = "Profile" desc = {mesInfo}  handleName ={handleName} > https://thumbs.dreamstime.com/b/baby-boy-posing-2607278.jpg</Profile>
  
    </div>
  );
}

export default App;
