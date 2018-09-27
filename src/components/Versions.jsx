import React from 'react'
import styled from 'styled-components'

import { ReactComponent as DocsIcon } from '../assets/docs.svg'
import { ReactComponent as OpenPitrix } from '../assets/openpitrix.svg'
import { ReactComponent as Arrow } from '../assets/arrow.svg'

const Versions = ({ versions, current }) => {

  return (
    <VersionsWrapper>
      <DocsIcon className="version-logo"/>
      <div className="version-text">
        <OpenPitrix className="openpitrix-icon"/>
        <p style={{ textTransform: 'capitalize' }}>{current}</p>
      </div>
      {versions.length > 0 && <Arrow className="version-arrow"/>}
    </VersionsWrapper>
  )
}

const VersionsWrapper = styled.div`
  padding: 25px 20px;

  .version-logo {
    width: 24px; 
    height: 24px; 
    margin-right: 16px;
    vertical-align: middle;
  }

  .version-text {
    display: inline-block;
    vertical-align: middle;

    .openpitrix-icon {
      display: block;
      width: 104px;
      height: 16px;
    }

    & > p {
      margin: 0;
      margin-top: 8px;
      font-size: 12px; 
      line-height: 17px;
    }
  }

  .version-arrow {
    float: right;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
`

export default Versions
