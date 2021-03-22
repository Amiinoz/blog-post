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
          Building things. Learning New technology. Currently <br /> working on personal projects 💎.
        </p>
      </div>
    </>
  )
}

export default Bio
