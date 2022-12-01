import React from "react";

import { Link } from "react-router-dom";

function Progam() {
  return (
    <div className="h-full">
      <div className="bg-[url('/soa.jpeg')] mt-[-16] opacity-70 bg-no-repeat bg-cover bg-bottom bg-fixed">
        <div className="flex justify-start">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-28 h-28 my-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-center justify-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-28 h-28 my-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="shadow-2xl shadow-black bg-black text-white h-full">
        <div className="ml-10">
          <div>
            <span>Comedy Central</span>
            <span className="text-slate-500 ml-4 my-4">
              14.30 - 17.30 3 May
            </span>
          </div>
          <div>
            <p className="text-2xl my-4">Sons Of Anarchy</p>
          </div>

          <div>
            <p className="text-sm my-10">2015 Romance Drama Horror</p>
          </div>
          <div className="max-w-xs">
            <p>
              Single father Jax Teller finds his loyalty to his outlaw
              motorcycle club tested by his growing unease concerning the groups
              lawlessness. While the club protects and patrols the town of
              Charming, California, keeping drug dealers away, its activities
              also include a thriving -- and lucrative -- illegal arms business.
            </p>
          </div>
          <div>
            <p className="text-slate-500 mt-4 max-w-xs">
              Cast: Charlie Hunnam, Katey Sagal, Mark Boone Junior...
            </p>
          </div>
          <div>
            <p className="text-slate-500 mb-4 max-w-xs">Creator: Kurt Sutter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Progam;
