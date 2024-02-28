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

  return (
    <div>
      <GeneralInfo onSubmit={submitGeneral} onClick={editGeneral} general={general} />
      <EducationInfo />
      <CV general={general} />
    </div>
  );
}

export default App;
