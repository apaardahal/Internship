import './App.css';
import  FormProvider from './context/FormContext'
import Topbar from './components/Topbar';
import {Routes, Route} from 'react-router-dom'
import BasicInfo from './pages/basicInfo/BasicInfo';
import Table from './pages/table/Table';

function App() {

  return (
    <>
    {/* <FormProvider> */}
      <Topbar/>
      <Routes>
            <Route exact path='/' element={< BasicInfo/>}></Route>
            <Route exact path = '/table' element = {<Table/>}> </Route>
      </Routes>
    {/* </FormProvider> */}
    </>

  );
}

export default App;
