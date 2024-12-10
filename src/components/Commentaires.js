import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import EditComment from "./EditComment";

function Commentaires() {
  const id = useParams();
  const images = require.context("/src/assets/img/Monsters/thumbnail", true);
  const imageList = images.keys().map((image) => images(image));

  const [comments, setComments] = useState([]);
  const [loadComments, setLoadComment] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    fetch(`http://localhost:3000/commentaires?news=${id.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setComments(response);
      });
  }, [loadComments, id]);

  const deleteComm = (id) => {
    console.log("delete");
    fetch(`http://localhost:3000/commentaires/${id}`, {
      method: "DELETE",
    }).then(() => {
      setLoadComment((prev) => prev + 1);
    });
  };

  if (!comments) {
    return (
      <div className="contenu">
        <h1 className="loading">Chargement des commentaires...</h1>
      </div>
    );
  }

  if (!comments[0]) {
    return (
      <div className="contenu">
        <h1 className="loading text-danger">Pas de commentaire </h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <ul className="p-3">
          {comments.map((commentaire) => (
            <li
              className="bg-opacity-75 bg-dark bg-gradient m-3 border border-info "
              key={commentaire.id}
            >
              <Row>
                <Row>
                  <Col lg="2" xl="1" className="m-2">
                    <img
                      className="rounded-circle shadow-4-strong border border-light avatar "
                      src={imageList[parseInt(commentaire.avatar)]}
                      alt={`avatar de ${commentaire.pseudo}`}
                    ></img>
                  </Col>
                  <Col lg="7" xl="7" className="mtb-auto ms-3">
                    <span className="fs-4 fw-bold text-warning mtb-auto">
                      {commentaire.pseudo}
                    </span>
                  </Col>
                  <Col className="mtb-auto ">
                    <span className="fw-light fst-italic me-0 text-end text-light ">
                      {commentaire.date}
                    </span>
                  </Col>
                </Row>

                <Row className="">
                  <p className="text-light m-3">{commentaire.commentaire}</p>
                </Row>
                <div className="d-flex  m-3">
                  {" "}
                  <button
                    className="btn btn-outline-danger text-danger me-3  "
                    onClick={() => deleteComm(commentaire.id)}
                  >
                    <Trash2 />
                  </button>
                  <button
                    className="btn btn btn-outline-info"
                    onClick={handleShow}
                  >
                    <Pencil />
                  </button>
                  {/* Test Modal */}
                  <Modal show={show} onHide={handleClose}>
                    <div className="bg-dark text-light">
                      <Modal.Header closeButton>
                        <Modal.Title>Editer le commentaire</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <EditComment
                          idComment={commentaire.id}
                          idNews={commentaire.news}
                        />
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </div>
                  </Modal>
                </div>
              </Row>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Commentaires;
