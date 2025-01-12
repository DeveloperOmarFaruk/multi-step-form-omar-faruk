import React from "react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import "tailwindcss/tailwind.css";

const Step1 = ({ control, errors }) => {
  return (
    <>
      <div>
        {/* Name Input Start */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Name
          </label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <input
                {...field}
                className={cn(
                  "border rounded ps-2 pe-2 pt-3 pb-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-950 dark:border-0",
                  errors.name && "border-red-500"
                )}
              />
            )}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        {/* Name Input End */}

        {/* Email Input Start */}

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className={cn(
                  "border rounded ps-2 pe-2 pt-3 pb-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-950 dark:border-0",
                  errors.email && "border-red-500"
                )}
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        {/* Email Input End */}

        {/* Date of Birth Input Start */}

        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Date of Birth
          </label>
          <Controller
            name="dob"
            control={control}
            defaultValue=""
            rules={{ required: "Date of Birth is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                className={cn(
                  "border rounded ps-2 pe-2 pt-3 pb-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-950 dark:border-0",
                  errors.dob && "border-red-500"
                )}
              />
            )}
          />
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob.message}</p>
          )}
        </div>
        {/* Date of Birth Input End */}
      </div>
    </>
  );
};

export default Step1;
