import axios from "axios";

const Home = () => {
  const makeCall = async () => {
    try {
      await axios.get("http://localhost:5000/private/make-call");
      alert("📞 Call initiated!");
    } catch (err) {
      alert("❌ Failed to make call");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 to-purple-600">
      <button
        onClick={makeCall}
        className="px-10 py-5 text-xl font-bold text-white rounded-2xl bg-indigo-700 hover:bg-indigo-800 active:scale-95 shadow-2xl"
      >
        📞 Make Call
      </button>
    </div>
  );
};

export default Home;
