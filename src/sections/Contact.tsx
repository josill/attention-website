import React, { useState } from "react";
import { Spinner } from "@nextui-org/react";
import { set } from "animejs";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  const isValidEmail = (email: string) => {
    return emailRegex.test(email);
  };

  const handleFocus = () => {
    setEmailError(false);
    setMessageError(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    if (!email || !message || !isValidEmail(email)) {
      setEmailError(!email || !isValidEmail(email));
      setMessageError(!message);
      setIsLoading(false);
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="flex flex-row">
      <div className="hidden sm:block ml-[10px] sm:ml-[60px] border-x-[0.5px] border-lightGray2 dark:border-darkGray min-h-[128px] min-w-[60px]" />
      <div className="w-full flex flex-col justify-center items-center sm:items-start gap-y-4 px-8 pt-32 pb-16 text-textBlue">
        <h2 className="font-beVietnam text-darkBlue3 dark:text-white text-[30px] sm:text-[50px] mb-8">
          Get in touch today 👋
        </h2>
        <form
          onSubmit={handleSubmit}
          onFocus={handleFocus}
          className="flex flex-col justify-center items-center sm:items-start w-full gap-y-4 text-textBlue"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full max-w-[450px] min-h-[50px] rounded-[16px] border-2 border-darkBlue3 pl-4 dark:bg-customBlack"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailError ? "*Please add your email" : "Email*"}
            className={`w-full max-w-[450px] min-h-[50px] rounded-[16px] border-2 pl-4 dark:bg-customBlack
            ${emailError ? "text-red border-red" : "border-darkBlue3"}
            `}
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={messageError ? "*Please add a message" : "Message*"}
            className={`w-full max-w-[650px] text-start min-h-[200px] rounded-[16px] border-2 pl-4 dark:bg-customBlack pb-[140px]
            ${messageError ? "text-red border-red" : "border-darkBlue3"}
            `}
          />
          <button
            type="submit"
            className="flex items-center justify-center rounded-[16px] bg-darkBlue3 border-2 border-darkBlue3 w-full max-w-[650px] min-h-[50px] text-[20px] text-white"
          >
            {isLoading ? (
              <Spinner color="white" labelColor="foreground" />
            ) : (
              <p>Send</p>
            )}
          </button>
        </form>
      </div>
      <div className="hidden sm:block mr-[20px] sm:mr-[60px] border-x-[0.5px] border-lightGray2 dark:border-darkGray min-h-[128px] min-w-[60px]" />
    </section>
  );
}
