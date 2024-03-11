import { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value}} = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To Do should be longer");
    }
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== ""? toDoError : null}
      </form>
    </div>
  )
}; */

interface IForm {
  email: string;
  firstName: string;
  lastName?: string;
  username: string;
  password: string;
  passwordConfirmation: string;
}

function ToDoList() {
  const { register, handleSubmit, formState: {errors} } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    }
  }); 
  const onValid = (data:any) => {
    console.log(data);
  };
  console.log(errors)
  return (
    <div>
      <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("email", { 
          required: "Email is required", 
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver.com$/,
            message: "Only naver.com emails are allowed."
          } 
        })} placeholder="Email" />
        <span>{errors?.email?.message as string}</span>
        <input {...register("firstName", { required: true })} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("username", { 
          required: "Username is required", 
          minLength: {
            value: 10,
            message: "Username has to be more than 10 letters." 
          } 
        })} placeholder="Username" />
        <input {...register("password", { required: true })} placeholder="Password" />
        <input {...register("passwordConfirmation", { required: true })} placeholder="Password confirmation" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;