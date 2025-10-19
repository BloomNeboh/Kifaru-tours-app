import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      animate={{ rotate: theme === 'dark' ? 180 : 0 }}
      className="ml-4"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </motion.button>
  );
};

export default ThemeToggle;
