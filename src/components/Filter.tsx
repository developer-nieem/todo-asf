import FilterGroupBtn from "./FilterGroupBtn";
import FilterLayout from "./Reusable/FilterLayout";

const Filter = ({ setView }) => {
  return (
    <div className="row my-3">
      <div className="col-md-4">
        <FilterGroupBtn tex1="All" tex2="Complete" tex3="Running" />
      </div>
      <div className="col-md-4 d-flex gap-2">
        <FilterLayout
          setView={setView}
          layoutName="list"
          idName="flexRadioDefault1"
          label="flexRadioDefault1"
        />
        <FilterLayout
          setView={setView}
          layoutName="table"
          idName="flexRadioDefault2"
          label="flexRadioDefault2"
        />
      </div>
      <div className="col-md-4">
        <div className="btn-group" role="group" aria-label="Basic example">
          <FilterGroupBtn
            tex1="Clear Selected"
            tex2="Clear Completed"
            tex3="Reset"
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
