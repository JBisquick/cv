import { useState } from 'react';

function EducationInfo({ onSubmit, education, updateEditEducation, editEducation }) {
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
      <h1>Educational Experience</h1>
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
        <>
          <button
            value="none"
            onClick={(e) => {
              updateEditEducation(e);
              hide(e);
            }}
          >
            Cancel
          </button>
          <form
            onSubmit={(e) => {
              onSubmit(e);
              hide(e);
            }}
          >
            <div>
              <label htmlFor="degree">Degree</label>
              <input type="text" id="degree" name="degree" defaultValue={editEducation.degree} />
            </div>
            <div>
              <label htmlFor="school">School</label>
              <input type="text" id="school" name="school" defaultValue={editEducation.school} />
            </div>
            <div>
              <label htmlFor="location">City, Country</label>
              <input
                type="text"
                id="location"
                name="location"
                defaultValue={editEducation.location}
              />
            </div>
            <div>
              <div>
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="date"
                  id="start-date"
                  name="startDate"
                  defaultValue={editEducation.startDate}
                />
              </div>
              <div>
                <label htmlFor="end-date">End Date</label>
                <input
                  type="date"
                  id="end-date"
                  name="endDate"
                  defaultValue={editEducation.endDate}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {education.map((school) => (
        <div key={school.id}>
          <div>
            <div>{school.degree}</div>
            <div>{school.school}</div>
            <div>{school.location}</div>
            <div>
              {school.startDate} - {school.endDate}
            </div>
          </div>
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
        </div>
      ))}
    </div>
  );
}

export default EducationInfo;