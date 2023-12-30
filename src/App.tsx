import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileDashboard from './pages/ProfileDashboard';
import PricingPage from './pages/PricingPage';
import GraphDetailsPage from './pages/GraphDetailsPage';
import CreateNewGraph from './pages/CreateNewGraph';
import AccountSettings from './pages/AccountSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileDashboard />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/graph-details" element={<GraphDetailsPage />} />
        <Route path="/create-graph" element={<CreateNewGraph />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
