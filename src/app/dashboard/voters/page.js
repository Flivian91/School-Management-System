export default function VotersPage() {
  const voters = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      registeredAt: "2025-01-01",
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@example.com",
      registeredAt: "2025-01-05",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      registeredAt: "2025-01-10",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Registered Voters
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  #
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Name
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Email
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                  Registered At
                </th>
              </tr>
            </thead>
            <tbody>
              {voters.map((voter, index) => (
                <tr
                  key={voter.id}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {voter.name}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {voter.email}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {voter.registeredAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
