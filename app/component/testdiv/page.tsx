const TestDiv = () => {
  return (
    <>
      <div className="w-1/4 absolute bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-slate-800 flex flex-col justify-center ml-4 mt-4 hover:bg-opacity-25 shadow-lg shadow-blue-800 hover:shadow-blue-700 ">
        <div className="p-4 rounded overflow-hidden shadow-lg ">
          <div className="h-48 rounded bg-gray-300" />
          <div className="py-4">
            <div className="h-6 rounded bg-gray-300 mb-2" />
            <div className="h-4 bg-gray-300 w-2/3" />
          </div>
          <div className="rounded pt-4 pb-2">
            <div className="h-4 rounded bg-gray-300 w-1/4 mb-2" />
            <div className="h-4 rounded bg-gray-300 w-1/2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestDiv;
