
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from 'react';
import {useForm, FormActions} from '../../Context/Context'
import { AreaTotal } from '../../components/AreaTotal';
import * as C from './styles';
import { cpfMask, celMask } from '../../mask';


export const Etapa1 = () => {
  const navigate = useNavigate();
  const [dado, setDado] = useState(0);
  const [dadoCpf, setDadoCpf] = useState(0);
  const [dadoCel, setDadoCel] = useState(0);
  const {state, dispatch} = useForm();
  const [cidade , setCidade  ] = useState('');
  const [estado , setEstado ] = useState('');
  const [valorCidade , setValorCidade ] = useState('');
  const [estadoCheck , setEstadoCheck] = useState(0);
  const [cidadeCheck , setCidadeCheck] = useState(0);


  useEffect(()=>{
  
        dispatch({
            type: FormActions.setEtapa,
            payload: 1
        });
    
  
}, []);



  const handleNome = (e: ChangeEvent<HTMLInputElement>) =>{
    let valor = e.target.value;

    dispatch({
      type: FormActions.setNome,
      payload: valor
    });


    if(valor.length >= 8 ){
      setDado(0);
    }else{
      setDado(1);
    }

  }

  const handleCpf = (e: ChangeEvent<HTMLInputElement>) =>{
    let valor = cpfMask(e.target.value);
    dispatch({
      type: FormActions.setCpf,
      payload: valor
    });

    if(valor.length === 14 ){
     
      setDadoCpf(0);
    }else{
      setDadoCpf(1);
    }

  }

  const handleCelular = (e:ChangeEvent<HTMLInputElement> ) =>{
    let valor = celMask(e.target.value);
    dispatch({
      type: FormActions.setTelefone,
      payload: valor
    });

    if(valor.length === 14 ){
      
      setDadoCel(0);
    }else{
      setDadoCel(1);
    }
  }

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      let valor = e.target.value;
      setEstado(valor);
     

      if(valor === "RS"){
          setCidade(state.cidade.RS);
          setEstadoCheck(1);
      }else if(valor === "SC"){
        setCidade(state.cidade.SC);
        setEstadoCheck(1);
      }else if(valor === "SP"){
        setCidade(state.cidade.SP);
        setEstadoCheck(1);
      }else{
        setEstadoCheck(0);
      }
  }

  const handleSelectCidade = (e: ChangeEvent<HTMLSelectElement>) => {
    let valor = e.target.value;
    setValorCidade(valor);
    if(valor ){
      setCidadeCheck(1);
    }else{
      setCidadeCheck(0);
    }

 
  }

  const handleButton = () => {
    if(state.nome.length >= 8 && state.cpf.length === 14 && state.telefone.length === 14 && estadoCheck === 1 && cidadeCheck === 1){
      dispatch({
        type: FormActions.setEstadoRec,
        payload: estado
      });

      dispatch({
        type: FormActions.setCidadeRec,
        payload: valorCidade
      });

        navigate("/etapa2");

    }else{
        alert("Preencha todos os dados!");
      setEstadoCheck(3);
    }
  }

  return(
    <C.Container>
        <AreaTotal
          title="Sobre o Profissional"
          subTitle="Dados do Profissional"
        />
        <C.AreaForm>
          <C.Nome>
          Nome Completo* <br />
            <input
             type="text"
              placeholder='Digite o nome Completo'
               maxLength={40}
                minLength={8}
                value={state.nome}
                 onChange={handleNome}
                 
                  />
            {dado === 1 &&
              <p className="aviso">digite um nome com no minimo 8 caracteres!</p>
            }


          </C.Nome>
          <C.Cpf>
          CPF* <br />
            <input type="text"
             name=""
              id=""
               placeholder='Digite o CPF'
               maxLength={14}
               onChange={handleCpf}
               value={state.cpf}
               />
               {dadoCpf === 1 && 
                <p className="aviso2">Digite seu cpf sem "." e "-". </p>
               }
          </C.Cpf>
          <C.Telefone>
          Número de Celular* <br />
            <input type="text"
             name=""
              id=""
               placeholder='(00) 00000-0000'
               onChange={handleCelular}
               value={state.telefone}
               />
               {dadoCel === 1 &&
              <p className="aviso3">Digite seu celular sem "()" e "-".</p>
            }
          </C.Telefone>
          <C.Es>
              
              <label htmlFor="">
              Estado* <br />
                <select name="" id="" onChange={handleSelect} >
                  <option value=""></option>
                  <option value={state.estado.RS} >{state.estado.RS}</option>
                  <option value={state.estado.SC}>{state.estado.SC}</option>
                  <option value={state.estado.SP}>{state.estado.SP}</option>
                </select>
              </label>

              <label htmlFor="">
              *Cidade <br />
                <select name="" id="" onChange={handleSelectCidade}>
                  <option value=""></option>
                  <option value={cidade[0]}>{cidade[0]}</option>
                  <option value={cidade[1]}>{cidade[1]}</option>
                  <option value={cidade[2]}>{cidade[2]}</option>
                </select>
              </label>
          </C.Es>
          {estadoCheck === 3 && 
            <p className='aviso3'>Selecione o estado e a cidade.</p>
          }
          <C.State>
              <div>
                  <div className='area1'></div>
                  <div className='area2'></div>
              </div>
              <p>1 de 2</p>
          </C.State>
          <C.Botao>
            <button onClick={handleButton} >Próximo</button>
          </C.Botao>
        </C.AreaForm>
    </C.Container>
  );

};