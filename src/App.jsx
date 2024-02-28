import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import CV from './components/CV';

function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    number: '',
    location: '',
    hideForm: false
  });

  const [education, setEducation] = useState([]);

  function submitGeneral(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const newGeneral = Object.fromEntries(data);
    newGeneral.hideForm = true;
    setGeneral(newGeneral);
  }

  function editGeneral() {
    const newGenearl = { ...general, hideForm: false };
    setGeneral(newGenearl);
  }

  function submitEducation(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const school = Object.fromEntries(data);
    school.id = uuidv4();
    const newEducation = [...education, school]
    console.log(newEducation);
    setEducation(newEducation);
  }

  return (
    <div>
      <GeneralInfo onSubmit={submitGeneral} onClick={editGeneral} general={general} />
      <EducationInfo onSubmit={submitEducation} education={education} />
      <CV general={general} education={education} />
    </div>
  );
}

export default App;
