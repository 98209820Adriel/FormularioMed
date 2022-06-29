import styled from 'styled-components';
import img from '../../img/imagem4.png';

export const Container = styled.div`
    height: 570px;
    width: 700px;
    border-radius:10px;
    background-color: #fff;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 340px;
    background-position: 350px;
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

    .editar{
        text-decoration: none;
        margin-left: 60px;
        margin-top: 20px;
        font-weight:500;
    }
`;

export const AreaForm = styled.div`
    
    display: flex;
    flex-direction: column;
    padding-left: 60px;

    .revisao{
        display: flex;
        flex-direction: column;
        margin-bottom:0px;

        h3{ 
            font-weight: 500;
            margin-top:15px;
            font-size:14px;
            margin-bottom:0px;
        }
        p{
            margin-top:5px;
            margin-bottom:0px;
            font-size:13px;
        }

    }
`;

export const AreaTitle= styled.div`
    height: 70px;
    h1{
        
        font-size: 37px;
        font-weight: 400;
        color:#380EA8;
    }
    
    padding-left: 60px;
`;




export const Botao= styled.div`
    display: flex;
    align-items: center;

    button {
        margin-top:30px;
        width: 260px;
        height: 25px;
        border: none;
        background-color: yellow;
        color: #380EA8;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }

    
`;