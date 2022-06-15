import { Outlet } from 'react-router-dom';

function Profiles() {
  console.log('Profiles');
  return (
    <>
      <h2>Profiles</h2>
      <Outlet />
    </>
  );
}

export default Profiles;
