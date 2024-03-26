"use client";

import { useState } from "react";
import Image from "next/image";

const QRToggle = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Modal toggle */}
      <div className="mt-2 flex justify-center">
        <button
          onClick={toggleModal}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          QR CODE
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>

      {/* Main modal */}
      {showModal && (
        <div
          tabIndex={-1}
          aria-hidden="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 mx-2">
            {/* Modal header */}
            <div className="flex justify-between items-center border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-900">QR CODE</h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="mt-4">
              <Image
                className="rounded-2xl p-3"
                alt="qr code"
                src="/qr.webp"
                width={400}
                height={400}
              />
            </div>
            {/* Modal footer
            <div className="mt-6 flex justify-end">
              <button
                onClick={toggleModal}
                className="bg-blue-700 text-white hover:bg-blue-800 px-4 py-2 rounded-lg mr-2"
              >
                I accept
              </button>
              <button
                onClick={toggleModal}
                className="bg-gray-200 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg"
              >
                Decline
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default QRToggle;
