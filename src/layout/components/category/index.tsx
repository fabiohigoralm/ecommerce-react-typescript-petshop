import React from 'react';
import { CategoryContainer } from "./styles";

import accessories from '../../../img/category/accessories.png'
import food from '../../../img/category/food.png'
import toys from '../../../img/category/toys.png'


export const Category = () => {
  return (
    <CategoryContainer>
        <ul>
            <li><img src={toys} alt="Brinquedos"/></li>
            <li><img src={food} alt="Rações"/></li>
            <li><img src={accessories} alt="Acessórios"/></li>
        </ul>
    </CategoryContainer>
  );
};
