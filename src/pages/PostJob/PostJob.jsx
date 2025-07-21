import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const PostJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handlePostJob = (formData) => {
    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    const { min, max, currency, ...newJob } = data;
    // console.log(newJob);
    newJob.salaryRange = { min, max, currency };
    // console.log(newJob);

    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");
    // console.log(newJob);
    fetch("https://jobsy-server.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been Posted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myPostedJobs");
      });
  };
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-center text-3xl ">Post A Job</h2>
      <div className="">
        <form action={handlePostJob}>
          {/* Job Title */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Job Title here"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {/* job location */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Job Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Job location"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          {/* Job Type */}

          <div>
            <label htmlFor="Headline">
              <span className="text-sm font-medium text-gray-700">
                {" "}
                Job Type{" "}
              </span>

              <select
                name="type"
                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
              >
                <option>Pick a Job Type</option>
                <option>Full Time</option>
                <option>Intern</option>
                <option>HyBrid</option>
              </select>
            </label>
          </div>
          {/* Job Category */}
          <div>
            <label htmlFor="Headline">
              <span className="text-sm font-medium text-gray-700">
                {" "}
                Jon Category{" "}
              </span>

              <select
                name="category"
                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
              >
                <option>Pick a Job Category</option>
                <option>Engineering</option>
                <option>Marketing</option>
                <option>Finance</option>
                <option>Teaching</option>
              </select>
            </label>
          </div>

          {/* Salary Range */}
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Salary Range
          </label>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <input
                type="text"
                name="max"
                placeholder="Max"
                className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label>
                <span className="text-sm font-medium text-gray-700">
                  {" "}
                  Currency{" "}
                </span>

                <select
                  name="currency"
                  className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                >
                  <option value="">Please select Currency</option>
                  <option>Bdt.</option>
                  <option>Usd</option>
                  <option>INR</option>
                </select>
              </label>
            </div>
          </div>

          {/* job Description */}
          <div>
            <label htmlFor="Notes">
              <span className="text-sm font-medium text-gray-700">
                {" "}
                Job Description{" "}
              </span>

              <div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 shadow-sm focus-within:ring focus-within:ring-blue-600">
                <textarea
                  name="description"
                  className="w-full resize-none border-none focus:ring-0 sm:text-sm"
                  rows="4"
                ></textarea>
              </div>
            </label>
          </div>
          {/* Company Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company Name here"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          {/* job Requirements */}
          <div>
            <label>
              <span className="text-sm font-medium text-gray-700">
                {" "}
                Job Requirements{" "}
              </span>

              <div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 shadow-sm focus-within:ring focus-within:ring-blue-600">
                <textarea
                  name="requirements"
                  placeholder="Write each requirements in new lines"
                  className="w-full resize-none border-none focus:ring-0 sm:text-sm"
                  rows="4"
                ></textarea>
              </div>
            </label>
          </div>
          {/* job Responsibilities */}
          <div>
            <label>
              <span className="text-sm font-medium text-gray-700">
                {" "}
                Job Responsibilities{" "}
              </span>

              <div className="relative mt-0.5 overflow-hidden rounded border border-gray-300 shadow-sm focus-within:ring focus-within:ring-blue-600">
                <textarea
                  name="responsibilities"
                  placeholder="Write each responsibilities in new lines"
                  className="w-full resize-none border-none focus:ring-0 sm:text-sm"
                  rows="4"
                ></textarea>
              </div>
            </label>
          </div>

          {/* HR Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              HR Name
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {/* HR Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              HR Email
            </label>
            <input
              type="email"
              name="hr_email"
              defaultValue={user?.email}
              placeholder="HR Email"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {/* Application deadline */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Date
            </label>
            <input
              type="date"
              name="applicationDeadline"
              placeholder="Application Deadline"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          {/* Company Logo Url */}
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Company logo
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="Company Logo"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <button
            type="submit"
            className="bg-green-400 text-center my-3 w-full rounded-4xl py-2"
          >
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
