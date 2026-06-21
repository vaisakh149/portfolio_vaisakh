const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Connect</h2>

      <p className="contact-description">
        I'm always interested in discussing frontend
        engineering, React applications, enterprise
        dashboards, HMI systems and exciting opportunities.
      </p>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>Contact Information</h3>

          <div className="contact-item">
            <strong>Name</strong>
            <p>Vaisakh M</p>
          </div>

          <div className="contact-item">
            <strong>Designation</strong>
            <p>Senior Engineer</p>
          </div>

          <div className="contact-item">
            <strong>Email</strong>
            <p>
              vaisakh.naraynan149@gmail.com
            </p>
          </div>

          <div className="contact-item">
            <strong>Phone</strong>
            <p>+91 7736126156</p>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <p>Kozhikode / Bangalore, India</p>
          </div>
        </div>

        <div className="contact-card">
          <h3>Professional Profiles</h3>

          <a
            href="https://www.linkedin.com/in/m-vaisakh/"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/vaisakh149"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            GitHub Profile
          </a>

         <a  href="/resume/Vaisakh_M_Resume.pdf"
             download
             className="resume-btn"
          >
               Download Resume
         </a>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;