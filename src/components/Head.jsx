import React from 'react';
import {Helmet} from 'react-helmet';

const Head = (props) => {
  return (
    <>
    <Helmet>
    <title> ARSLAN  | {props.title}</title>
    </Helmet>
    </>
  )
}

export default Head