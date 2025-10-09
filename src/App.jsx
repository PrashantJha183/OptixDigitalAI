import "./App.css";

function App() {
  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 p-4">
      {/* Main Heading */}
      <h1
        data-cy="main-heading"
        className="text-4xl md:text-5xl font-bold text-center mb-4 text-indigo-600"
      >
        OptixDigitalAI
      </h1>

      {/* Subheading / Message */}
      <p
        data-cy="under-development-message"
        className="text-lg md:text-xl text-center text-gray-700 mb-6"
      >
        Our website is currently under development. Thank you for visiting!
      </p>

      {/* Call to action / contact */}
      <p data-cy="contact-message" className="text-center text-gray-600">
        Stay tuned for our launch
      </p>
    </div>
  );
}

export default App;
