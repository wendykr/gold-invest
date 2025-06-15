import "./Blog.scss";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="blog__container">
        <h2 className="blog__title title">Přečtěte si z našeho blogu</h2>
        <div className="article">
          <div className="article__container">
            <img
              src="/article-01.jpg"
              alt="article img"
              className="article__img"
            />
            <div className="article__text">
              <p className="article__text--date">20.12.2021</p>
              <h3 className="article__text--title">Lorem Ipsum</h3>
              <div className="article__text--meta">
                <img
                  src="/profile.svg"
                  className="article__text--icon"
                  alt="user icon"
                />
                <p className="article__text--author">Lukáš</p>
                <p className="article__text--separator">I</p>
                <p className="article__text--comment">0 Coments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="article">
          <div className="article__container">
            <img
              src="/article-02.jpg"
              alt="article img"
              className="article__img"
            />
            <div className="article__text">
              <p className="article__text--date">20.12.2021</p>
              <h3 className="article__text--title">Lorem Ipsum</h3>
              <div className="article__text--meta">
                <img
                  src="/profile.svg"
                  className="article__text--icon"
                  alt="user icon"
                />
                <p className="article__text--author">Lukáš</p>
                <p className="article__text--separator">I</p>
                <p className="article__text--comment">0 Coments</p>
              </div>
            </div>
          </div>
        </div>
        <div className="article">
          <div className="article__container">
            <img
              src="/article-03.jpg"
              alt="article img"
              className="article__img"
            />
            <div className="article__text">
              <p className="article__text--date">20.12.2021</p>
              <h3 className="article__text--title">Lorem Ipsum</h3>
              <div className="article__text--meta">
                <img
                  src="/profile.svg"
                  className="article__text--icon"
                  alt="user icon"
                />
                <p className="article__text--author">Lukáš</p>
                <p className="article__text--separator">I</p>
                <p className="article__text--comment">0 Coments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
