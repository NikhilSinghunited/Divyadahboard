import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Place from './pages/Place';
import Page404 from './pages/Page404';
import Dashboard from './components/Dashboard/Dashboard';
import Banner from './components/Dashboard/Banner';
import Category from './components/Dashboard/Category';
import Pages from './components/Dashboard/Pages/Pages';
import { useEffect, useState } from 'react';
import PageProps from './components/Dashboard/Pages/PageProps';
import axios from 'axios';
import DashboardHome from './components/Dashboard/DashboardHome';
import BannerHome from './components/Dashboard/BannerHome';
import CategoryHome from './components/Dashboard/CategoryHome';
import PagesForm from './components/Dashboard/Pages/PagesForm';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchPageData();
  }, []);

  const fetchPageData = async () => {
    try {
      const pagesResponse = await axios.get("http://localhost:5000/pages");
      setData(pagesResponse.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {data.map((page) => (
          <Route
            key={page._id}
            path={`/pages/${page.url}`}
            element={<PageProps pages={page} />}
            exact
          />
        ))}
        <Route path='/' element={<Home />} />
        <Route path='/:name' index element={<Place />} />

        <Route path='/admin' element={<Dashboard />} >
          <Route path='' element={<DashboardHome />} />
          <Route path='banner' element={<BannerHome />} />
          <Route path='category' element={<CategoryHome />} />
          <Route path='pages' element={<PagesForm />} />

        </Route>

        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
