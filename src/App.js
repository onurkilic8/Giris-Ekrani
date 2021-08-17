import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AnaSayfa} from './components/Anasayfa';
import {Giriş} from './components/Giriş';
import {ÜrünGrubuKayıt} from './components/GrupKayıt';
import {ÜrünGrubuGüncelleme} from './components/GrupGüncelleme';
import {ÜrünGrubuListeleme} from './components/GrupListeleme';
import {ÜrünKayıt} from './components/Kayıt';
import {ÜrünGüncelleme} from './components/Güncelleme';
import {ÜrünSilme} from './components/Silme';
import {ÜrünGrubuSilme} from './components/GrupSilme';
import {ÜrünArama} from './components/Arama';
import {Navigation} from './components/Navigation';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Switch>
      <Route path='/' component={AnaSayfa} exact/>
      <Route path='/Giriş' component={Giriş}/>
      <Route path='/GrupKayıt' component={ÜrünGrubuKayıt} />
      <Route path='/GrupGüncelleme' component={ÜrünGrubuGüncelleme} />
      <Route path='/GrupListeleme' component={ÜrünGrubuListeleme} />
      <Route path='/Kayıt' component={ÜrünKayıt} />
      <Route path='/Güncelleme' component={ÜrünGüncelleme} />
      <Route path='/Silme' component={ÜrünSilme} />
      <Route path='/Arama' component={ÜrünArama} />
      <Route path='/GrupSilme' component={ÜrünGrubuSilme} />


    </Switch>
    </BrowserRouter>
  );
}

export default App;
