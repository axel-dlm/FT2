import BarreIcon from "../Icon/BarreIcon"
import BoiteIcon from "../Icon/BoiteIcon"
import EnergieIcon from "../Icon/EnergieIcon"
import HomeIcon from "../Icon/HomeIcon"
import KilIcon from "../Icon/KilIcon"
import MpIcon from "../Icon/MpIcon"
import RotaIncon from "../Icon/RotaIcon"
import VnIcon from "../Icon/VnIcon"
import VoIcon from "../Icon/VoIcon"
import VoitureIcon from "../Icon/VoitureIcon"
import WaffleIcon from "../Icon/WaffleIcon"
import Motor from "../charts/motor"
import MyResponsiveTreeMap from "../charts/treemapChart"
import MyResponsiveBar from "../charts/DiagBarre"
import { useState } from "react"

export default function Page1() {
    const [name, setName] = useState('Home')
    const style = {
        body: {
            height: '100vh',
            width: '100wh',
            padding: '1.1rem',
            display: 'flex',
        },
        component1Icon: {
            //flex:1,
        },
        SideBarre: {
            display: 'flex',
            flexDirection: 'column',
            //justifyContent: 'space-between',
            textAlign: 'center',
            fontSize: '24px',
            gap: '23px',
            color: '#a3a3a3',
            fontFamily: 'Lato',
        },
        main: {
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            aligneItems: 'center'
        },
        Ensemble: {
            height: '80%',
            width: '90%',
            backgroundColor: 'White',
            marginLeft: '8%',
            display: 'flex',
            //justifyContent:'center',

        },
        BarreContainer: {
            width: '100%',
            height: '80%',
            display: 'block',
            justifyContent: 'center',
            //marginRight:'2%',
            alignItems: 'center',
        },
        Titre: {
            width: '100%',
            height: '48px',
            color: '#8FBAD8',
            textAlign: 'center',
        },
    }

    return (
        <div style={style.body}>
            <div style={style.SideBarre}>
                <div style={style.component1Icon} onClick={() => setName('Home')}><HomeIcon active={name == 'Home'} /></div>
                <div style={style.component1Icon}><VoIcon active={name == 'Vo'} /> </div>
                <div style={style.component1Icon}><VnIcon active={name == 'Vn'} /> </div>
                <div style={style.component1Icon}><MpIcon active={name == 'Mp'} /> </div>
                <div style={style.component1Icon}><BarreIcon active={name == 'Barre'} /> </div>
                <div style={style.component1Icon}><VoitureIcon active={name == 'Voiture'} /> </div>
                <div style={style.component1Icon}><WaffleIcon active={name == 'MyResponsiveTreeMap'} /> </div>
                <div style={style.component1Icon} onClick={() => setName("motor")}><BoiteIcon active={name == 'motor'} /> </div>
                <div style={style.component1Icon}><EnergieIcon active={name == 'DiagBarre'} /> </div>
                <div style={style.component1Icon}><KilIcon active={name == 'Kil'} /> </div>
                <div style={style.component1Icon}><RotaIncon active={name == 'Rota'} /> </div>
            </div>
            <div style={style.main}>
                <div style={style.BarreContainer}>
                    {name === 'Home' &&
                        <h1 className='text-1'>Home</h1>}
                    {name === 'waffle' &&
                        <h1 className='text-1'>Nombre de voiture vendu par marque</h1>}



                    {(name === 'waffle' || name === 'Home') && <MyResponsiveTreeMap></MyResponsiveTreeMap>}
                    {(name === 'motor' || name === 'Home') && <Motor percent={51} />}



                </div>
            </div>
        </div>
    )
}


{/* <h1 style={style.Titre}>Motorisation les plus vendus</h1> */ }


// {name === 'Home' &&
// <h1 className='text-1'>Home</h1>}
// {name === 'waffle' &&
// <h1 className='text-1'>Nombre de voiture vendu par marque</h1>}
// {(name === 'waffle' || name === 'Home') && <MyResponsiveTreeMap></MyResponsiveTreeMap>}
// {(name === 'motor' || name === 'Home') && <Motor percent={51}/>}