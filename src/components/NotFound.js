import { useNavigate } from "react-router-dom";
import img from "../assets/img/sadpalico.PNG";
function NotFound() {
  return (
    <main className="text-center container">
      <div className="container text-center">
        <div className="container background p-5 m-3  d-flex flex-column align-items-center ">
          <h2>Page non trouvée !</h2>
          <img src={img} alt="Un chat triste " className="w-25" />
        </div>
      </div>
    </main>
  );
}
export default NotFound;
