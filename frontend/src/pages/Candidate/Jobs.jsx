import InputField from '../../components/InputField/InputField';
import useFetchJob from '../../hooks/useFetchJob';
import JobCard from '../../components/JobCard';
function Jobs() {
  const { jobs, loading } = useFetchJob();
  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="min-h-screen flex flex-col gap-6">
        <form role="search" className="mx-auto">
          <InputField
            type="search"
            name="search"
            id="search"
            placeholder="Search Jobs"
            className="w-full block"
          ></InputField>
        </form>
        {jobs?.map((job) => {
          return <JobCard key={job.id} job={job} />;
        })}
      </div>
    </>
  );
}

export default Jobs;
