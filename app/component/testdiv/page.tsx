import QRToggle from "../qr-modal-toggle/page";

const TestDiv = () => {
  return (
    <>
      <div className="w-1/3 absolute">
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6">
          <div className="h-48 rounded bg-gray-300"></div>
          <div className="px-6 py-4">
            <div className="h-6 rounded bg-gray-300 mb-2"></div>
            <div className="h-4 bg-gray-300 w-2/3"></div>
          </div>
          <div className="px-6 rounded pt-4 pb-2">
            <div className="h-4 rounded bg-gray-300 w-1/4 mb-2"></div>
            <div className="h-4 rounded bg-gray-300 w-1/2"></div>

            <QRToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestDiv;
