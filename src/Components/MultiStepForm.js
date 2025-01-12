"use client";

import "tailwindcss/tailwind.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import useFunctions from "@/Hooks/useFunctions";

const MultiStepForm = () => {
  // All functions are import from useFunctions file
  const {
    step,
    control,
    errors,
    stepFields,
    isProcessing,
    handleSubmit,
    onNext,
    onPrevious,
    onSubmit,
  } = useFunctions();

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isProcessing ? (
        <>
          {/* ----------------------------- */}
          {/* Loading Spinner Buttons Start */}
          {/* ----------------------------- */}
          <button
            type="button"
            className="bg-indigo-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center disabled:opacity-50"
          >
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
            Loading...
          </button>
          {/* ----------------------------- */}
          {/* Loading Spinner Buttons End */}
          {/* ----------------------------- */}
        </>
      ) : (
        <>
          <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-2xl w-full max-w-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* ----------------------- */}
              {/* Navigation Buttons Start */}
              {/* ----------------------- */}
              <div className="mt-6 mb-4 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={onPrevious}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded"
                  >
                    Previous
                  </button>
                )}

                {step < 3 && (
                  <button
                    type="button"
                    onClick={onNext}
                    className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded"
                  >
                    Next
                  </button>
                )}

                {step === 3 && (
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                  >
                    Submit
                  </button>
                )}
              </div>
              {/* ----------------------- */}
              {/* Navigation Buttons End */}
              {/* ----------------------- */}

              {/* ------------------ */}
              {/* Progress Bar Start */}
              {/* ------------------ */}

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className={`w-full h-2 rounded-l-lg transition-all duration-300 ${
                      step >= 1 ? "bg-indigo-500" : "bg-gray-200"
                    }`}
                  ></span>
                  <span
                    className={`w-full h-2 transition-all duration-300 ${
                      step >= 2 ? "bg-indigo-500" : "bg-gray-200"
                    }`}
                  ></span>
                  <span
                    className={`w-full h-2 rounded-r-lg transition-all duration-300 ${
                      step === 3 ? "bg-indigo-500" : "bg-gray-200"
                    }`}
                  ></span>
                </div>
                <p className="text-center mt-2">
                  Step {step} of {stepFields.length}
                </p>
              </div>

              {/* ---------------- */}
              {/* Progress Bar End */}
              {/* ---------------- */}

              {/* ----------------- */}
              {/* Step Input Start */}
              {/* ----------------- */}
              {step === 1 && <Step1 control={control} errors={errors} />}
              {step === 2 && <Step2 control={control} errors={errors} />}
              {step === 3 && <Step3 control={control} errors={errors} />}
              {/* ----------------- */}
              {/* Step Input End */}
              {/* ----------------- */}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
