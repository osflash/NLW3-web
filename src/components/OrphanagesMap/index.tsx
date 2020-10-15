import React from 'react'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { NextPage } from 'next'
import Link from 'next/link'

import MapMarker from '../../../public/assets/map-marker.svg'
import Orphanage from '../../models/Orphanage'
import mapIcon from '../../utils/mapIcon'
import { Container } from './styles'

interface OrphanagesMapProps {
  orphanages: Orphanage[]
}

const OrphanagesMap: NextPage<OrphanagesMapProps> = ({ orphanages }) => {
  return (
    <Container>
      <aside>
        <header>
          <MapMarker />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>

      <Map
        center={[-22.9867106, -43.3906374]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => {
          const { id, latitude, longitude, name } = orphanage

          return (
            <Marker key={id} icon={mapIcon} position={[latitude, longitude]}>
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {name}
                <Link href={`/orphanages/${id}`}>
                  <a>
                    <FiArrowRight size={20} color="#FFF" />
                  </a>
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link href="/orphanages">
        <a className="create-orphanage">
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
    </Container>
  )
}

export default OrphanagesMap
