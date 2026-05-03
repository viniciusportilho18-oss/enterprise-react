function Hero() {
  return (
    <section style={{
      backgroundColor: "#08048e",
      color: "white",
      textAlign: "center",
      padding: "80px 20px"
    }}>
      <h1 style={{
        fontSize: "40px",
        fontWeight: 700,
        marginBottom: "16px",
        lineHeight: 1.2
      }}>
        Conforto e bem-estar<br />para sua casa ou empresa
      </h1>

      <p style={{
        fontSize: "18px",
        color: "#aaaaaa",
        marginBottom: "32px",
        lineHeight: 1.6
      }}>
        Instalação, manutenção e higienização em Campo Grande-MS.<br />
        Mais de 10 anos de experiência.
      </p>

      
       <a href="https:///5567992303005"
        target="_blank"
        style={{
          display: "inline-block",
          backgroundColor: "#b60000",
          color: "white",
          padding: "14px 32px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "16px"
        }}
      >
        Solicitar orçamento grátis
      </a>
    </section>
  )
}

export default Hero