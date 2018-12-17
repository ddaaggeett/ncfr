import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../actions/restaurant'
import Restaurant from '../components/Restaurant'
import '../style/main.css'

function mapStateToProps(state) {
	return {
		restaurant: state.restaurant
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Object.assign({}, actions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)
