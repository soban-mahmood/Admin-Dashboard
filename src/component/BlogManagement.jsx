import React, { useState } from "react";
import Sidebar from "./Sidebar";

function BlogManagement() {
  const [blogs, setBlogs] = useState([
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 245,
      status: "approved",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 567,
      status: "rejected",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 245,
      status: "approved",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 567,
      status: "rejected",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 876,
      status: "approved",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 245,
      status: "rejected",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 567,
      status: "approved",
    },
    {
      title: "Lorem Ipsum is simply dummy text of the printing",
      author: "Kaylynn Bator",
      date: "20-05-2023",
      comments: 876,
      status: "rejected",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col ">
      <Sidebar />
      <div className="w-full flex gap-1">
        <div className="bg-gray-800 w-64 p-4 sm:hidden md:hidden   text-gray-400">
          <h2 className="text-xl font-bold text-red-500 mb-4">Admin</h2>
          <ul className="flex flex-col space-y-4 gap-7">
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                User Management
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 01-4 4h-2.586a1 1 0 01-.707-.293l-2.457-2.457A1 1 0 004.414 7H3a2 2 0 00-2 2v4a2 2 0 002 2h4.586a1 1 0 00.707-.293l2.457-2.457A1 1 0 0116 11z"
                  />
                </svg>
                Creator Management
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2-6h-2m2-2v8m-3-1c0 1.654-.126 3.223-.376 4.691a2.106 2.106 0 01-.803 1.583A2.106 2.106 0 017 21H5a2.106 2.106 0 01-1.803-1.583A2.106 2.106 0 013 16.491V14a2.106 2.106 0 01.376-4.691c.25-1.468.523-2.894.803-4.291a2.106 2.106 0 011.583-.803A2.106 2.106 0 019 7h.01c1.654 0 3.223.126 4.691.376a2.106 2.106 0 011.583.803A2.106 2.106 0 0121 10.991v.01H19a2.106 2.106 0 01-1.803 1.583A2.106 2.106 0 0117 16.491V14a2.106 2.106 0 01.803-4.291c.28-1.402.542-2.827.803-4.291a2.106 2.106 0 011.583-.803A2.106 2.106 0 0121 7h.01c1.654 0 3.223.126 4.691.376a2.106 2.106 0 011.583.803A2.106 2.106 0 0125 10.991v.01"
                  />
                </svg>
                Content Management
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Financial Management
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center ">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Engagement Analytics
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-6h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Site Policies
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 10h6M5 10l4 4M9 16h6"
                  />
                </svg>
                Blog Management
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 20l9-5-9-5-9 5 9 5zm0 0v-9l-9-5 9-5 9 5-9 5v9z"
                  />
                </svg>
                App Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-gray-800 p-4 text-white mt-2">
          <h1 className="text-xl font-bold mb-4 ">Blog Management</h1>
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="flex items-center mb-4 md:mb-0">
              <input
                type="text"
                className="bg-gray-700 border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex items-center">
              <button className=" border text-white font-bold py-2 px-4 rounded-md mr-2">
                Filter
              </button>
              <select className="bg-gray-700 border border-gray-600 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
              <button className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md ml-2">
                Add Blog 
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left">
              <thead>
                <tr className="border rounded sm:hidden ">
                  <th className="px-4 py-2">Blog Title</th>
                  <th className="px-4 py-2">Author Name</th>
                  <th className="px-4 py-2">Date Of Upload</th>
                  <th className="px-4 py-2">Comments</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="sm:hidden">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.title}>
                    <td className="border px-4 py-2">
                      <input type="checkbox" className="mr-2" />
                      {blog.title}
                    </td>
                    <td className="border px-4 py-2">{blog.author}</td>
                    <td className="border px-4 py-2">{blog.date}</td>
                    <td className="border px-4 py-2">{blog.comments}</td>
                    <td className="border px-4 py-2">
                      {blog.status === "approved" ? (
                        <div className="bg-red-500 rounded-full w-[20px] h-[20px] sm:h-[10px] text-white"></div>
                      ) : (
                        <div className="bg-red-500 rounded-full w-[20px] h-[20px] text-white"></div>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      <button className="  text-red-500 font-bold rounded-md">
                        ...
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogManagement;
