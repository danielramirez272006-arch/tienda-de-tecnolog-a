import { useState } from 'react'

function Formulario() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const datos = {
      nombre: nombre.trim(),
      correo: correo.trim(),
      mensaje: mensaje.trim()
    }
    console.log('Contacto enviado:', datos)
    setNombre('')
    setCorreo('')
    setMensaje('')
    setEnviado(true)
    setTimeout(() => setEnviado(false), 4000)
  }

  return (
    <div style={styles.page}>
      <div style={styles.cardContainer}>
        <h1 style={styles.title}>Contáctanos</h1>
        <p style={styles.subtitle}>
          Déjanos un mensaje y nuestro equipo de ingeniería te responderá con precisión.
        </p>

        {enviado && (
          <div style={styles.alertSuccess}>
            ✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
          </div>
        )}

        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Nombre Completo */}
          <div style={styles.field}>
            <label style={styles.label} htmlFor="nombre">Nombre Completo</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a19a95" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <input
                id="nombre"
                type="text"
                style={styles.input}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Ana García"
                autoComplete="name"
                required
              />
            </div>
          </div>

          {/* Correo Electrónico */}
          <div style={styles.field}>
            <label style={styles.label} htmlFor="correo">Correo Electrónico</label>
            <div style={styles.inputWrapper}>
              <svg style={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a19a95" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <input
                id="correo"
                type="email"
                style={styles.input}
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                placeholder="ana@ejemplo.com"
                autoComplete="email"
                required
              />
            </div>
          </div>

          {/* Mensaje */}
          <div style={styles.field}>
            <label style={styles.label} htmlFor="mensaje">Mensaje</label>
            <div style={{ ...styles.inputWrapper, alignItems: 'flex-start' }}>
              <svg style={{ ...styles.inputIcon, marginTop: '12px' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a19a95" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <textarea
                id="mensaje"
                style={styles.textarea}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu mensaje aquí..."
                rows="4"
                required
              />
            </div>
          </div>

          {/* Submit button */}
          <div style={styles.btnRow}>
            <button
              type="submit"
              style={{
                ...styles.button,
                backgroundColor: isHovered ? '#ff9a42' : '#ee8931',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Enviar Mensaje
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: '#120d0a',
    minHeight: 'calc(100vh - 130px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 24px',
  },
  cardContainer: {
    backgroundColor: '#2d2622',
    border: '1px solid #3c3430',
    borderRadius: '4px',
    padding: '48px',
    maxWidth: '560px',
    width: '100%',
    textAlign: 'left',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#ee8931',
    marginBottom: '12px',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: '15px',
    lineHeight: '1.5',
    color: '#b0a9a4',
    marginBottom: '36px',
  },
  alertSuccess: {
    backgroundColor: 'rgba(46, 125, 50, 0.15)',
    border: '1px solid #2e7d32',
    color: '#81c784',
    padding: '12px 16px',
    borderRadius: '4px',
    marginBottom: '24px',
    fontSize: '14px',
    fontWeight: '500',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '700',
    color: '#e0dedc',
  },
  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: '2px',
    padding: '0 16px',
  },
  inputIcon: {
    marginRight: '12px',
    flexShrink: 0,
  },
  input: {
    width: '100%',
    padding: '14px 0',
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    color: '#333333',
    backgroundColor: 'transparent',
  },
  textarea: {
    width: '100%',
    padding: '14px 0',
    border: 'none',
    outline: 'none',
    fontSize: '15px',
    color: '#333333',
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  btnRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '12px',
  },
  button: {
    backgroundColor: '#ee8931',
    color: '#0d0805',
    border: 'none',
    padding: '14px 32px',
    fontSize: '14px',
    fontWeight: '700',
    borderRadius: '2px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'background-color 0.2s, transform 0.1s',
  },
}

export default Formulario
