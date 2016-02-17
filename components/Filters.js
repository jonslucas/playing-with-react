import React from 'react';
import { connect } from 'react-redux';
import { setVizFilter } from '../redux/actions';

// mapping for Container to Presentation Layer connection
const mapStateToProps = (state, ownProps) => {
    return {
      active: state.visFilter === ownProps.filter
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: ()=> {
            dispatch(setVizFilter(ownProps.filter))
        }
    };
};
// Presentational Component - Filter Item
const Link = ({
    active,
    children,
    onClick
}) => {
    let classes = 'button-default ';
    classes += (active? 'btn-active':'');

    return (
        <button className={ classes } onClick={onClick} >
            {children}
        </button>
    );
};
// Container Component - connects redux store to presentation layer
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
// Presentational Component - Filter List
const Filter = () => (
    <div>
        <FilterLink filter='SHOW_ALL'> All </FilterLink>
        <FilterLink filter='SHOW_ACTIVE'> Active </FilterLink>
        <FilterLink filter='SHOW_COMPLETED'> Completed </FilterLink>
    </div>
);

export default Filter