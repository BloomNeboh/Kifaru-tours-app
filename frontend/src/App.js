import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Dashboard from './pages/Dashboard';
import CreateItinerary from './pages/CreateItinerary';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutUs} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/create-itinerary" component={CreateItinerary} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
