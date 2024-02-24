function GeneralInfo() {
  return (
    <div>
      <h1>General Info</h1>
      <div>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" />
        </div>
        <div>
          <label htmlFor="number">Phone Number</label>
          <input type="text" id="number" />
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
