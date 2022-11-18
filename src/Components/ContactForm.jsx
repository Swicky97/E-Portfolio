import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_y0x6xoe",
        "template_16mk1hj",
        form.current,
        "YP5I40YE1sf3v65VA"
      )
      .then(
        (result) => {
          console.log(result.text);
          loading.classList.remove("modal__overlay--visible");
          success.classList += " modal__overlay--visible";
        },
        (error) => {
          console.log(error.text);
          loading.classList.remove("modal__overlay--visible");
          alert(
            "Email service temporarily unavailable. Contact me directly at chaseswick@gmail.com."
          );
        }
      );
  };

  return (
    <form id="contact__form" ref={form} onSubmit={sendEmail}>
      <div class="form__item">
        <label class="form__item--label">Name</label>
        <input class="input" name="user_name" type="text" required></input>
      </div>
      <div class="form__item">
        <label class="form__item--label">Email</label>
        <input class="input" name="user_email" type="email" required></input>
      </div>
      <div class="form__item">
        <label class="form__item--label">Message</label>
        <textarea class="input" name="message" type="text" required></textarea>
      </div>
      <button id="contact__submit" class="form__submit">
        Send it my way
      </button>
    </form>
  );
};
