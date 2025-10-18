import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "./Navbar";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate sending data
    await new Promise((resolve) => setTimeout(resolve, 1500));
    // console.log("Form submitted:", data);
    reset();
  };

  return (
    <>
      <Navbar /> 

      <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 px-4">
        <div className="w-full max-w-lg bg-base-100 shadow-lg rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center text-base-content mb-2">
            Contact Us
          </h1>
          <p className="text-center text-muted mb-8">
            We’d love to hear from you! Fill out the form below.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-base-content mb-1"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-base-200 text-base-content ${errors.name ? "border-red-500 focus:ring-red-400" : "focus:ring-primary"
                  }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-base-content mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-base-200 ${errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-primary"
                  }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-base-content mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register("message", {
                  required: "Message cannot be empty",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters long",
                  },
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 bg-base-200 ${errors.message
                    ? "border-red-500 focus:ring-red-400"
                    : "focus:ring-primary"
                  }`}
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-blue-600  font-semibold rounded-lg hover:bg-blue-700 transition disabled:bg-blue-400"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {/* Success Message */}
            {isSubmitSuccessful && (
              <p className="text-green-600 text-center mt-3 font-medium">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
