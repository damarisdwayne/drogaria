import React from 'react'

import { Products, Developers, Company } from './Content';
import { DropdownProvider, DropdownOption, DropdownRoot } from '../../Dropdown'
import { Container, DropdownStyles } from "./styles"

export const HeaderNavBar = () => {
    return (
        <DropdownProvider>
            <DropdownStyles>
                <Container>
                    <ul>
                        <li>
                            <DropdownOption
                                name="Medicamentos"
                                content={Products}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Higiene e beleza"
                                content={Developers}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Infantil"
                                content={Company}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Geriátrico"
                                content={Products}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Suplemetos"
                                content={Company}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Acessórios"
                                content={Developers}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Conveniência"
                                content={Products}
                            />
                        </li>
                        <li>
                            <DropdownOption
                                name="Ofertas"
                                content={Company}
                            />
                        </li>
                    </ul>
                </Container>
                <DropdownRoot />
            </DropdownStyles>
        </DropdownProvider>
    )
}