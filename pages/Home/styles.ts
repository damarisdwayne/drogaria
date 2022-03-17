import styled, { css } from "styled-components";
import { Lock, LocalPharmacy, Truck, CreditCard } from "../../styles/Icons"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    width: 100%;
    margin: 10px auto;
    padding: 10px 2%;
`;

export const BanerSlider = styled.div`
   .first{
       width: 100%;
       height: 360px;
       background-color: #ccc;
   }

   .second{
       width: 100%;
       height: 360px;
       background-color: red;
   }
   .third{
       width: 100%;
       height: 360px;
       background-color: blue;
   }
`;

export const PaymentInfoSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;

    div{
        padding: 25px 0;
        display: flex;
        font-size: 13px;
        gap: 8px;
        align-items: center;
    }

    strong{
        color: #e02f3a;
    }

    span {
        color: #555;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin: 0 auto;

        div {
            width: 40%;
        }
    }
`;

export const AdvertisingSection = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    width: 100%;
    gap: 10px;
    row-gap: 5px;
    margin-bottom: -170px;

    @media (max-width: 824px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        row-gap: 5px;
        gap: 0;
        margin-bottom: 0;
    }
`;

export const ImgLarger = styled.div`
    width: 100%;
    
    div{
        width: 100%;
        height: 500px;
        background-color: #EEE;
        
    }
`;

export const ImgSmall = styled.div`
    width: 100%;
    
    div{
        height: 250px;
        width: 100%;
        background-color: #EEE;
        margin-bottom: 5px;
        
    }
`;

export const PopularProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1280px;
    width: 100%;
    padding: 0 2%;
`;

export const ProductPopular = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    margin: 0 auto 50px;
    width: 100%;
    gap: 10px;
    

    @media (max-width: 1140px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 860px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const Product = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px;

    margin-bottom: 1px solid #ececec;
`;

export const Price = styled.div`
    font-size: 24px;
    color: #465A65;
`;

export const OldPrice = styled.div`
    color: #888888;
    font-size: 14px;
    text-decoration: line-through;
`;

export const ProcuctImage = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 200px;
    text-align: center;
    margin: 0 auto;

    @media(max-width: 600px) {
        width: 50%;
    }
`;

export const ProductContent = styled.span`
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    margin-top: 8px;
    gap: 8px;
    p{
        color: #727272;
        justify-content: flex-start;
    }

    .input {
    display: flex;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media(max-width: 600px) {
        align-content: flex-start;
    }
`;

export const ProductPromotion = styled.div`
    margin: 5px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    gap: 10px;
    
    strong{
        margin-right: 5px;
        color: #F28D24
    }

    span{
        border: 1px solid #ccc;
        padding: 6px 12px;
        font-weight: none;
    }

    div{
        width: 40px;
        height: 31px;
        background-color: #ccc;
    }

    @media (max-width: 580px){
        display: none;
    }
`;

export const TittlePopularProducts = styled.div`
    margin: 40px 0;
    display: flex;
    align-items: center;
    gap: 20px;
    
    h3{
        color: #3f3f3f;
    }
`;

export const HorizontalLine = styled.div`
    flex-grow: 1;
    height: 2px;
    border: 1px solid #B9B9B9;
`;


export const AdvertisementSection = styled.div`
`;

export const ImagesAdvertisement = styled.div`
    display: flex;
    div{
        background-color: #ccc;
        width: 50%;
        height: 200px;
        padding: 10px;
        margin-right: 5px;
    }

    @media (max-width: 824px){
        div {
            height: 150px;
        }
    }

    @media (max-width: 530px){
        div {
            height: 100px;
        }
    }
`;

export const MarkingContainer = styled.div`
    display: flex;
    flex-direction: column;

`;

export const Marking = styled.div`
    width: 100%;
    padding: 20px;
    margin: 0 auto 40px auto;

    .first{
        width: 127px;
        height: 65px;
        background-color: #ccc;
    }

    .second{
        width: 127px;
        height: 65px;
        background-color: red;
    }

    .third{
        width: 127px;
        height: 65px;
        background-color: blue;
    }

    .fourth{
        width: 127px;
        height: 65px;
        background-color: black;
    }

    .fifth{
        width: 127px;
        height: 65px;
        background-color: green;
    }
`;

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #388CB7;
    padding: 20px;
    height: auto;
    width: 100%;
    margin: 30px 0;
    border-radius: 5px;

    @media (max-width: 1100px){
        width: 100%;
        align-items: flex-start;
    }

    @media (max-width: 824px){
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
    }
`;

export const TextForm = styled.div`
    display: flex;
    gap: 20px;

    strong, span {
        color: #FFFFFF;
        font-size: 16px;
    }

    @media (max-width: 1100px){
        flex-direction: column;
    }

    @media (max-width: 824px){
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
    }
`;

export const FormFields = styled.div`
    display: flex;
    gap: 10px;
    
    input {
        width: 278px;
        height: 48px;
        background-color: #FFFFFF;
        padding: 0 10px;
        border-radius: 5px;
    }

    button {
        width: 127px;
        height: 48px;
        font-size: 16px;
        color: #FFFFFF;
        background-color: #61C6FA;
        border-radius: 5px;
    }

    @media (max-width: 1100px){
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        input {
            width: 100%;
        }

        button {
            width: 100%;
        }
    }
`;

export const AdvertisementProductsSaleSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 100%;
    gap: 10px;

    @media (max-width: 824px){
        grid-template-columns: 1fr;
    }

`;

export const ProductsAdvertisement = styled.div`
    flex-grow: 1;
    margin-bottom: 10px;
    
    div{
        border: 4px solid #f5f5f5;
        min-height: 504px;
    }
`;

export const ImageAdvertisement = styled.div`
        width: 100%;
    div{
        width: 100%;
        height: 504px;
        background-color: #f5f5f5;
    }
`;

export const AdvertisementSaleBanner = styled.div`

`;

const iconMdCSS = css`
width: 32px;
height: 32px;

cursor: pointer;

color: #e02f3a;

`;

export const CardIcon = styled(CreditCard)`${iconMdCSS}`;

export const TruckIcon = styled(Truck)`${iconMdCSS}`;

export const DrugstoreIcon = styled(LocalPharmacy)`${iconMdCSS}`;

export const LockIcon = styled(Lock)`${iconMdCSS}`;
