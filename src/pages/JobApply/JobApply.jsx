import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { nav, tr } from "motion/react-client";

const JobApply = () => {
  const { id } = useParams();
  //   console.log(id);
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data)
    const applicationData = {
      ...data,
      job_id: id,
      applicant_email: user?.email,
    };
    try {
      const res = await fetch("http://localhost:5000/job-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicationData),
      });
      if (!res.ok) throw new Error("Network response was not ok");

      const result = await res.json();
      console.log("✅ Application saved:", result);
      alert("Application submitted successfully!");
      reset();
      navigate("/myApplications");
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto px-6 py-10 dark:bg-gray-900 shadow-lg rounded-xl mt-10">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Apply for the Job
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 hover:scale-105"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              GitHub Address
            </label>
            <input
              type="url"
              {...register("github", {
                required: "GitHub Account Link is Required",
              })}
              placeholder="GitHub URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 hover:scale-105"
            />
            {errors.github && (
              <p className="text-red-500 text-sm mt-1">
                {errors.github.message}
              </p>
            )}
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              LinkedIn Address
            </label>
            <input
              type="url"
              {...register("linkedIn", {
                required: "LinkedIn Account Link is Required",
              })}
              placeholder="linkedIn URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 hover:scale-105"
            />
            {errors.linkedIn && (
              <p className="text-red-500 text-sm mt-1">
                {errors.linkedIn.message}
              </p>
            )}
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Cover Letter
            </label>
            <textarea
              placeholder="Write a short cover letter..."
              {...register("letter", { required: "Cover letter is required" })}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-700 hover:scale-105"
            ></textarea>
            {errors.letter && (
              <p className="text-red-500 text-sm mt-1">
                {errors.letter.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
