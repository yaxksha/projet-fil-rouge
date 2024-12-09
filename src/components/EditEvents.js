import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEvents() {
  const [evenement, setEvenement] = useState([]);
  const [loadEvenement, setLoadEvenement] = useState(0);
  let navigate = useNavigate();
  const id = useParams();
  console.log(id);
  let boutonFormulaire = "Ajouter";
  if (id.id) {
    boutonFormulaire = "Éditer";
  }
  useEffect(() => {
    if (id.id) {
      fetch(`http://localhost:3000/events/${id.id}`)
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          setEvenement(response);
        });
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEvenement({ ...evenement, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(evenement);
    if (id.id) {
      fetch(`http://localhost:3000/events/${id.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(evenement),
      }).then(() => {
        navigate("/events");
      });
    } else {
      fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(evenement),
      }).then(() => {
        navigate("/events");
      });
    }
  };

  return (
    <main className="container">
      <h1>évenements</h1>
      <div className="background p-3   ">
        <form
          className="w-50 text-warning d-flex flex-column mb-3  mlr-auto"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label for="nomEvent">Nom de l'évenements</label>
            <input
              onChange={handleChange}
              name="nom"
              type="text"
              class="form-control"
              id="nomEvent"
              placeholder="ex : LAN à tourcoing "
              value={evenement.nom}
              required
            />
          </div>

          <div className="form-group">
            <label for="dateEvent">Date</label>
            <input
              onChange={handleChange}
              id="dateEvent"
              name="date"
              className="form-control"
              type="date"
              required
              value={evenement.date}
            />
          </div>
          <div className="form-group">
            <label for="typeEvent">Type</label>
            <select
              name="type"
              className="form-control form-select"
              id="typeEvent"
              onChange={handleChange}
              required
            >
              <option selected={false} disabled value="">
                type...
              </option>
              <option value={"concours"}>concours</option>
              <option value={"irl"}>irl</option>
              <option value={"compétition en équipe"}>
                compétition en équipe
              </option>
              <option value={"compétition en solo"}>compétition en solo</option>
            </select>
          </div>

          <div className="form-group">
            <label for="descriptionEvent">description</label>
            <textarea
              onChange={handleChange}
              name="description"
              className="form-control"
              id="descriptionEvent"
              rows="3"
              placeholder="décrire l'évènement "
              required
              value={evenement.description}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-outline-warning mt-3" type="submit">
              {boutonFormulaire}
            </button>
          </div>
        </form>

        <button
          className="btn btn-outline-warning"
          onClick={() => navigate(`/events`)}
        >
          retour
        </button>
      </div>
    </main>
  );
}

export default EditEvents;
