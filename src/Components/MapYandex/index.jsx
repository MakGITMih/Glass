import './mapYandex.scss'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function MapYandex() {
    return (
        <>
            <section className="map">
                <YMaps>
                    
                    <Map defaultState={{
                        center: [59.979891, 30.659253], zoom: 15,
                    }}
                        width='100%'
                        height="100%"
                    >
                        <Placemark geometry={[59.979891, 30.659253]}></Placemark>
                    </Map>
                </YMaps>
            </section>
        </>
    );
}

export default MapYandex;