import React from 'react';

import HeaderBag from '../HeaderBag'
import { Container, Navigation, Main, BasketIcon } from './styles';

const BagEmpty = () => {
    
    return (
        <Container>
            <HeaderBag />
            <Main>
                <span className='content'>
                    <span className='face'>:(</span>
                    <span className="text"><strong>Ops!</strong> <span>Sua cesta está <br /> vazia</span></span>
                </span>
            </Main>
        </Container>
    );
};

export default BagEmpty;