import './App.css';
import Topbar from './components/Topbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import BasicInfo from './pages/basicInfo/BasicInfo';
import Creditcard from './pages/creditCardInfo/CreditCard';

function App() {
  return (
    <BrowserRouter>
      <Topbar/>
        <Routes>
          <Route exact path='/' element={< BasicInfo/>}></Route>
          <Route exact path='/credit' element={< Creditcard />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
