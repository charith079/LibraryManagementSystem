import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={book.bookImageLink}
        alt={book.bookName}
        className="h-48 w-full object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h2 className="text-lg font-bold">{book.bookName}</h2>
        <p className="text-gray-600 mt-1">By: {book.authorName}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="ml-2 text-sm text-gray-600">
            {book.rating.toFixed(1)} / 5
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
            Request Book
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm hover:bg-red-600">
            Add to Favourites
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
