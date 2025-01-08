import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../Components/BootCart';

const Home = () => {
  const [books, setBooks] = useState([]); // State to store books
  const [error, setError] = useState(null); // State to handle errors

  // Function to fetch books
  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books'); // Backend API URL
      console.log(response.data);
      setBooks(response.data); // Update the state with the fetched books
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('Failed to fetch books. Please try again later.'); // Set error state
    }
  };

  // Fetch books on component mount
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 py-10">
        <h1 className="text-center text-2xl font-bold mb-6">Library Books</h1>

        {error && (
          <div className="text-center text-red-500 mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {books.length > 0 ? (
            books.map((book) => (
              <BookCard key={book._id} book={book} />
            ))
          ) : (
            !error && <p className="text-center">No books found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
