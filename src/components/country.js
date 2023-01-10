// you must name your props so to match the following code or
// change the props so to match your data in the <App /> page

export default function Country(props) {
  return (
    <>
      <article className="card" key={props.name}>
        <div className="card-image">
          <img src={props.flag} alt={props.name} />
        </div>
        <div className="card-content">
          <h3 className="card-name">{props.name}</h3>
          <ol className="card-list">
            <li>
              population: <span>{props.population}</span>
            </li>
            <li>
              Region: <span>{props.region}</span>
            </li>
            <li>
              Capital: <span>{props.capital}</span>
            </li>
          </ol>
        </div>
      </article>
    </>
  );
}
