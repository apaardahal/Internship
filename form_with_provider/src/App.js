import './App.css';
import { FormProvider } from './context/FormContext'
import Topbar from './components/Topbar';
import {Routes, Route} from 'react-router-dom'
import BasicInfo from './pages/basicInfo/BasicInfo';
import Creditcard from './pages/creditCardInfo/CreditCard';

function App() {

  console.log('Mounted');

  return (
    <FormProvider>
        <Topbar/>
          <Routes>
            <Route exact path='/' element={< BasicInfo/>}></Route>
            <Route exact path='/credit' element={< Creditcard />}></Route>
          </Routes>
    </FormProvider>
  );
}

export default App;
