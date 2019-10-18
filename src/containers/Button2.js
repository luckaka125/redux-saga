import React from 'react';
import { connect } from 'react-redux';
import { getNewsAbout } from '../services/about/aboutAction';
let Button2=({getNewsAbout})=>(
   <button onClick={getNewsAbout}>Press to bt2</button>
)
const mapDispatchToProps = {
   getNewsAbout: getNewsAbout,
}
Button2 = connect(null,mapDispatchToProps)(Button2);
export default Button2
