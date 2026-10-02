"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { SuccessModal } from "@/components/feedback/SuccessModal";

type ContactFormValues = {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const requiredFields = ["fullName", "phone", "subject", "message"] as const;

function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

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
    <p className="contact-form__error" id={id}>
      {message}
    </p>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function updateValue(field: keyof ContactFormValues, value: string) {
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
    const nextErrors = validateContactForm(values);
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
            _subject: `New Contact Message from ${values.fullName}`,
            _template: "box",
            "Full Name": values.fullName,
            "Phone Number": values.phone,
            "Email Address": values.email || "Not provided",
            "Subject": values.subject,
            "Message Component": values.message,
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setValues(initialValues);
        } else {
          setErrors({ message: "Failed to send message. Please try again." });
        }
      } catch (error) {
        setErrors({ message: "An error occurred while sending the message." });
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__header">
        <h2>Send a Message</h2>
        <p>Required fields are marked with <span aria-hidden="true">*</span>.</p>
      </div>

      {submitted ? (
        <div className="contact-form__success" role="status" aria-live="polite">
          <strong>Message Sent Successfully.</strong>
          <span>
            Thank you for reaching out. We have received your message and will respond to {values.email || "your provided contact details"} shortly.
          </span>
        </div>
      ) : null}

      {hasErrors ? (
        <div className="contact-form__summary" role="alert">
          Please review the highlighted fields and try again.
        </div>
      ) : null}

      <div className="contact-form__grid">
        <div className="contact-form__field">
          <label htmlFor="contact-full-name">Full Name <span aria-hidden="true">*</span></label>
          <input
            id="contact-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "contact-full-name-error" : undefined}
          />
          <FieldError id="contact-full-name-error" message={errors.fullName} />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-phone">Phone Number <span aria-hidden="true">*</span></label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          />
          <FieldError id="contact-phone-error" message={errors.phone} />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-email">Email Address</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
          />
          <FieldError id="contact-email-error" message={errors.email} />
        </div>

        <div className="contact-form__field">
          <label htmlFor="contact-subject">Subject <span aria-hidden="true">*</span></label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            value={values.subject}
            onChange={(event) => updateValue("subject", event.target.value)}
            required
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          />
          <FieldError id="contact-subject-error" message={errors.subject} />
        </div>

        <div className="contact-form__field contact-form__field--wide">
          <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : "contact-message-help"}
          />
          <p className="contact-form__help" id="contact-message-help">
            Include the service type, location, and preferred timing if known.
          </p>
          <FieldError id="contact-message-error" message={errors.message} />
        </div>
      </div>

      <Button className="contact-form__submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <SuccessModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Thank You!"
        message="We have successfully received your message. Our team will review it and get back to you shortly."
      />
    </form>
  );
}
