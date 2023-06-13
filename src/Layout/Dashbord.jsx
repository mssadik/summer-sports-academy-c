import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content bg-slate-700" style={{ color: 'white' }}>
          {isAdmin && (
            <>
              <li><Link to="/dashbord">Admin Home</Link></li>
              <li><Link to="/dashbord/manageClasses">Manage Classes</Link></li>
              <li><Link to="/dashbord/manageUsers">Manage Users</Link></li>
            </>
          )}
          {isInstructor && (
            <>
              <li><Link to="/dashbord/AddAClass">Instructor Home</Link></li>
              <li><Link to="/dashbord/AddAClass">Add A Class</Link></li>
              <li><Link to="/dashbord/myClassess">My Classes</Link></li>
            </>
          )}
          {!isAdmin && !isInstructor && (
            <>
              <li><Link to="/dashbord/myClasses">Student Home</Link></li>
              <li><Link to="/dashbord/myClasses">My Selected Classes</Link></li>
              <li><Link to="/dashbord/payHistory">Payment History</Link></li>
              <li><Link to="/dashbord/myEnrolledClasses">My Enrolled Class</Link></li>
            </>
          )}
          <div className="divider border-b"></div>
          {/* Sidebar content here */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/classes">Classes</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
