import './App.css';
import {Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import HomeComponent from './pages/home';
import History from "./pages/history";
import VideoMeetComponent from './pages/VideoMeetComponent';

function App(){
  return(
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />

            <Route path='/auth' element={<Authentication />} />

            <Route path='/home's element={<HomeComponent />} />
            <Route path='/history' element={<History />} />
            <Route path='/:url' element={<VideoMeetComponent />} />
      </Routes>
    </Router>
    </>
  );
}
export default App;