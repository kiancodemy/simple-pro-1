import { useState } from "react";
import somevalue from "./data";
import List from "./list";

const App = () => {
  const [people, setpeople] = useState(somevalue);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday is today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setpeople([])}
        >
          Reset
        </button>
      </section>
    </main>
  );
};
export default App;
