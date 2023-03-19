import Header from "./components/Header";
import Home from "./components/Home";
import Footer from './components/Footer';
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={ <Home /> }></Route>
          <Route path="/search" element={ <SearchPage /> }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
