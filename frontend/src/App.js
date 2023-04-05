import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './components/Book/Books';
import BookDetail from './components/Book/BookDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/books' element={<Books />}/>
          <Route path='/details' element={<BookDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
