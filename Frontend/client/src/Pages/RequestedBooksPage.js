import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/BootCart"; // Assuming this component displays a book's details

const RequestedBooks = () => {
  const [requestedBooks, setRequestedBooks] = useState([]); // State to store requested books
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch requested books from backend
    const fetchRequestedBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/requested-books"); // Backend route to fetch requested books
        setRequestedBooks(response.data);
      } catch (err) {
        console.error("Error fetching requested books:", err);
        setError("Failed to fetch requested books. Please try again later.");
      }
    };

    fetchRequestedBooks(); // Fetch requested books when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-bold mb-6">Requested Books</h1>

        {error && (
          <div className="text-center text-red-500 mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requestedBooks.length > 0 ? (
            requestedBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-600 mt-6">No requested books</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestedBooks;
