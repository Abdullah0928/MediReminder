import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, BarChart2, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Pill className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">MediReminder</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="nav-link">
              <Pill className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/medications" className="nav-link">
              <BarChart2 className="h-5 w-5" />
              <span>Medications</span>
            </Link>
            <Link to="/reports" className="nav-link">
              <BarChart2 className="h-5 w-5" />
              <span>Reports</span>
            </Link>
            <Link to="/profile" className="nav-link">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <button className="nav-link text-red-600">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;