import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Informacion() {
  const [search, setSearch] = useState('')
  const { addToCart } = useCart()

  const productos = [
    {
      id: 1,
      tag: 'NEW',
      tagType: 'orange',
      nombre: 'ProBook X15 Ultra',
      categoria: 'WORKSTATION CLASS',
      precioNum: 2499,
      precio: '$2,499',
      imagen: '/laptop.jpg',
      specs: [
        'Neural Processing Unit v4',
        '15.6" OLED Liquid Retina',
        '64GB Unified Memory',
      ],
    },
    {
      id: 2,
      tag: null,
      nombre: 'Nexus Pro Max',
      categoria: 'COMMUNICATION HUB',
      precioNum: 1199,
      precio: '$1,199',
      imagen: '/smartphone.jpg',
      specs: [
        'Titanium Exoskeleton',
        'Quantum Sensor Array',
        'Satellite Link Capable',
      ],
    },
    {
      id: 3,
      tag: 'RESTOCKED',
      tagType: 'outline',
      nombre: 'Core RTX 5090',
      categoria: 'COMPUTE ENGINE',
      precioNum: 1899,
      precio: '$1,899',
      imagen: '/gpu.jpg',
      specs: [
        '32GB GDDR7 VRAM',
        'Cryo-chamber Cooling',
        'PCIe 5.0 Interface',
      ],
    },
    {
      id: 4,
      tag: 'POPULAR',
      tagType: 'orange',
      nombre: 'Aura Studio Reference',
      categoria: 'AUDIO PRECISION',
      precioNum: 499,
      precio: '$499',
      imagen: '/audio.jpg',
      specs: [
        'Adaptive Noise Cancelling',
        '50mm Beryllium Drivers',
        'Lossless Bluetooth 5.4',
      ],
    },
    {
      id: 5,
      tag: 'NEW',
      tagType: 'outline',
      nombre: 'Quantum Core TRX-9000',
      categoria: 'PROCESSOR ENGINE',
      precioNum: 899,
      precio: '$899',
      imagen: '/hero_chip.jpg',
      specs: [
        '64 Cores / 128 Threads',
        '5.8 GHz Max Boost',
        'Copper Precision Heatsink',
      ],
    },
    {
      id: 6,
      tag: 'BESTSELLER',
      tagType: 'orange',
      nombre: 'ProBook Studio 14',
      categoria: 'MOBILE WORKSTATION',
      precioNum: 1799,
      precio: '$1,799',
      imagen: '/laptop.jpg',
      specs: [
        '14" Liquid Retina XDR',
        '32GB DDR5 RAM',
        '1TB NVMe Gen4 SSD',
      ],
    },
  ]

  const filteredProductos = productos.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase()) ||
    p.categoria.toLowerCase().includes(search.toLowerCase()) ||
    p.specs.some(s => s.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.headerRow}>
          <div style={styles.headerText}>
            <h1 style={styles.title}>Product Catalog</h1>
            <p style={styles.subtitle}>
              Precision engineered hardware for maximum performance. Explore our latest technological advancements.
            </p>
          </div>

          {/* Search Bar */}
          <div style={styles.searchWrapper}>
            <svg style={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a19a95" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search specifications..."
              style={styles.searchInput}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span style={styles.shortcutKey}>⌘ K</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={styles.grid}>
          {filteredProductos.map((p) => (
            <div key={p.id} style={styles.card}>
              {/* Media area */}
              <div style={styles.cardMediaWrapper}>
                {p.tag && (
                  <span style={p.tagType === 'orange' ? styles.tagOrange : styles.tagOutline}>
                    {p.tag}
                  </span>
                )}
                <img src={p.imagen} alt={p.nombre} style={styles.cardMedia} />
              </div>

              {/* Content area */}
              <div style={styles.cardBody}>
                <div style={styles.titlePriceRow}>
                  <div>
                    <h3 style={styles.cardTitle}>{p.nombre}</h3>
                    <span style={styles.cardCategory}>{p.categoria}</span>
                  </div>
                  <span style={styles.cardPrice}>{p.precio}</span>
                </div>

                <div style={styles.specsList}>
                  {p.specs.map((spec, idx) => (
                    <div key={idx} style={styles.specItem}>
                      <span style={styles.specText}>{spec}</span>
                    </div>
                  ))}
                </div>

                <div style={styles.cardFooter}>
                  <button style={styles.specsBtn}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    SPECS
                  </button>
                  <button style={styles.buyBtn} onClick={() => addToCart(p)}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    BUY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: '#0f0b09',
    color: '#ffffff',
    minHeight: 'calc(100vh - 130px)',
    padding: '60px 48px 90px',
    flex: 1,
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '32px',
    marginBottom: '48px',
    flexWrap: 'wrap',
  },
  headerText: {
    maxWidth: '620px',
    textAlign: 'left',
  },
  title: {
    fontSize: '60px',
    fontWeight: '700',
    color: '#f3e6de',
    lineHeight: '1.1',
    marginBottom: '16px',
    letterSpacing: '-1px',
  },
  subtitle: {
    fontSize: '17px',
    lineHeight: '1.5',
    color: '#a19a95',
  },
  searchWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#18120e',
    border: '1px solid #2b221c',
    borderRadius: '2px',
    padding: '12px 16px',
    width: '380px',
    position: 'relative',
    marginTop: '12px',
  },
  searchIcon: {
    marginRight: '12px',
  },
  searchInput: {
    background: 'none',
    border: 'none',
    color: '#f3f3f3',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
  },
  shortcutKey: {
    fontSize: '11px',
    color: '#8a827c',
    backgroundColor: '#26201e',
    padding: '3px 6px',
    borderRadius: '3px',
    fontWeight: '600',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: '#2b231f',
    borderRadius: '2px',
    border: '1px solid #3d332d',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
  },
  cardMediaWrapper: {
    position: 'relative',
    height: '240px',
    backgroundColor: '#0a0705',
  },
  cardMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  tagOrange: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: '#ee8931',
    color: '#0d0805',
    fontSize: '11px',
    fontWeight: '800',
    letterSpacing: '1px',
    padding: '4px 10px',
    borderRadius: '2px',
    zIndex: 2,
  },
  tagOutline: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'transparent',
    border: '1px solid #ee8931',
    color: '#ee8931',
    fontSize: '11px',
    fontWeight: '800',
    letterSpacing: '1px',
    padding: '4px 10px',
    borderRadius: '2px',
    zIndex: 2,
  },
  cardBody: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    textAlign: 'left',
  },
  titlePriceRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '4px',
  },
  cardCategory: {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#a19a95',
  },
  cardPrice: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#ee8931',
  },
  specsList: {
    marginBottom: '28px',
    borderLeft: '2px solid #544740',
    paddingLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  specItem: {
    display: 'flex',
    alignItems: 'center',
  },
  specText: {
    fontSize: '14px',
    color: '#c4bdb7',
  },
  cardFooter: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #3c322b',
  },
  specsBtn: {
    background: 'none',
    border: 'none',
    color: '#d4ceca',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  buyBtn: {
    backgroundColor: '#ee8931',
    color: '#0d0805',
    border: 'none',
    padding: '10px 24px',
    fontSize: '12px',
    fontWeight: '800',
    letterSpacing: '0.8px',
    borderRadius: '2px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'background-color 0.2s',
  },
}

export default Informacion
