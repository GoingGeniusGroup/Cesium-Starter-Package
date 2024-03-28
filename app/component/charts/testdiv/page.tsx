const TestDiv = () => {
  return (
    <>
      <div className="w-96 absolute bg-black rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-slate-800 flex flex-col justify-center ml-4 mt-4 hover:bg-opacity-25 shadow-lg shadow-blue-800 hover:shadow-blue-700 ">
        <div className="p-6 rounded overflow-hidden">
          <div className="h-48 rounded bg-blue-300 bg-opacity-50" />
          <div className="py-4">
            <div className="h-6 rounded bg-gray-300 mb-2 bg-opacity-50" />
            <div className="h-4 bg-gray-300 w-2/3 bg-opacity-50" />
          </div>
          <div className="rounded pt-4 pb-2">
            <div className="h-4 rounded bg-gray-300 w-1/4 mb-2 bg-opacity-50" />
            <div className="h-4 rounded bg-gray-300 w-1/2 bg-opacity-50" />
            <button className="hover:text-green-400">Hello</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestDiv;
