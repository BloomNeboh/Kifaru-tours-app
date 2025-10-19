import FounderProfile from '../components/FounderProfile';

const AboutUs = () => (
  <div>
    <h1>About Us</h1>
    <FounderProfile />
    <button onClick={() => window.location.href = '/about/founder'}>Meet the Founder</button> {/* Dedicated page or modal */}
  </div>
);

export default AboutUs;
