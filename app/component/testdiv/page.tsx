import QRToggle from "../qr-modal-toggle/page";

const TestDiv = () => {
  return (
    <>
      <div className="flex min-h-screen justify-start p-6">
        <div className="w-1/3 relative">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-300"></div>
            <div className="px-6 py-4">
              <div className="h-6 bg-gray-300 mb-2"></div>
              <div className="h-4 bg-gray-300 w-2/3"></div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-300 w-1/2"></div>

              <QRToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestDiv;
