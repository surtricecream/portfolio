//reusable layout component (can load Projects, Education, etc..)
function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <hr />
      {children}
    </section>
  );
}

export default Section;
