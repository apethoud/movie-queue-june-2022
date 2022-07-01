export default function MovieCard(props) {
  return (
    <div className="MovieCard">
      <div className="MovieCard-Title">{props.title}</div>
      <div className="MovieCard-Year">{props.year}</div>
      <div className="MovieCard-Plot">{props.plot}</div>
    </div>
  );
}
