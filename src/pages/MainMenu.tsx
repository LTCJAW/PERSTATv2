import { Link, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect } from 'react';

const MainMenu = () => {
  const { signOut, route } = useAuthenticator(); // `route` indicates the user's auth state
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (route !== 'authenticated') {
      navigate('/login'); // Replace '/login' with your actual login route
    }
  }, [route, navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <Link to="/enter-status">
        <button style={buttonStyle}>Enter Today’s Personnel Status</button>
      </Link>
      <Link to="/enter-absence">
        <button style={buttonStyle}>Enter Planned Leave or Absence</button>
      </Link>
      <Link to="/view-reports">
        <button style={buttonStyle}>View Personnel Status Reports</button>
      </Link>
      <Link to="/add-employee">
        <button style={buttonStyle}>Add a New Employee</button>
      </Link>
      <Link to="/delete-employee">
        <button style={buttonStyle}>Delete an Employee</button>
      </Link>
      <button onClick={signOut} style={buttonStyle}>Sign out</button>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  width: '300px', // Make all buttons the same width
  height: '80px', // Make all buttons the same height
  fontSize: '16px', // Adjust font size for readability
  backgroundColor: '#007BFF', // Example background color
  color: '#fff', // Example text color
  border: 'none', // Remove default border
  borderRadius: '5px', // Add rounded corners
  cursor: 'pointer', // Add pointer cursor
  textAlign: 'center', // Center-align text
};

export default MainMenu;

