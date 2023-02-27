"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./input";
import InputErrorMessage from "./InputErrorMessage";

const ContactForm = () => {
  // TODO: Add a "thank you" message after form submission
  // TODO: Add API endpoint to send email using nodemailer
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const validation = {
    required: {
      required: "Please fill out this field",
    },
    email: {
      required: "Please fill out this field",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please enter an email address",
      },
    },
  };

  const inputWrapperClasses = "relative max-w-full bg-red-300";

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <form className="isolate flex w-full flex-wrap gap-8" onSubmit={handleSubmit(onSubmit)}>
        <div className={inputWrapperClasses}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            register={register}
            validators={validation.required}
          />
          {errors.name && <InputErrorMessage message={errors?.name?.message as string} />}
        </div>
        <div className={inputWrapperClasses}>
          <Input
            type="text"
            name="email"
            placeholder="Your Email"
            register={register}
            validators={validation.email}
          />
          {errors.email && <InputErrorMessage message={errors?.email?.message as string} />}
        </div>
        <div className={inputWrapperClasses}>
          <Input
            type="text"
            name="content"
            register={register}
            placeholder="Tell Me About Your Project"
          />
        </div>
        <button className="text-2xl font-thin uppercase" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default ContactForm;
