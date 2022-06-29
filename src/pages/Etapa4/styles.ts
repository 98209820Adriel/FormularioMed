import styled from 'styled-components';
import img from '../../img/imagem5.png';

export const Container = styled.div`
    height: 570px;
    width: 700px;
    border-radius:10px;
    background-color: #fff;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: 370px 210px;
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

    .area-avatar{
        margin-top: 25px;
        display: flex;
        align-items: center;

        .avatar{
            
            img{
                margin-top: 20px;
                width: 80px;
            }
            p{
                margin-top: 0px;
                font-size: 13px;
                font-weight: 500;
            }
        }
        
        .espec{
            border-bottom: 2px solid #380EA8;
            display: flex;
            align-items: center;
            margin-left:20px;
            h3{
                font-size: 13px;
                font-weight: 500;

            }
            p{
                font-size: 13px;
                margin-left:5px;
            }
        }

        .telefone{
            border-bottom: 2px solid #380EA8;
            display: flex;
            align-items: center;
            margin-left:20px;
            h3{
                font-size: 13px;
                font-weight: 500;

            }
            p{
                font-size: 13px;
                margin-left:5px;
            }
        }

        .estado{
            border-bottom: 2px solid #380EA8;
            display: flex;
            align-items: center;
            margin-left:20px;
            h3{
               
                font-size: 13px;
                font-weight: 500;
            }
            p{
                font-size: 13px;
                margin-left:5px;
            }
        }

    }
    
 

    .consulta{
        margin-top: 60px;
        display: flex;
       
        .valor{
            display: flex;
        flex-direction: column;
        margin-bottom:0px;

        h3{ 
            font-weight: bold;
            margin-top:15px;
            font-size:20px;
            margin-bottom:0px;
        }
        p{
            width:100px;
            font-weight: 500;
            margin-top:5px;
            margin-bottom:0px;
            margin-left 10px;
            font-size:17px;
            color: #380EA8;
            border-bottom:1px solid #380EA8;
        }
        }
        
        .tipo{
            font-size: 14px;
            margin-top:50px;
            margin-left: -40px;
            width: 150px;
        }
    }

`;

export const AreaTitle= styled.div`
    height: 70px;
    margin-top: 20px;
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
        font-size: 16px;
        margin-top:40px;
        width: 260px;
        height: 30px;
        border: none;
        background-color: #551AD9;
        color: #fff;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }

    
`;