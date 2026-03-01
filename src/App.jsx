import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "./ScrollToTop.jsx";
import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Generate from "./pages/Generate/Generate.jsx";
import AnalyticsPage from "./pages/Analytics/AnalyticsPage.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import GeneratedEmailsPage from './pages/GeneratedEmailsPage/GeneratedEmailsPage.jsx';
import ReviewPage from './pages/ReviewPage/ReviewPage.jsx';
import EmailEditor from './components/EmailEditor/EmailEditor.jsx';

function App() {
  // const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  // const PORT = import.meta.env.VITE_PORT;
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const emailsRes = await axios.get(`${BACKEND_URL}${PORT}/emails`);
        // setEmails(emailsRes.data);
      } catch (error) {
        console.error("Error fetching user emails:", error);
      }
    };
    fetchData();
  }, []);
  const email = {subject:"Email Subject",
    body:"Hi [First Name],We've been listening. Based on feedback from customers like you, we've updated our pricing to give you more flexibility — and added the analytics dashboard at no extra cost, effective March 1st.Your new rate locks in at $49/mo — and your current features stay exactly as they are. No surprises.Ready to explore what's new?— The [Company] Team"
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Header /> */}
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate setEmails={setEmails} />} />
        <Route path="/generated-emails" element={<GeneratedEmailsPage emails={emails} setEmails={setEmails} />} />
        <Route path="/review/:id" element={<ReviewPage emails={emails} setEmails={setEmails} />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<PageNotFound title="404 - PAGE NOT FOUND"
          content="The content you are looking for cannot be found." />} />
        <Route path="/test" element={<EmailEditor email={email} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;