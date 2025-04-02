import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
import EmployeeManagement from './pages/EmployeeManagement';
import DepartmentManagement from './pages/DepartmentManagement';
import PositionManagement from './pages/PositionManagement';
import EmploymentContractManagement from './pages/EmploymentContractManagement';
import AddEmployee from './pages/AddEmployee';
import ScrollToTop from './components/ScrollToTop';
import RecruitmentManagementPage from './pages/RecruitmentManagementPage';
import ReportManagements from './pages/ReportManagement';




function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/"  element={<Layout Component={Dashboard} />} />
          <Route path='/employees' element={<Layout Component={EmployeeManagement} />} />
          <Route path='/employees/add' element={<Layout Component={AddEmployee} />} />
          <Route path='/departments' element={<Layout Component={DepartmentManagement} />} />
          <Route path='/positions' element={<Layout Component={PositionManagement} />} />
          <Route path='/contracts' element={<Layout Component={EmploymentContractManagement} />} />
          <Route path='/recruitment' element={<Layout Component={RecruitmentManagementPage} />} />
          <Route path='/reports' element={<Layout Component={ReportManagements} />} />
      
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
