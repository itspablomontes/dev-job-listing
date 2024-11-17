import React from "react";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <div className="text-2xl font-bold">For developers</div>
            <p className="mt-2 mb-4">
              Browse our job positions and start your career today
            </p>
            <a
              href="/jobs.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse jobs
            </a>
          </Card>
          <Card bg="bg-blue-100">
            <h2 className="text-2xl font-bold">For employers</h2>
            <p className="mt-2 mb-4">
              List your offer to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-800"
            >
              Add job
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
