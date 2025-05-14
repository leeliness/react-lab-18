import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #FFEFEF;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  box-shadow: 0 4px 6px rgba(243, 208, 215, 0.3);
  border-bottom: 3px solid #F3D0D7;
`;

const NavLink = styled(Link)`
  color: #F3D0D7;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid #E69DB8; 
    color: #F1E7E7;
    background-color: transparent;
    transform: translateY(-2px);
  }
`;

const Header = () => (
  <Nav>
    <NavLink to="/about">Про мене</NavLink>
    <NavLink to="/my-city">Моє місто</NavLink>
    <NavLink to="/my-future">Моє майбутнє</NavLink>
  </Nav>
);

export default Header;
