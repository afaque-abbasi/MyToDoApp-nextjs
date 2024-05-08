// pages/about.js
import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-purple-200 min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>About - ToDo App</title>
      </Head>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">About My ToDo App</h1>
        <p className="text-lg mb-4">
          This ToDo app is a simple task management application built with React and Next.js. It allows users to add tasks with details and delete them as needed.
        </p>
        <p className="text-lg mb-4">
          It's designed to be intuitive and easy to use, providing a clean and straightforward interface for managing your tasks effectively.
        </p>
        <p className="text-lg mb-4">
          Thank you for using this app!
        </p>
      </div>
    </div>
  );
}
