import React from 'react'
import PropTypes from 'prop-types'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import * as actionCreators from '../../../../core/actions'
import './SortControl.scss'

const SortControl = () => {
    // constructor(props) {
    //   super(props);
    //
    //   this.changeSortOptions = this.changeSortOptions.bind(this);
    // }

    // const changeSortOptions = () => {
    //   const sortByRepo = this.refs.sortByRepoCheckbox.checked;
    //   const orderBy = this.refs.orderBySelect.value;
    //
    //   this.props.actions.sort({ sortByRepo, orderBy });
    // }

    return (
        <div className="sort-container">
            <span>
                <input
                    type="checkbox"
                    // ref="sortByRepoCheckbox"
                    id="sort-by-repo"
                    // onChange={changeSortOptions()}
                    // checked={sortOptions.sortByRepo}
                />
                <label htmlFor="sort-by-repo">
                    <strong>Sort by repo</strong>
                </label>
            </span>
            <span>
                <label htmlFor="order-by">
                    <strong>Order by</strong>
                </label>
                &nbsp;
                <select
                    id="order-by"
                    // ref="orderBySelect"
                    // onChange={changeSortOptions()}
                >
                    <option value="updated">last updated</option>
                    <option value="created">created</option>
                </select>
            </span>
        </div>
    )
}
//
// function mapStateToProps(state) {
//     return {
//         sortOptions: state.sortOptions,
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators(actionCreators, dispatch),
//     }
// }

SortControl.propTypes = {
    sortOptions: PropTypes.any,
    actions: PropTypes.object,
}

SortControl.defaultProps = {
    sortOptions: null,
    actions: {},
}

export default SortControl
