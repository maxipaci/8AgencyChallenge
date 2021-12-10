
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import React from 'react'
import Spinner from 'react-loader-spinner'

const Loader = ({
  height, width, visible
}) => (
  <Spinner
    type="Circles"
    color="#00BFFF"
    height={height}
    width={width}
    visible={visible}
  />
)

export default Loader
