import { useState } from 'react';
import { format } from 'date-fns';
import '../styles/form.css';
import educationImg from '../assets/education.svg';

function EducationInfo({
  onSubmit,
  education,
  updateEditEducation,
  editEducation,
  deleteEducation
}) {
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
          <img src={educationImg} />
          <h1>Educational Experience</h1>
        </div>
        {formState === 'hide' ? (
          <button
            value="none"
            onClick={(e) => {
              updateEditEducation(e);
              show();
            }}
          >
            Add
          </button>
        ) : (
          <button
            value="none"
            onClick={(e) => {
              updateEditEducation(e);
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
            <label htmlFor="degree">Degree</label>
            <input type="text" id="degree" name="degree" defaultValue={editEducation.degree} required/>
          </div>
          <div className="input-container">
            <label htmlFor="school">School</label>
            <input type="text" id="school" name="school" defaultValue={editEducation.school} required/>
          </div>
          <div className="input-container">
            <label htmlFor="location">City, Country</label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={editEducation.location}
              required
            />
          </div>
          <div className='date-container'>
            <div>
              <label htmlFor="start-date">Start Date</label>
              <input
                type="date"
                id="start-date"
                name="startDate"
                defaultValue={editEducation.startDate}
                required
              />
            </div>
            <div>
              <label htmlFor="end-date">End Date</label>
              <input
                type="date"
                id="end-date"
                name="endDate"
                defaultValue={editEducation.endDate}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      )}
      {education.map((school) => (
        <div key={school.id} className="form-summary-container">
          <div>
            <div>{school.degree}</div>
            <div>{school.school}</div>
            <div>{school.location}</div>
            <div>
              {format(new Date(school.startDate.replaceAll('-', '/')), "MMM',' yyyy")} - {format(new Date(school.endDate.replaceAll('-', '/')), "MMM',' yyyy")}
            </div>
          </div>
          <div className='button-container'>
            <button
              value={school.id}
              onClick={(e) => {
                updateEditEducation(e);
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
              value={school.id}
              onClick={(e) => {
                deleteEducation(e);
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

export default EducationInfo;