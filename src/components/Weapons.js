import { useEffect, useState } from "react";
import image from "../assets/img/Weapons/Icon/1-GS-wilds.png";
import MenuVertical from "./MenuVertical";
import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const [loadWeapons, setLoadWeapons] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/weapons")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setWeapons(response);
      });
  }, [loadWeapons]);

  return (
    <main className="container">
      <h1>Armes</h1>

      <Row>
        <Col lg="4" xl="3">
          <MenuVertical categorie="weapons" />
        </Col>
        <Col lg="8" xl="8">
          <div className="container ml-3 p-2 w-100">
            <div className="background d-flex flex-wrap" id="armes">
              {weapons.map((weapon) => (
                <Card bg="dark" text="warning" border="warning" key={weapon.id}>
                  {" "}
                  <Link to={`/armes/${weapon.id}`}>
                    <Card.Img
                      variant="bottom"
                      src={require(`../assets/img/Weapons/Icon/${weapon.lienIcon}`)}
                      alt={weapon.altIMG}
                    />
                    <Card.Body>
                      <Card.Title>
                        <h4>{weapon.nom}</h4>
                      </Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
}
export default Weapons;
