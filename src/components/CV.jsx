function CV({ general }) {
  return (
    <div>
      <div>{general.name}</div>
      <div>{general.email}</div>
      <div>{general.number}</div>
      <div>{general.location}</div>
    </div>
  );
}

export default CV;
