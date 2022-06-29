import styled from 'styled-components';
import img from '../../img/imagem3.png';

export const Container = styled.div`
    height: 570px;
    width: 700px;
    border-radius:10px;
    background-color: #fff;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: 380px;
    display: flex;
    flex-direction: column;

    .aviso3{
        font-size: 12px;
        color: red;
        margin-top: 2px;
        margin-left: 50px;
        margin-bottom:0px
    }   

    .backBut{
        text-decoration: none;
        position: absolute;
        top: 50px;
        margin-left: -50px;
        font-size:20px;
    }
`;

export const AreaForm = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 60px;
`;

export const Espec = styled.label`
        font-size: 14px;
        
    select{
        cursor: pointer;
        outline: none;
        width: 280px;
        padding: 5px 20px;
        border: 1px solid #380EA8;
        border-radius:5px;
        margin-top: 8px;

       
    }

    .aviso{
        font-size: 12px;
        color: red;
        margin-top: 0px;
        margin-left: 20px;
        margin-bottom: 0px;
    }

`;

export const Money = styled.label`
    font-size: 14px;

    .consulta{
        margin-bottom: -50px;
    }

    .dd{
        font-weight: bold;
        background-color:#380EA8;
        width: 25px;
        text-align: center;
        color: #fff;
        position: relative;
        height: 31px;
        top: 40px;
        text-line-height:20px;
        border-bottom-right-radius: 0px ;
        border-top-right-radius: 0px ;
        border-bottom-left-radius: 5px ;
        border-top-left-radius: 5px ;
    }

    input{
        border: 1px solid #380EA8;
        outline: none;
        padding: 8px 30px;
        width: 180px;
        border-radius:5px;
        margin-bottom: 10px;
        margin-top: 8px;
    }

    .aviso2{
        font-size: 12px;
        color: red;
        margin-top: -7px;
        margin-left: 20px;
        margin-bottom: -10px;
    }
`;
export const Pagamento= styled.div`
    font-size: 14px;

    .area-pag{
        background-color: #C5DECF;
        width: 220px;
        padding: 5px 20px;
        border-radius:5px;
        box-shadow: 0px 3px 4px #a5b0ac;
        margin-bottom: 10px;
        }

        input[type="radio"] {
            margin-right: 40px;
            cursor: pointer;
        }
        
        .area-pag-cartao{
            display: flex;
            flex-direction: column;
            background-color: #C5DECF;
            width: 220px;
            padding: 5px 20px;
            border-radius:5px;
            box-shadow: 0px 3px 4px #a5b0ac;
            margin-bottom: 0px;
            position: absolute;
            margin-top: -11px;
            text-align: center;

            input[type="radio"] {
                margin-right: 10px;
                cursor: pointer;
                margin-top: 10px;
            }

        }

 `;


export const State = styled.div`
    display: flex;
    align-items: center;

    div{
        display: flex;

        .area1 {
            width: 100px;
            height: 20px;
            background-color:#380EA8;
            border-bottom-left-radius: 5px ;
            border-top-left-radius: 5px ;
        }
        .area2 {
            width: 100px;
            height: 20px;
            background-color:#380EA8;
            border-bottom-right-radius: 5px ;
            border-top-right-radius: 5px ;
        }
    
    }
    p {
        font-size: 18px;
        font-weight: bold;
        color: #380EA8;
        margin-left: 10px;
    }
   
`;


export const Botao= styled.div`
    display: flex;
    align-items: center;

    button {
        width: 260px;
        height: 25px;
        border: none;
        background-color: #380EA8;
        color: #fff;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }

`;