import React from "react";
import "./Section.scss";

function Section() {
  return (
    <>
      <section className="section1">
        <div className="track-usage">
          <h2>Keep track of</h2>
          <h2>all usage</h2>
          <p>Tracking AI usage for Efficient</p>
          <p>Management and Comprehensive Oversight.</p>
          <ul>
            <li>✔ Comprehensive Usage Monitoring</li>
            <li>✔ Efficient Management</li>
            <li>✔ Enhanced Oversight</li>
          </ul>
          <button className="watchlist-btn">Go to Watchlist →</button>
        </div>
        <div>
          <img
            className="manage-dashboard"
            src="/assets/images/manage-dashboard.png"
            alt="manage-dashboard"
          />
        </div>
      </section>

      <section className="section2">
        <div
          className="feature"
          style={{
            background:
              "url('/assets/images/shape-one.png') no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <img src="/assets/images/icons-1.png" alt="Real-Time Tracking" />
          <h3>Real-Time Tracking</h3>
          <p>
            Monitor usage as it happens to stay updated with the latest data.
          </p>
        </div>

        <div
          className="feature"
          style={{
            background:
              "url('/assets/images/shape-one.png') no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <img src="/assets/images/icons-2.png" alt="Detailed Reporting" />
          <h3>Detailed Reporting</h3>
          <p>
            Generate in-depth reports that provide insights into usage patterns
            and trends.
          </p>
        </div>

        <div
          className="feature"
          style={{
            background:
              "url('/assets/images/shape-one.png') no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <img src="/assets/images/icons-3.png" alt="Customizable Alerts" />
          <h3>Customizable Alerts</h3>
          <p>
            Set up notifications for specific usage thresholds or unusual
            activity.
          </p>
        </div>
      </section>

      <section className="section3">
        <div className="card">
          <h3>Timely alerts & sync ups</h3>
          <p>
            Pick winning stocks confidently with 130+ filters or create your own
            goal-based screens.
          </p>
          <div className="notification">
            <img src="/assets/images/bar-code-scan.png" alt="bar-code-scan" />
          </div>
        </div>

        <div className="card">
          <h3>AI suggested optimisation</h3>
          <p>
            Pick winning stocks confidently with 130+ filters or create your own
            goal-based screens.
          </p>
          <div className="ai-graphic">
            <img src="/assets/images/list-of-media.png" alt="list-of-media" />
          </div>
        </div>

        <div className="card">
          <h3>Encrypted integrations across</h3>
          <p>
            Pick winning stocks confidently with 130+ filters or create your own
            goal-based screens.
          </p>
          <div className="secure-analysis">
            <img src="/assets/images/bar-code-scan.png" alt="bar-code-scan" />
          </div>
        </div>
      </section>

      <section className="section4">
        <h2>Track what matters to you</h2>
        <div className="cards-container">
          <div className="card transactions">
            <h3>Transactions</h3>
            <p>
              Pick winning stocks confidently with 130+ filters or create your
              own.
            </p>
            <div className="card-image">
              <img src="/assets/images/history-card.png" alt="history-card" />
            </div>
          </div>

          <div className="card friends">
            <h3>Friends and family</h3>
            <p>
              Pick winning stocks confidently with 130+ filters or create your
              own.
            </p>
            <div className="card-image">
              <img src="/assets/images/combine-card.png" alt="combine-card" />
            </div>
          </div>

          <div className="card reminders">
            <h3>Timely reminders</h3>
            <p>
              Pick winning stocks confidently with 130+ filters or create your
              own.
            </p>
            <div className="card-image">
              <img src="/assets/images/date-card.png" alt="date-card" />
            </div>
          </div>
        </div>
      </section>

      <section className="section5">
        <h2>Focus on what matters</h2>
        <p>Checkout how both end of forms look like for our users</p>

        <div className="toggle-buttons">
          <button className="active">Creator View</button>
          <button>End User View</button>
        </div>

        <div className="video-container">
          <img src="/assets/images/lapbanner.png" alt="Video Preview" />
        </div>

        <div className="brand-logos">
          <img src="/assets/images/Item -6.png" alt="Netflix" />
          <img src="/assets/images/Item -4.png" alt="Disney" />
          <img src="/assets/images/Item -2.png" alt="Airbnb" />
          <img src="/assets/images/Item -3.png" alt="Microsoft" />
          <img src="/assets/images/Item-1.png" alt="Duolingo" />
          <img src="/assets/images/Item -6.png" alt="Netflix" />
          <img src="/assets/images/Item -4.png" alt="Disney" />
        </div>

        <div className="testimonials">
          <div className="testimonial">
            <p>
              "We were one of the early adopters of Metaforrms. More than the
              lead quality, the quality of conversations with our prospects
              improved. Metaforrms pays for itself in the first few days! I
              don’t see us not using Metaforrms in near future."
            </p>
            <h4>Rohin Singh</h4>
            <span>Chief Integrating Officer</span>
          </div>

          <div className="testimonial">
            <p>
              "We were one of the early adopters of Metaforrms. More than the
              lead quality, the quality of conversations with our prospects
              improved. Metaforrms pays for itself in the first few days! I
              don’t see us not using Metaforrms in near future."
            </p>
            <h4>Rohin Singh</h4>
            <span>Chief Integrating Officer</span>
          </div>

          <div className="testimonial">
            <p>
              "We were one of the early adopters of Metaforrms. More than the
              lead quality, the quality of conversations with our prospects
              improved. Metaforrms pays for itself in the first few days! I
              don’t see us not using Metaforrms in near future."
            </p>
            <h4>Rohin Singh</h4>
            <span>Chief Integrating Officer</span>
          </div>
        </div>
      </section>

      <section className="section6">
        <div className="Metaforms">
        <h2>Focus on what matters</h2>

          <img src="/assets/images/lapbanner.png" alt="Metaforms" />
        </div>
      </section>

      <section className="sectionSub">
        <div className="left-card">
          <img
            src="/assets/images/Ranking Position.png"
            alt="Ranking Position"
            className="ranking-img"
          />
          <img
            src="/assets/images/pro-certificate.png"
            alt="Pro certificate"
            className="certificate-img"
          />
        </div>

        <div className="stats-right">
          <div className="stat-item">
            <h2>40,00,000+</h2>
            <p>USERS LOVE TICKERTAPE</p>
          </div>
          <div className="stat-item">
            <h2>4.6</h2>
            <p>GOOGLE PLAY RATING</p>
          </div>
          <div className="stat-item">
            <h2>100cr+</h2>
            <p>TRANSACTION VOLUME</p>
          </div>
        </div>
      </section>

      <section className="section7">
        <div className="container">
          <h2 className="title">Blogs and newsroom updates</h2>
          <p className="subtitle">
            A community for India's investors to hang out and talk about
            investments, personal finance
          </p>

          <div className="news-grid">
            <div className="news-card">
              <img src="/assets/images/image-section-one.png" alt="News 1" />
              <div className="overlay">
                <h3>Timely alerts & sync ups</h3>
                <p>
                  Pick winning stocks confidently with 130+ filters or create
                  your own goal-based screensPick winning stocks confidently
                  with 130+ filters or create your own goal-based screen
                </p>
              </div>
            </div>

            <div className="news-card small">
              <img src="/assets/images/image-section-two.png" alt="News 2" />
              <div className="overlay">
                <h3>Timely alerts</h3>
                <p>
                  Pick winning stocks confidently with 130+ filters or create
                  your own goal-based screens
                </p>
              </div>
            </div>

            <div className="news-card wide">
              <img src="/assets/images/image-section-three.png" alt="News 3" />
              <div className="overlay">
                <h3>Timely alerts & sync ups</h3>
                <p>
                  Pick winning stocks confidently with 130+ filters or create
                  your own goal-based screensPick winning stocks confidently
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
