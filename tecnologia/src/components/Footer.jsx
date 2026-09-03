function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.copyright}>© 2024 TechStore. Engineering Precision.</p>
        <div style={styles.links}>
          <a href="#privacy" style={styles.link}>Privacy</a>
          <a href="#terms" style={styles.link}>Terms</a>
          <a href="#support" style={styles.link}>Support</a>
          <a href="#blog" style={styles.link}>Blog</a>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    borderTop: '1px solid #221a16',
    backgroundColor: '#0d0907',
    padding: '24px 48px',
    marginTop: 'auto',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '16px',
  },
  copyright: {
    fontSize: '13px',
    color: '#8a827c',
    fontWeight: '600',
    letterSpacing: '0.3px',
  },
  links: {
    display: 'flex',
    gap: '24px',
  },
  link: {
    fontSize: '13px',
    color: '#a19a95',
    transition: 'color 0.2s ease',
  },
}

export default Footer
