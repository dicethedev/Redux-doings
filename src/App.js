import './App.css';
import { HomePage } from './containers/HomePage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { UserPage } from './containers/UserPage';

function App() {
  return (
      // {/* Routering is added to view the Homepage users details */}
      //switch will help you choode differrent page at once
    <Router>
    <div className="App">
      <Routes>
        {/*  <HomePage /> */}
        {/* <Route path="/" component= {HomePage} /> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/user/:userId' element={<UserPage />} />
        <Route>404 is not Found!</Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
