import React, { useState, useEffect } from 'react';
import Video from './Video.jsx';
import { useOutletContext, useLocation } from 'react-router-dom';

function VideoList({ sidebarOpen }) {
  const categories = [
    "All", "Programming", "Tech", "Design", "AI", "Movie",
    "Gaming", "Vlogs", "Music", "Education"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredVideos, setFilteredVideos] = useState([]);

  const {
    searchedVal,
    setSearchedVal,
    searchActive,
    setSearchActive,
    videos,
    refreshVideos
  } = useOutletContext();

  const location = useLocation();

  // Filter videos based on search
  useEffect(() => {
    if (searchActive && searchedVal.trim()) {
      const term = searchedVal.trim().toLowerCase();
      const filtered = videos.filter(v =>
        v.title?.toLowerCase().includes(term)
      );
      setFilteredVideos(filtered);
      setSelectedCategory("All");
      setSearchActive(false);
    }
  }, [searchActive, searchedVal, videos, setSearchActive]);

  // Update filtered videos when category or videos change
  useEffect(() => {
    if (searchedVal.trim() === "") {
      if (selectedCategory === "All") {
        setFilteredVideos(videos);
      } else {
        const filtered = videos.filter(v =>
          v.category?.toLowerCase() === selectedCategory.toLowerCase()
        );
        setFilteredVideos(filtered);
      }
    }
  }, [searchedVal, selectedCategory, videos]);

  // Reset filters when navigating to "/"
  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedCategory("All");
      setSearchedVal("");
      setSearchActive(false);
      setFilteredVideos(videos);
    }
  }, [location.pathname, videos, setSearchedVal, setSearchActive]);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setSearchedVal("");
    setSearchActive(false);

    if (cat === "All") {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter(v =>
        v.category?.toLowerCase() === cat.toLowerCase()
      );
      setFilteredVideos(filtered);
    }
  };

  return (
    <div className={`px-4 sm:px-6 lg:px-8 pt-4 ${sidebarOpen ? 'ml-3' : 'ml-0'} transition-all duration-300`}>
      {/* Category Filter Bar */}
      <div className="flex gap-2 overflow-x-auto py-2 scrollbar-hide mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-1 rounded-full border text-sm whitespace-nowrap
              ${selectedCategory === cat
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-screen-xl px-6 py-8 mx-auto">
        {filteredVideos.length > 0 ? (
          filteredVideos.map(video => (
            <Video key={video._id} {...video} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 mt-10">
            No videos found.
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoList;