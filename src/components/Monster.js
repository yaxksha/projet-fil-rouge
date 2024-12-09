import { useEffect, useState } from "react";

import MenuVertical from "./MenuVertical";
import { useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
function Monster() {
  const id = useParams();
  console.log(id.id);
  const [monster, setMonster] = useState([]);
  const [loadMonster, setLoadMonster] = useState(0);
  useEffect(() => {
    //if (id) {
    fetch(`http://localhost:3000/monsters/${id.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMonster(response);
      });
    // }
  }, [id]);

  console.log(monster);

  if (monster.length === 0) {
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
      <h1>{monster.nom}</h1>
      <Row>
        <Col lg="4" xl="3">
          <MenuVertical categorie="monsters" />
        </Col>
        <Col lg="8" xl="8">
          <div className="container p-3">
            <div className="background ">
              {(() => {
                if (monster.habitat !== "???") {
                  return (
                    <div
                      className="container-sm"
                      style={{
                        background: `url(${require(`../assets/img/Monsters/habitat/${monster.lienHabitat}`)} ) no-repeat`,
                      }}
                    >
                      <img
                        className="img-fluid"
                        src={require(`../assets/img/Monsters/${monster.lienIMG}`)}
                        alt={monster.altIMG}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="container-sm" style={{}}>
                      <img
                        className="img-fluid"
                        src={require(`../assets/img/Monsters/${monster.lienIMG}`)}
                        alt={monster.altIMG}
                      />
                    </div>
                  );
                }
              })()}
              <section className="p-3 m-3">
                <p>{monster.description}</p>
                <p>
                  <strong>Habitat : {monster.habitat}</strong>
                </p>
              </section>
            </div>
          </div>
        </Col>
      </Row>
    </main>
  );
}
export default Monster;
