function CV({ general, education }) {
  return (
    <div>
      <div>{general.name}</div>
      <div>{general.email}</div>
      <div>{general.number}</div>
      <div>{general.location}</div>
      {education.map((school) => (
        <div key={school.id}>
          <div>{school.degree}</div>
          <div>{school.school}</div>
          <div>{school.school}</div>
          <div>{school.startDate} - {school.endDate}</div>
        </div>
      ))}
    </div>
  );
}

export default CV;
