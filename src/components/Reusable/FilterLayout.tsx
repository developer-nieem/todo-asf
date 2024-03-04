const FilterLayout = ({ setView, layoutName, idName, label }) => {
  return (
    <div className="form-check">
      <input
        onClick={() => setView(layoutName)}
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id={idName}
      />
      <label className="form-check-label" for={label}>
        List View
      </label>
    </div>
  );
};

export default FilterLayout;
