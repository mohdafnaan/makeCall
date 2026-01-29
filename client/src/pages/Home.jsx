import React from "react";

const Home = () => {
  return (
    <div class="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-2xl font-bold text-gray-800 text-center mb-2">
          Make a Call
        </h2>
        <p class="text-sm text-gray-500 text-center mb-6">
          Trigger a Twilio voice call
        </p>

        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="phone"
            placeholder="+911234567890"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <p className="my-2 text-xs w-fit opacity-50">
            Format: +[country code][number] (e.g., +911234567890)
          </p>
        </div>

        <button class="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition active:scale-95">
          📞 Make Call
        </button>

        <div class="mt-6 bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
          <div class="flex items-center gap-2 mb-3">
            <span class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 font-bold">
              i
            </span>
            <h3 class="text-sm font-semibold text-indigo-700">Quick Info</h3>
          </div>

          <ul class="space-y-2 text-sm text-indigo-700">
            <li class="flex items-start gap-2">
              <span class="mt-1">•</span>
              <span>
                Phone numbers must be in <strong>E.164</strong> format
              </span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-1">•</span>
              <span>
                For trial accounts, numbers must be verified in Twilio
              </span>
            </li>
            <li class="flex items-start gap-2">
              <span class="mt-1">•</span>
              <span>Ensure ngrok is running for webhook access</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
