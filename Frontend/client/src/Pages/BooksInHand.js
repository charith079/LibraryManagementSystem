import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/BootCart"; // Assuming this component displays a book's details

const BooksInHand = () => {
  const [booksInHand, setBooksInHand] = useState([]); // State to store books in hand
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch books in hand from backend
    const fetchBooksInHand = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/books-in-hand"); // Your backend route for fetching books in hand
        setBooksInHand(response.data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to fetch books. Please try again later.");
      }
    };

    fetchBooksInHand(); // Fetch books in hand when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-bold mb-6">Books in Hand</h1>

        {error && (
          <div className="text-center text-red-500 mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {booksInHand.length > 0 ? (
            booksInHand.map((book) => (
              <BookCard key={book._id} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-600 mt-6">No books in hand</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BooksInHand;
