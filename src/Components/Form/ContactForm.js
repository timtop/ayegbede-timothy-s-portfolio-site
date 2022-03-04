import React from "react";
import { useForm } from "react-hook-form";
import PrimaryButton from "../Primary Button/PrimaryButton";
import "./ContactForm.scss";

const ContactForm = () => {
  // const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const doSubmit = (data) => console.log(data);
  console.log(errors);
  const BOTAPI =
    "https://api.telegram.org/bot5178704020:AAHj1UAIi-CfhVgrbAEqllD_MdtVAysdAx4/sendMessage";

  const doSubmit = async (data) => {
    const dataBody = {
      chat_id: 611107437,
      text: JSON.stringify(data),
    };

    try {
      await fetch(BOTAPI, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(dataBody),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      // setSubmitted(true);
      // reset();
    } catch (error) {
      console.log(error);
      // setError(
      //   "submit",
      //   "submit
    }
  };

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
            <option value="" hidden>
              --Please choose an option--
            </option>
            <option value="Say hi">Just want to say hi</option>
            <option value="Dev">Need me for a dev project</option>
            <option value="Design">Need me for a design project</option>
          </select>
        </label>
        {errors.service?.type === "required" && (
          <p>Opps! you forgot the select a service</p>
        )}

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
        <br />
        {/* <input type="submit" /> */}
        <PrimaryButton value="Shoot Message" icon={true} width="100%" />
      </form>
    );
  }

  return <div>{showForm()}</div>;
};

export default ContactForm;
