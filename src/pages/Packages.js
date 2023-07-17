import React from "react";

const Packages = () => {
  return (
    <div class="flex justify-center items-center">
      <div class="w-full">
        <div class="bg-purple-9 rounded-lg shadow-md p-8">
          <h1 class="text-3xl font-bold mb-8 text-center">Choose a Plan</h1>
          <div class="flex justify-between mb-4">
            {/*Basic Plan*/}
            <div class="w-1/3 m-2 hover:scale-105 transform transition-all hover:bg-purple-3 cursor-pointer bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-4">Basic</h2>
              <p class="text-gray-600 mb-4">For new businesses</p>
              <div class="text-2xl font-bold mb-4">$1000</div>
              <ul class="list-disc pl-6">
                <li>Basic storage</li>
                <li>Basic users</li>
                <li>Basic features</li>
              </ul>
            </div>

            {/*Premium Plan*/}
            <div class="w-1/3 m-2 hover:scale-105 transform transition-all hover:bg-purple-3 cursor-pointer bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-4">Premium</h2>
              <p class="text-gray-600 mb-4">For small businesses</p>
              <div class="text-2xl font-bold mb-4">$5000</div>
              <ul class="list-disc pl-6">
                <li>Premium storage</li>
                <li>Premium users</li>
                <li>Premium features</li>
              </ul>
            </div>

            {/*Unlimited Plan*/}
            <div class="w-1/3 m-2 hover:scale-105 transform transition-all hover:bg-purple-3 cursor-pointer bg-white rounded-lg shadow-md p-6">
              <h2 class="text-2xl font-bold mb-4">Unlimited</h2>
              <p class="text-gray-600 mb-4">For large enterprises</p>
              <div class="text-2xl font-bold mb-4">$10000</div>
              <ul class="list-disc pl-6">
                <li>Unlimited storage</li>
                <li>Unlimited users</li>
                <li>Unlimited features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
