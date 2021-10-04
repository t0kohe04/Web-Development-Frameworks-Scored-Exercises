import logo from './logo.svg';
import './App.css';

import NavBar from './page components/NavBar';
import Notification from './page components/Notification';
import MainPage from './page components/MainPage';
import SideBar from './page components/SideBar';
import Footer from './page components/Footer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Notification topic='SEURAA SUORAA LÄHETYSTÄ' body='Naapurin mummon kissa jäänyt puuhun jumiin (taas)'/>
        <Notification topic='AAMUPLÄJÄYS' body='Innovaatioviikko jälleen lähestymässä, insinöörit kauhuissaan'/>
        <Notification topic='MAINOS' body='Haluamme lisää rahaa €€€'/>

        <MainPage />     
        <SideBar /> 
        
    </div>
  );
}

export default App;
