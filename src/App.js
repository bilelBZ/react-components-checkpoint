import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto';
import FullName from './components/profile/FullName';
import Adress from './components/profile/Adress';

function App() {
  return (
    <div className="App">
     <div className="profile">
     <ProfilePhoto/>
      <div>
      <FullName/>
      <Adress/>
      </div>
     </div>
    </div>
  );
}

export default App;
