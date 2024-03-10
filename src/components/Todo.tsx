import { useEffect, useState } from "react";
import AddTodoModal from "./AddTodoModal";
import DisplayTodo from "./DisplayTodo";
import Filter from "./Filter";
import Button from "./Reusable/Button";

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { id: "1524465", title: "hello", dateTody: new Date(), status: "Running" },
    { id: "1524466", title: "Nieem", dateTody: new Date(), status: "Running" },
    { id: "1524467", title: "Hasan", dateTody: new Date(), status: "Running" },
    { id: "1524468", title: "Kasem", dateTody: new Date(), status: "Running" },
  ]);
  const [view, setView] = useState("list");
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const [filterStatusActive, setFilterStatusActive] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");


  // useEffect(() => {
  //     setData(todoList);
  // }, [ todoList]);

  
  useEffect(() => {
    
    let filteredData = todoList;
    console.log("useEff", filteredData);

    // Filter by status
    if (filterStatusActive !== "all") {
      filteredData = filteredData.filter(
        (todo) => todo.status.toLowerCase() === filterStatusActive
      );
    }

    // Filter by search term
    if (searchTerm) {
      filteredData = filteredData.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm)
      );
    }

    setData(filteredData);
  }, [todoList, searchTerm, filterStatusActive]);



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
  const handleStatus = (_id: string) => {
    const updatedList = todoList.map((list)  => {
      if (list.id === _id) {
        return { ...list, status: "Complete" };
      }
      return list;
    });
    setTodoList(updatedList)
 
  };


  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());

   

  };

  const handStatusFilter = (value) => {
    setFilterStatusActive(value.toLowerCase());

  
  };


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-10">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Search Term"
              onChange={handleSearch}
            />
          </div>
          <div className="col-md-2">
            <Button
              type="button"
              text="New"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>

        {/* Filter Part */}

        <Filter
          view={view}
          setView={setView}
          handStatusFilter={handStatusFilter}
          filterStatusActive={filterStatusActive}
        />

        {/* Display ToDO */}

        <DisplayTodo
          todoList={todoList}
          view={view}
          handleStatus={handleStatus}
          data={data}
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
