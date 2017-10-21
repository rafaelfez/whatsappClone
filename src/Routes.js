import React from 'react';
import { Router, Scene, Switch } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicionarContato from './components/AdicionarContato';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115e54' }} titleStyle={{ color: '#fff' }} >
        <Scene
          key="root"
          component={Switch}
          selector={() => { return "formLogin" }}
        >
            <Scene key="formLogin" component={FormLogin} title="Login" hideNavBar={true} tabs={true} />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" hideNavBar={false} />
            <Scene key="boasVindas" component={BoasVindas} title="Bem-Vindo" hideNavBar={true} />
            <Scene key="principal" component={Principal} title="Principal" hideNavBar={true}  />
            <Scene key="adicionarContato" component={AdicionarContato} title="Adicionar Contato" hideNavBar={false} />
        </Scene>
    </Router>
)