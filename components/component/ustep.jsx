/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/m8mVoQHXwea
 */
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function USTEP() {
  return (
    (
    <div className="bg-gray-100">
      <header className="bg-white py-4 px-8 flex justify-between items-center shadow">
        <div className="flex items-center">
          <img
            alt="Logo"
            className="h-10 w-10"
            height="40"
            src="/logo.png"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div className="ml-4">
            <p className="text-sm font-semibold">University of Science and Technology e-Learning Portal</p>
            <nav className="text-xs">
              <Link className="mr-4" href="#">
                Dashboard
              </Link>
              <Link className="mr-4" href="#">
                Pages
              </Link>
              <Link className="mr-4" href="#">
                Categories
              </Link>
              <Link className="mr-4" href="#">
                My courses
              </Link>
            </nav>
          </div>
        </div>
        <div className="flex items-center">
          <SearchIcon className="text-gray-500 h-6 w-6 mr-4" />
          <BellIcon className="text-gray-500 h-6 w-6 mr-4" />
          <span className="mr-4">Kent Jasper Cabunoc Sisi</span>
          <Avatar>
            <AvatarImage alt="User" src="/pfp.jpg?height=40&width=40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-2xl font-bold mb-2">Introduction to Computing | CS111</h1>
            <p className="text-sm mb-4">{`Course Description | Credits | Semester | Class Requisites`}</p>
            <section className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-2">WELCOME MESSAGE</h2>
              <p className="text-sm mb-2">
                Dear Students, Welcome all of you to the new academic year! We are thrilled to be partnering with you as
                you participate in an exciting educational journey of discovery.
              </p>
              <Button className="bg-green-500 text-white">Done</Button>
            </section>
            <section className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-2">SYLLABUS (Course Guide)</h2>
              <div className="flex items-center mb-2">
                <BookIcon className="text-gray-500 h-6 w-6 mr-2" />
                <span className="text-sm">Syllabus</span>
              </div>
              <p className="text-xs text-gray-600 mb-2">Restricted Not available unless:</p>
              <ul className="text-xs text-gray-600 list-disc pl-4">
                <li>You belong to CO-CD1A</li>
                <li>You belong to CO-CD1B</li>
              </ul>
            </section>
            <section className="bg-white p-4 rounded shadow">
              <h2 className="font-bold mb-2">Lesson 1</h2>
              <div className="flex flex-col space-y-2">
                <Button className="bg-gray-200 text-gray-800">Lab Quiz 1: Hexagons</Button>
                <Button className="bg-gray-200 text-gray-800">Module 1: Hands-on Exercises</Button>
                <Button className="bg-gray-200 text-gray-800">
                  Module 1: Introduction to Computers, Programs and Python
                </Button>
              </div>
            </section>
          </div>
          <div className="col-span-1">
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-2">Activities</h2>
              <ul className="text-sm list-disc pl-4">
                <li><a href="#">Assignments</a></li>
                <li><a href="#">Quizzes</a></li>
                <li><a href="#">Resources</a></li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-2">Video Conference</h2>
              <Button className="bg-yellow-400 text-white w-full">Join</Button>
            </div>
            <div className="bg-white p-4 rounded shadow mb-4">
              <h2 className="font-bold mb-2">Administration</h2>
              <div className="text-sm">
                <Button className="bg-transparent text-blue-600">Course administration</Button>
                <Button className="bg-transparent text-blue-600">Unenroll me from 2023-CIS112</Button>
              </div>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="font-bold mb-2">Feedback</h2>
              <div className="flex flex-col space-y-2">
                <Button className="bg-green-500 text-white">Send Feedback</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>


    )
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}



function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}