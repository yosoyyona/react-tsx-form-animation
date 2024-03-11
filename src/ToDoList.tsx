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

function ToDoList() {
  const { register, handleSubmit, formState } = useForm(); 
  const onValid = (data:any) => {
    console.log(data);
  };
  console.log(formState.errors)
  return (
    <div>
      <form style={{display: "flex", flexDirection: "column"}} onSubmit={handleSubmit(onValid)}>
        <input {...register("Email", { required: "Email is required" })} placeholder="Email" />
        <input {...register("firstName", { required: true })} placeholder="First Name" />
        <input {...register("lastName", { required: true })} placeholder="Last Name" />
        <input {...register("username", { 
          required: "Username is required", 
          minLength: {
            value: 10,
            message: "Username has to be more than 10 letters." } })} placeholder="Username" />
        <input {...register("password", { required: true })} placeholder="Password" />
        <input {...register("passwordConfirmation", { required: true })} placeholder="Password confirmation" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;