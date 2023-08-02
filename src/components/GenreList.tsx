import useGenre from "../hooks/useGenre";

function GenereList() {
  const { data } = useGenre();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}

export default GenereList;
