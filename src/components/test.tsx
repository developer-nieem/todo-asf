import React, { useState, useEffect } from 'react';
import Button from './Button'; // Assuming you have a Button component
import Filter from './Filter'; // Assuming you have a Filter component
import DisplayTodo from './DisplayTodo'; // Assuming you have a DisplayTodo component
import AddTodoModal from './AddTodoModal'; // Assuming you have an AddTodoModal component

const Test = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filterStatusActive, setFilterStatusActive] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);

  // Assuming todoList is the source of your data
  const todoList = [
    // Your todo list items here
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterData(filterStatusActive, term);
  };

  const handStatusFilter = (value) => {
    setFilterStatusActive(value);
    filterData(value, searchTerm);
  };

  const filterData = (status, term) => {
    let filtered = todoList;

    if (status !== "all") {
      filtered = filtered.filter(item => item.status === status);
    }

    if (term.trim() !== "") {
      const lowerCaseTerm = term.toLowerCase();
      filtered = filtered.filter(item => item.title.toLowerCase().includes(lowerCaseTerm));
    }

    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData(filterStatusActive, searchTerm);
  }, [todoList, filterStatusActive, searchTerm]);

  const handleSubmit = (/* assuming you have form data to handle */) => {
    // Handle the submission logic
    // Update the 'data' state or perform any other actions
    // For example: setData([...data, newData]);
    // Close the modal
    setOpenModal(false);
  };

  // Assuming 'view', 'setView', and 'handleStatus' are defined elsewhere in your component
  const view = "yourView"; // Replace with your actual view

  return (
    <>
      <div className="container mt-5">
        {/* Your existing code for input and button */}
        <div className="row">
          {/* ... */}
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
          todoList={filteredData} // Display filtered data
          view={view}
          handleStatus={handleStatus}
          data={data}
        />
      </div>

      {/* Your existing code for the modal */}
      <AddTodoModal
        handleSubmit={handleSubmit}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default Test;
