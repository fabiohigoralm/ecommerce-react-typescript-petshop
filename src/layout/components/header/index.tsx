import React from 'react';
import { HeaderContainer, Logo, Search, Account } from "./styles";
import logo from '../../../img/header/logo.png'
import cart from '../../../img/header/cart.png'
import user from '../../../img/header/user.png'

export const Header = () => {
    return (
        <HeaderContainer>
            <Search><input placeholder='Pesquisar...' /></Search>
            <Logo><img src={logo} alt="Logo"></img></Logo>
            <Account><img src={user} alt="User"></img>
                <img src={cart} alt="Cart"></img></Account>

        </HeaderContainer>)
};
