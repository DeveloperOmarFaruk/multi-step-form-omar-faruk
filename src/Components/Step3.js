import React from "react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";

const Step3 = ({ control, errors }) => {
  return (
    <>
      <div>
        {/* Username Input Start */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Username
          </label>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <input
                {...field}
                className={cn(
                  "border rounded ps-2 pe-2 pt-3 pb-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-950 dark:border-0",
                  errors.username && "border-red-500"
                )}
              />
            )}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>
        {/* Username Input End */}

        {/* Password Input Start */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className={cn(
                  "border rounded ps-2 pe-2 pt-3 pb-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-950 dark:border-0",
                  errors.password && "border-red-500"
                )}
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        {/* Password Input End */}

        {/* Confirm Password Input Start */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Confirm Password
          </label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: "Confirm Password is required",
              validate: (value, formValues) =>
                value === formValues.password || "Passwords do not match",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="password"
                className={cn(
                  "border rounded ps-2 pe-2 pt-3 pb-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-950 dark:border-0",
                  errors.confirmPassword && "border-red-500"
                )}
              />
            )}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        {/* Confirm Password Input End */}
      </div>
    </>
  );
};

export default Step3;
