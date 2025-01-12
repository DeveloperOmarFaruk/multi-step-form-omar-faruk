import React from "react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";

const Step3 = ({ control, errors }) => {
  return (
    <>
      <div>
        {/* Username Input Start */}
        <div className="mb-4">
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Username
          </Label>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <Input
                {...field}
                className={cn(
                  "mt-1 w-full shadow-sm  sm:text-sm",
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
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Password
          </Label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <Input
                {...field}
                type="password"
                className={cn(
                  "mt-1 w-full shadow-sm  sm:text-sm",
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
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Confirm Password
          </Label>
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
              <Input
                {...field}
                type="password"
                className={cn(
                  "mt-1 w-full shadow-sm  sm:text-sm",
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
