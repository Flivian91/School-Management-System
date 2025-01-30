export default function SettingsPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Settings
        </h1>
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Profile Settings
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Save Changes
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Change Password
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Current Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  New Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-300"
                  placeholder="Enter new password"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Update Password
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              Notification Preferences
            </h2>
            <div className="space-y-2">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
                />
                <span className="text-sm text-gray-700">
                  Receive email notifications
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-300"
                />
                <span className="text-sm text-gray-700">
                  Receive SMS notifications
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
