import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Commentaires from "./Commentaires";
import AddComment from "./AddComment";

function Actualite() {
  const [news, setNews] = useState([]);
  const [loadNews, setLoadNews] = useState(0);
  const id = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/news/${id.id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setNews(response);
        console.log(news);
      });
  }, [loadNews]);

  return (
    <main className="m-3">
      <div className="container background p-5  mlr-auto ">
        <h1>{news.nom}</h1>
        <div className="m-3  ratio ratio-16x9">
          <iframe
            src={news.lien}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div className="commentList">
          <h3>Commentaires</h3>
          <Commentaires />
          <AddComment />
        </div>
      </div>
    </main>
  );
}
export default Actualite;
