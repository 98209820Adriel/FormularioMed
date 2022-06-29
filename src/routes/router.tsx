import {Route, Routes} from 'react-router-dom';
import { Etapa1 } from '../pages/Etapa1';
import { Etapa2 } from '../pages/Etapa2';
import { Etapa3 } from '../pages/Etapa3';
import { Etapa4 } from '../pages/Etapa4';


export const Router =() =>{
    return(
        <Routes>
            <Route path="/"  element={<Etapa1/>}  />
            <Route path="/etapa2"  element={<Etapa2/>}  />
            <Route path="/etapa3"  element={<Etapa3/>}  />
            <Route path="/etapa4"  element={<Etapa4/>}  />
        </Routes>
    );
}

