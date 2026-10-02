"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { classNames } from "@/lib/classNames";
import { SuccessModal } from "@/components/feedback/SuccessModal";

type QuoteFormValues = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  location: string;
  preferredStartDate: string;
  serviceDuration: string;
  message: string;
};

type QuoteFormErrors = Partial<Record<keyof QuoteFormValues, string>>;

const initialValues: QuoteFormValues = {
  fullName: "",
  phone: "",
  email: "",
  serviceType: "",
  location: "",
  preferredStartDate: "",
  serviceDuration: "",
  message: "",
};

const serviceTypes = [
  "Residential Security",
  "Office & Corporate Security",
  "Event Security",
  "Construction Site Security",
  "Factory & Warehouse Security",
  "Retail & Commercial Security",
  "Hotel & Hospitality Security",
  "Institutional Security",
  "Other",
] as const;

const serviceDurations = ["One Day", "Few Days", "One Month", "Long Term", "Not Sure Yet"] as const;

const requiredFields = ["fullName", "phone", "serviceType", "location", "message"] as const;

function validateQuoteForm(values: QuoteFormValues): QuoteFormErrors {
  const errors: QuoteFormErrors = {};

  for (const field of requiredFields) {
    if (!values[field].trim()) {
      errors[field] = "This field is required.";
    }
  }

  const phoneValue = values.phone.trim();
  if (phoneValue && !/^[+()0-9\s-]{7,20}$/.test(phoneValue)) {
    errors.phone = "Enter a valid phone number.";
  }

  const emailValue = values.email.trim();
  if (emailValue && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    errors.email = "Enter a valid email address.";
  }

  if (values.message.trim().length > 800) {
    errors.message = "Please keep the message under 800 characters.";
  }

  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="quote-form__error" id={id}>
      {message}
    </p>
  );
}

export function QuoteRequestForm() {
  const [values, setValues] = useState<QuoteFormValues>(initialValues);
  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function updateValue(field: keyof QuoteFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateQuoteForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/info@royalforcesecurity.lk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            _subject: `New Security Quote Request from ${values.fullName}`,
            _template: "box",
            "Full Name": values.fullName,
            "Phone Number": values.phone,
            "Email Address": values.email || "Not provided",
            "Service Type": values.serviceType,
            "Location / Area": values.location,
            "Preferred Start Date": values.preferredStartDate || "Not specified",
            "Service Duration": values.serviceDuration || "Not specified",
            "Requirement Details": values.message,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setValues(initialValues);
        } else {
          setErrors({ message: "Failed to send request. Please try again or contact us directly." });
        }
      } catch (error) {
        setErrors({ message: "An error occurred while sending the request." });
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <form className="quote-form" noValidate onSubmit={handleSubmit}>
      <div className="quote-form__header">
        <h2>Request Security Support</h2>
        <p>Required fields are marked with <span aria-hidden="true">*</span>.</p>
      </div>

      {submitted ? (
        <div className="quote-form__success" role="status" aria-live="polite">
          <strong>Quote Request Sent Successfully.</strong>
          <span>
            Thank you for requesting a quote. Our team is preparing your security plan and will reach out to you shortly.
          </span>
        </div>
      ) : null}

      {hasErrors ? (
        <div className="quote-form__summary" role="alert">
          Please review the highlighted fields and try again.
        </div>
      ) : null}

      <div className="quote-form__grid">
        <div className="quote-form__field">
          <label htmlFor="quote-full-name">Full Name <span aria-hidden="true">*</span></label>
          <input
            id="quote-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "quote-full-name-error" : undefined}
          />
          <FieldError id="quote-full-name-error" message={errors.fullName} />
        </div>

        <div className="quote-form__field">
          <label htmlFor="quote-phone">Phone Number <span aria-hidden="true">*</span></label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "quote-phone-error" : undefined}
          />
          <FieldError id="quote-phone-error" message={errors.phone} />
        </div>

        <div className="quote-form__field">
          <label htmlFor="quote-email">Email Address</label>
          <input
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "quote-email-error" : undefined}
          />
          <FieldError id="quote-email-error" message={errors.email} />
        </div>

        <div className="quote-form__field">
          <label htmlFor="quote-service-type">Service Type <span aria-hidden="true">*</span></label>
          <select
            id="quote-service-type"
            name="serviceType"
            value={values.serviceType}
            onChange={(event) => updateValue("serviceType", event.target.value)}
            required
            aria-invalid={Boolean(errors.serviceType)}
            aria-describedby={errors.serviceType ? "quote-service-type-error" : undefined}
          >
            <option value="">Select a service</option>
            {serviceTypes.map((serviceType) => (
              <option key={serviceType} value={serviceType}>
                {serviceType}
              </option>
            ))}
          </select>
          <FieldError id="quote-service-type-error" message={errors.serviceType} />
        </div>

        <div className="quote-form__field">
          <label htmlFor="quote-location">Location / Area <span aria-hidden="true">*</span></label>
          <input
            id="quote-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            value={values.location}
            onChange={(event) => updateValue("location", event.target.value)}
            required
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "quote-location-error" : undefined}
          />
          <FieldError id="quote-location-error" message={errors.location} />
        </div>

        <div className="quote-form__field">
          <label htmlFor="quote-start-date">Preferred Start Date</label>
          <input
            id="quote-start-date"
            name="preferredStartDate"
            type="date"
            value={values.preferredStartDate}
            onChange={(event) => updateValue("preferredStartDate", event.target.value)}
          />
        </div>

        <div className="quote-form__field quote-form__field--wide">
          <label htmlFor="quote-duration">Service Duration</label>
          <select
            id="quote-duration"
            name="serviceDuration"
            value={values.serviceDuration}
            onChange={(event) => updateValue("serviceDuration", event.target.value)}
          >
            <option value="">Select duration</option>
            {serviceDurations.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>

        <div className="quote-form__field quote-form__field--wide">
          <label htmlFor="quote-message">Message / Requirement Details <span aria-hidden="true">*</span></label>
          <textarea
            id="quote-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "quote-message-error" : "quote-message-help"}
          />
          <p className="quote-form__help" id="quote-message-help">
            Include the property type, expected timing, and any access details.
          </p>
          <FieldError id="quote-message-error" message={errors.message} />
        </div>
      </div>

      <Button className={classNames("quote-form__submit")} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending Request..." : "Send Quote Request"}
      </Button>

      <SuccessModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Quote Request Received!"
        message="Thank you for requesting a quote. Our team is preparing your security plan and will reach out to you shortly."
      />
    </form>
  );
}
