import { useForm } from "react-hook-form";
import './App.css';
import { useState } from "react";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userInfo, setUserInfo] = useState();

  const onSubmit = (data) => {
    setUserInfo(data);
  };
    console.log(errors);

  return (
    <div className="box1">
      <h1>Form Validation using react-hook-form</h1>
      <form className="box" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Entered value does not match email format"
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "At least 6 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Submit</button>
      </form>

      {userInfo && (
        <div className="userInfo">
          <h2>User Information</h2>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Password: {userInfo.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
