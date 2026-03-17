import "@/App.css";

function App() {
  const btnStyle = {
    background: 'linear-gradient(135deg, #1e1410 0%, #0d0907 100%)',
    border: '1px solid rgba(229, 122, 36, 0.25)',
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg"></div>
        
        <div className="profile-photo-container">
          <img 
            src="https://customer-assets.emergentagent.com/job_danca-movimento/artifacts/41gf7gng_Create_a_highend_photography_studio_environment_wi_delpmaspu.png" 
            alt="Jonas Silva" 
            className="profile-photo"
            data-testid="profile-photo"
          />
          <div className="photo-gradient-overlay"></div>
        </div>

        <div className="title-section">
          <h1 className="main-title" data-testid="main-title">JONAS</h1>
          <h1 className="main-title" data-testid="main-title-2">SILVA</h1>
          <p className="subtitle" data-testid="subtitle">Professor de aulas fitness e Zumba.</p>
          <div className="golden-line"></div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="buttons-section">
        <div className="buttons-container">
          
          <a 
            href="https://api.whatsapp.com/send/?phone=5562981725706&text=Ol%C3%A1+Jonas%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+consultoria+fitness.&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-btn"
            style={btnStyle}
            data-testid="btn-whatsapp"
          >
            <div className="btn-border-light"></div>
            <div className="btn-icon">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="btn-text">
              <span className="btn-title">WhatsApp para Consultoria</span>
              <span className="btn-subtitle">Fale comigo</span>
            </div>
          </a>

          <a 
            href="https://zumba.com/p/jonassilvaofi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-btn"
            style={btnStyle}
            data-testid="btn-zumba"
          >
            <div className="btn-border-light"></div>
            <div className="btn-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <div className="btn-text">
              <span className="btn-title">Minha licença Zumba</span>
              <span className="btn-subtitle">Instrutor Oficial</span>
            </div>
          </a>

          <a 
            href="https://instadelivery.com.br/megafriosrioverde" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-btn"
            style={btnStyle}
            data-testid="btn-cupom"
          >
            <div className="btn-border-light"></div>
            <div className="btn-icon">
              <i className="fas fa-ticket-alt"></i>
            </div>
            <div className="btn-text">
              <span className="btn-title">Cupom Mega Frios</span>
              <span className="btn-subtitle">CUPOM JONAS10</span>
            </div>
          </a>

          <a 
            href="https://www.instagram.com/playfit.academias?igsh=MXV6cWRuejlzbTcwNA==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="premium-btn"
            style={btnStyle}
            data-testid="btn-playfit"
          >
            <div className="btn-border-light"></div>
            <div className="btn-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <div className="btn-text">
              <span className="btn-title">Embaixador Play Fit</span>
              <span className="btn-subtitle">@playfit.academias</span>
            </div>
          </a>

        </div>
      </section>

      {/* Differential Section - MODALIDADES */}
      <section className="differential-section">
        <div className="differential-line-top"></div>
        <h2 className="differential-title" data-testid="section-title">MODALIDADES QUE ENSINO</h2>
        <div className="differential-features">
          <div className="differential-feature">
            <div className="feature-dot"></div>
            <span>Funcional</span>
          </div>
          <div className="differential-feature">
            <div className="feature-dot"></div>
            <span>GAP</span>
          </div>
          <div className="differential-feature">
            <div className="feature-dot"></div>
            <span>Bike</span>
          </div>
          <div className="differential-feature">
            <div className="feature-dot"></div>
            <span>Step</span>
          </div>
          <div className="differential-feature">
            <div className="feature-dot"></div>
            <span>Zumba Fitness</span>
          </div>
        </div>
        <div className="differential-highlight">
          <div className="feature-dot"></div>
          <span>Consultoria Fitness</span>
        </div>
        <div className="differential-line-bottom"></div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote" data-testid="footer-quote">"Dançar é vida. Movimento é liberdade."</p>
        <p className="copyright">© 2026 Jonas Silva - Instrutor Fitness & Zumba</p>
      </footer>
    </div>
  );
}

export default App;
