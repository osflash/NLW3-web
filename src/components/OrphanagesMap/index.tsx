import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import { NextPage } from 'next'
import Link from 'next/link'

import MapMarker from '../../assets/map-marker.svg'
import { Container } from './styles'

import 'leaflet/dist/leaflet.css'

const OrphanagesMap: NextPage = () => {
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
        center={[-27.2, -49.6]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <Link href="/">
        <a className="create-orphanage">
          <FiPlus size={32} color="#fff" />
        </a>
      </Link>
    </Container>
  )
}

export default OrphanagesMap
