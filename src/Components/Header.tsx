import '../styles/Components/Header.css'

export function Header() {
  return (
    <header className="header">
      <nav className="navbar">

        <div className="menu-content">
          <div className="menu-item">
            <h1>Panvel</h1>
            <div className="menu-icon">
              <img src="/images/menu-white.svg" alt="menu icon" />
            </div>
            <span>Categorias</span>
          </div>
          <div className="menu-item">
            <div className="searchbar">
              <input type="text" placeholder="O que você procura?" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>

            </div>
          </div>
          <div className="menu-item">
            <div className="login">
              <img src="/images/user.svg" alt="login" />
              <span>entrar</span>

            </div>
            <div className="shopping-cart">
              <img src="/images/shopping-bag.svg" alt="login" />
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}