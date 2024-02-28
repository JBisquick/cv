function GeneralInfo({ onSubmit, onClick, general }) {
  return (
    <div>
      <h1>General Info</h1>
      {general.hideForm ? (
        <button onClick={onClick}>Edit</button>
      ) : (
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" defaultValue={general.name} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" defaultValue={general.email} />
          </div>
          <div>
            <label htmlFor="number">Phone Number</label>
            <input type="text" id="number" name="number" defaultValue={general.number} />
          </div>
          <div>
            <label htmlFor="location">City, Province</label>
            <input type="text" id="location" name="location" defaultValue={general.location} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default GeneralInfo;
