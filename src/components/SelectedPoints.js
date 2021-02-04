import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DeletePoint, SetHover } from '../redux/actions';


class SelectedPoints extends React.Component{
    render(){
        const {points} = this.props;
        return points.map((point, index) => {
            return <p onMouseOut={() => this.props.setHover(point, false)} onMouseOver={() => this.props.setHover(point, true)}>Point {index + 1} : ({point.point.x}, {point.point.y}) {point.points.toString().padStart(2, '0')} <button onClick={() => this.props.deletePoint(point)}>DELETE</button></p>
        });
    }
}

function mapStateToProps(store){
    let points = [];

    if(typeof store.selected.selectedPoints !== 'undefined'){
        points = store.selected.selectedPoints;
    }

    return {points: points}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        deletePoint: DeletePoint,
        setHover: SetHover
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (SelectedPoints)