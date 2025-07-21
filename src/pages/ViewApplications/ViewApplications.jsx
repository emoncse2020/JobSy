import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();
  const handleStatusUpdate = (e, id) => {
    // console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };

    fetch(`https://jobsy-server.vercel.app/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
      <h2>View Applications </h2>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>GitHub</th>
              <th>LinkedIn</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <th>{index + 1}</th>
                <td>{app.name}</td>
                <td>{app.applicant_email}</td>
                <td>{app.github}</td>
                <td>{app.linkedIn}</td>
                <td>Status</td>
                <td>
                  <div>
                    <label>
                      <select
                        onChange={(e) => handleStatusUpdate(e, app._id)}
                        name="change_status"
                        defaultValue={app.status || "Change Status"}
                        className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                      >
                        <option value="">Change Status</option>

                        <option>Under Review</option>
                        <option>Set Interview</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
