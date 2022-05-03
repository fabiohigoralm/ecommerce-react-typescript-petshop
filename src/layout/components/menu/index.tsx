import React from 'react';
import { MenuContainer } from './styles';
import infos from "./infos-menu.json";

export const Menu = () => {
    return (
        <MenuContainer>
            <ul>
            {infos.menu.map((element,id) => (
            <li key={id}>{element.nome}</li>
          ))}
            </ul>
        </MenuContainer>
    )
}