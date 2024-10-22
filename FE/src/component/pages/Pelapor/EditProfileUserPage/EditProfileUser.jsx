import React from "react";
import PelaporLayout from "../../../Layout/pelaporLayout";

export const EditProfileUser = () => {
  return (
    <PelaporLayout>
      <div className="bg-gray-800 rounded-lg">
        <div class="container mx-auto p-6">
          <div class="flex items-center space-x-6">
            <div class="flex-shrink-0">
              <img
                class="w-24 h-24 rounded-full object-cover"
                src="profile.jpg"
                alt="Profile Picture"
              />
            </div>
            <div class="flex-1">
              <h1 class="text-3xl font-bold">Julian Witjaksono</h1>
              <div class="flex items-center space-x-2 mt-2">
                <span class="text-blue-500">🏅 1200 XP</span>
                <span class="text-green-500">● Bergabung sejak 2022</span>
                <span class="text-gray-300">📍 Kota Palu</span>
              </div>
            </div>
            <button class="bg-gray-800 p-2 rounded-full hover:bg-gray-700">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12H9m0 0v6m0-6V6m0 6h6"
                ></path>
              </svg>
            </button>
          </div>

          <div class="mt-6">
            <h2 class="text-lg font-semibold">Tentang Saya</h2>
            <p class="text-gray-400">-</p>
          </div>

          <div class="flex space-x-4 mt-6">
            <div class="text-center">
              <p class="text-2xl font-bold">13</p>
              <p class="text-gray-400">Academy</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">1</p>
              <p class="text-gray-400">Event</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">0</p>
              <p class="text-gray-400">Challenge</p>
            </div>
            <div class="text-center">
              <p class="text-2xl font-bold">0</p>
              <p class="text-gray-400">Winning Apps</p>
            </div>
          </div>
        </div>
      </div>
    </PelaporLayout>
  );
};
