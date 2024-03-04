import FilterGroupBtn from "./FilterGroupBtn";
import Button from "./Reusable/Button";
import FilterLayout from "./Reusable/FilterLayout";

const Filter = ({ setView , view , handStatusFilter }) => {
    const func = () =>{

    }
  return (
    <div className="row my-3">
      <div className="col-md-4">
        <FilterGroupBtn  >
            <Button type="button" text="All" onClick={ () => handStatusFilter("all") } />
            <Button type="button" text="Complete" onClick={ () => handStatusFilter("complete") } />
            <Button type="button" text="Running" onClick={ () => handStatusFilter("running") } />  
        </FilterGroupBtn>

        
      </div>
      <div className="col-md-4 d-flex gap-2">
        <FilterLayout
          setView={setView}
          layoutName="list"
          idName="flexRadioDefault1"
          label="flexRadioDefault1"
          checked={view =="list" ? true : false}
          // check = {true}
        />
        <FilterLayout
          setView={setView}
          layoutName="table"
          idName="flexRadioDefault2"
          label="flexRadioDefault2"
          checked={view =="table" ? true : false}
        />
      </div>
      <div className="col-md-4">
        <div className="btn-group" role="group" aria-label="Basic example">
        <FilterGroupBtn  >
            <Button type="button" text="Clear Selected" onClick={()=> func() } />
            <Button type="button" text="Clear Completed" onClick={()=> func() } />
            <Button type="button" text="Reset" onClick={()=> func() } />  
        </FilterGroupBtn>
        </div>
      </div>
    </div>
  );
};

export default Filter;
