import { useEffect, useState } from "react";
import jaquetteMHWds from "../assets/img/MHWilds_normal.png";
import { Accordion, Table } from "react-bootstrap";
import logolicence from "../assets/img/logoseriemh.png";

function Home() {
  const [news, setNews] = useState([]);
  const [loadNews, setLoadNews] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/news")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setNews(response);
      });
  }, [loadNews]);

  return (
    <main className="text-center container">
      <h1>Bienvenue sur le Fansite de Monster Hunter Wilds</h1>

      <div className="container text-center">
        <div className="container background p-5 m-3 ">
          <h2>Présentation</h2>
          <div className="container-sm">
            <h3 id="mh">Licence Monster Hunter</h3>
            <img
              className="img-fluid"
              src={logolicence}
              alt="logo de la licence Monster Hunter"
            />
            <p>
              Monster Hunter est une licence de jeu vidéo, développée et éditée
              par la boîte japonaise Capcom. <br />
              Dans cet action-RPG*, l'on incarne un chasseur qui doit partir en
              quête pour tuer ou capturer des monstres imposants. <br />
              Le chasseur dispose de différentes armes dans son arsenal, chaque
              arme proposant un style de jeu propre. <br />
              De même, les monstres eux-mêmes auront chacun des attaques uniques
              ; il faut donc que les joueurs s'adaptent aux patterns* des
              monstres. <br />
              De plus, ce jeu propose un mode multijoueur jusqu'à 4 joueurs
              maximum pour des quêtes. <br />
              Le but est de chasser des monstres pour récolter leurs composants
              et fabriquer des armes et armures, afin de rendre notre chasseur
              plus fort et plus robuste.
            </p>
            <Accordion defaultActiveKey="0" className="glossaire">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Définitions</Accordion.Header>
                <Accordion.Body>
                  <em>Action-RPG :</em>
                  "Action" car on joue en temps réel, et "RPG" pour jeu de rôle
                  en français. Notre personnage dispose d'un équipement qui
                  influe sur ses statistiques.
                  <br />
                  <br />
                  <em>Patterns :</em> Un "pattern" de monstres dans un jeu vidéo
                  désigne une attaque d'un ennemi que l'on peut analyser afin
                  d'anticiper et d'esquiver l'attaque. Par exemple, un dragon
                  crache du feu en cône ; je sais donc où me placer pour
                  l'esquiver.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <p>
              Site officiel des 20 ans de la licence retraçant tous les jeux
              jusqu'à Wilds <br />
              <a href="https://www.monsterhunter.com/20th/en/memorial/">
                <span></span>Memorial<span></span>
              </a>
            </p>
          </div>
          <hr />
          <div className="container">
            <h3>Monster Hunter Wilds</h3>
            <div className="container-sm">
              <img
                className="img-fluid rounded shadow-4"
                src={jaquetteMHWds}
                alt="Jaquette de Monster Hunter Wilds qu'on peut retrouver sur les boites de jeux"
              />
              <Table>
                <thead></thead>
                <tbody>
                  <tr>
                    <td>
                      <span>Date de sortie :</span>
                    </td>
                    <td>
                      <span> 28 février 2025</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Nombre de joueurs :</span>
                    </td>
                    <td>
                      <span>1 (En ligne : 1-4 Joueurs)</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Genre :</span>
                    </td>
                    <td>
                      <span>Action/RPG</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Classification :</span>
                    </td>
                    <td>
                      <span>Pegi 16</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Plateforme :</span>
                    </td>
                    <td>
                      <span>
                        PlayStation®5 / Xbox Series X|S / Steam® <br />
                        Remarque : jeu interplateforme disponible
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>

        <div className="container background p-5 m-3 ">
          <h2 className="m-5">Actualités</h2>
          <div className="d-flex flex-column-reverse">
            {news.map((actualite) => (
              <div key={actualite.id}>
                <h3>{actualite.nom}</h3>
                <div className="m-3  ratio ratio-16x9">
                  <iframe
                    src={actualite.lien}
                    title="YouTube video player"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
