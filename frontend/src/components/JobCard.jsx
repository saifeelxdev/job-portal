function JobCard({ job }) {
  return (
    <div className="ml-20 w-100">
      <div className="flex items-baseline">
        <h1 className="w-2/5 font-semibold text-lg">{job.name}</h1>
        <h1 className="w-1/2 text-base">{job.title}</h1>
      </div>
      <div className="flex gap mt-1">
        <h1 className="w-2/5 text-gray-500">{job.location}</h1>
        <h1 className="w-1/2  text-sm text-blue-600">{job.job_type}</h1>
      </div>
    </div>
  );
}

export default JobCard;
