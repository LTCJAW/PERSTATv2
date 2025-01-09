import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useAuthenticator } from '@aws-amplify/ui-react';
import EnterStatus from "./pages/EnterStatus";
import EnterAbsence from "./pages/EnterAbsence";
import ViewReports from "./pages/ViewReports";
import AddEmployee from "./pages/AddEmployee";
import DeleteEmployee from "./pages/DeleteEmployee";


function App() {
  const { signOut } = useAuthenticator();

  return (
    <Router>
      <main>
        <h1>Main Menu</h1>
        <nav>
          <ul>
            <li>
              <Link to="/enter-status">Enter Today's Personnel Status</Link>
            </li>
            <li>
              <Link to="/enter-absence">Enter Planned Leave or Absence Days</Link>
            </li>
            <li>
              <Link to="/view-reports">View Personnel Status Reports</Link>
            </li>
            <li>
              <Link to="/add-employee">Add a New Employee</Link>
            </li>
            <li>
              <Link to="/delete-employee">Delete an Employee</Link>
            </li>
            <li>
              <button onClick={signOut}>Sign Out</button>
            </li>
          </ul>
        </nav>
      </main>
      <Routes>
        <Route path="/enter-status" element={<EnterStatus />} />
        <Route path="/enter-absence" element={<EnterAbsence />} />
        <Route path="/view-reports" element={<ViewReports />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/delete-employee" element={<DeleteEmployee />} />
        <Route path="/" element={<h2>Welcome to the Main Menu</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
