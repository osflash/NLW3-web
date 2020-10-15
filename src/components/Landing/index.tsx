import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import Link from 'next/link'

import HappyLogo from '../../../public/assets/logo.svg'
import { Container } from './styles'

const Landing: React.FC = () => {
  return (
    <Container>
      <div className="content-wrapper">
        <HappyLogo />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </div>

        <Link href="/app">
          <a className="enter-app">
            <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default Landing
