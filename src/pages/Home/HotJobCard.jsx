import { BadgeCheck, Briefcase, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;
  return (
    <div>
      <div className="shadow-lg rounded-2xl p-6 transition hover:shadow-2xl hover:scale-105 border border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <img
            src={company_logo}
            alt={company}
            className="w-14 h-14 rounded-lg object-contain"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {company}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> {location}
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> {jobType}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Apply by {applicationDeadline}
          </div>
          <div className="flex items-center gap-2">
            💰 Salary: {salaryRange.min.toLocaleString()} -{" "}
            {salaryRange.max.toLocaleString()}{" "}
            {salaryRange.currency.toUpperCase()}
          </div>
        </div>

        <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 line-clamp-3">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {requirements.map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-6 text-end">
          <Link
            to={`/jobs/${_id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
