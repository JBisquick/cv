import '../styles/form.css';
import personalImg from '../assets/personal.svg';

function GeneralInfo({ onSubmit, onClick, general }) {
  return (
    <div className="form-container">
      <div className="form-header-container">
        <div className="form-title-container">
          <img src={personalImg} />
          <h1>General Information</h1>
        </div>
        {general.hideForm && <button onClick={onClick}>Edit</button>}
      </div>
      {general.hideForm === false && (
        <form onSubmit={onSubmit}>
          <div className="input-container">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" defaultValue={general.name} />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" defaultValue={general.email} />
          </div>
          <div className="input-container">
            <label htmlFor="number">Phone Number</label>
            <input type="text" id="number" name="number" defaultValue={general.number} />
          </div>
          <div className="input-container">
            <label htmlFor="location">City, Province</label>
            <input type="text" id="location" name="location" defaultValue={general.location} />
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default GeneralInfo;
