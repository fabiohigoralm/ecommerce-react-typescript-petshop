import React from 'react';
import { BannerShelfContainer } from './styles';
import cats from '../../../img/banners/for-cats.png'
import dogs from '../../../img/banners/for-dogs.png'

export const BannerShelf = () => {
    return (
    <BannerShelfContainer>
        <ul>
            <li><img src={dogs} alt='Cachorros'/></li>
            <li><img src={cats} alt='Gatos'/></li>
            
        </ul>
    </BannerShelfContainer>)
}