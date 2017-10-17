import React from 'react';
import { Router, Scene, Switch } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115e54' }} titleStyle={{ color: '#fff' }} >
        <Scene
          key="root"
          component={Switch}
          selector={() => { return "formLogin" }}
        >
            <Scene key="formLogin" component={FormLogin} title="Login" hideNavBar={true} tabs={true} />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} />
            <Scene key="boasVindas" component={BoasVindas} title="Bem-Vindo" hideNavBar={true} initial />
            <Scene key="principal" component={Principal} title="Principal" hideNavBar={true} />
        </Scene>
    </Router>
)