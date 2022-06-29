
import { useNavigate, Link } from 'react-router-dom';
import  { ChangeEvent, useEffect, useState } from 'react';
import {useForm, FormActions} from '../../Context/Context'
import { AreaTotal } from '../../components/AreaTotal';
import * as C from './styles';
import { moneyMask } from '../../mask';



export const Etapa2 = () => {
  const navigate = useNavigate();
  const [dadoValor, setDadoValor] = useState(0);
  const [dadoVezes, setDadoVezes] = useState(0);
  const [estado, setEstado] = useState(0);
  const {state, dispatch} = useForm();
  const [pagamento , setPagamento  ] = useState(0);
  const [money , setMoney  ] = useState('');
  const [checkVezes , setCheckVezes  ] = useState(0);
  const [especCheck , setEspecCheck] = useState(0);

  useEffect(()=>{
    if(state.nome ===  ''){ //se caso n tiver nenhum nome digitado ele vai direto pra pagina principal
         navigate('/'); 
    }else{
        dispatch({
            type: FormActions.setEtapa,
            payload: 2
        });
    }
  
}, []);
  



  const handleValor = (e: ChangeEvent<HTMLInputElement>) =>{
    let valor = moneyMask(e.target.value);
    setMoney(valor);
    dispatch({
      type: FormActions.setValor,
      payload: valor
    });

    if(parseInt(valor) > 100){
      
      setDadoValor(0);
    }else{
      setDadoValor(1);
    }

  }

  

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      let valor = e.target.value;
      dispatch({
        type: FormActions.setEspecRec,
        payload: e.target.value
      });

      if(valor){
        setEspecCheck(1);
      }else{
        setEspecCheck(2);
      }
       
  }

 

  const handleButton = () => {
    let valor = parseInt(state.valor)
    if(pagamento === 1 && checkVezes === 1 && valor > 100){
      

        navigate("/etapa3");
    }else{
      alert("Preencha todos os dados!");
      
    }
  }

  const handleClickPag = (e: ChangeEvent<HTMLInputElement>) => {
      let valor = e.target.value;
      dispatch({
        type: FormActions.setPagamento,
        payload: parseInt(valor)
      });

      if(parseInt(valor) === 1){
        
        setDadoVezes(0);
        setPagamento(1);
        setCheckVezes(1);

      }else if(parseInt(valor) === 2){
       
        setDadoVezes(0);
        setPagamento(1);
        setCheckVezes(1);
      }else if(parseInt(valor) === 3){
      
        setDadoVezes(1);
        setPagamento(1);
        setCheckVezes(0);
      }else{
        setPagamento(0);
      }


  }

  const handleClickVezes = (e: ChangeEvent<HTMLInputElement>)  =>{
    let valor = e.target.value;
    dispatch({
      type: FormActions.setVezes,
      payload: parseInt(valor)
    });

    if(parseInt(valor) === 1){
      
      setDadoVezes(0);
      setCheckVezes(1);


    }else if(parseInt(valor) === 2){
     
      setDadoVezes(0);
      setCheckVezes(1);
    }else if(parseInt(valor) === 3){
     
      setDadoVezes(0);
      setCheckVezes(1);
    }else{
      setCheckVezes(0);
    }
  } 


  return(
    <C.Container>
      
      
        <AreaTotal 
          title="Sobre o atendimento"
          subTitle="Detalhes do atendimento"
        />
        <C.AreaForm>
          <C.Espec>
          Especialidade Principal* <br />
            <select name="" id="" onChange={handleSelect}>
              <option value="">Selecione a especialidade</option>
              <option value={state.especialidade.A}>{state.especialidade.A}</option>
              <option value={state.especialidade.B}>{state.especialidade.B}</option>
              <option value={state.especialidade.C}>{state.especialidade.C}</option>
            </select>
            {especCheck === 2 &&
              <p className="aviso">Escolha uma especilidade</p>
            }


          </C.Espec>
          <C.Money>
          <p className="consulta">Informe o Preço da consulta*</p> <br />
          <div className='dd'>R$</div>
            <input type="text"
               placeholder='Valor'
               maxLength={10}
               onChange={handleValor}
               value={state.valor}
               />
               
               {parseInt(money) < 100 && 
                <p className="aviso2">Valor minimo R$100.00. </p>
               }
          </C.Money>
          <C.Pagamento>
            <p>Formas de pagamento*</p>
              <div className='area-pag'>
                <label htmlFor="">
                  <input type="radio" name="3" id="" value={1}  onChange={handleClickPag}   />
                  Em dinheiro
                </label>
              </div>
              <div className='area-pag'>
                <label htmlFor="">
                  <input type="radio" name="3" id="" value={2} onChange={handleClickPag} />
                  Pix
                </label>
              </div>
              <div className='area-pag'>
                <label htmlFor="">
                  <input type="radio" name="3" id="" value={3} onChange={handleClickPag} />
                  Cartão de Credito
                </label>
                
              </div>
              {dadoVezes === 1 && 
                <div className='area-pag-cartao'>
                  Parcelamento em:
                  <label htmlFor="">
                    <input type="radio" name="check2" id="" onChange={handleClickVezes} value={1} />
                  1x sem juros
                </label>
                <label htmlFor="">
                    <input type="radio" name="check2" id="" onChange={handleClickVezes} value={2}/>
                    2x sem juros
                </label>
                <label htmlFor="">
                    <input type="radio" name="check2" id=""  onChange={handleClickVezes} value={3} />
                    3x sem juros
                </label>
                </div>
              }
          </C.Pagamento>
          <C.State>
              <div>
                  <div className='area1'></div>
                  <div className='area2'></div>
              </div>
              <p>2 de 2</p>
          </C.State>
          <C.Botao>
            <button onClick={handleButton} >Próximo</button>
          </C.Botao>
          <Link to='/' className='backBut' >⬅️</Link>
        </C.AreaForm>
    </C.Container>
  );

};