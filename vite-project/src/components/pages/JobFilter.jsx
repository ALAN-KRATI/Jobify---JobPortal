

const JobFilter = ({ filters, setFilters }) => {
    return (
      <div>
        <input placeholder="Location" onChange={(e) => setFilters({ ...filters, location: e.target.value })} />
        <input placeholder="Min Salary" type="number" onChange={(e) => setFilters({ ...filters, salary: e.target.value })} />
        <select onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}>
          <option value="">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
    );
  };
  
  export default JobFilter;
  