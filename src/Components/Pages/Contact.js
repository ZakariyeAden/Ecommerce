import React from "react";
import {
  Container,
  ShopHeading,
  ContactHeading,
  FormSection,
} from "../Style/style-components";
import { TextField } from "@mui/material";

import { useForm } from 'react-hook-form';

function Contact() {
  
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    <Container>
      <div className="bg-img contact-bg">
        <div className="text-box">
          <ShopHeading>Contact Us</ShopHeading>
        </div>
      </div>
      <FormSection>
        <ContactHeading>Contact Us, We will reach out to You!</ContactHeading>
        <div className="form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label htmlFor="name" className="label">
                Name:
              </label>
              <input
                name="name"
                type="text"
                className="form-input"
                placeholder="Name"
                
          {...register("Name", {required: true, maxLength: 80})}
              />
          {errors.Name && <p className="error">Please check the First Name</p>}
            </div>
            <div className="form-control">
              <label htmlFor="mobile" className="label">
                Phone:
              </label>
              <input
                name="mobile"
                type="text"
                maxLength={10}
                className="form-input"
                placeholder="Mobile"
               
                {...register("mobile", {
              required: true,
              pattern:
               1234567890,
            })}
              />
               {errors.mobile && <p className="error">Please check your Number</p>}
            </div>
            <div className="form-control">
              <label htmlFor="Email" className="label">
                Email:
              </label>
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
               {errors.email && <p className="error">Please check your email</p>}
            </div>
            <div className="form-control">
              <label htmlFor="message" className="label">
                Text:
              </label>
              <textarea
                name="message"
                type="text"
                className="form-input"
                placeholder="Message"
               
                {...register("Message", {required: true, maxLength: 80})}
              />
              {errors.Message && <p className="error">Please check your message</p>}
            </div>
            <div>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </FormSection>
    </Container>
  );
}

export default Contact;
