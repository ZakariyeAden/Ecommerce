import React,{ useState} from "react";
import {
  Container,
  ShopHeading,
  ContactHeading,
  FormSection,
} from "../Style/style-components";

import { useForm } from "react-hook-form";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Submit  //
  const onSubmit = data => {
    setSubmitted(true);
    reset();
    console.log(data);
  };
  console.log(errors);

  const showThankYou = (
    <div className="main-message">
      <h4>Your Email has Been Sent!</h4>
      <p>We will get in contact with you as swiftly as possible.</p>
    </div>
  );

const showForm = (
  <div className="form">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-control">
        <input
          name="name"
          type="text"
          className="form-input"
          
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="name">Name:</label>
        {errors.Name && <p className="error">Please check the First Name</p>}
      </div>
      <div className="form-control">
        <input
          name="mobile"
          type="text"
          maxLength={10}
          className="form-input"
          placeholder="Mobile"
          {...register("mobile", {
            required: true,
            pattern: 1234567890,
          })}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="mobile">Phone:</label>
        {errors.mobile && <p className="error">Please check your Number</p>}
      </div>
      <div className="form-control">
        <input
          name="email"
          type="email"
          className="form-input"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="Email">Email:</label>
        {errors.email && <p className="error">Please check your email</p>}
      </div>
      <div className="form-control">
        <textarea
          name="message"
          type="text"
          className="form-input"
          placeholder="Message"
          {...register("Message", { required: true, maxLength: 80 })}
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label htmlFor="message">Text:</label>
        {errors.Message && <p className="error">Please check your message</p>}
      </div>
      <div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </div>
    </form>
  </div>
);
  return (
    <Container>
      <div className="bg-img contact-bg bg-img-">
        <div className="text-box">
          <ShopHeading>Contact Us</ShopHeading>
        </div>
      </div>
      <FormSection>
        <ContactHeading>Contact Us, We will reach out to You!</ContactHeading>
        <div>{submitted ? showThankYou : showForm}</div>
      </FormSection>
    </Container>
  );
}

export default Contact;
