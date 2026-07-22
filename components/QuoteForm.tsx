"use client";

import { useState } from "react";
import { services } from "@/lib/site-data";

type FormState = "idle" | "loading" | "success" | "error";

export function QuoteForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        body: formData
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      form.reset();
      setState("success");
      setMessage("Thank you for contacting Casa Arcobaleno. We have received your inquiry and will be in touch soon.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" noValidate>
      <div className="hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Select label="Preferred Contact Method" name="preferredContact" options={["Email", "Optional phone call after email", "Text after email"]} />
        <Select label="Service Needed" name="serviceNeeded" options={[...services.map((service) => service.title), "Not Sure Yet"]} />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Project Location" name="projectLocation" />
        <Field label="Desired Date" name="desiredDate" type="date" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Select label="Estimated Project Size" name="projectSize" options={["Small", "Medium", "Large", "Not sure yet"]} required />
        <Field label="Optional Phone" name="optionalPhone" type="tel" />
      </div>

      <fieldset className="border border-linen p-5" aria-required="true">
        <legend className="px-2 text-sm font-medium text-espresso">
          Multiple Service Selection <span className="text-terracotta">*required</span>
        </legend>
        <div className="mt-2 grid gap-3 md:grid-cols-2">
          {[...services.map((service) => service.title), "Packing", "Unpacking", "Moving Support", "Apartment Community Events", "Not Sure Yet"].map((service) => (
            <label key={service} className="flex items-center gap-3 text-sm text-charcoal/75">
              <input type="checkbox" name="serviceSelections" value={service} className="h-4 w-4 accent-terracotta" />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm font-medium text-espresso">
        Project Description
        <textarea
          name="description"
          rows={7}
          className="border border-linen bg-white px-4 py-3 text-base font-normal text-charcoal shadow-none"
          placeholder="Tell us what would make life easier."
        />
      </label>

      <label className="grid gap-2 text-sm font-medium text-espresso">
        Upload Photos
        <input name="photos" type="file" multiple accept="image/*" className="border border-linen bg-white px-4 py-3 text-sm font-normal text-charcoal" />
      </label>

      <Field label="How Did You Hear About Us" name="referralSource" />

      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex min-h-12 w-fit items-center rounded-full bg-espresso px-7 text-sm font-semibold text-white transition hover:bg-terracotta disabled:cursor-wait disabled:opacity-70"
      >
        {state === "loading" ? "Sending..." : "Send Inquiry"}
      </button>

      {message ? (
        <p className={state === "success" ? "text-sm leading-6 text-sage" : "text-sm leading-6 text-terracotta"} role="status" aria-live="polite">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-espresso">
      <span>
        {label} {required ? <span className="text-terracotta">*required</span> : null}
      </span>
      <input name={name} type={type} required={required} className="min-h-12 border border-linen bg-white px-4 text-base font-normal text-charcoal shadow-none" />
    </label>
  );
}

function Select({ label, name, options, required = false }: { label: string; name: string; options: string[]; required?: boolean }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-espresso">
      <span>
        {label} {required ? <span className="text-terracotta">*required</span> : null}
      </span>
      <select name={name} required={required} className="min-h-12 border border-linen bg-white px-4 text-base font-normal text-charcoal shadow-none">
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
