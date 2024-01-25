import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !message) {
      alert("Please fill in your email and message before submitting.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.status !== 200) {
        alert("Something went wrong. Please try again.");
      } else {
        setName("");
        setEmail("");
        setMessage("");

        alert("Thank you for your message! We will get back to you soon.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <section id="contact" className="mt-32">
      <div className="flex flex-col justify-center items-center gap-y-4 px-8 text-textBlue">
        <h2 className="font-beVietnam text-darkBlue4 dark:text-white text-[30px] mb-8">
          Get in touch today 👋
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full gap-y-4 text-textBlue"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
            className="w-full min-h-[50px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4"
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message*"
            className="w-full text-start min-h-[200px] rounded-[16px] border-2 border-darkBlue4 pl-4 dark:bg-customBlack4 pb-[140px]"
          />
          <button
            type="submit"
            className="rounded-[16px] bg-darkBlue4 border-2 border-darkBlue4 w-full min-h-[50px] text-[20px] text-white"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
