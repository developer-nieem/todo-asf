<<<<<<< HEAD
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
=======
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
>>>>>>> 7f801f9adacd3b39c18e851b487d0789dcf2d781
  };

  const filterData = (status, term) => {
    let filtered = todoList;

<<<<<<< HEAD
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
=======
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





  
>>>>>>> 7f801f9adacd3b39c18e851b487d0789dcf2d781

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

<<<<<<< HEAD
export default Test;
=======
export default Todo;
>>>>>>> 7f801f9adacd3b39c18e851b487d0789dcf2d781
