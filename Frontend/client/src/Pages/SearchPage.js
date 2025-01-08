import React, { useState } from "react";
import axios from "axios";
import BookCard from "../Components/BootCart"; // Import BookCard component

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [error, setError] = useState(null);

  // Function to handle search
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setFilteredBooks([]);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/books/search`, {
        params: { query: searchQuery },
      }); // API call to fetch filtered books
      setFilteredBooks(response.data);

      // Update recent searches
      if (!recentSearches.includes(searchQuery)) {
        setRecentSearches([searchQuery, ...recentSearches].slice(0, 5));
      }

      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Error searching books:", err);
      setError("Failed to fetch search results. Please try again later.");
    }
  };

  // Function to handle clearing the search input
  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredBooks([]);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-2xl font-bold mb-6">Search Books</h1>

          {/* Search Bar */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-l-md border border-gray-300"
              placeholder="Search by title or author..."
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
            >
              Search
            </button>
            <button
              onClick={handleClearSearch}
              className="bg-red-500 text-white px-4 py-2 ml-2 rounded hover:bg-red-600"
            >
              Clear
            </button>
          </div>

          {/* Recent Searches */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Recent Searches</h2>
            <div className="flex flex-wrap gap-4">
              {recentSearches.length > 0 ? (
                recentSearches.map((query, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full cursor-pointer"
                    onClick={() => {
                      setSearchQuery(query);
                      handleSearch();
                    }}
                  >
                    {query}
                  </span>
                ))
              ) : (
                <p>No recent searches</p>
              )}
            </div>
          </div>

          {/* Search Results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BookCard key={book._id} book={book} />
              ))
            ) : (
              <p className="text-center text-gray-600 mt-6">
                {searchQuery ? "No Results Found" : "Please enter a search query"}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
