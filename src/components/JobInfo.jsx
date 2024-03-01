import { useState } from 'react';

function JobInfo({ onSubmit, jobs }) {
  const [formState, setFormState] = useState('hide');

  function hide(e) {
    e.preventDefault();
    setFormState('hide');
  }

  function show() {
    setFormState('show');
  }

  return (
    <div>
      <h1>Proffesional Experience</h1>
      {formState === 'hide' ? (
        <button value="none" onClick={show}>
          Add
        </button>
      ) : (
        <>
          <button value="none" onClick={hide}>
            Cancel
          </button>
          <form
            onSubmit={(e) => {
              onSubmit(e);
              hide(e);
            }}
          >
            <div>
              <label htmlFor="title">Job Title</label>
              <input type="text" id="title" name="title" />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" cols="30" rows="3"></textarea>
            </div>
            <div>
              <label htmlFor="startDate">Start Date</label>
              <input type="date" id="startDate" name="startDate" />
            </div>
            <div>
              <label htmlFor="endDate">End Date</label>
              <input type="date" id="endDate" name="endDate" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {jobs.map((job) => (
        <div key={job.id}>
          <div>
            <div>{job.title}</div>
            <div>{job.company}</div>
            <div>
              {job.startDate} - {job.endDate}
            </div>
            <div>{job.description}</div>
          </div>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default JobInfo;
