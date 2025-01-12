"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const useFunctions = () => {
  // React useState Hooks
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // React useForm by React Hook Form
  const {
    handleSubmit,
    control,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // Handle Next for Next Button
  const onNext = async () => {
    const valid = await trigger();
    if (valid) {
      setStep((prev) => prev + 1);
    }
  };

  // Handle Previous for Previous Button
  const onPrevious = () => {
    setStep((prev) => prev - 1);
  };

  // Step Fields Array for Step Status show
  const stepFields = [
    ["name", "email", "dob"],
    ["address1", "city", "state", "zip"],
    ["username", "password", "confirmPassword"],
  ];

  // Handle Submit for Submit Button
  const onSubmit = (data) => {
    setIsProcessing(true);
    if (step < step.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      console.log(data);
      setTimeout(() => {
        setIsProcessing(false), alert("Form submitted successfully!");
        reset();
        setStep(0);
      }, 1000);
    }
  };

  // Handle Dark Mode Functions
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return {
    step,
    control,
    errors,
    stepFields,
    isProcessing,
    isDarkMode,
    handleSubmit,
    onNext,
    onPrevious,
    onSubmit,
    toggleDarkMode,
  };
};

export default useFunctions;
