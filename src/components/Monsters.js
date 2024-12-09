import { useEffect, useState } from "react";
import MenuVertical from "./MenuVertical";
import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Row } from "react-bootstrap";

function Monsters() {
  const [monsters, setMonsters] = useState([]);
  const [loadMonsters, setLoadMonsters] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/monsters")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMonsters(response);
      });
  }, [loadMonsters]);

  return (
    <main className="container">
      <h1>Monstres</h1>

      <Row>
        <Col lg="4" xl="3">
          <MenuVertical categorie="monsters" />
        </Col>
        <Col lg="8" xl="8">
          <div className="container ml-3 p-2 w-100">
            <div className="background d-flex flex-wrap imgMonstre">
              {monsters.map((monster) => (
                <Link
                  className="m-3 "
                  key={monster.id}
                  to={`/monstres/${monster.id}`}
                >
                  <img
                    src={require(`../assets/img/Monsters/thumbnail/${monster.thumbnail}`)}
                    alt={monster.altIMG}
                    className="img-thumbnail bg-dark "
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  ></img>
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
}
export default Monsters;
