import { HeaderContainer, HeaderWrapper } from './styles'
import logoCoffeDelivery from '../../../src/assets/logo-coffe-delivery.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <NavLink to="/" title="">
          <img src={logoCoffeDelivery} alt="" />
        </NavLink>
        <nav>
          <button title="Região">
            <MapPin size={22} weight="fill" />
            São Paulo - SP
          </button>
          <NavLink to="/cart" title="Carrinho">
            <ShoppingCart size={22} weight="fill" />
          </NavLink>
        </nav>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
