import './App.css';
import Post from './components/Post';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom'
import Home from './pages/Home';
import Createpost from './pages/Createpost';
import Fullpost from './components/Fullpost';


function App() {
  return (
    <>
      <Router>
      <Link to ='/'>Home</Link>
      <Link to ='/Createpost'>Create a post</Link>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Createpost' exact Component={Createpost}/>
          <Route path='/post/:id' exact Component={Fullpost}/>

        </Routes>
      </Router>
    </>
  )
}

export default App;
