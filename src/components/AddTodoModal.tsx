
const AddTodoModal = ({handleSubmit}) => {



  return (
    <div>
      {/* Modal Button */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    New
    </button>
                {/* Modal  */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add ToDo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <input className="form-control" type="text" placeholder="title" id="title" required/>
                            <button className="btn btn-primary mt-1"  data-bs-toggle="modal" data-bs-target="#exampleModal" >Add Todo</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default AddTodoModal
