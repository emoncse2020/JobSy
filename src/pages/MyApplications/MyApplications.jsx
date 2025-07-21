import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyApplications = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const useAxiosInstance = useAxiosSecure();

  useEffect(() => {
    // fetch(`https://jobsy-server.vercel.app/job-application?email=${user.email}`)
    //   .then((res) => res.json())
    //   .then((data) => setJobs(data));

    // axios
    //   .get(`https://jobsy-server.vercel.app/job-application?email=${user.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((res) => setJobs(res.data));

    useAxiosInstance.get(`/job-application?email=${user.email}`).then((res) => {
      setJobs(res.data);
    });
  }, [user.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-start">Job Title</th>
              <th className="text-start">Company</th>
              <th className="text-start">Job Type</th>
              <th>Delete Job</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
            {jobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {job.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{job.jobType}</td>
                <th>
                  <button className="btn btn-ghost btn-xs text-base-300 bg-red-500 px-3 py-2 rounded-4xl">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;
