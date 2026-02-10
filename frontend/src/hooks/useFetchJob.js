import { useState, useEffect } from 'react';
import { getJobs } from '../services/jobServices';
export default function useFetchJob() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchJobs() {
    try {
      setLoading(true);
      const data = await getJobs();
      const jobsArray = data.jobs;
      setJobs(jobsArray);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchJobs();
  }, []);
  return { jobs, loading };
}
