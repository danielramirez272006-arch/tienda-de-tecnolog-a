import { useCart } from '../context/CartContext'

function CartDrawer() {
  const { cartItems, isCartOpen, closeCart, removeFromCart, updateQuantity, totalPrice } = useCart()

  if (!isCartOpen) return null

  return (
    <div style={styles.overlay} onClick={closeCart}>
      <div style={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div style={styles.header}>
          <div style={styles.headerTitleRow}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ee8931" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h2 style={styles.title}>Carrito de Compras</h2>
          </div>
          <button style={styles.closeBtn} onClick={closeCart} aria-label="Cerrar">
            ✕
          </button>
        </div>

        {/* Drawer Items */}
        <div style={styles.itemList}>
          {cartItems.length === 0 ? (
            <div style={styles.emptyState}>
              <p style={styles.emptyText}>Tu carrito está vacío</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} style={styles.itemCard}>
                <img src={item.imagen} alt={item.nombre} style={styles.itemImg} />
                <div style={styles.itemInfo}>
                  <h4 style={styles.itemName}>{item.nombre}</h4>
                  <p style={styles.itemPrice}>{item.precio}</p>

                  <div style={styles.qtyControls}>
                    <button style={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span style={styles.qtyNum}>{item.cantidad}</span>
                    <button style={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>

                <button style={styles.removeBtn} onClick={() => removeFromCart(item.id)} aria-label="Eliminar">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a19a95" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div style={styles.footer}>
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>Total:</span>
              <span style={styles.totalPrice}>${totalPrice.toLocaleString()}</span>
            </div>
            <button style={styles.checkoutBtn} onClick={() => alert('¡Gracias por tu compra en TechStore!')}>
              PROCEDER AL PAGO ↗
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  drawer: {
    backgroundColor: '#18120e',
    width: '420px',
    maxWidth: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderLeft: '1px solid #2d231d',
    boxShadow: '-10px 0 30px rgba(0,0,0,0.6)',
    animation: 'slideIn 0.3s ease',
  },
  header: {
    padding: '24px',
    borderBottom: '1px solid #2d231d',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ffffff',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    color: '#a19a95',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '4px 8px',
  },
  itemList: {
    padding: '24px',
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px 0',
  },
  emptyText: {
    color: '#a19a95',
    fontSize: '15px',
  },
  itemCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: '#261f1a',
    padding: '16px',
    borderRadius: '4px',
    border: '1px solid #382e27',
  },
  itemImg: {
    width: '70px',
    height: '70px',
    objectFit: 'cover',
    borderRadius: '4px',
    backgroundColor: '#0a0705',
  },
  itemInfo: {
    flex: 1,
    textAlign: 'left',
  },
  itemName: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: '4px',
  },
  itemPrice: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#ee8931',
    marginBottom: '8px',
  },
  qtyControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  qtyBtn: {
    backgroundColor: '#382e27',
    border: 'none',
    color: '#ffffff',
    width: '24px',
    height: '24px',
    borderRadius: '2px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '700',
  },
  qtyNum: {
    fontSize: '14px',
    color: '#ffffff',
    minWidth: '16px',
    textAlign: 'center',
  },
  removeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  footer: {
    padding: '24px',
    borderTop: '1px solid #2d231d',
    backgroundColor: '#120d0a',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  totalLabel: {
    fontSize: '16px',
    color: '#a19a95',
  },
  totalPrice: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#ee8931',
  },
  checkoutBtn: {
    width: '100%',
    backgroundColor: '#ee8931',
    color: '#0d0805',
    border: 'none',
    padding: '14px',
    fontSize: '13px',
    fontWeight: '800',
    letterSpacing: '0.8px',
    borderRadius: '2px',
    cursor: 'pointer',
  },
}

export default CartDrawer
