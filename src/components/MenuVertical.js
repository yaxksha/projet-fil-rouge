import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MenuVertical(categorie) {
  const [datas, setDatas] = useState([]);
  const [loadDatas, setLoadDatas] = useState(0);

  let str = "";
  if (categorie.categorie === "monsters") {
    str = "monstres";
  } else {
    str = "armes";
  }

  useEffect(() => {
    fetch(`http://localhost:3000/${categorie.categorie}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setDatas(response);
      });
  }, [loadDatas]);

  return (
    <div className="menu_vertical p-2 flex-shrink-1">
      <h2>Menu</h2>
      <ul>
        {datas.map((data) => (
          <li key={data.id}>
            <Nav.Link
              as={NavLink}
              to={`/${str}/${data.id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {data.nom}
            </Nav.Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MenuVertical;
