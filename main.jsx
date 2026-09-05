import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const team = [
  ['ceo.png', 'Ebenezer Tei Karrison.', 'CEO & Founder'],
  ['manager.png', 'Emmanuel Karrison.', 'Manager'],
  ['marjecter.png', 'Joel Karrison.', 'Marketing Director'],
];

const specialties = [
  ['Sports Rehabilitation', 'Specialized treatment for athletes and active individuals recovering from sports-related injuries.', ['Rapid recovery pathways', 'Performance coaching', 'Kinematic screenings']],
  ['Post-Surgery Recovery', 'Comprehensive rehabilitation programs designed to help patients recover from surgical procedures.', ['Doctor-coordinated care plans', 'Gradual loaded movements', 'Pain mitigation therapies']],
  ['Chronic Pain Management', 'Effective strategies to manage and reduce chronic pain, improving your quality of life.', ['Neuromuscular education', 'Postural realignment', 'Self-management tools']],
  ['Manual Therapy', 'Hands-on techniques to address musculoskeletal issues and promote healing.', ['Direct joint mobilization', 'Myofascial trigger point release', 'Immediate stiffness relief']],
];

function goToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  return (
    <>
      <nav>
        <button className="logo-button" onClick={() => goToSection('home')} aria-label="Go to home"><img src="/HTML/am.png" alt="Akwaba logo" className="logo" /></button>
        <ul>
          {['Services', 'About', 'Contact', 'FAQ'].map((item) => <li key={item}><button className="nav-link" onClick={() => goToSection(item.toLowerCase())}>{item}</button></li>)}
          <li><button onClick={() => goToSection('contact')}>Get Started &rarr;</button></li>
        </ul>
      </nav>

      <main>
        <section className="container" id="home">
          <div className="card-1">
            <h1>Reclaim your <br /> movement. <br />Live pain-free.</h1>
            <p>Our expert physiotherapists build tailored recovery programs to help you regain your mobility and live a pain-free life.</p>
            <div className="button-group"><button>Book Consultation &rarr;</button><button className="light-button">Explore Services &rarr;</button></div>
          </div>
          <div className="card-2"><img src="/HTML/a.png" alt="Team member" /></div>
        </section>

        <section className="cases"><div className="cases-grid">{[['12,000+', 'Patients welcomed'], ['98.4%', 'Clinical success rate'], ['15+', 'Expert therapists'], ['12+', 'Years in practice']].map(([value, label]) => <div className="case-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>

        <section className="specialities" id="services"><h1>Physiotherapy treatments <br /> structured around your unique <br /> physical needs</h1><div className="specialities-grid">{specialties.map(([title, description, items]) => <article key={title}><h2>{title}</h2><p>{description}</p><ul className="speciality-list">{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

        <section className="journey"><h1>The Akwaba path to lasting recovery</h1><div className="cards">{['Comprehensive Assessment', 'Tailored Rehabilitation', 'Interactive Home Guide', 'Maintenance & Prevention'].map((title, index) => <article key={title}><button>{String(index + 1).padStart(2, '0')}</button><h2>{title}</h2><p>Ongoing, personalized guidance designed to keep your recovery moving securely and confidently.</p></article>)}</div></section>

        <section className="about" id="about"><div className="text"><h1>Empathetic Care backed by physical medicine</h1><p>We combine the latest in physical medicine with a compassionate, patient-centered approach to help you achieve your recovery goals. Our team of expert physiotherapists provides personalized care that addresses your unique needs and promotes long-term wellness.</p><button>Read Our Research &rarr;</button></div><div className="img">{team.map(([image, name, role]) => <div className="team-member" key={name}><img src={`/HTML/${image}`} alt="" /><strong>{name}</strong><span>{role}</span></div>)}</div></section>

        <section className="contact-section" id="contact"><h1>Contact Akwaba Physio Center</h1><p>Ready to start your recovery? Book a consultation with our care team.</p><button onClick={() => window.location.href = 'mailto:hello@akwabaphysio.com'}>Email Us &rarr;</button></section>

        <section className="faq-section" id="faq"><h1>Frequently Asked Questions</h1><details><summary>How do I book a consultation?</summary><p>Use the contact section to email our care team and request an appointment.</p></details><details><summary>What should I bring to my first visit?</summary><p>Bring any relevant medical notes, comfortable clothing, and your questions about recovery.</p></details></section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
