import { NavLink } from 'react-router-dom'

const Nav = () => {

  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu__item menu__item-active" : "menu__item";

  return (
    <nav>
      <div className='menu'>
          <NavLink className={active} to="/">
            Главная
          </NavLink>
          <NavLink className={active} to="/drift">
            Дрифт-такси
          </NavLink>
          <NavLink className={active} to="/timeattack">
            Time attack
          </NavLink>
          <NavLink className={active} to="/forza">
            Forza karting
          </NavLink>
      </div>
    </nav>
  )
}

export default Nav
