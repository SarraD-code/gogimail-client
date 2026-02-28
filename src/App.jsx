import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ScrollToTop from "./ScrollToTop.jsx";
import Home from './pages/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import PromptContext from './components/PromptContext/PromptContext.jsx';

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound title="404 - PAGE NOT FOUND"
          content="The content you are looking for cannot be found." />} />
        <Route path="/test" element={<PromptContext />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;