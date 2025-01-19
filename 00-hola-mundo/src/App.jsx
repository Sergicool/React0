import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

import perfil1 from './assets/perfil1.png'
import perfil2 from './assets/perfil2.png'

export function App () {
    return (
        <>
            <TwitterFollowCard userName="Sergical" name="Sergio" imgSource={perfil1} />
            <TwitterFollowCard userName="ElPutisimoPesadoDeTurno" name="ElTorbas" imgSource={perfil2} />
        </>   
    )
}