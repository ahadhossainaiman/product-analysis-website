
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Page404 from './components/page404/Page404';
import Reviews from './components/Review/Reviews';

function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/reviews' element={<Reviews></Reviews>} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/*' element={<Page404></Page404>} />
      </Routes>

    </div>
  );
}

export default App;
