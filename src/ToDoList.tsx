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
  extraError?: string;
}

function ToDoList() {
  const { register, handleSubmit, formState: {errors}, setError } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    }
  }); 
  const onValid = (data:IForm) => {
    if(data.password !== data.passwordConfirmation) {
      setError(
        "passwordConfirmation", 
        {message: "Password are not the same"}, 
        {shouldFocus: true}
      );
    }
    // setError("extraError", { message: "Server offline."});
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
        <input {...register("firstName", { 
          required: "fill this field", 
          validate: {
            noYona: (value) => value.includes("yona") ? "No yona allowed" : true, 
            noJesus: (value) => value.includes("jesus") ? "No jesus allowed" : true, 
          }
          })} 
          placeholder="First Name" 
        />
        <span>{errors?.firstName?.message as string}</span>
        <input {...register("lastName")} placeholder="Last Name" />
        <span>{errors?.lastName?.message as string}</span>
        <input {...register("username", { 
          required: "Username is required", 
          minLength: {
            value: 10,
            message: "Username has to be more than 10 letters." 
          }})} 
          placeholder="Username" 
        />
        <span>{errors?.username?.message as string}</span>
        <input {...register("password", { required: true })} placeholder="Password" />
        <span>{errors?.password?.message as string}</span>
        <input {...register("passwordConfirmation", { required: true })} placeholder="Password confirmation" />
        <span>{errors?.passwordConfirmation?.message as string}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message as string}</span>
      </form>
    </div>
  );
}

export default ToDoList;