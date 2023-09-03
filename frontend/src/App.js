import './App.css';
import EmployeeCrud from './components/EmployeeCrud';
import Employees from './components/Employees';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DataProvider from './components/context/DataProvider';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<EmployeeCrud />} />
          <Route path='/employees' element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
export default App;
