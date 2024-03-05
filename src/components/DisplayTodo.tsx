import ListView from "./ListView";
import TableView from "./TableView";

const DisplayTodo = ({ todoList, view, handleStatus, data, filterStatus }) => {
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
          data={data}
          filterStatus={filterStatus}
        />
      ) : (
        <TableView
          todoList={todoList}
          handleStatus={handleStatus}
          formatDate={formatDate}
          data={data}
        />
      )}
    </div>
  );
};

export default DisplayTodo;
