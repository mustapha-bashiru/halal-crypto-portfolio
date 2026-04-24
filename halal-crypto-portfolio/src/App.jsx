const screenshots = [
  {
    title: 'Dashboard Overview',
    desc: 'A clean Streamlit dashboard showing project metrics and summary.',
    src: '/assets/images/dashboard.png',
  },
  {
    title: 'Filtering System',
    desc: 'Interactive filtering by classification, risk range, and search.',
    src: '/assets/images/filter.png',
  },
  {
    title: 'Coin Breakdown',
    desc: 'Explainable AI view showing why a coin received its classification.',
    src: '/assets/images/coin_breakdown.png',
  },
  {
    title: 'Feature Importance',
    desc: 'Model-level explanation of the most influential features.',
    src: '/assets/images/feature_importance.png',
  },
];

const features = [
  'Risk scoring based on volatility, speculation, and liquidity',
  'Islamic finance-inspired crypto screening categories',
  'Explainable coin-level breakdown for transparent decisions',
  'Feature importance view for model interpretability',
  'Interactive dashboard built with Streamlit',
  'Structured data science pipeline from raw data to insights',
];

const pipeline = [
  'Data Collection',
  'Data Cleaning',
  'Feature Engineering',
  'Model Training',
  'Classification',
  'Explainability',
];

const stack = ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Matplotlib'];

function App() {
  return (
    <div className="page-shell">
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Data Science • Islamic Finance • Machine Learning</span>
            <h1 className="hero-title">Halal Crypto Intelligence System</h1>
            <p className="hero-copy">
              A portfolio-ready data science project that screens cryptocurrency assets using engineered
              financial indicators inspired by Islamic finance principles.
            </p>
            <div className="button-row">
              <a href="#project" className="btn btn-primary">View Project</a>
              <a href="#screenshots" className="btn btn-secondary">See Screenshots</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="image-frame">
              <img src="/assets/images/dashboard.png" alt="Halal Crypto dashboard overview" />
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="container section-gap">
        <div className="three-col-grid">
          <article className="card">
            <p className="section-label">Problem</p>
            <h2 className="card-title">Why this project matters</h2>
            <p className="card-copy">
              Many Muslim investors lack a transparent, data-driven framework for evaluating cryptocurrency assets.
              This project addresses that gap through structured screening and explainable analytics.
            </p>
          </article>

          <article className="card">
            <p className="section-label">Approach</p>
            <h2 className="card-title">What the system does</h2>
            <p className="card-copy">
              It transforms raw crypto market data into engineered indicators, computes a composite risk score,
              and classifies coins into halal candidate, doubtful, or high-risk categories.
            </p>
          </article>

          <article className="card">
            <p className="section-label">Outcome</p>
            <h2 className="card-title">What makes it strong</h2>
            <p className="card-copy">
              This is more than a dashboard. It demonstrates end-to-end data analysis, machine learning,
              explainability, and domain-aware problem framing for academic and portfolio use.
            </p>
          </article>
        </div>
      </section>

      <section className="container section-gap top-pad-small">
        <div className="two-col-grid">
          <article className="card padded-card">
            <h3 className="section-heading">Core Features</h3>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature} className="feature-item">
                  <span className="feature-dot" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="card padded-card">
            <h3 className="section-heading">Tech Stack</h3>
            <div className="tag-row">
              {stack.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>

            <h3 className="section-heading pipeline-title">Pipeline</h3>
            <div className="pipeline-grid">
              {pipeline.map((step, index) => (
                <div key={step} className="step-card">
                  <span className="step-label">Step {index + 1}</span>
                  <span className="step-title">{step}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="screenshots" className="container section-gap">
        <div className="section-intro">
          <p className="section-label">Screenshots</p>
          <h2 className="section-title">Project Interface</h2>
          <p className="section-copy">
            These views highlight the dashboard, filtering system, explainable breakdown, and feature importance output.
          </p>
        </div>

        <div className="screenshot-grid">
          {screenshots.map((shot) => (
            <article key={shot.title} className="card padded-card">
              <div className="image-frame">
                <img src={shot.src} alt={shot.title} />
              </div>
              <h3 className="card-title screen-title">{shot.title}</h3>
              <p className="card-copy">{shot.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-gap top-pad-small">
        <article className="card padded-card">
          <p className="section-label">Academic Value</p>
          <h2 className="section-title">Why this project stands out</h2>
          <div className="three-col-grid inner-grid-gap">
            <div className="inner-card">
              <h3 className="inner-card-title">Interdisciplinary thinking</h3>
              <p className="card-copy">
                It combines data science, fintech, and Islamic finance into a single coherent analytical system.
              </p>
            </div>
            <div className="inner-card">
              <h3 className="inner-card-title">Explainable outputs</h3>
              <p className="card-copy">
                It does not stop at prediction. It also shows why a coin received its classification.
              </p>
            </div>
            <div className="inner-card">
              <h3 className="inner-card-title">Portfolio readiness</h3>
              <p className="card-copy">
                It is presented as a full product with a dashboard, visual outputs, model results, and public-facing narrative.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="container section-gap">
        <div className="two-col-grid">
          <article className="card padded-card">
            <h2 className="section-title">Project Summary</h2>
            <p className="summary-copy">
              The Halal Crypto Intelligence System is a prototype screening framework that evaluates cryptocurrency assets
              through engineered financial indicators and interpretable machine learning outputs. It is designed as a
              research-oriented project and a professional portfolio asset.
            </p>
          </article>

          <article className="card padded-card accent-card">
            <h2 className="section-title">Built by Bashiru Mustapha</h2>
            <p className="summary-copy">
              Data analysis, data science, backend development, and Islamic fintech product thinking combined into one
              portfolio-ready project for academic applications and professional credibility.
            </p>
            <div className="button-row top-margin">
              <a href="#screenshots" className="btn btn-primary">Review Visuals</a>
              <a href="#project" className="btn btn-secondary">Read Overview</a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
