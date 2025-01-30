export default function CreateElectionPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Create New Election
        </h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Election Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
              placeholder="Enter election title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Election Description
            </label>
            <textarea
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
              placeholder="Enter a short description"
              rows="3"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Start Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              End Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Create Election
          </button>
        </form>
      </div>
    </div>
  );
}