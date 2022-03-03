import React from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.scss";

const ContactForm = () => {
  // const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const doSubmit = (data) => console.log(data);
  console.log(errors);

  function showForm() {
    return (
      <form className="bd-text-w" onSubmit={handleSubmit(doSubmit)}>
        {/* Name */}
        <label htmlFor="name">
          <p>Your Name</p>
          <input
            id="name"
            type="text"
            {...register("name", { required: true })}
            placeholder="Your Name"
          />
        </label>
        {errors.name?.type === "required" && <p>Your name is required</p>}
        <br />
        <br />
        {/* Email */}
        <label htmlFor="email">
          <p>Your Email Address</p>
          <input
            id="email"
            type="email"
            {...register("email", { required: true })}
            placeholder="abc@ijk.xyz"
          />
        </label>
        {errors.email?.type === "required" && <p>Your email is required</p>}

        <br />
        <br />
        {/* Select service */}
        <label htmlFor="service">
          <p>Select service</p>
          <select id="service" {...register("service", { required: true })}>
            <option value="Say hi">Just want to say hi</option>
            <option value="Dev">Need me for a dev project</option>
            <option value="Design">Need me for a design project</option>
          </select>
        </label>
        <br />
        <br />
        {/* Message */}
        <label htmlFor="message">
          <p>Your Message</p>
          <textarea
            id="message"
            {...register("message", { required: true })}
            rows="4"
            cols="50"
            placeholder="Go ahead express yourself..."
          ></textarea>
        </label>
        {errors.message?.type === "required" && (
          <p>Please enter your message</p>
        )}

        <br />
        <input type="submit" />
      </form>
    );
  }

  return <div>{showForm()}</div>;
};

export default ContactForm;
