function EducationInfo() {
  return (
    <div>
      <h1>Educational Experience</h1>
      <form>
        <div>
          <label htmlFor="">Degree</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">School</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">City, Country</label>
          <input type="text" />
        </div>
        <div>
          <div>
            <label htmlFor="">Start Date</label>
            <input type="date" />
          </div>
          <div>
            <label htmlFor="">End Date</label>
            <input type="date" />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EducationInfo;