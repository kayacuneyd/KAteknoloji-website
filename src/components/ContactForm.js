import React from "react";
//import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";

export default function ContactForm() {
  return (
    <>
      <form action="https://formsubmit.co/fatih@kateknoloji.com" method="POST">
        <div className="form-group mb-2">
          <div className="form-row">
            <div className="col mb-2">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://ka-teknoloji.com/thanks"
            />
            <div className="col mb-2">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group mb-2">
          <textarea
            placeholder="Your Message"
            className="form-control"
            name="message"
            rows="10"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-100 btn btn-lg btn-dark btn-block">
          Submit Form
        </button>
      </form>
    </>
  );
}
