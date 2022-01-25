const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-col">
            <div className="logo">
              <img src="images/footer-logo.svg" alt="" />
            </div>
            <b>&copy; 2021 riva network®</b>
          </div>
          <div className="footer-col">
            <div className="title">Yasal</div>
            <div className="links">
              <a href="#">
                Hizmet Şartları Ve <br />
                Üyelik Sözleşmesi
              </a>
              <a href="#">Gizlilik Politikası</a>
              <a href="#">K.V.K.K.</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="title">Yararlı Linkler</div>
            <div className="links">
              <a href="#">Minecraft Wiki</a>
              <a href="#">Riva Community</a>
              <a href="#">Ekibe Katıl</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="title">Destek</div>
            <div className="links">
              <a href="#">Sıkça Sorulan Sorular</a>
              <a href="#">Yardım Merkezi</a>
              <a href="#">İçerik Üretici Politikası</a>
              <a href="#">Kurallar</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="title">Kısayollar</div>
            <div className="links">
              <a href="#">Market</a>
              <a href="#">Sıralamalar</a>
              <a href="#">Kod Bozdur</a>
              <a href="#">Kayıt Ol</a>
            </div>
          </div>
          <div className="footer-col">
            <div className="title">Sosyal Medya</div>
            <span>Bizi Takip Edin</span>
            <div className="socials">
              <a href="#">
                <img src="images/discord-social.svg" alt="" />
              </a>
              <a href="#">
                <img src="images/youtube.svg" alt="" />
              </a>
              <a href="#">
                <img src="images/instagram.svg" alt="" />
              </a>
              <a href="#">
                <img src="images/facebook.svg" alt="" />
              </a>
            </div>
            <a
              className="animation-btn animation-btn-blue scrollbar-animation"
              href=""
            >
              <span>MINECRAFT İNDİR</span>
            </a>
          </div>
        </div>
        <div className="footer-apps">
          <a href="#">
            <img
              src="images/App-Store-hemen-indir-button-logo-icon-transparan-PNG-gorseli_1-300x96.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              src="images/Google-Play-hemen-indir-button-logo-icon-transparan-PNG-gorseli_1-300x96.png"
              alt=""
            />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
