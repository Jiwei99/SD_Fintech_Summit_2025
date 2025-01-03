"use client";

import React from 'react';

const AboutButton: React.FC = () => {
  return (
    <button
      className="bg-about-button text-white font-semibold py-2 px-4 md:px-16 sm:w-full rounded-xl hover:bg-blue-600"
      onClick={() => window.location.href = 'https://fintechsociety.comp.nus.edu.sg/'}
    >
      Find out more!
    </button>
  );
};

export default AboutButton;
