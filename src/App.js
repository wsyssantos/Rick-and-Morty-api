import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardList from './Components/CardList';
import CardInfo from './Components/CardInfo';
import './Style/main.scss';



/* --Dentro do CardList é onde recebo as informações
   --As informações são passadas para cada card presente na tela
   --Clicando em um Card, as informações são repassadas para o CardInfo */


export default function App() {
  return (
    <div className="app">
      <BrowserRouter> {/* Para navegação */}
        <Switch> {/* Relacionado a opções de escolhas das rotas */}
          <Route path="/" exact={true} component={CardList}/>{/* Route para as rotas */}
          <Route path="/sobre/:id" component={CardInfo}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}


