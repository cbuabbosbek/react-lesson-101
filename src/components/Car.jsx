// Welcome Component --> props: lang
// Car Component     --> props: title, description
function Car({ name, description }) {
  //   const { name, description } = props;

  return (
    <div>
      <hr />
      <h1> {name} </h1>
      <p> {description} </p>
      <hr />
    </div>
  );
}

export default Car;
