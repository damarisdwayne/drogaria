import styled from 'styled-components';
import { Truck } from '@styled-icons/icomoon'

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Header = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    > ul {
        display: flex;
        justify-content: flex-start;
        padding: 10px 20px;

        > li {
            margin-right: 10px;
            a, span {

                text-decoration: none;
                color: #3F3F3F;
                ;
            }
        }
    }
    
    h1 {
        color: #3F3F3F;
        font-size: 16px;
        font-weight: 600;
        padding: 20px;
        align-self:center;

        @media (min-width: 768px) {
            padding: 0 20px;
            align-self: flex-start;
        }
    }

    @media (min-width: 768px) {
        justify-content: flex-start;
        flex-direction: column;
    > ul {
        display: flex;
        gap: 15px;
        justify-content: flex-start;
        padding: 10px 20px;
        
    }
  }
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto 30px;
    width: 100%;
    gap: 10px;

    @media(max-width: 780px) {
        flex-direction: column;
    }
    
`;

export const ProductImageWrapper = styled.div`
    width: 100%;
    flex: 1;
`;

export const ProducImage = styled.img`
    width: 100%;
    height: 100%;
`;

export const ProductContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 15px;

    .header{
        >h1{
            font-size: 24px;
            color: #727272;
            font-weight: 400;
        }

        >h3, span{
            font-size: 14px;
            color: #3f3f3f;
            margin: 5px 0 10px;
            font-weight: 400;
        }

        >span{
            padding: 10px 0;
        }

    }
    
  .price{
      display: flex;
      flex-direction: column;
      

      >span{
          font-size: 12px;
          color: #949494;
      }

      >strong {
          font-size: 24px;
          color: #465a65;
      }
  }

  .buttons{
      display: flex;
      gap: 10px;
  }

    .payment{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f7f7f7;
        padding: 20px;
        border-radius: 8px;
    }

    .btn-quantity{
        display: flex;
        align-items: center;
        height: 43px;
        gap: 8px;
        padding: 0 13px;

        border-radius: 8px;

        background-color: #fff;

        p {
            color: #3f3f3f;
        }

        button {
            color: #555555;
        }

        button, p{
            display: inline-block;
            font-size: 16px;
            font-weight: 900;
        }
    }

    .btn-comprar {
        width: 146px;
        height: 43px;
        color: #FFFFFF;
        background-color: #328CB8;
        text-transform: uppercase;
        text-align: center;
        border-radius: 8px;
    }

    .cep {

        background-color: #f7f7f7;
        padding: 20px;
        border-radius: 8px;
        display: flex;
        
        .iconCep {
            align-self: flex-end;
        }

        > div {
            > p {
                font-size: 12px;
                color: #989898;
                margin-bottom: 15px;
                font-weight: bold;
            }

            span {
                > input {
                    border: #ddd solid 2px;
                    padding: 10px;
                    border-radius: 10px 0 0 10px;
                    background-color: #fff;
                    width: 120px;
                }

                >button {
                    padding: 12px;
                    border-radius: 0 10px 10px 0;
                    background-color: #ddd;
                    color: #fff;
                }
            }
        }

        @media(max-width: 780px) {
            align-items: center;
            justify-content: center;
        }
    }
`;

export const ProductDescription = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 40px;

    div {
        margin-bottom: 20px;

        h1 {
            font-size: 20px;
            color: #3f3f3f;
            font-weight: normal;
            margin-bottom: 5px;
        }

        p {
            font-size: 14px;
            color: #8a8a8a;
            font-weight: normal;
            line-height: 22px;
        }
    }
`;

export const ProductReview = styled.div`
    background-color: #f7f7f7;
    border-radius: 8px;
    padding: 20px 20px 8px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        h1 {
            font-size: 20px;
            font-weight: normal;
        }

        button {
            padding: 10px;
            background-color: #949494;
            border-radius: 8px;
            color: #fff;
        }
    }

    .avaliacao {
        width: 100%;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        border: 2px solid #ececec;

        span{
            font-size: 14px;
            color: #818181;
        }
    }
`;

export const TrcuckIcon = styled(Truck)`
    width: 30px;
    height: 30px;
    color: #d8d8d8;
    fill: #d8d8d8;
    margin-right: 10px;
`;
