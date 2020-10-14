import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    position: relative;

    width: 100%;
    max-width: 1100px;

    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url('../../assets/landing.svg') no-repeat right center;
  }

  .content-wrapper main {
    max-width: 350px;
  }

  .content-wrapper main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  .content-wrapper main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }

  .content-wrapper .location {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;
  }

  .content-wrapper .location strong {
    font-weight: 800;
  }

  .content-wrapper .enter-app {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  .content-wrapper .enter-app:hover {
    background: #96feff;
  }
`
