import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditComment(id) {
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const day = today.getDate();
    const hour = today.getHours();
    const minutes = today.getMinutes();
    const secondes = today.getSeconds();
    return `Édité le ${day}/${month}/${year} à ${hour}:${minutes}:${secondes} `;
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const date = getDate();

  const [comment, setComment] = useState({ news: id.idNews, date: date });

  const [loadComment, setLoadComment] = useState(0);
  let navigate = useNavigate();
  const images = require.context("/src/assets/img/Monsters/thumbnail", true);
  const imageList = images.keys().map((image) => images(image));
  console.log(id);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value });
    console.log(comment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(comment);

    fetch(`http://localhost:3000/commentaires/${id.idComment}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    }).then(() => {
      navigate(`/news/${id.idNews}`);
      handleClose();
    });
  };

  return (
    <form
      className="w-50 text-warning d-flex flex-column mb-3  mlr-auto"
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label for="pseudo">Pseudo</label>
        <input
          onChange={handleChange}
          name="pseudo"
          type="text"
          class="form-control"
          id="pseudo"
          placeholder="Pseudo "
          value={comment.pseudo}
          required
        />
      </div>

      <div className="form-group">
        <div>
          {imageList.map((image, index) => (
            <label key={image} className="">
              <input
                type="radio"
                name="avatar"
                onClick={handleChange}
                value={index}
                required
              ></input>
              <img
                className="rounded-circle shadow-4-strong border border-light radioAvatar"
                key={index}
                src={image}
                alt={`image-${index}`}
              />
            </label>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label for="commentaire">Commentaire</label>
        <textarea
          onChange={handleChange}
          name="commentaire"
          className="form-control"
          id="commentaire"
          rows="3"
          placeholder="Votre commentaire "
          value={comment.commentaire}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <button className="btn btn-outline-warning mt-3" type="submit">
          Editer
        </button>
      </div>
    </form>
  );
}

export default EditComment;
