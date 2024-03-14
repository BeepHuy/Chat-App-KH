const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding
        backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base text-[#a8b5c3] label-text">UserName</span>
            </label>
            <input
              type="text"
              placeholder="Enter UserName"
              className="w-full input input-bordered h-10 text-[#aab6c4] bg-[#142b3a]"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base text-[#a8b5c3] label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-[#aab6c4] bg-[#142b3a]"
            />
          </div>
          <a
            href="#"
            className="text-sm text-[#a8b5c3] hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 border-slate-700 bg-[#142b3a] hover:bg-[#2c4d6a] text-[#aab6c4]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;