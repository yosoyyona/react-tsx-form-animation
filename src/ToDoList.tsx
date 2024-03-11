import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
};

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("add to do: ", data.toDo);
    setValue("toDo", ""); // empty the input
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("toDo", {
          required: "Please write a To do",
          })} 
          placeholder="Write a to do" 
        />
        <button>Add</button>
      </form>
    </div>
  )
};

export default ToDoList;