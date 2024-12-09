import { useEffect, useState } from "react";
import img from "../assets/img/Weapons/perso/01_gs.png";
import MenuVertical from "./MenuVertical";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
function Weapon() {
  const id = useParams();
  console.log(id.id);
  const [weapon, setWeapon] = useState([]);
  const [loadWeapon, setLoadWeapon] = useState(0);
  useEffect(() => {
    //if (id) {
    fetch(`http://localhost:3000/weapons/${id.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setWeapon(response);
      });
    // }
  }, [id]);

  console.log(weapon);
  console.log("load" + loadWeapon);
  if (weapon.length === 0) {
    return (
      <div className="contenu">
        <div className="background">
          <h1 className="loading">Chargement...</h1>
        </div>
      </div>
    );
  }
  return (
    <main className="container">
      <h1>{weapon.nom}</h1>
      <Row>
        <Col lg="4" xl="3">
          <MenuVertical categorie="weapons" />
        </Col>
        <Col lg="8" xl="8">
          <div className="container p-3">
            <div className=" background">
              <Row xm="12">
                <Col xl="4">
                  <div className="container-sm">
                    <img
                      className="img-fluid"
                      src={require(`../assets/img/Weapons/perso/${weapon.lienIMG}`)}
                      alt={weapon.altIMG}
                    />
                  </div>
                </Col>
                <Col xl="8">
                  <div className="m-3">
                    <div className="  ratio ratio-16x9">
                      <iframe
                        className=""
                        src={weapon.video}
                        title="YouTube video player"
                        allowFullScreen=""
                      ></iframe>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <p className="p-3 m-3">{weapon.description}</p>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
}
export default Weapon;
