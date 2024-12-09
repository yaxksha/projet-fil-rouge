const server = "http://localhost:3000";

recupArticles();

function recupArticles() {
  fetch(`${server}/articles`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((articlesFromAPI) => {
      articles = articlesFromAPI;
      console.log(articles);
      displayArticles(articles);
    });
}

function displayArticles(articles) {
  const divVitrine = document.querySelector("#vitrine");
  divVitrine.innerHTML = "";
  articles.forEach((article) => {
    const divArticle = document.createElement("div");
    divArticle.className = "article";

    const spanArticle = document.createElement("span");
    spanArticle.innerHTML = article.id;

    const h2Article = document.createElement("h2");
    h2Article.innerHTML = article.title;

    const pArticle = document.createElement("p");
    pArticle.innerHTML = article.content;
    divArticle.appendChild(h2Article);
    divArticle.appendChild(spanArticle);
    divArticle.appendChild(pArticle);

    const boutonSuppr = document.createElement("button");
    boutonSuppr.textContent = "supprimer";
    boutonSuppr.addEventListener("click", () => {
      deleteArticle(article.id);
    });

    divArticle.appendChild(boutonSuppr);
    divVitrine.appendChild(divArticle);
  });
}

function deleteArticle(id) {
  fetch(`${server}/articles/${id}`, {
    method: "DELETE",
  }).then(() => {
    recupArticles();
  });
}

// fetch(`${server}/articles/1`, {
//   method: "DELETE",
// }).then(() => {
//   recupArticles();
// });

const form = document.querySelector("#formulaire");
const idInput = document.querySelector("#id");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const id = idInput.value;
  const title = titleInput.value;
  const content = contentInput.value;
  const NouvelArticle = {
    title: title,
    content: content,
  };
  console.log(NouvelArticle);
  if (id) {
    modifArticle(NouvelArticle, id);
  } else {
    addArticle(NouvelArticle);
  }
  idInput.value = "";
  titleInput.value = "";
  contentInput.value = "";
});

function addArticle(article) {
  fetch(`${server}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  })
    .then((reponse) => {
      return reponse.json();
    })
    .then((NouvelArticle) => {
      recupArticles();
    });
}

function modifArticle(article, id) {
  fetch(`${server}/articles/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(article),
  })
    .then((reponse) => {
      return reponse.json();
    })
    .then((NouvelArticle) => {
      recupArticles();
    });
}

const filtre = document.querySelector("#filtre");
const filterInput = document.querySelector("#filtreTitle");

filtre.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(filterInput.value);
  const filtredTitle = filterInput.value;
  console.log(filtredTitle);
  filtrerArticle(filtredTitle);
});

function filtrerArticle(title) {
  const articles = [];
  fetch(`${server}/articles`)
    .then((reponse) => {
      return reponse.json();
    })
    .then((articlesFromAPI) => {
      articlesFromAPI.forEach((article) => {
        const nonCasseTitle = article.title.toLowerCase(); // le titre de l'article en minuscule
        const nonCasseContent = article.content.toLowerCase();
        const nonCasseTitleInput = title.toLowerCase(); // le input en minuscule
        console.log(nonCasseTitle);
        // console.log(article.title);
        if (
          nonCasseTitle.indexOf(nonCasseTitleInput) !== -1 ||
          nonCasseContent.indexOf(nonCasseTitleInput) !== -1
        ) {
          // tout a été converti en minuscule pour faire des recherche sans casse
          // https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods#trouver_une_sous-cha%C3%AEne_%C3%A0_lint%C3%A9rieur_dune_cha%C3%AEne_et_lextraire
          articles.push(article);
        }
      });
      console.log(articles);
      displayArticles(articles);
    });
}
