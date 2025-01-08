// src/pages/Favorites.js
import React, { useState } from "react";
import { books } from "../Data/books"; // Import books data
import BookCard from "../Components/BootCart"; // Import BookCard component

const Favorites = () => {
  // A simple state to hold the favorite books
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  // Function to handle adding/removing from favorites
  const toggleFavorite = (book) => {
    setFavoriteBooks((prevFavorites) => {
      if (prevFavorites.some((favBook) => favBook.id === book.id)) {
        // If the book is already in the favorites, remove it
        return prevFavorites.filter((favBook) => favBook.id !== book.id);
      } else {
        // Otherwise, add the book to favorites
        return [...prevFavorites, book];
      }
    });
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-bold mb-6">Favorites</h1>

        {/* Displaying favorite books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.length > 0 ? (
            books.map((book) => (
              <div key={book.id}>
                <BookCard book={book} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 mt-6">No Favorites Yet</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Favorites;
