import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Events() {
  let navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loadEvents, setLoadEvents] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setEvents(response);
      });
  }, [loadEvents]);

  const deleteBook = (id) => {
    console.log("delete");
    fetch(`http://localhost:3000/events/${id}`, {
      method: "DELETE",
    }).then(() => {
      setLoadEvents((prev) => prev + 1);
    });
  };

  return (
    <main className="container">
      <h1>évenements</h1>
      <div className="background p-3">
        <ul>
          {events.map((evenement) => (
            <li key={evenement.id} className="border-warning m-3 ">
              <div className="bg-dark p-3 border border-warning rounded">
                <h4>{evenement.nom}</h4>
                <p>{evenement.description}</p>
                <div className="d-flex justify-content-between">
                  <span className=" badge text-light bg-primary">
                    {evenement.type}
                  </span>
                  <span className="text-light fw-light fst-italic text-end">
                    {evenement.date}
                  </span>
                </div>
                <hr class="border border-warning border-1 opacity-75" />
                <div className="d-flex justify-content-between">
                  {" "}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteBook(evenement.id)}
                  >
                    supprimer
                  </button>
                  <Link to={`/events/edit/${evenement.id}`}>
                    <button className="btn btn btn-outline-info">éditer</button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <button
          className="btn btn-outline-warning"
          onClick={() => navigate(`/events/edit`)}
        >
          ajouter
        </button>
      </div>
    </main>
  );
}
export default Events;
