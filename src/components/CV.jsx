import { format } from 'date-fns';

function CV({ general, education, jobs }) {
  return (
    <div>
      <div>{general.name}</div>
      <div>{general.email}</div>
      <div>{general.number}</div>
      <div>{general.location}</div>
      {education.map((school) => (
        <div key={school.id}>
          <div>{school.degree}</div>
          <div>{school.school}</div>
          <div>{school.school}</div>
          <div>
          {format(new Date(school.startDate.replaceAll('-', '/')), "MMM',' yyyy")} - {format(new Date(school.endDate.replaceAll('-', '/')), "MMM',' yyyy")}
          </div>
        </div>
      ))}
      {jobs.map((job) => (
        <div key={job.id}>
          <div>{job.title}</div>
          <div>{job.company}</div>
          <div>
          {format(new Date(job.startDate.replaceAll('-', '/')), "MMM',' yyyy")} - {format(new Date(job.endDate.replaceAll('-', '/')), "MMM',' yyyy")}
          </div>
          <div>{job.description}</div>
        </div>
      ))}
    </div>
  );
}

export default CV;
