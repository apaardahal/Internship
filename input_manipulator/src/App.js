
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Creditcard from './Pages/Creditcardinfo/Creditcard';
import Personal from './Pages/Personalinfo/Personal';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
  BrowserRouter
} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route exact path='/' element={< Personal />}></Route>
        <Route exact path='/credit' element={< Creditcard />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
