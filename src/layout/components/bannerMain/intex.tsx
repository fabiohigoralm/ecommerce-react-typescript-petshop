import React from 'react';
import { BannerMainContainer } from './styles';
import main from '../../../img/banners/img_1_setas.png'

export const BannerShelfMain = () => {
    return (
    <BannerMainContainer>
     <img src={main} alt='Cachorros'/>
    </BannerMainContainer>)
}