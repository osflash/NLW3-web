import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { useRouter } from 'next/router'

import MapMarker from '../../../public/assets/map-marker.svg'
import { Container } from './styles'

const Sidebar: React.FC = () => {
  const { back } = useRouter()

  return (
    <Container>
      <aside>
        <MapMarker />

        <footer>
          <button type="button" onClick={back}>
            <FiArrowLeft size={24} color="#FFF" />
          </button>
        </footer>
      </aside>
    </Container>
  )
}

export default Sidebar
