import { useNavigate } from 'react-router-dom'

function Inicio() {
  const navigate = useNavigate()

  const categorias = [
    {
      id: 1,
      titulo: 'Laptops',
      descripcion: 'Estaciones de trabajo portátiles para renderizado y desarrollo intensivo.',
      imagen: '/laptop.jpg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="20" x2="22" y2="20"></line>
        </svg>
      )
    },
    {
      id: 2,
      titulo: 'Smartphones',
      descripcion: 'Comunicación encriptada y procesamiento neuronal en la palma de la mano.',
      imagen: '/smartphone.jpg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: 3,
      titulo: 'Audio',
      descripcion: 'Fidelidad acústica sin concesiones con cancelación activa de ruido adaptativa.',
      imagen: '/audio.jpg',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
        </svg>
      )
    },
  ]

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          <div style={styles.heroTextContent}>
            <h1 style={styles.heroTitle}>
              Ingeniería del<br />Mañana
            </h1>
            <p style={styles.heroDescription}>
              Hardware de alto rendimiento diseñado con precisión milimétrica. Potencia pura para profesionales exigentes.
            </p>
            <div style={styles.heroButtons}>
              <button
                style={styles.primaryBtn}
                onClick={() => navigate('/formulario')}
              >
                EXPLORAR CATÁLOGO
              </button>
              <button
                style={styles.secondaryBtn}
                onClick={() => navigate('/informacion')}
              >
                VER ESPECIFICACIONES
              </button>
            </div>
          </div>

          <div style={styles.heroImageWrapper}>
            <div style={styles.cardImageContainer}>
              <div style={styles.imageHeaderTag}>Inicio - TechStore [Minimal Copper]</div>
              <img
                src="/hero_chip.jpg"
                alt="TRX-9000 Core CPU"
                style={styles.heroImg}
              />
              <div style={styles.chipBadge}>TRX-9000 CORE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías Destacadas */}
      <section style={styles.categoriesSection}>
        <div style={styles.categoriesContainer}>
          <div style={styles.categoriesHeader}>
            <h2 style={styles.sectionTitle}>Categorías Destacadas</h2>
            <button style={styles.verTodoBtn} onClick={() => navigate('/informacion')}>
              VER TODO <span>→</span>
            </button>
          </div>

          <div style={styles.grid}>
            {categorias.map((cat) => (
              <div key={cat.id} style={styles.card} onClick={() => navigate('/informacion')}>
                <div style={styles.cardMediaWrapper}>
                  <img src={cat.imagen} alt={cat.titulo} style={styles.cardMedia} />
                </div>
                <div style={styles.cardContent}>
                  <div style={styles.cardTitleRow}>
                    <span style={styles.cardIcon}>{cat.icon}</span>
                    <h3 style={styles.cardTitle}>{cat.titulo}</h3>
                  </div>
                  <p style={styles.cardDescription}>{cat.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: '#0f0b09',
    color: '#ffffff',
    flex: 1,
  },
  heroSection: {
    padding: '70px 48px 90px',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  heroContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '48px',
    flexWrap: 'wrap',
  },
  heroTextContent: {
    flex: '1 1 500px',
    maxWidth: '560px',
    textAlign: 'left',
  },
  heroTitle: {
    fontSize: '64px',
    lineHeight: '1.08',
    fontWeight: '700',
    letterSpacing: '-1.5px',
    color: '#ffffff',
    marginBottom: '24px',
  },
  heroDescription: {
    fontSize: '17px',
    lineHeight: '1.6',
    color: '#a19a95',
    marginBottom: '36px',
    fontWeight: '400',
  },
  heroButtons: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#ee8931',
    color: '#0d0805',
    border: 'none',
    padding: '14px 28px',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.8px',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#e0dedc',
    border: '1px solid #3c3430',
    padding: '14px 28px',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.8px',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
  },
  heroImageWrapper: {
    flex: '1 1 450px',
    maxWidth: '540px',
  },
  cardImageContainer: {
    position: 'relative',
    borderRadius: '4px',
    overflow: 'hidden',
    border: '1px solid #2d2520',
    backgroundColor: '#0a0705',
    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
  },
  imageHeaderTag: {
    position: 'absolute',
    top: '12px',
    right: '16px',
    fontSize: '11px',
    color: '#8a827c',
    letterSpacing: '0.2px',
    zIndex: 2,
  },
  heroImg: {
    width: '100%',
    height: '380px',
    objectFit: 'cover',
    display: 'block',
  },
  chipBadge: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    backgroundColor: '#26201e',
    border: '1px solid #3a322e',
    color: '#d4ceca',
    padding: '6px 14px',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.8px',
    borderRadius: '2px',
  },
  categoriesSection: {
    padding: '40px 48px 90px',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  categoriesContainer: {
    width: '100%',
  },
  categoriesHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '28px',
    borderBottom: '1px solid #221a16',
    paddingBottom: '16px',
  },
  sectionTitle: {
    fontSize: '32px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    color: '#ffffff',
  },
  verTodoBtn: {
    background: 'none',
    border: 'none',
    color: '#ee8931',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '0.8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#2b231f',
    borderRadius: '4px',
    overflow: 'hidden',
    border: '1px solid #3d332d',
    cursor: 'pointer',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  cardMediaWrapper: {
    height: '210px',
    overflow: 'hidden',
    backgroundColor: '#0a0705',
  },
  cardMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '24px',
    backgroundColor: '#2b231f',
    textAlign: 'left',
  },
  cardTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  cardIcon: {
    color: '#ee8931',
    display: 'flex',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
  },
  cardDescription: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#b0a9a4',
  },
}

export default Inicio
