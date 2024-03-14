import { BsSearchHeartFill } from "react-icons/bs";
const SearchInput = () => {
  return (
    <div>
        <form className="flex items-center gap-2 mt-2">
            <input type="text" placeholder='Search...' className="input input-bordered rounded-full" />
            <button type="sunbit" className="btn btn-circle bg-sky-500 text-white">
            <BsSearchHeartFill className="w-5 h-5 outline-none" />
            </button>
        </form>
    </div>
    );
};

export default SearchInput;
