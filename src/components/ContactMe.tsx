import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_ENDPOINT
  );

  useEffect(() => {
    if (state.succeeded) {
      setIsOpen(true);
    }
  }, [state.succeeded]);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (isOpen && state.succeeded) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] py-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">Thanks for your message!</h2>
        <p className="text-center mb-4 text-sm sm:text-base">I'll get back to you soon.</p>
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-[60vh] sm:min-h-[70vh] py-6 sm:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">Contact Me</h1>
      <p className="text-center text-sm sm:text-base mb-6 sm:mb-8 text-gray-600">
        Please feel free to reach out to me for any reason!
      </p>
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8"
        >
          <div className="mb-4 sm:mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="mt-1 p-2 sm:p-3 w-full border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="mb-4 sm:mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 p-2 sm:p-3 w-full border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 sm:p-3 w-full border border-gray-300 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base resize-vertical"
              rows={4}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-blue-500 text-white p-2 sm:p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};