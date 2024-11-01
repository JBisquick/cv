import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import EducationInfo from './components/EducationInfo';
import JobInfo from './components/JobInfo';
import CV from './components/CV';
import './styles/index.css';

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
  const [jobs, setJobs] = useState([]);
  const [editJob, setEditJob] = useState([]);

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

  function deleteEducation(e) {
    let i = 0;
    for (const school of education) {
      if (school.id === e.target.value) {
        let newEducation = [...education];
        newEducation.splice(i, 1);
        setEducation(newEducation);
      }
      i++;
    }
  }

  function submitJob(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    let jobData = Object.fromEntries(data);
    let newJobs = [...jobs];
    if (editJob === 'none') {
      jobData.id = uuidv4();
      newJobs.push(jobData);
      setJobs(newJobs);
    } else {
      let i = 0;
      for (const job of jobs) {
        if (job.id === editJob.id) {
          jobData.id = job.id;
          newJobs[i] = jobData;
          setJobs(newJobs);
        }
        i++;
      }
    }
  }

  function updateEditJob(e) {
    if (e.target.value === 'none') {
      setEditJob('none');
    }
    for (const job of jobs) {
      if (job.id === e.target.value) {
        setEditJob(job);
      }
    }
  }

  function deleteJob(e) {
    let i = 0;
    for (const job of jobs) {
      if (job.id === e.target.value) {
        let newJobs = [...jobs];
        newJobs.splice(i, 1);
        setJobs(newJobs);
      }
      i++;
    }
  }

  return (
    <div className="container">
      <div className="generator-container">
        <GeneralInfo onSubmit={submitGeneral} onClick={editGeneral} general={general} />
        <EducationInfo
          onSubmit={submitEducation}
          education={education}
          updateEditEducation={updateEditEducation}
          editEducation={editEducation}
          deleteEducation={deleteEducation}
        />
        <JobInfo
          onSubmit={submitJob}
          jobs={jobs}
          updateEditJob={updateEditJob}
          editJob={editJob}
          deleteJob={deleteJob}
        />
      </div>
      <CV general={general} education={education} jobs={jobs} />
    </div>
  );
}

export default App;
