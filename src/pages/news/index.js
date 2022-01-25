import Slider from "react-slick";

const News = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
  };
  return (
    <>
      <div className="news-wrapper">
        <div className="container">
          <div className="title">HABERLER</div>
          <div className="news-slider">
            <Slider {...settings}>
              <div className="slide">
                <img src="images/slide1.png" alt="" />
                <div className="slide-overlay">
                  <h3>
                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                  </h3>
                  <p>
                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                    durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer
                    durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über
                    den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                  </p>
                </div>
              </div>
              <div className="slide">
                <img src="images/slide1.png" alt="" />
                <div className="slide-overlay">
                  <h3>
                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                  </h3>
                  <p>
                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                    durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer
                    durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über
                    den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                  </p>
                </div>
              </div>
              <div className="slide">
                <img src="images/slide1.png" alt="" />
                <div className="slide-overlay">
                  <h3>
                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                  </h3>
                  <p>
                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                    durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer
                    durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über
                    den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                  </p>
                </div>
              </div>
              <div className="slide">
                <img src="images/slide1.png" alt="" />
                <div className="slide-overlay">
                  <h3>
                    Quiere La Boca Exhausta Vid, Kiwi, <br />
                    <span>Piña Y Fugaz Jamón. Fabio Me Exige.</span>
                  </h3>
                  <p>
                    Zwei flinke Boxer jagen die quirlige Eva und ihren Mops
                    durch Sylt. Franz jagt im komplett verwahrlosten Taxi quer
                    durch <br /> Bayern. Zwölf Boxkämpfer jagen Viktor quer über
                    den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="register-banner rounded">
          <div className="overlay">
            <div className="container">
              <div className="text">
                <h3>
                  Sınırsız Eğlenceye Hazır mısın? <br />
                  <span>Hemen ücretsiz kayıt ol ve tadını çıkar.</span>
                </h3>
              </div>
              <div className="buttons">
                <a
                  className="animation-btn animation-btn-blue scrollbar-animation"
                  href=""
                >
                  <span>ÜYE OL</span>
                </a>
                <a
                  className="animation-btn animation-btn-green scrollbar-animation"
                  href=""
                >
                  <span>DAHA FAZLA BİLGİ</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="container">
          <div className="content">
            <div className="blog-post">
              <div className="image">
                <img src="images/blog1.png" alt="" />
              </div>
              <div className="text">
                <h3>Yeni Oyun ArcadeMix Şimdi Riva Netowork'de</h3>
                <span className="color-blue">
                  2 ay önce <b>Duyuru</b> kategorisinde yayınlandı.
                </span>
                <p>
                  ArcadeMix adından da anlaşılacağı üzere birçok mini oyunun bir
                  araya gelmesiyle oluşan bir oyundur. Oyuncular oyuna
                  başladıkları zaman istedikleri mini oyunu oylar ve oy
                  fazlalığına göre istenilen mini oyun başlar. ArcadeMix
                  içerisinde, oyuncularımızın en sevdiği...
                </p>
                <div className="button">
                  <a href="#" className="primary-btn">
                    DEVAMINI OKU
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="image">
                <img src="images/blog2.png" alt="" />
              </div>
              <div className="text">
                <h3>Yeni Oyun ArcadeMix Şimdi Riva Netowork'de</h3>
                <span className="color-green ">
                  2 ay önce <b>Güncelleme</b> kategorisinde yayınlandı.
                </span>
                <p>
                  ArcadeMix adından da anlaşılacağı üzere birçok mini oyunun bir
                  araya gelmesiyle oluşan bir oyundur. Oyuncular oyuna
                  başladıkları zaman istedikleri mini oyunu oylar ve oy
                  fazlalığına göre istenilen mini oyun başlar. ArcadeMix
                  içerisinde, oyuncularımızın en sevdiği...
                </p>
                <div className="button">
                  <a href="#" className="primary-btn green">
                    DEVAMINI OKU
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-post">
              <div className="image">
                <img src="images/blog3.png" alt="" />
              </div>
              <div className="text">
                <h3>Yeni Oyun ArcadeMix Şimdi Riva Netowork'de</h3>
                <span className="color-blue">
                  2 ay önce <b>Duyuru</b> kategorisinde yayınlandı.
                </span>
                <p>
                  ArcadeMix adından da anlaşılacağı üzere birçok mini oyunun bir
                  araya gelmesiyle oluşan bir oyundur. Oyuncular oyuna
                  başladıkları zaman istedikleri mini oyunu oylar ve oy
                  fazlalığına göre istenilen mini oyun başlar. ArcadeMix
                  içerisinde, oyuncularımızın en sevdiği...
                </p>
                <div className="button">
                  <a href="#" className="primary-btn">
                    DEVAMINI OKU
                  </a>
                </div>
              </div>
            </div>
            <div className="paginate">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.895"
                  height="15.791"
                  viewBox="0 0 16.895 15.791"
                >
                  <g
                    id="Group_44"
                    data-name="Group 44"
                    transform="translate(1 1.414)"
                  >
                    <g
                      id="Icon_feather-arrow-right"
                      data-name="Icon feather-arrow-right"
                      transform="translate(8)"
                    >
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M24.481,7.5,18,13.981l6.481,6.481"
                        transform="translate(-18 -7.5)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                    <g
                      id="Icon_feather-arrow-right-2"
                      data-name="Icon feather-arrow-right"
                    >
                      <path
                        id="Path_31-2"
                        data-name="Path 31"
                        d="M24.481,7.5,18,13.981l6.481,6.481"
                        transform="translate(-18 -7.5)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
                &nbsp;ÖNCEKİ
              </a>
              <a href="#">
                SONRAKİ&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.895"
                  height="15.791"
                  viewBox="0 0 16.895 15.791"
                >
                  <g
                    id="Group_413"
                    data-name="Group 413"
                    transform="translate(-1259.099 -2805.604)"
                  >
                    <g
                      id="Icon_feather-arrow-right"
                      data-name="Icon feather-arrow-right"
                      transform="translate(1242.513 2799.519)"
                    >
                      <path
                        id="Path_31"
                        data-name="Path 31"
                        d="M18,7.5l6.481,6.481L18,20.462"
                        transform="translate(0)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                    <g
                      id="Icon_feather-arrow-right-2"
                      data-name="Icon feather-arrow-right"
                      transform="translate(1250.513 2799.519)"
                    >
                      <path
                        id="Path_31-2"
                        data-name="Path 31"
                        d="M18,7.5l6.481,6.481L18,20.462"
                        transform="translate(0)"
                        fill="none"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className="side">
            <div className="discord-join">
              <div className="head">
                <img src="images/Discord-Logo+Wordmark-Color.svg" alt="" />
              </div>
              <div className="body">
                <p>
                  <b>259</b> Çevrimiçi Üye
                </p>
                <a href="#">Katıl</a>
              </div>
            </div>
            <div className="side-box">
              <div className="head">RİVA NETWORK NEDİR</div>
              <div className="body">
                <p>
                  Riva® Network 9 yıldır hizmet veren Türkiye'nin en köklü
                  Minecraft sunucusudur. Riva Network®'da Riva Network® Launcher
                  sayesinde hilesiz ve bedava Minecraft oynayabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="register-banner">
        <div className="overlay">
          <div className="container">
            <div className="text">
              <h3>
                Sınırsız Eğlenceye Hazır mısın? <br />
                <span>Hemen ücretsiz kayıt ol ve tadını çıkar.</span>
              </h3>
            </div>
            <div className="buttons">
              <a
                className="animation-btn animation-btn-blue scrollbar-animation"
                href=""
              >
                <span>ÜYE OL</span>
              </a>
              <a
                className="animation-btn animation-btn-green scrollbar-animation"
                href=""
              >
                <span>DAHA FAZLA BİLGİ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
