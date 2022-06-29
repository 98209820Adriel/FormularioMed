import { Router } from './routes/router';
import {FormProvider} from './Context/Context';
import * as C from './styles';

const App = () => {
  return(
    <C.Container>
        <FormProvider>
            <Router/>
        </FormProvider>
    </C.Container>
  );

};

export default App;