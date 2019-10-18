import React from 'react';
import { connect } from 'react-redux'
// import img from './loading_spinner.gif'
let Loading = ({ loading }) => (
loading ?
<div style={{ textAlign: 'center' }}>
   <img src='https://cdn.dribbble.com/users/359314/screenshots/2379673/untitled-3.gif' alt='loading' />
   <h1>LOADING</h1>
</div> :
null
);
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;