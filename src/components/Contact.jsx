import { Mail, Phone, MessageCircle, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header" data-animate>
          <span className="section-tag">05 / Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Open to tech collaborations, automation discussions, and exciting opportunities.</p>
        </div>
        <div className="contact-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          
          <div className="contact-card" data-animate>
            <div className="contact-icon-wrap">
              <Mail className="accent" size={26} />
            </div>
            <h3>Email</h3>
            <a href="mailto:zxmilu729@gmail.com" className="contact-link">zxmilu729@gmail.com</a>
          </div>
          
          <div className="contact-card" data-animate>
            <div className="contact-icon-wrap">
              <Phone className="accent" size={26} />
            </div>
            <h3>WhatsApp</h3>
            <a href="tel:01309473872" className="contact-link">01309473872</a>
          </div>
          
          <div className="contact-card" data-animate>
            <div className="contact-icon-wrap">
              <MessageCircle className="accent" size={26} />
            </div>
            <h3>Facebook</h3>
            <a href="https://www.facebook.com/share/1GpQ9tUgBx/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="contact-link">Connect on FB</a>
          </div>
          
          <div className="contact-card" data-animate>
            <div className="contact-icon-wrap">
              <Briefcase className="accent" size={26} />
            </div>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/obaidul-islam-milu?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="contact-link">Connect on LinkedIn</a>
          </div>
          
        </div>

        <div className="contact-cta" data-animate>
          <p>Interested in collaborating with Bhitti Bhai?</p>
          <a href="mailto:bhittibhaix@gmail.com" className="btn btn-glow" id="btn-send-email">bhittibhaix@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
