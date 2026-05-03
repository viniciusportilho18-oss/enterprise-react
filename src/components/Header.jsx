import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          Enterprise <span>Ar-Condicionado</span>
        </div>
        <nav>
          <a href="#servicos" className="nav-link">Serviços</a>
          <a href="#produtos" className="nav-link">Produtos</a>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header