const GenderCheckbox = () => {
  return (
    <div className="flex py-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-gray-100">Male:</span>
          <input type="checkbox" className="checkbox border-gray-300" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-gray-100">Female:</span>
          <input type="checkbox" className="checkbox border-gray-300" />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
