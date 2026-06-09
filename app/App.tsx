import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import '../styles/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>}/>
        <Route path="/contact" element={<Layout><ContactPage/></Layout>}/>
        <Route path="/privacy" element={<Layout><PrivacyPage/></Layout>}/>
        <Route path="/terms" element={<Layout><TermsPage/></Layout>}/>
      </Routes>
    </BrowserRouter>
  );
}