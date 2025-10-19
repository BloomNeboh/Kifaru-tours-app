import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => (
  <nav className="flex justify-between p-4">
    <Link to="/">
      <img src="/logo.png" alt="Kifaru Tours" />
    </Link>
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/about">About Us</Link>
      <ThemeToggle />
    </div>
  </nav>
);

export default Navbar;
