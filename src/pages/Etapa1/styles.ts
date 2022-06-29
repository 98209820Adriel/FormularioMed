import styled from 'styled-components';
import img from '../../img/imagem2.png'

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
`;

export const AreaForm = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 60px;
`;

export const Nome = styled.label`
        font-size: 14px;
    input{
        border: 1px solid #380EA8;
        outline: none;
        padding: 8px 20px;
        width: 270px;
        border-radius:5px;
        margin-bottom: 20px;
        margin-top: 8px;
    }

    .aviso{
        font-size: 12px;
        color: red;
        margin-top: -18px;
        margin-left: 20px;
    }

`;

export const Cpf = styled.label`
    font-size: 14px;
    input{
        border: 1px solid #380EA8;
        outline: none;
        padding: 8px 20px;
        width: 200px;
        border-radius:5px;
        margin-bottom: 20px;
        margin-top: 8px;
    }

    .aviso2{
        font-size: 12px;
        color: red;
        margin-top: -18px;
        margin-left: 20px;
    }
`;
export const Telefone= styled.label`
    font-size: 14px;
    input{
        border: 1px solid #380EA8;
        outline: none;
        padding: 8px 20px;
        width: 200px;
        border-radius:5px;
        margin-bottom: 20px;
        margin-top: 8px;
    }
    .aviso3{
        font-size: 12px;
        color: red;
        margin-top: -18px;
        margin-left: 20px;
    }

`;

export const Es = styled.div`
    display: flex;

    label {
        margin-right: 10px;
        
        select {
            cursor: pointer;
            outline: none;
            width: 145px;
            padding: 3px 20px;
            border: 1px solid #380EA8;
            border-radius:5px;
            margin-top: 8px;
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
            background-color:#C4C6E3;
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