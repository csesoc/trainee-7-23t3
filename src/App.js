import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
