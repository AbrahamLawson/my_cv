import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import MouseParticles from 'react-mouse-particles'
import {
  AboutMe,
  Skills,
  Products,
  Contact
} from './RightSide'

const areas = [
  {
    title: 'About Me',
    idArea: 'area_aboutme',
    idBtn: 'btn_aboutme',
    offsetTop: 0,
    active: true,
    component: (id) => <AboutMe title key={id} id={id} />
  },
  {
    title: 'Skills',
    idArea: 'area_skills',
    idBtn: 'btn_skills',
    offsetTop: null,
    active: false,
    component: (id) => <Skills key={id} id={id} />
  },
  {
    title: 'Products',
    idArea: 'area_products',
    idBtn: 'btn_products',
    offsetTop: null,
    active: false,
    component: (id) => <Products key={id} id={id} />
  },
]

const App = () => {
  const [listArea, setlistArea] = useState(areas)
  
  useEffect(() => {

    const modifiedAreas = listArea.map((area) => {
      const offsetTop = document.getElementById(area.idArea).offsetTop
      return { ...area, offsetTop }
    })
    setlistArea(modifiedAreas)

    window.addEventListener('scroll', () => {
      const offsetTop = window.pageYOffset
      const listAreaIsScrolled = modifiedAreas.filter((area) => area.offsetTop <= offsetTop + 150)
      setlistArea((preList) => {
        return preList.map((item) => ({
          ...item,
          active: item.idArea === listAreaIsScrolled[listAreaIsScrolled.length - 1].idArea
        }))
      })
    })
  }, [])

  
  return (
    <>
      <div className="container-fluid d-flex bg-dark min-vh-100 justify-content-center">
        <div className="col-10 d-flex flex-row">
          <div className="col-4 bg-light">
            <LeftSide 
              listArea={listArea}
            />
          </div>
          <div className="col bg-app">
            {
              areas.map((area) => area.component(area.idArea))
            }
          </div>
        </div>
      </div>
      <MouseParticles g={1} color="random" cull="btn"/>
    </>
  );
}

export default App;
