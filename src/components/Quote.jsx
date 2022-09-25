import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readData } from "../features.js/quoteslice";

const Quote = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);

  const fetchNewQuote = () => {
    dispatch(readData());
  };

  useEffect(() => {
    dispatch(readData());
    console.log("gfvhg", users);
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

//   const handleUpdate = (e) => {
    
//     dispatch(readData());
//   };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="max-w-md p-6 bg-white bg-opacity-25 backdrop-blur-lg rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white italic mb-2">
          {users.content}
        </h1>
        <h2 className="text-lg text-white font-medium mb-2">
          {users.author}
        </h2>
        <h3 className="text-sm text-white opacity-70">{users.tags}</h3>

        <button
          onClick={fetchNewQuote}
          className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
        >
          Random Quote
        </button>

      </div>
      {/* <button onClick={#}>Random</button> */}
    </div>
  );
};

export default Quote;
