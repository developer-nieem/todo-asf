import ListView from "./ListView";
import TableView from "./TableView";

const DisplayTodo = ({ todoList, view, handleStatus }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatDate = (date) =>
    `${days[date.getDay()]} ${date.getMonth()},  ${date.getFullYear()}`;

  return (
    <div>
      {view === "list" ? (
        <ListView
          todoList={todoList}
          handleStatus={handleStatus}
          formatDate={formatDate}
        />
      ) : (
        <TableView
          todoList={todoList}
          handleStatus={handleStatus}
          formatDate={formatDate}
        />
      )}
    </div>
  );
};

export default DisplayTodo;
