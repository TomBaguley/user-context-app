
import './App.css';
import { UserProvider } from './UserContext';
import ChangeUserButton from './ChangeUserButton';
import UserInfoDisplay from './UserInfoDisplay';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"; 
import AnimalPictureDisplay from './AnimalPictureDisplay';


function Home() {
  return ( 
    <div>
    <h2>Home</h2>
    <UserInfoDisplay/>
    </div>
  )
}

function AccountSettings() {
  return (
    <div>
      <h2>Account Settings</h2>
      <UserInfoDisplay/>
      <ChangeUserButton/>
      </div>
  )
}

function AnimalPage() {
  return (
    <div>
      <h2>Picture of an Animal</h2>
      <UserInfoDisplay/>
      <AnimalPictureDisplay/>
    </div>
  )
}

function App() {
  return (
    <UserProvider>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/account">Account Settings</Link>
            </li>
            <li>
              <Link to="/animal">Animal Picture</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="account" element={<AccountSettings/>}/>
          <Route path="/animal" element={<AnimalPage/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
