function GeneralInfo({ onSubmit }) {
  return (
    <div>
      <h1>General Info</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" name="number" />
        </div>
        <div>
          <label htmlFor="location">City, Province</label>
          <input type="text" id="location" name="location" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GeneralInfo;
