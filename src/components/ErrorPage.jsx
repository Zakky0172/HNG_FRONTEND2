const ErrorPage = ({ error: { code, message } }) => {
  const reloadPage = () => {
    if (message.includes("Network Error")) {
      window.location.reload();
    } else if (message.includes("404")) {
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
        <div className=" p-12 bg-white rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
          <h1 className="text-9xl font-black text-red-500 mb-4">Oops!</h1>
          <p className="text-gray-700 text-2xl mb-4 font-semibold">
            An error occurred:
          </p>
          <p className="text-gray-700 text-xl mb-4">{code}</p>
          <p className="text-gray-700 text-xl mb-4">{message}</p>
          {message.includes("Network Error") || message.includes("404") ? (
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
              onClick={reloadPage}
            >
              {message.includes("Network Error") ? "Retry" : "Go Home"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
