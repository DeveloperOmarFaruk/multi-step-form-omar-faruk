import React from "react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";

const Step1 = ({ control, errors }) => {
  return (
    <>
      <div>
        {/* Name Input Start */}
        <div className="mb-4">
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Name
          </Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                className={cn(
                  " mt-1 w-full shadow-sm  sm:text-sm",
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
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Email
          </Label>
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
              <Input
                {...field}
                type="email"
                className={cn(
                  " mt-1 w-full shadow-sm  sm:text-sm",
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
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Date of Birth
          </Label>
          <Controller
            name="dob"
            control={control}
            defaultValue=""
            rules={{ required: "Date of Birth is required" }}
            render={({ field }) => (
              <Input
                {...field}
                type="date"
                className={cn(
                  "mt-1 w-full shadow-sm  sm:text-sm",
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
