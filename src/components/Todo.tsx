import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import DisplayTodo from "./DisplayTodo";
import Filter from "./Filter";
import Button from "./Reusable/Button";
import ITodo from "../types/todo";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [view, setView] = useState("list");
  const [openModal, setOpenModal] = useState(false);

  // Add todo function
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const id = Math.round(Math.random() * 10000).toString();
    const status = "Running";

    setTodoList([...todoList, { id, title, dateTody: new Date(), status }]);
    e.target.title.value = "";
  };

  // Update Status

  const handleStatus = (_id : string) => {
    const updatedList = todoList.map((list)  => {
      if (list.id === _id) {
        return { ...list, status: "Complete" };
      }
      return list;
    });

    setTodoList(updatedList)
    console.log(updatedList, "ipdate");
  };


  console.log(todoList, "main");
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Search Term"
            />
          </div>
          <div className="col-md-2">
           <Button type="button" text="New"  onClick={() => setOpenModal(true)}/>
          </div>
        </div>

        {/* Filter Part */}

        <Filter setView={setView} />

        {/* Display ToDO */}

        <DisplayTodo
          todoList={todoList}
          view={view}
          handleStatus={handleStatus}
        />
      </div>

      <AddTodoModal
        handleSubmit={handleSubmit}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Todo;
