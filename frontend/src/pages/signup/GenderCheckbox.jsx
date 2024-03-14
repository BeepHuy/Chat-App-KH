const GenderCheckbox = () => {
  return (
    <div className="flex p-2">
        <div className="form-control mr-2">
            <label className={'flex lable gap-2 cursor-pointer'}>
                <span className="text-[#a8b5c3]">Male</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
        <div className="form-control">
            <label className={`flex lable gap-2 cursor-pointer`}>
                <span className="text-[#a8b5c3]">Female</span>
                <input type="checkbox" className="checkbox border-slate-900" />
            </label>
        </div>
    </div>
  )
};

export default GenderCheckbox;

