import React, { useEffect, useMemo, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT ?? "";

const Contact: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, handleSubmit] = useForm(formEndpoint);

  useEffect(() => {
    if (state.succeeded) {
      setIsOpen(true);
    }
  }, [state.succeeded]);

  const closeModal = () => setIsOpen(false);

  const heroCopy = useMemo(
    () => ({
      heading: "Feel free to reach out",
      body: "Have a question or literally just want to say hi? My inbox is open...",
    }),
    []
  );

  if (!formEndpoint) {
    console.warn("VITE_FORMSPREE_ENDPOINT is missing; contact form submissions will fail.");
  }

  if (isOpen && state.succeeded) {
    return (
      <section className="px-4 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">Message Received</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">Thanks for reaching out!</h2>
          <button
            onClick={closeModal}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">Contact</p>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{heroCopy.heading}</h1>
            <p className="mx-auto max-w-2xl text-sm text-slate-500">{heroCopy.body}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-[0.35em] text-slate-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button
            type="submit"
            disabled={state.submitting || !formEndpoint}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
