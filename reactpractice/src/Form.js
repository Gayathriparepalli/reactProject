import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="Form" style={{ marginLeft: 300 }}>
      <div className="title">Sign Up</div>
      <div className="inputs" style={{ padding: 30 }}>
        <form onSubmit={handleSubmit(submitForm)} style={{ paddingLeft: 100 }}>
          <input
            type="text"
            name="firstName"
            {...register("firstName", {
              required: true,
            })}
            placeholder="First Name..."
          />

          <ErrorMessage
            errors={errors}
            name="firstName"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            {...register("lastName", { required: true })}
          />
          <ErrorMessage
            errors={errors}
            name="lastName"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <input
            type="text"
            name="email"
            placeholder="Email..."
            {...register("email", { required: true })}
          />

          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <input
            type="text"
            name="age"
            placeholder="Age..."
            {...register("age", { required: true })}
          />

          <ErrorMessage
            errors={errors}
            name="age"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <input
            type="password"
            name="password"
            placeholder="Password..."
            {...register("password", { required: true })}
          />

          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password..."
            {...register("confirmPassword", { required: true })}
          />

          <ErrorMessage
            errors={errors}
            name="confirmPassword"
            render={({ message }) => <p style={{ color: "red" }}>{message}</p>}
          />
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
