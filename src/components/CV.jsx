import { format } from 'date-fns';
import '../styles/cv.css';

function CV({ general, education, jobs }) {
  return (
    <div className='cv-container'>
      <div className="cv-name">{general.name}</div>
      <div className="cv-personal-info">
        <div>{general.email}</div>
        <div>{general.number}</div>
        <div>{general.location}</div>
      </div>
      <div className="section-title">Education</div>
      {education.map((school) => (
        <div key={school.id} className="education-container">
          <div><strong>{school.degree},</strong> {school.school}</div>
          <div className="time-location-container">
            <div>
            {format(new Date(school.startDate.replaceAll('-', '/')), "MMM',' yyyy")} - {format(new Date(school.endDate.replaceAll('-', '/')), "MMM',' yyyy")}
            </div>
            <div>{school.location}</div>
          </div>
        </div>
      ))}
      <div className="section-title">Professional Experience</div>
      {jobs.map((job) => (
        <div key={job.id} className="job-container">
          <div className="job-info">
            <div><strong>{job.title},</strong> {job.company}</div>
            <div>
            {format(new Date(job.startDate.replaceAll('-', '/')), "MMM',' yyyy")} - {format(new Date(job.endDate.replaceAll('-', '/')), "MMM',' yyyy")}
            </div>
          </div>
          <div className='job-description'>{job.description}</div>
        </div>
      ))}
    </div>
  );
}

export default CV;
