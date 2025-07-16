import { Link, useLoaderData } from "react-router";
import { Briefcase, Calendar, MapPin, DollarSign, User } from "lucide-react";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            {title}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">{company}</p>
        </div>
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 object-contain mt-4 sm:mt-0"
        />
      </div>

      {/* Job Meta */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-200 mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5" /> {location}
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> {jobType}
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5" /> Apply before: {applicationDeadline}
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5" />
          {salaryRange.min.toLocaleString()} -{" "}
          {salaryRange.max.toLocaleString()}{" "}
          {salaryRange.currency.toUpperCase()}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="border-t pt-4 text-gray-600 dark:text-gray-300">
        <h3 className="text-lg font-medium mb-1">HR Contact</h3>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" /> {hr_name}
        </div>
        <div className="flex items-center gap-2 mt-1">
          📧{" "}
          <a href={`mailto:${hr_email}`} className="underline">
            {hr_email}
          </a>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-6 text-right">
        <Link
          to={`/jobApply/${_id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
