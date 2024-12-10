// src/components/Navbar.jsx
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      {/* Link est comme un <a> mais sans rechargement de page */}
      <Link to="/" style={{ marginRight: '1rem' }}>
        Accueil
      </Link>

      {/* NavLink est comme Link mais avec des super-pouvoirs !
          Il sait quand il est actif */}
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? 'red' : 'black'
        })}
      >
        À propos
      </NavLink>
    </nav>
  )
}