import React from "react";
import { Controller } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Step2 = ({ control, errors }) => {
  return (
    <>
      <div>
        {/* Address 1 Input Start */}
        <div className="mb-4">
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Address Line 1
          </Label>
          <Controller
            name="address1"
            control={control}
            defaultValue=""
            rules={{ required: "Address Line 1 is required" }}
            render={({ field }) => (
              <Input
                {...field}
                className={cn(
                  " mt-1 w-full shadow-sm  sm:text-sm",
                  errors.address1 && "border-red-500"
                )}
              />
            )}
          />
          {errors.address1 && (
            <p className="text-red-500 text-sm">{errors.address1.message}</p>
          )}
        </div>
        {/* Address 1 Input End */}

        {/* Address 2 Input Start */}
        <div className="mb-4">
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            Address Line 2
          </Label>
          <Controller
            name="address2"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                className=" mt-1 w-full shadow-sm  sm:text-sm"
              />
            )}
          />
        </div>
        {/* Address 2 Input End */}

        {/* City Input Start */}
        <div className="mb-4">
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            City
          </Label>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            rules={{ required: "City is required" }}
            render={({ field }) => (
              <Input
                {...field}
                className={cn(
                  " mt-1 w-full shadow-sm  sm:text-sm",
                  errors.city && "border-red-500"
                )}
              />
            )}
          />
          {errors.city && (
            <p className="text-red-500 text-sm">{errors.city.message}</p>
          )}
        </div>
        {/* City Input End */}

        {/* State Input Start */}
        <div className="mb-4">
          <Label className="mb-2 block text-sm font-medium text-gray-700 dark:text-white">
            State
          </Label>
          <Controller
            name="state"
            control={control}
            defaultValue=""
            rules={{ required: "State is required" }}
            render={({ field }) => (
              <select
                {...field}
                className={cn(
                  "border rounded ps-2 pe-2 pt-3 pb-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-950 dark:border-0",
                  errors.state && "border-red-500"
                )}
              >
                <option value="">Select a state</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
              </select>
            )}
          />
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>
        {/* State Input End */}

        {/* Zip Code Input Start */}
        <div className="mb-4">
          <Label className="m-2 block text-sm font-medium text-gray-700 dark:text-white">
            Zip Code
          </Label>
          <Controller
            name="zipCode"
            control={control}
            defaultValue=""
            rules={{
              required: "Zip Code is required",
              pattern: {
                value: /^[0-9]{5}$/,
                message: "Invalid zip code format",
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                className={cn(
                  " mt-1 w-full shadow-sm  sm:text-sm",
                  errors.zipCode && "border-red-500"
                )}
              />
            )}
          />
          {errors.zipCode && (
            <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
          )}
        </div>
        {/* Zip Code Input End */}
      </div>
    </>
  );
};

export default Step2;