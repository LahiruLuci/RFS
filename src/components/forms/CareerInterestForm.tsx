"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { SuccessModal } from "@/components/feedback/SuccessModal";

type CareerFormValues = {
  fullName: string;
  phone: string;
  email: string;
  position: string;
  location: string;
  experience: string;
  message: string;
};

type CareerFormErrors = Partial<Record<keyof CareerFormValues, string>>;

const initialValues: CareerFormValues = {
  fullName: "",
  phone: "",
  email: "",
  position: "",
  location: "",
  experience: "",
  message: "",
};

const positions = [
  "Security Guard",
  "Site Security Officer",
  "Event Security Personnel",
  "Supervisor / Team Leader",
  "Other",
] as const;

const experienceOptions = ["Yes", "No"] as const;
const requiredFields = ["fullName", "phone", "position", "location"] as const;

function validateCareerForm(values: CareerFormValues): CareerFormErrors {
  const errors: CareerFormErrors = {};

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
    <p className="career-form__error" id={id}>
      {message}
    </p>
  );
}

export function CareerInterestForm() {
  const [values, setValues] = useState<CareerFormValues>(initialValues);
  const [errors, setErrors] = useState<CareerFormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function updateValue(field: keyof CareerFormValues, value: string) {
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
    const nextErrors = validateCareerForm(values);
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
            _subject: `New Career Interest from ${values.fullName}`,
            _template: "box",
            "Full Name": values.fullName,
            "Phone Number": values.phone,
            "Email Address": values.email || "Not provided",
            "Position Interested In": values.position,
            "Location / Area": values.location,
            "Previous Security Experience": values.experience || "Not specified",
            "Additional Message": values.message || "None",
          }),
        });

        if (response.ok) {
          setSubmitted(true);
          setValues(initialValues);
        } else {
          setErrors({ message: "Failed to submit application. Please try again or apply directly via email." });
        }
      } catch (error) {
        setErrors({ message: "An error occurred while sending the application." });
      } finally {
        setIsSubmitting(false);
      }
    }
  }
  return (
    <form className="career-form" id="career-application-form" noValidate onSubmit={handleSubmit}>
      <div className="career-form__header">
        <h2 id="career-application-title">Submit Your Interest</h2>
        <p>
          Share your details and the team can review your interest for suitable
          security service opportunities.
        </p>
        <small>Required fields are marked with <span aria-hidden="true">*</span>.</small>
      </div>

      {submitted ? (
        <div className="career-form__success" role="status" aria-live="polite">
          <strong>Application Sent Successfully.</strong>
          <span>
            Thank you for your interest in joining Royal Security Force. We will review your application and get back to you soon.
          </span>
        </div>
      ) : null}

      {hasErrors ? (
        <div className="career-form__summary" role="alert">
          Please review the highlighted fields and try again.
        </div>
      ) : null}

      <div className="career-form__grid">
        <div className="career-form__field">
          <label htmlFor="career-full-name">Full Name <span aria-hidden="true">*</span></label>
          <input
            id="career-full-name"
            name="fullName"
            type="text"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => updateValue("fullName", event.target.value)}
            required
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "career-full-name-error" : undefined}
          />
          <FieldError id="career-full-name-error" message={errors.fullName} />
        </div>

        <div className="career-form__field">
          <label htmlFor="career-phone">Phone Number <span aria-hidden="true">*</span></label>
          <input
            id="career-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "career-phone-error" : undefined}
          />
          <FieldError id="career-phone-error" message={errors.phone} />
        </div>

        <div className="career-form__field">
          <label htmlFor="career-email">Email Address</label>
          <input
            id="career-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "career-email-error" : undefined}
          />
          <FieldError id="career-email-error" message={errors.email} />
        </div>

        <div className="career-form__field">
          <label htmlFor="career-position">Position Interested In <span aria-hidden="true">*</span></label>
          <select
            id="career-position"
            name="position"
            value={values.position}
            onChange={(event) => updateValue("position", event.target.value)}
            required
            aria-invalid={Boolean(errors.position)}
            aria-describedby={errors.position ? "career-position-error" : undefined}
          >
            <option value="">Select a position</option>
            {positions.map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
          <FieldError id="career-position-error" message={errors.position} />
        </div>

        <div className="career-form__field">
          <label htmlFor="career-location">Location / Area <span aria-hidden="true">*</span></label>
          <input
            id="career-location"
            name="location"
            type="text"
            autoComplete="address-level2"
            value={values.location}
            onChange={(event) => updateValue("location", event.target.value)}
            required
            aria-invalid={Boolean(errors.location)}
            aria-describedby={errors.location ? "career-location-error" : undefined}
          />
          <FieldError id="career-location-error" message={errors.location} />
        </div>

        <div className="career-form__field">
          <label htmlFor="career-experience">Previous Security Experience</label>
          <select
            id="career-experience"
            name="experience"
            value={values.experience}
            onChange={(event) => updateValue("experience", event.target.value)}
          >
            <option value="">Select an option</option>
            {experienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="career-form__field career-form__field--wide">
          <label htmlFor="career-message">Message</label>
          <textarea
            id="career-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "career-message-error" : "career-message-help"}
          />
          <p className="career-form__help" id="career-message-help">
            You may include experience, availability, or the type of role you prefer.
          </p>
          <FieldError id="career-message-error" message={errors.message} />
        </div>
      </div>

      <Button className="career-form__submit" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting Application..." : "Send Application Interest"}
      </Button>

      <SuccessModal
        isOpen={submitted}
        onClose={() => setSubmitted(false)}
        title="Application Received!"
        message="Thank you for your interest in joining Royal Security Force. We will review your details and get back to you soon."
      />
    </form>
  );
}
