
const test = () => {

    const [data, setData] = useState([]);
    const [filterStatusActive, setFilterStatusActive] = useState("all");

    const handleSearch = (e) => {

      };


    const handStatusFilter = (value) => {

        
      };


  return (
    <>
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
    </>
  )
}

export default test
