const FilterLayout = ({ setView, layoutName, idName, label,  checked }) => {
  return (
    <div className="form-check">
      <input
        onClick={() => setView(layoutName)}
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={idName}
        checked ={checked}
      />
      <label className="form-check-label" for={label}>
       {layoutName}
      </label>
    </div>
  );
};

export default FilterLayout;
