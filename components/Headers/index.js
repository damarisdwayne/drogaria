import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { Container } from "./styles";
import SideBag from '../SideBag'
import Bag from '../SideBag/Bag'
import BagEmpty from '../SideBag/BagEmpty'
import SideMenu from "../SideMenu";
import Menu from "../SideMenu/Menu";
import { HeaderInfo } from "./HeaderInfo";
import { HeaderInput } from "./HeaderInput";
import { HeaderNavBar } from "./HeaderNavBar";

const Headers = () => {

    const cart = useSelector(state => state.cart)
    const [empty, setEmpty] = useState(true)

    useEffect(() => {
        if(cart.value > 0) setEmpty(false)
        else setEmpty(true)
    }, [cart])
    
    return (

        <Container>
            <SideMenu>
                <Menu />
            </SideMenu>

            <HeaderInfo />
            <HeaderInput />
            <HeaderNavBar />

            <SideBag>
                {empty ? <BagEmpty /> : <Bag />}
            </SideBag>

        </Container>
    )
}

export default Headers