import { NavLink } from 'react-router-dom';
import { Timer, Scroll } from 'phosphor-react';
import LogoTimer from '../../assets/logo-timer.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoTimer} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
