
import { useNavigate, Link } from 'react-router-dom';
import  { ChangeEvent, useEffect, useState } from 'react';
import {useForm, FormActions} from '../../Context/Context'
import * as C from './styles';




export const Etapa3 = () => {
  const navigate = useNavigate();
  const {state, dispatch} = useForm();

  useEffect(()=>{
    if(state.valor ===  ''){ //se caso n tiver nenhum nome digitado ele vai direto pra pagina principal
         navigate('/'); 
    }else{
        dispatch({
            type: FormActions.setEtapa,
            payload: 3
        });
    }
  
}, []);
  

  const handleButton = () => {
        navigate("/etapa4");
  }


  return(
    <C.Container>
      
      <C.AreaTitle>
          <h1>Revisão de Cadastro</h1>
      </C.AreaTitle>
        <C.AreaForm>
          <div className='revisao'>
            <h3>Nome Completo</h3>
            <p>{state.nome}</p>
          </div>

          <div className='revisao'>
            <h3>CPF</h3>
            <p>{state.cpf}</p>
          </div>

          <div className='revisao'>
            <h3>Número do celular ou telefone</h3>
            <p>{state.telefone}</p>
          </div>

          <div className='revisao'>
            <h3>Estado/Cidade</h3>
            <p>{`${state.estadoRec}-${state.cidadeRec}`}</p>
          </div>

          <div className='revisao'>
            <h3>Especilidade Principal</h3>
            <p>{state.especRec}</p>
          </div>

          <div className='revisao'>
            <h3>Preço da consulta</h3>
            <p>{`R$ ${state.valor},00`}</p>
          </div>

          <div className='revisao'>
            <h3>Formas de pagamento da consulta</h3>
            {state.pagamento === 1 && 
              <p>Em dinheiro</p>
            }
            {state.pagamento === 2 && 
              <p>Pix</p>
            }
            {state.pagamento === 3 && 
              <p>{`Cratão de crédito - Parcelamento em ${state.vezes}x sem juros `}</p>
            }
          </div>
          

          <C.Botao>
            <button onClick={handleButton} >CADASTRAR PROFISSIONAL</button>
          </C.Botao>
          <Link to='/' className='editar'>Editar cadastro</Link>
          <Link to='/etapa2' className='backBut' >⬅️</Link>
        </C.AreaForm>
    </C.Container>
  );

};