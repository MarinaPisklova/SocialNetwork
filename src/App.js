import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <SidebarContainer />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/users' render={() => <UsersContainer />} />


          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
