export default function ManageCandidatesPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Manage Candidates
        </h1>
        <form className="mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Candidate Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
                placeholder="Enter candidate name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Position
              </label>
              <select
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
              >
                <option>Chairman</option>
                <option>Secretary</option>
                <option>Treasurer</option>
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add Candidate
          </button>
        </form>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Candidate List</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Name</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-gray-600 border-b">Position</th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-600 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-700 border-b">John Doe</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-b">Chairman</td>
                  <td className="px-4 py-2 text-center border-b">
                    <button className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                      Remove
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm text-gray-700 border-b">Jane Smith</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border-b">Secretary</td>
                  <td className="px-4 py-2 text-center border-b">
                    <button className="px-2 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
