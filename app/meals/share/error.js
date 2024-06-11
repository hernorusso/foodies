"use client";

const Error = ({ error: { message } }) => {
  return (
    <main className="error">
      <h1>An Error Ocurred!</h1>
      <p>
        Invalid meal data format. Please check again form fields and try again!
      </p>
    </main>
  );
};

export default Error;
