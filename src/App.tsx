import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './pages/MainMenu';
import EnterStatus from './pages/EnterStatus';
import EnterAbsence from './pages/EnterAbsence';
import ViewReports from './pages/ViewReports';
import AddEmployee from './pages/AddEmployee';
import DeleteEmployee from './pages/DeleteEmployee';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/enter-status" element={<EnterStatus />} />
        <Route path="/enter-absence" element={<EnterAbsence />} />
        <Route path="/view-reports" element={<ViewReports />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/delete-employee" element={<DeleteEmployee />} />
      </Routes>
    </Router>
  );
};

export default App;

