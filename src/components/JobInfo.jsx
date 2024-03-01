import { useState } from 'react';
import { format } from 'date-fns';
import '../styles/form.css';
import jobImg from '../assets/job.svg';

function JobInfo({ onSubmit, jobs, updateEditJob, editJob, deleteJob }) {
  const [formState, setFormState] = useState('hide');

  function hide(e) {
    e.preventDefault();
    setFormState('hide');
  }

  function show() {
    setFormState('show');
  }

  return (
    <div className="form-container">
      <div className="form-header-container">
        <div className="form-title-container">
          <img src={jobImg} />
          <h1>Proffesional Experience</h1>
        </div>
        {formState === 'hide' ? (
          <button
            value="none"
            onClick={(e) => {
              updateEditJob(e);
              show();
            }}
          >
            Add
          </button>
        ) : (
          <button
            value="none"
            onClick={(e) => {
              updateEditJob(e);
              hide(e);
            }}
          >
            Cancel
          </button>
        )}
      </div>
      {formState === 'show' && (
        <form
          onSubmit={(e) => {
            onSubmit(e);
            hide(e);
          }}
        >
          <div className="input-container">
            <label htmlFor="title">Job Title</label>
            <input type="text" id="title" name="title" defaultValue={editJob.title} required />
          </div>
          <div className="input-container">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" defaultValue={editJob.company} required />
          </div>
          <div className="input-container">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="3"
              defaultValue={editJob.description}
              required
            ></textarea>
          </div>
          <div className='date-container'>
            <div>
              <label htmlFor="startDate">Start Date</label>
              <input type="date" id="startDate" name="startDate" defaultValue={editJob.startDate} required />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input type="date" id="endDate" name="endDate" defaultValue={editJob.endDate} required />
            </div>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      )}
      {jobs.map((job) => (
        <div key={job.id} className="form-summary-container">
          <div>
            <div>{job.title}</div>
            <div>{job.company}</div>
            <div>
            {format(new Date(job.startDate.replaceAll('-', '/')), "MMM',' yyyy")} - {format(new Date(job.endDate.replaceAll('-', '/')), "MMM',' yyyy")}
            </div>
          </div>
          <div className='button-container'>
            <button
              value={job.id}
              onClick={(e) => {
                updateEditJob(e);
                // to prevent jumping from edit to edit so default value can update
                if (formState === 'show') {
                  hide(e);
                } else {
                  show();
                }
              }}
            >
              Edit
            </button>
            <button
              value={job.id}
              onClick={(e) => {
                deleteJob(e);
                hide(e);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobInfo;
