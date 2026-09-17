"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
interface ContactProps {
  ref: React.RefObject<HTMLDivElement | null>;
}
const ContactUs = ({ ref }: ContactProps) => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:sth.neeschall@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setFormData({ email: "", subject: "", message: "" });
  };
  return (
    <div ref={ref} className="flex flex-col pb-32 2xl:pb-40 items-center">
      <h1 className="text-4xl font-bold mb-16">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-component-background w-full p-8 flex flex-col gap-4"
      >
        <div>
          <label htmlFor="email" className="text-paragraph text-xl">
            Your Email
          </label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-background h-10 w-full px-4"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="text-paragraph text-xl">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            className="bg-background h-10 w-full px-4"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-paragraph text-xl">
            Your message
          </label>
          <br />
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-background appearance-none resize-none px-4"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-xl text-left bg-primary w-fit px-8 py-2 hover:cursor-pointer hover:text-white"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
