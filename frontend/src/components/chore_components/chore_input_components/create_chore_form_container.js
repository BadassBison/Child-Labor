import { connect } from 'react-redux'
import CreateChoreForm from './create_chore_form'
import { withRouter } from 'react-router-dom'
import { createUnassignedChore } from '../../../actions/chore_actions'

const mapStateToProps = (state, ownProps) => {
    return({
        chore: {
            title: '',
            body: '',
            amount: 0,
            dueDate: '',
            priority: false,
            assign: null }
    })
}


const mapDispatchToProps = dispatch => {
    return({
        createUnassignedChore: chore => dispatch(createUnassignedChore(chore))
    })
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChoreForm))