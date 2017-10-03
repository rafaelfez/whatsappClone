import React from 'react';
import { Router, Scene, Switch } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
    <Router>
        <Scene
          key="root"
          component={Switch}
          selector={() => { return "formLogin" }}
        >
            <Scene key="formLogin" component={FormLogin} title="Login" tabs={true} />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
        </Scene>
    </Router>
)