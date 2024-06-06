"use client";

const Error = ({ error: { message } }) => {
  return (
    <main className="error">
      <h1>An Error Ocurred!</h1>
      <p>Failed to fetch meal data. Please try again later!</p>
      <p>Details: {message}</p>
    </main>
  );
};

export default Error;
