function Contacto() {
  const tarjetas = [
    {
      id: 1,
      tag: 'TELEPHONE',
      icono: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ee8931" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      titulo: '+1 (800) 555-0199',
      subtitulo: 'Mon - Fri, 09:00 - 18:00 PST',
    },
    {
      id: 2,
      tag: 'EMAIL',
      icono: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ee8931" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      titulo: 'sys.admin@techstore.io',
      subtitulo: 'Expect a response within 2 hrs.',
    },
    {
      id: 3,
      tag: 'CENTRAL OFFICE',
      icono: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ee8931" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      titulo: 'Sector 4, Nexus Tower',
      subtitulo: '1024 Precision Way, Silicon Valley, CA 94025',
    },
  ]

  return (
    <div style={styles.page}>
      <div style={styles.mapOverlay}>
        <img src="/map_bg.jpg" alt="Map Overlay" style={styles.mapImage} />
        <div style={styles.mapGradient} />
      </div>

      <div style={styles.contentContainer}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Get in Touch</h1>
          <p style={styles.subtitle}>
            Engineering precise communication channels for immediate support and strategic inquiries.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={styles.grid}>
          {tarjetas.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.cardHeader}>
                {item.icono}
                <span style={styles.tag}>{item.tag}</span>
              </div>
              <h3 style={styles.cardTitle}>{item.titulo}</h3>
              <p style={styles.cardSub}>{item.subtitulo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    position: 'relative',
    backgroundColor: '#120e0c',
    minHeight: 'calc(100vh - 130px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '60px 48px',
  },
  mapOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.35,
    filter: 'contrast(1.2) brightness(0.8)',
  },
  mapGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(18,14,12,0.4) 0%, rgba(18,14,12,0.95) 85%)',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1280px',
    width: '100%',
    margin: '0 auto',
    textAlign: 'left',
  },
  header: {
    marginBottom: '60px',
    maxWidth: '600px',
  },
  title: {
    fontSize: '60px',
    fontWeight: '700',
    color: '#ee8931',
    marginBottom: '16px',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: '17px',
    lineHeight: '1.5',
    color: '#a19a95',
    fontWeight: '400',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: 'rgba(88, 85, 87, 0.55)',
    backdropFilter: 'blur(12px)',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '32px 28px',
    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
    textAlign: 'left',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '24px',
  },
  tag: {
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1.2px',
    color: '#d6d0cb',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '8px',
    letterSpacing: '-0.3px',
  },
  cardSub: {
    fontSize: '14px',
    color: '#b0a9a4',
  },
}

export default Contacto
