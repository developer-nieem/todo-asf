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
  const [search, setSearch] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    
      setData(todoList);
   
  }, [ todoList]);


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
    // setTodoList((prev) =>
    //   prev.map((list) => {
    //     if (list.id === _id) {
    //       list.status = "Complete";
    //       return list;
    //     }
    //     return list;
    //   })
    // );
  };


  const handleSearch = (e) => {

    setSearch(e.target.value.toLowerCase())
   

    if (search) {
      const searchData = data.filter((list) =>
        list.title.toLowerCase().includes(search)
      );

      if (filterStatusActive !== "all") {
        const filteredData = searchData.filter(
          (list) => list.status.toLowerCase() === filterStatusActive.toLowerCase()
        );
      
        setData(filteredData);
      } else {
      
        setData(searchData);
      }
    } else {
      if (filterStatusActive !== "all") {
        const filteredList = todoList.filter(
          (list) => list.status.toLowerCase() === filterStatusActive.toLowerCase()
        );

        setData(filteredList);
      } else {
        setData(todoList);
      }

      
    }

    // if (e.target.value) {
    //   const searchData = data.filter((list) =>  list.title.toLowerCase().includes(searchTerm) );

    //   console.log({searchData})

    //   if (searchData) {
    //     setData(searchData)
    //   } 
    //   else {
    //     setData([]);
    //   }
    // } else {
    //   setData(todoList);
    // }

  };

  const handStatusFilter = (value) => {

    setFilterStatusActive(value);

    if (value.toLowerCase() === "all") {
      setData(todoList);
    } else {
      const filteredList = todoList.filter(
        (list) => list.status.toLowerCase() === value.toLowerCase()
      );
      // setFilterData(filteredList)
      setData(filteredList);
    }
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
