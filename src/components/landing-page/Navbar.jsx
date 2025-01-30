"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import AnimatedText from "./AnimatedText";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white shadow-md">
      {/* TOp Nav */}
      <AnimatedText/>
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-blue-500 p-2">
            <span className="text-white font-bold text-lg">🎓</span>
          </div>
          <h1 className="text-xl font-semibold text-blue-600">Masomo Pro</h1>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-gray-700 hover:text-blue-600"
            >
              About Us <ChevronDown className="ml-1" size={16} />
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-md p-4">
                <h3 className="font-medium text-gray-800 mb-2">Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Student Management",
                      description:
                        "Comprehensive student information system for schools.",
                      icon: "👩‍🎓",
                    },
                    {
                      name: "Academic Management",
                      description:
                        "Streamline curriculum planning, exams, and more.",
                      icon: "📘",
                    },
                    {
                      name: "Financial Management",
                      description: "Complete fee management system.",
                      icon: "💰",
                    },
                    {
                      name: "Attendance System",
                      description:
                        "Automated attendance tracking for students.",
                      icon: "📅",
                    },
                    {
                      name: "Staff Management",
                      description: "Efficient tools for managing staff.",
                      icon: "👨‍🏫",
                    },
                    {
                      name: "Analytics & Reports",
                      description:
                        "Data-driven decisions with powerful analytics.",
                      icon: "📊",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex space-x-2">
                      <div className="text-blue-500">{feature.icon}</div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800">
                          {feature.name}
                        </h4>
                        <p className="text-xs text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="block text-blue-600 text-sm mt-2 hover:underline"
                >
                  View all
                </a>
              </div>
            )}
          </div>
          <Link href="/" className="text-gray-700 hover:text-blue-600">
            Online Admission
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Assignment
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Form 1 Requirements
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            2025 Fee Structure
          </Link>
          <Link href="#" className="text-gray-700 hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
}
