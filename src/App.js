import React from 'react';
import ProfilForm from './components/ProfilForm/profileForm';
import UpdateImageProfil from './components/UploadeImage/UploadeImage';
import InfoProfile from './components/InfoProfile/infoProfile';
import './App.css';

function App() {
    
    return (
        <div className="App">
            <ProfilForm />
            <UpdateImageProfil />
            <InfoProfile />
        </div>
    );
}

export default App;
