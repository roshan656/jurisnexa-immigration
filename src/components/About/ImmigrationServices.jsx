import React from "react";
import Finland from "../../assets/About/Finland.jpg";
import Finland1 from "../../assets/About/Finland1.jpg";

export default function ImmigrationServices() {
  return (
    <div className="flex flex-col items-center w-full  bg-white">
      <div className="w-full max-w-6xl px-6 py-12">
        <div className="text-center py-4 mb-6">
          <h3 className="text-blue-500 font-medium uppercase tracking-wide mb-2">ABOUT OUR COMPANY</h3>
          <h1 className="text-4xl font-bold py-4 text-gray-900 mb-4">
            We Help You From Start<br />
            To End Immigration
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-6 py-4">
          <div className="relative w-full md:w-1/2">
            <div className="relative">
              <div className="absolute left-0 top-0 w-4/5 z-10">
                <img 
                  src= {Finland}
                  alt="Passports and plane with Paris in background" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div className="absolute right-0 top-20 w-4/5 ml-auto z-20">
                <img 
                  src={Finland1}
                  alt="Person holding immigration documents" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 pt-64 md:pt-0">
            <div className="bg-white p-6 rounded-lg">
              <p className="text-gray-800 mb-4">
                Feel free to reach out to us <span className="text-blue-500 font-medium">through contact information</span> provided below, and one of 
                our representatives will get back to you as soon as possible. Thank you for your 
                interest in Our Services.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-blue-200">
                      <div className="text-blue-500">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="4" y="4" width="16" height="16" rx="2" />
                          <line x1="8" y1="10" x2="16" y2="10" />
                          <line x1="8" y1="14" x2="12" y2="14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Visa Process Responsibility</h3>
                    <p className="text-gray-600 mt-1">
                    The visa process involves verifying applicants' documents, ensuring compliance with immigration laws, and coordinating with relevant authorities. It includes submitting applications, scheduling interviews, and tracking the approval status.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border border-blue-200">
                      <div className="text-blue-500">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
                          <path d="M2 12h20" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Legal Immigration Success</h3>
                    <p className="text-gray-600 mt-1">
                    Legal immigration success means following all official procedures accurately, submitting complete documentation, and meeting eligibility requirements. It ensures a smooth approval process without legal complications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}