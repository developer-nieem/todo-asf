
const Filter = ({setView}) => {

   
    

  return (
    <div className="row my-3">
    <div className="col-md-4">
    <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">All </button>
        <button type="button" className="btn btn-primary">Running</button>
        <button type="button" className="btn btn-primary">Complete</button>
    </div>
    </div>
    <div  className="col-md-4 d-flex gap-2">

            <div className="form-check">
                <input onClick={() => setView("list")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                List View
                </label>
            </div>
            <div className="form-check">
                <input onClick={() => setView("table")} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  />
                <label className="form-check-label" for="flexRadioDefault2">
                Table View
                </label>
            </div>

    </div>
    <div className="col-md-4">
    
    <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary">Clear Selected</button>
        <button type="button" className="btn btn-primary">Clear Completed</button>
        <button type="button" className="btn btn-primary">Reset</button>
    </div>

    </div>

</div>
  )
}

export default Filter
