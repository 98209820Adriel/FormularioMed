import { createContext, ReactNode, useContext, useReducer} from 'react';

type FormProviderProps = {
    children: ReactNode
}

type State ={
    etapa: number;
    nome: string;
    cpf: string;
    estado:any;
    cidade: any;
    telefone: string;
    valor: string;
    pagamento: 1 | 2 | 3;
    vezes: number;
    especialidade:any;
    estadoRec: any;
    cidadeRec: any;
    especRec: any;
};

type Action ={
    type: FormActions;
    payload: any;
};

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}




const estados = {
    RS: "RS",
    SC: "SC",
    SP: "SP"
}
const espec ={
    A:'Pediatra',
    B:'Obstetra',
    C:'Clinico Geral'
};



const cidade = {
    RS: ['Porto Alegre', 'Alvorada', 'Viamão'],
    SC: ['Florianopolis', 'Criciuma', 'Chapeco'],
    SP: ['São Paulo', 'Campinas','Santo Andre']
}

const dadosIniciais: State = {
    etapa: 0,
    nome: '',
    cpf: '',
    estado: estados,
    cidade: cidade,
    telefone: '',
    valor: '',
    pagamento: 1,
    vezes: 0,
    especialidade: espec,
    estadoRec: undefined,
    cidadeRec: undefined,
    especRec: undefined
}

//Context
const Context = createContext<ContextType | undefined>(undefined); 


//Reducer
export enum FormActions {
    setEtapa,
    setNome,
    setCpf,
    setEstado,
    setCidade,
    setTelefone,
    setValor,
    setPagamento,
    setVezes, 
    setEspec,
    setEstadoRec,
    setCidadeRec,
    setEspecRec,
}

const formReducer = (state: State, action: Action) =>{
    switch(action.type){
        case FormActions.setEtapa:
            return {...state, etapa: action.payload};
        case FormActions.setNome:
            return {...state, nome: action.payload};
        case FormActions.setCpf:
            return {...state, cpf: action.payload};
        case FormActions.setEstado:
            return {...state, estado: action.payload};
        case FormActions.setCidade:
            return {...state, cidade: action.payload};
        case FormActions.setTelefone:
            return {...state, telefone: action.payload};
        case FormActions.setValor:
            return {...state, valor: action.payload};
        case FormActions.setPagamento:
            return {...state, pagamento: action.payload};
        case FormActions.setVezes:
            return {...state, vezes: action.payload};
        case FormActions.setEspec:
            return {...state, especialidade: action.payload};
        case FormActions.setEstadoRec:
            return {...state, estadoRec: action.payload};
        case FormActions.setCidadeRec:
            return {...state, cidadeRec: action.payload};
        case FormActions.setEspecRec:
                return {...state, especRec: action.payload};
        default:
            return state;

    }

}

//Provider

export const FormProvider = ({children}:FormProviderProps) =>{
    const [state, dispatch] = useReducer(formReducer, dadosIniciais);


    const value = {state, dispatch};

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useForm = () => {
    const context = useContext(Context);
    if(context === undefined){
        throw new Error('useForm precisa ser usado dentro de FormProvider');
    }
        return context;
};