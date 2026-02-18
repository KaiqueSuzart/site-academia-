import fundoMaps from '../assets/fundomaps.png';

function Location() {
  return (
    <section style={{
      width: '100%',
      minHeight: '600px',
      background: `url(${fundoMaps}) center/cover no-repeat`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '64px 0 0 0',
      marginBottom: 0,
      border: 'none',
    }}>
      <div data-reveal="fade-up" style={{
        color: '#FF2222',
        fontWeight: 900,
        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
        textTransform: 'uppercase',
        letterSpacing: 2,
        textAlign: 'center',
        marginBottom: 32,
        textShadow: '2px 4px 24px #000, 0 2px 8px #fff2',
        lineHeight: 1.18,
        fontFamily: 'Oswald, Arial, sans-serif',
        wordSpacing: 4,
      }}>
        LOCALIZAÇÃO • BRABUSFIT AMERICAN<br />
        <span style={{ fontWeight: 800, fontSize: 'clamp(1.2rem, 2.5vw, 2.2rem)', letterSpacing: 1, color: '#FF2222', textShadow: '1px 2px 8px #000' }}>
          AO LADO DA AV. GIOVANNI GRONCHI
        </span>
      </div>
      <div data-reveal="zoom-in" style={{
        background: 'rgba(255,255,255,0.98)',
        borderRadius: 18,
        boxShadow: '0 4px 32px #0008',
        padding: 18,
        maxWidth: 900,
        width: '90%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <iframe
          title="Localização BrabusFit American"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.963073964282!2d-46.73694462467044!3d-23.57085707879795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50b2e2e2e2e2%3A0x1234567890abcdef!2sRua%20Wilson%2C%20147%20-%20Vila%20Andrade%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0, width: '100%', maxWidth: '800px', height: '400px', borderRadius: '16px', boxShadow: '0 4px 24px #1A237E22', marginBottom: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Location; 