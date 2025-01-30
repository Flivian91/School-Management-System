"use client"
import { useState } from "react";

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform \
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="text-lg font-bold text-gray-700">Admin Panel</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-gray-500 md:hidden"
          >
            ✕
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Create Election
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Manage Candidates
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            View Results
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-500 hover:text-white"
          >
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-0 transition-all md:ml-64">
        <header className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-500 md:hidden"
          >
            ☰
          </button>
          <h1 className="text-xl font-bold text-gray-700">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white">
              Notifications
            </button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-blue-500 hover:text-white">
              Profile
            </button>
          </div>
        </header>

        <main className="p-4 space-y-6">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-bold text-gray-700">Elections</h2>
              <p className="mt-2 text-gray-500">Manage and track ongoing elections.</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-bold text-gray-700">Candidates</h2>
              <p className="mt-2 text-gray-500">Add, edit, or remove candidates.</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-bold text-gray-700">Results</h2>
              <p className="mt-2 text-gray-500">View and analyze election results.</p>
            </div>
          </section>

          <section className="p-4 bg-white shadow rounded-lg">
            <h2 className="text-lg font-bold text-gray-700">Recent Activities</h2>
            <ul className="mt-4 space-y-2">
              <li className="p-2 bg-gray-100 rounded-lg">Election "2025 Teacher Elections" created.</li>
              <li className="p-2 bg-gray-100 rounded-lg">Candidate "John Doe" added to Chairman position.</li>
              <li className="p-2 bg-gray-100 rounded-lg">Results published for "2024 Elections".</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}
