import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Logo from "./Logo/index";

import pic01 from "../images/pic01.jpg";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";
import pic04 from "../images/pic04.jpg";
import pic05 from "../images/pic05.jpg";
import pic06 from "../images/pic06.jpg";
import pic07 from "../images/pic07.jpg";

const thumbnail = (thumbnail, defaultThumbnail) => thumbnail ? thumbnail.childImageSharp.fluid : defaultThumbnail.fluid;

const Home = ({news, activities, defaultNewsThumbnail}) => {
  const [firstNewsArticle, ...otherNewsArticles] = news.entries;

  console.log(defaultNewsThumbnail);
  const act =[
    {title: "YAMBI 2019",
  excerpt: "header",
  body:
  "Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in, tristique at erat lorem ipsum dolor sit amet lorem ipsum sed consequat magna tempus veroeros lorem sed tempus aliquam lorem ipsum veroeros consequat magna tempus lorem ipsum consequat Phasellus laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit amet mollis tortor congue. Sed quis mauris sit amet magna accumsan tristique. Curabitur leo nibh, rutrum eu malesuada in tristique. ",
 
 image: pic04
 
  },
  
  {title: "L'ACQ SE DOTTE D'UN NOUVEAU SITE WEB!",
  excerpt:
  "L'ACQ a un nouveau site web qui va augmenter la visibilité de l'association et permettre aux membres de consulter les nouvelles de la communauté ainsi les événements à venir.",
  body:"header",
  image: pic06,
madate:"28 Decembre 2019"


  },
  {title: "YAMBI 2019 CE SAMEDI 29 DÉCEMBRE 2018",
  excerpt:
  "L'ACQ vous invite à l'événement YAMBI 2019 pour célébrer ensemble la fin d'année 2018 ainsi que la nouvelle année 2019 à venir.",
  body:"header",
  image: pic06,
  madate:"28 Decembre 2019"
  
  },
  {title: "LES CONGOLAIS DE LA DIASPORA NE VOTERONT PAS.",
  excerpt:
  "La commission electorale nationale indépendante (CENI) a décidé que les congolais de la diaspora ne voteront pas aux prochaines élections pour des raisons logistiques. ",
  body:"header",
  image: pic07,
  madate:"28 Decembre 2019 "
  },
  ];
  const [firstactivite, ...otheractivite] = act;



  return [
    <section key="header" id="header">
      <div className="container">
        <h1 id="logo">
          <Logo />
        </h1>

        <p>L'association des congolais et congolaises de Québec.</p>

        <nav id="nav">
          <ul>
            <li>
              <Link to="/" className="icon fa-home">
                <span>Accueil</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="icon fa-users">
                <span>À propos</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="icon fa-calendar">
                <span>Activités</span>
              </Link>
            </li>
            <li>
              <Link to="/" className="icon fa-newspaper-o">
                <span>Nouvelles</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>,

    <section key="features" id="features">
      <div className="container">
        <header>
          <h2>Pour une communauté vibrante!</h2>
        </header>
        <div className="row aln-center">
          <div className="col-4 col-6-medium col-12-small">
            <section>
              <a href="#" className="image featured">
                <img src={pic01} alt="" />
              </a>
              <header>
                <h3>Notre mission</h3>
              </header>
              <p>Nos objectifs, notre mission</p>
            </section>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section>
              <a href="#" className="image featured">
                <img src={pic02} alt="" />
              </a>
              <header>
                <h3>Nos activités</h3>
              </header>
              <p>Notre engagement sur le terrain.</p>
            </section>
          </div>
          <div className="col-4 col-6-medium col-12-small">
            <section>
              <a href="#" className="image featured">
                <img src={pic03} alt="" />
              </a>
              <header>
                <h3>Impliquez-vous!</h3>
              </header>
              <p>Dévenez bénévoles!</p>
            </section>
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <Link to="/register" className="button icon fa-user-plus">
                  Dévenir member
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>,

    <section key="banner-1" id="banner">
      <div className="container">
        <p>« JUSTICE, PAIX, TRAVAIL »</p>
        <span>La dévise de la République démocratique du Congo.</span>
      </div>
    </section>,

    <section key="news" id="main">
      <div className="container">
        <div className="row">
          <div id="content" className="col-8 col-12-medium">
            <article className="box post">
              <header>
                <h2>Dernières nouvelles!</h2>
              </header>
              <a href={firstNewsArticle.path} className="image featured">

                <Img fluid={thumbnail(firstNewsArticle.thumbnail, defaultNewsThumbnail)} />
              </a>
              <h3>{firstNewsArticle.title}</h3>

              <div dangerouslySetInnerHTML={{__html: firstNewsArticle.content}} />
              {news.hasMore &&
                <ul className="actions">
                  <li>
                    <a href="#" className="button icon fa-file">
                      Voir toutes les nouvelles
                    </a>
                  </li>
                </ul>
              }
            </article>
          </div>

          <div id="sidebar" className="col-4 col-12-medium">
            <section>
              <ul className="divided">
                {otherNewsArticles.map(article => (
                  <li key={article.title}>
                    <article className="box highlight">
                      <header>
                        <h3>
                          <a href={article.path}>{article.title}</a>
                        </h3>
                      </header>
                      <a href={article.path} className="image left">
                        <Img fluid={thumbnail(article.thumbnail, defaultNewsThumbnail)} />
                      </a>
                      <p>{article.excerpt}</p>
                      <ul className="actions">
                        <li>
                          <a href={article.path} className="button icon fa-file">
                            Continuer à lire
                          </a>
                        </li>
                      </ul>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>,

    <section key="banner-2" id="banner">
      <div className="container">
        <p>« DON DE DIEU FERAY VALOIR »</p>
        <span>La dévise de la ville de Québec.</span>
      </div>
    </section>,

    <section key="act" id="main">
      <div className="container">
        <div className="row">
          <div id="content" className="col-8 col-12-medium">
            <article className="box post">
              <header>
                <h2>Les activités à venir</h2>
              </header>
              <a href="#" className="image featured">
                <img src={firstactivite.image} alt="" />
              </a>
              <h3>{firstactivite.title}</h3>
              <p>
              {firstactivite.body}
              </p>
              <ul className="actions">
                <li>
                  <a href="#" className="button icon fa-file">
                    Continuer à lire
                  </a>
                </li>
              </ul>
            </article>
          </div>

          <div id="sidebar" className="col-4 col-12-medium">
            <section>
              <ul className="divided">
                {otheractivite.map(active =>( 
                <li key={active.title}>
                  <article className="box excerpt">
                    <header>
                      <span className="date">{active.madate}</span>
                      <h3>
                        <a href="#">{active.title}</a>
                      </h3>
                       </header>
                    <a href="#" className="image left">
                          <img src={active.image} alt="" />
                        </a>
                    <p>
                    {active.excerpt}
                    </p>
                  </article>
                </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>,

    <section key="footer" id="footer">
      <div className="container">
        <header>
          <h2>
            Questions or commentaires? <strong>Contactez-nous:</strong>
          </h2>
        </header>
        <div className="row">
          <div className="col-6 col-12-medium">
            <section>
              <form method="post" action="#">
                <div className="row gtr-50">
                  <div className="col-6 col-12-small">
                    <input name="name" placeholder="Nom" type="text" />
                  </div>
                  <div className="col-6 col-12-small">
                    <input name="email" placeholder="Email" type="text" />
                  </div>
                  <div className="col-12">
                    <textarea name="message" placeholder="Message" />
                  </div>
                  <div className="col-12">
                    <a
                      href="#"
                      className="form-button-submit button icon fa-envelope"
                    >
                      Envoyer
                    </a>
                  </div>
                </div>
              </form>
            </section>
          </div>
          <div className="col-6 col-12-medium">
            <section>
              <div className="row">
                <div className="col-6 col-12-small">
                  <ul className="icons">
                    <li className="icon fa-home">
                      Limoilou
                      <br />
                      Québec, QC A1B 2C3
                      <br />
                      CANADA
                    </li>
                    <li className="icon fa-phone">418-561-1966</li>
                    <li className="icon fa-envelope">
                      <a href="#">acq.conseil@yahoo.ca</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-12-small">
                  <ul className="icons">
                    <li className="icon fa-facebook">
                      <a href="https://www.facebook.com/communautecongolaisequebec">
                        Communauté Congolaise de Québec
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div id="copyright" className="container">
        <ul className="links">
          <li>
            &copy; Association des congolais de Québec. Tous droits réservés.
          </li>
          <li>
            Dévéloppé par: <a href="http://www.didia.me">Didia</a>
          </li>
        </ul>
      </div>
    </section>
  ];
};
export default Home;
