import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import Home from './screens/Home';
import Indexacao from './screens/Indexacao';
import Tutorial from './screens/Tutorial';
import EscolhaTipoDoc from './screens/EscolhaTipoDoc';
import TipoDocRG from './screens/TipoDocRG';
import TipoDocCNH from './screens/TipoDocCNH';
import CapturaDoc from './screens/CapturaDoc';
import Sucesso from './screens/Sucesso';

const App = createSwitchNavigator({
  Home: {
    screen: Home,
  },
  Indexacao: {
    screen: Indexacao,
  },
  Tutorial: {
    screen: Tutorial,
  },
  EscolhaTipoDoc: {
    screen: EscolhaTipoDoc,
  },
  TipoDocRG: {
    screen: TipoDocRG,
  },
  TipoDocCNH: {
    screen: TipoDocCNH,
  },
  CapturaDoc: {
    screen: CapturaDoc,
  },
  Sucesso: {
    screen: Sucesso,
  },
});

export default createAppContainer(App);