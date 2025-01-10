import { Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const MainMenu = () => {
  const { signOut } = useAuthenticator(); // Move this inside MainMenu where it is used.

  return (
    <div>
      <Link to="/enter-status">
        <button>Enter Today’s Personnel Status</button>
      </Link>
      <Link to="/enter-absence">
        <button>Enter Planned Leave or Absence</button>
      </Link>
      <Link to="/view-reports">
        <button>View Personnel Status Reports</button>
      </Link>
      <Link to="/add-employee">
        <button>Add a New Employee</button>
      </Link>
      <Link to="/delete-employee">
        <button>Delete an Employee</button>
      </Link>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default MainMenu;