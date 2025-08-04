import React, { useState, useEffect } from 'react';
import Header from './Components/Header.jsx';
import SideBar from './Components/SideBar.jsx';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchedVal, setSearchedVal] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [videos, setVideos] = useState([]);

  // Fetch videos from API
  const refreshVideos = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/videos');
      setVideos(response.data || []);
    } catch (err) {
      console.error('Failed to fetch videos:', err);
    }
  };

  // Initial fetch on mount
  useEffect(() => {
    refreshVideos();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Reset sidebarOpen to false on mobile resize if needed
      if (window.innerWidth <= 792 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

  const isMobile = windowWidth <= 792;

  const handleSearch = () => setSearchActive(true);

  return (
    <>
      {/* Header (fixed) */}
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        searchedVal={searchedVal}
        setSearchedVal={setSearchedVal}
        onSearch={handleSearch}
        refreshVideos={refreshVideos}
      />

      {/* Sidebar + Main Content */}
      <div className="flex min-h-screen pt-14">
        {/* pt-14 = 56px (height of fixed header) */}
        <SideBar sidebarOpen={sidebarOpen} isMobile={isMobile} />

        <main className="flex-1 px-2 sm:px-4 md:px-8">
          <Outlet
            context={{
              sidebarOpen,
              searchedVal,
              setSearchedVal,
              searchActive,
              setSearchActive,
              videos,
              refreshVideos
            }}
          />
        </main>
      </div>
    </>
  );
}

export default App;