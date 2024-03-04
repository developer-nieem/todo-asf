import { format } from "date-fns";

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
      {view == "list" && (
        <ol className="list-group ">
          {todoList?.map((list) => (
            <li
              key={list.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="ms-2 me-auto d-flex gap-3">
                <input type="checkbox" />
                <div className="fw-bold">
                  <h4>{list.title}</h4>
                  <p>{formatDate(list.dateTody)}</p>
                </div>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => handleStatus(list.id)}
              >
               {list.status}
              </button>
            </li>
          ))}
        </ol>
      )}

      {view == "table" && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">
                {" "}
                <input type="checkbox" />{" "}
              </th>
              <th scope="col">Title</th>
              <th scope="col">Date</th>
              <th scope="col" className="d-flex justify-content-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {todoList?.map((list) => (
              <tr key={list.id}>
                <th scope="row">
                  <input type="checkbox" />
                </th>
                <td>{list.title}</td>

                {/* <td> {format(date , "EEEE MM, yyyy")}</td> */}
                <td> {formatDate(list.dateTody)}</td>

                <td className="d-flex justify-content-center">
                  {" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleStatus(list.id)}
                  >
                    {list.status}{" "}
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DisplayTodo;
