import Button from "./Reusable/Button";

const AddTodoModal = ({ handleSubmit, openModal, setOpenModal }) => {
 

  return (
    <div
      className={`shadow-lg rounded custom-modal p-3   ${
        openModal ? "d-block" : "d-none"
      }`}
    >
      <div className="d-flex justify-content-between">
        <h1 className="modal-title fs-5">Add ToDo</h1>
        <button
          type="button"
          className="btn-close"
          onClick={() => setOpenModal(false)}
        ></button>
      </div>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-1"
            type="text"
            placeholder="title"
            id="title"
            required
          />
      
          <Button type="submit" text="Add Todo" onClick={() => setOpenModal(false)} />
        </form>
      
    </div>
  );
};

export default AddTodoModal;
