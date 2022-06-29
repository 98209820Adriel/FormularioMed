
import { useNavigate, Link } from 'react-router-dom';
import  { ChangeEvent, useEffect, useState } from 'react';
import {useForm, FormActions} from '../../Context/Context'
import * as C from './styles';
import { moneyMask } from '../../mask';
import img from '../../img/icon.png';



export const Etapa4 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();


  useEffect(()=>{
    if(state.nome ===  ''){ //se caso n tiver nenhum nome digitado ele vai direto pra pagina principal
        
         navigate('/'); 
    }else{
        dispatch({
            type: FormActions.setEtapa,
            payload: 4
        });
    }
  
}, []);

  const handleButton = () => {
      window.location.reload();
  }


  return(
    <C.Container>
      
      <C.AreaTitle>
          <h1>Cadastro Finalizado</h1>
      </C.AreaTitle>
        <C.AreaForm>
        <div className='area-avatar'>
          <div className='avatar'>
            <img src={img} alt="" />
            <p>{`Dr(a). ${state.nome}`}</p>
          </div>
          <div className='espec'>
            <h3>Especilização:</h3>
            <p>{state.especRec}</p>
          </div>
          <div className='telefone'>
            <h3>Celular:</h3>
            <p>{state.telefone}</p>
          </div>
          <div className='estado'>
            <h3>Região:</h3>
            <p>{`${state.estadoRec}-${state.cidadeRec}`}</p>
          </div>

        </div>
          

       

        
          <div className='consulta'>
            <div className='valor'>
              <h3>Preço da consulta:</h3>
              <p>{`R$ ${state.valor},00`}</p>
            </div>
            {state.pagamento === 1 && 
              <p className='tipo'>Em dinheiro 💰</p>
            }
            {state.pagamento === 2 && 
              <p className='tipo'>Pix 🏦</p>
            }
            {state.pagamento === 3 && 
              <p className='tipo'>{`💳 Cratão de crédito em até ${state.vezes}x sem juros `}</p>
            }
          </div>

          

        
          

          <C.Botao>
            <button onClick={handleButton} >Finalizar Cadastro</button>
          </C.Botao>
          
          
        </C.AreaForm>
    </C.Container>
  );

};