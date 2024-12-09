import { useNavigate } from "react-router-dom";
import img from "../assets/img/hibou.png";
function Envoye() {
  let navigate = useNavigate();
  return (
    <main className="text-center container">
      <div className="container text-center">
        <div className="container background p-5 m-3  d-flex flex-column align-items-center ">
          <h2>Mail envoyé !</h2>
          <img src={img} alt="Hibou postier " className="w-25" />
          <button
            className="btn btn-outline-warning m3"
            onClick={() => navigate(`/contact`)}
          >
            Retour
          </button>
        </div>
      </div>
    </main>
  );
}
export default Envoye;
