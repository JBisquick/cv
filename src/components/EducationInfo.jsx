function EducationInfo({onSubmit}) {
  return (
    <div>
      <h1>Educational Experience</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" name="degree" />
        </div>
        <div>
          <label htmlFor="school">School</label>
          <input type="text" id="school" name="school" />
        </div>
        <div>
          <label htmlFor="location">City, Country</label>
          <input type="text" id="location" name="location" />
        </div>
        <div>
          <div>
            <label htmlFor="start-date">Start Date</label>
            <input type="date" id="start-date" name="startDate" />
          </div>
          <div>
            <label htmlFor="end-date">End Date</label>
            <input type="date" id="end-date" name="endDate" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EducationInfo;