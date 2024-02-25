import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import CV from './components/CV';

function App() {
  const [general, setGeneral] = useState({ name: '', email: '', number: '', location: '' });

  function submitGeneral(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const newGeneral = Object.fromEntries(data);
    setGeneral(newGeneral);
  }

  return (
    <div>
      <GeneralInfo onSubmit={submitGeneral} />
      <CV general={general} />
    </div>
  );
}

export default App;
