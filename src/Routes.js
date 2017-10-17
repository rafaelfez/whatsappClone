import React from 'react';
import { Router, Scene, Switch } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default props => (
    <Router>
        <Scene
          key="root"
          component={Switch}
          selector={() => { return "formLogin" }}
        >
            <Scene key="formLogin" component={FormLogin} title="Login" tabs={true} />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
            <Scene key="boasVindas" component={BoasVindas} title="Bem-Vindo" initial />
            <Scene key="principal" component={Principal} title="Principal" />
        </Scene>
    </Router>
)