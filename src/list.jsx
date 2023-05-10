import Person from "./person";
const List = ({ people }) => {
  const change = people.map((person) => {
    return <Person key={person.id} {...person} />;
  });

  return <section>{change}</section>;
};
export default List;
