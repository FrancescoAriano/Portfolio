"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleInputChange = () => {
    if (status !== "" && status !== "loading") {
      setStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("La risposta del server non è OK");
      }

      setStatus("success");
      setTimeout(() => {
        setStatus("");
      }, 5000);
      e.target.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => {
        setStatus("");
      }, 8000);
    }
  };

  return (
    <div className="bg-card shadow-lg rounded-2xl p-8 order-1 lg:order-2">
      <h3 className="text-2xl font-bold mb-6 text-center">Send a message</h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label htmlFor="name" className="text-sm text-foreground/80 ml-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            className="mt-2 w-full px-4 py-2 shadow-lg rounded-2xl border border-foreground/5 bg-background focus:outline-none focus:border-foreground/25 transition-colors duration-300"
            placeholder="Write your name..."
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-foreground/80 ml-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            className="mt-2 w-full px-4 py-2 shadow-lg rounded-2xl border border-foreground/5 bg-background focus:outline-none focus:border-foreground/25 transition-colors duration-300"
            placeholder="Write your email..."
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-foreground/80 ml-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            onChange={handleInputChange}
            className="min-h-32 lg:min-h-16 mt-2 w-full px-4 py-2 shadow-lg rounded-2xl border border-foreground/5 bg-background focus:outline-none focus:border-foreground/25 transition-colors duration-300"
            placeholder="Hello, I'd like to talk about..."
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full button px-6 bg-primary font-bold disabled:bg-primary/50 disabled:cursor-not-allowed"
        >
          <div className="text-primary-foreground flex items-center justify-center">
            &lt;
            {status === "success"
              ? "Inviata!"
              : status === "error"
              ? "Errore!"
              : "Invia"}{" "}
            /&gt;
          </div>
        </button>
      </form>
    </div>
  );
};
