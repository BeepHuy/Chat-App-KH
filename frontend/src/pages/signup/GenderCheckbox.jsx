const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex p-2">
      <div className="form-control mr-2">
        <label
          className={`flex lable gap-2 cursor-pointer 
            ${selectedGender === "male" ? "selected" : ""}
          `}
        >
          <span className="text-[#a8b5c3]">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`flex lable gap-2 cursor-pointer 
          ${selectedGender === "female" ? "selected" : ""}
          `}
        >
          <span className="text-[#a8b5c3]">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
