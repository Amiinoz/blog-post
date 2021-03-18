import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'

import * as bioStyles from './bio.module.scss'
import BioPic from './aboutImage.png'



const Bio = () => {








  return (
    <>
      <div className={bioStyles.bio}>
        <div className={bioStyles.bioImage}>
          <img src={BioPic} alt="import"></img>
          <br />
        </div>

        <p className={bioStyles.bioIntro}>
          Written by <strong>Mo Magan</strong> <br />
          Building things. Nomad. Currently <br /> working on the @Sketchapp
          plugin ecosystem 💎.
        </p>
      </div>
    </>
  )
}

export default Bio
