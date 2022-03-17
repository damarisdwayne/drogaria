import React from "react";
import { Container, Wrapper, FooterListInfo, Infos, CardSecurity, HorizontalLine, FooterBenefits, Benefits, FooterMenu, WhatsappIcon, TelIcon, EmailIcon, LojaIcon, SmileIcon, AirplaneIcon, StoreIcon, CardIcon, ShieldIcon, SocialMedias, FacebookIcon, TwitterIcon, CreatorCredits, CIcon, OIcon } from './styles'

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <FooterListInfo>
                    <Infos>
                        <li className="title">DROGAMAXI</li>
                        <li><WhatsappIcon /><span>(31) 99563-6040</span></li>
                        <li><TelIcon /><span>(31) 3317-6040</span></li>
                        <li><EmailIcon /><span>atendimento@drogamaxi.com.br</span></li>
                        <li><LojaIcon /><span>Nossas Lojas</span></li>
                    </Infos>

                    <Infos className="institucional">
                        <li className="title">INSTITUCIONAL</li>
                        <li>Quem Somos</li>
                        <li>Trabalhe Conosco</li>
                        <li>Minha Conta</li>
                        <li>Meus Pedidos</li>
                    </Infos>

                    <Infos>
                        <li className="title">AJUDA</li>
                        <li>Privacidade e Segurança</li>
                        <li>Política de Entregas</li>
                        <li>Trocas e Devoluções</li>
                        <li>SAC</li>
                    </Infos>

                    <Infos>
                        <li className="title">SEGURANÇA</li>
                        <li><CardSecurity /></li>
                        <li>MEIOS DE PAGAMENTO</li>
                        <li><div></div><div></div><div></div><div></div></li>
                    </Infos>
                </FooterListInfo>

                <HorizontalLine />

                <FooterBenefits>
                    <Benefits>
                        <div><SmileIcon /> <span><strong>100% DE SATISFAÇÃO</strong> <br />Compromisso e qualidade</span></div>
                        <div><StoreIcon /> <span><strong>MAIS DE 30 ANOS</strong> <br />26 lojas fisicas</span></div>
                        <div><AirplaneIcon /> <span><strong>FRETE GRÁTIS</strong> <br />veja regras</span></div>
                        <div><CardIcon /> <span><strong>EM ATÉ 5 X SEM JUROS</strong> <br />veja regras</span></div>
                        <div><ShieldIcon /> <span><strong>LOJA 100% SEGURA</strong> <br />seus dados protegidos</span></div>                        
                    </Benefits>
                </FooterBenefits>

                <HorizontalLine />

                <FooterMenu>
                    <li>Home</li>
                    <li>Minha conta</li>
                    <li>Meus pedidos</li>
                    <li>Contato</li>
                </FooterMenu>

                <SocialMedias>
                    <FacebookIcon />
                    <TwitterIcon />
                </SocialMedias>

                <p>As informações contidas neste site não devem ser usadas para automedicação e não substituem, em hipótese alguma, as orientações dadas pelo profissional da área médica. Somente o médico está apto a diagnosticar qualquer problema de saúde e prescrever o tratamento adequado. Não tome nenhum medicamento sem orientação médica ou farmacêutica, pode ser perigoso para sua saúde. Medicamentos sob prescrição necessitam da receita médica e serão dispensados apenas com a apresentação deste documento que deverá ser enviado para o e-mail atendimento@drogamaxi.com.br ou através do fax (31) 3379-1900 / (31) 3312-1403. Os preços, as promoções, o frete e as condições de pagamento são válidos apenas para compras via internet. Todas as imagens contidas em www.drogamaxi.com.br são meramente ilustrativas. Todos os pedidos efetuados estão sujeitos a confirmação da disponibilidade do produto em nosso estoque. Razão Social: Drogamaxi Ltda – CNPJ: 17.588.146/0001-00 – Rua Lagoa da Prata 1188, Bairro Salgado Filho, Belo Horizonte | MG – CEP 30550-000 – Alvará Sanitário: 2015016128 – Autorização de Funcionamento da Empresa (AFE): 25352.085220/2013-69. Farmacêutica Responsável: André M. Fernandes CRF-MG: 26601 | Telefone : (31) 3379-1900 | E-mail: atendimento@drogamaxi.com.br | Horário de Funcionamento: Segunda a sexta-feira de 6:30h às 22:00h, sábado de 7:00h às 21:30h, domingo de 7:30h às 14:00h.</p>

            </Wrapper>
        </Container>
    )
}

export default Footer;