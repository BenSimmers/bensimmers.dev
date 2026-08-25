import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const fieldClass = "flex flex-col gap-2";
const labelClass = "font-label-caps text-label-caps uppercase text-primary";

const Contact = () => {
  const [dismissed, setDismissed] = useState(false);
  // useForm throws on an empty key, so fall back to a placeholder and keep the
  // form disabled rather than crashing the page when the env var is missing.
  const [state, handleSubmit] = useForm(formEndpoint || "missing-formspree-endpoint");

  if (state.succeeded && !dismissed) {
    return (
      <section className="flex flex-grow items-center justify-center py-12">
        <div className="neo-card mx-auto w-full max-w-2xl p-8 shadow-neo-xl md:p-margin">
          <span className="neo-eyebrow block">Message Received</span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl lg:text-headline-lg">
            Thanks for reaching out!
          </h1>
          <button onClick={() => setDismissed(true)} className="neo-button mt-8">
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex flex-grow items-center justify-center overflow-hidden py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(#000000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-margin">
        <div className="flex flex-col justify-center">
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl lg:text-[64px] lg:leading-[1.05]">
            Feel free to reach out
          </h1>
          <p className="max-w-md font-body-lg text-body-lg text-on-surface-variant">
            Have a question or literally just want to say hi? My inbox is open...
          </p>
          <div className="mt-12 border-t-3 border-primary pt-8 md:mt-margin" />
        </div>

        <div className="neo-card p-6 shadow-neo-xl md:p-gutter">
          <form
            onSubmit={(event) => {
              setDismissed(false);
              return handleSubmit(event);
            }}
            className="flex flex-col gap-6"
          >
            <div className={fieldClass}>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input id="name" type="text" name="name" placeholder="Jane Doe" className="neo-input" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className={fieldClass}>
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="jane@example.com"
                className="neo-input"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className={fieldClass}>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                className="neo-input resize-none"
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting || !formEndpoint}
              className="neo-press mt-4 w-full border-3 border-primary bg-primary py-4 font-label-caps text-label-caps uppercase text-on-primary shadow-neo hover:bg-secondary hover:text-on-secondary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
