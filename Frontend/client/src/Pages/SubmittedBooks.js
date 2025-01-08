import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../Components/BootCart"; // Assuming this component displays a book's details

const SubmittedBooks = () => {
  const [submittedBooks, setSubmittedBooks] = useState([]); // State to store submitted books
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch submitted books from backend
    const fetchSubmittedBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/submitted-books"); // Backend route to fetch submitted books
        setSubmittedBooks(response.data);
      } catch (err) {
        console.error("Error fetching submitted books:", err);
        setError("Failed to fetch submitted books. Please try again later.");
      }
    };

    fetchSubmittedBooks(); // Fetch submitted books when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-bold mb-6">Submitted Books</h1>

        {error && (
          <div className="text-center text-red-500 mb-4">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {submittedBooks.length > 0 ? (
            submittedBooks.map((book) => (
              <BookCard key={book._id} book={book} />
            ))
          ) : (
            <p className="text-center text-gray-600 mt-6">No submitted books</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmittedBooks;
