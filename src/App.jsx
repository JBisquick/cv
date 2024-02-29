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
  const [editEducation, setEditEducation] = useState('none');

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
    let schoolData = Object.fromEntries(data);
    let newEducation = [...education];
    if (editEducation === 'none') {
      schoolData.id = uuidv4();
      newEducation.push(schoolData);
      setEducation(newEducation);
    } else {
      let i = 0;
      for (const school of education) {
        if (school.id === editEducation.id) {
          schoolData.id = school.id;
          newEducation[i] = schoolData;
          setEducation(newEducation);
        }
        i++;
      }
    }
  }

  function updateEditEducation(e) {
    if (e.target.value === 'none') {
      setEditEducation('none');
    }
    for (const school of education) {
      if (school.id === e.target.value) {
        setEditEducation(school);
      }
    }
  }

  return (
    <div>
      <GeneralInfo onSubmit={submitGeneral} onClick={editGeneral} general={general} />
      <EducationInfo
        onSubmit={submitEducation}
        education={education}
        updateEditEducation={updateEditEducation}
        editEducation={editEducation}
      />
      <CV general={general} education={education} />
    </div>
  );
}

export default App;