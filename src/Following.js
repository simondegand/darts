import React from 'react'

class Following extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div style={{position: 'absolute', display: this.props.display ? 'block' : 'none', top:this.props.y + 10, left: this.props.x + 10}} >
            <svg width={200} height={200}>
                <circle cx={100} cy={100} r={100} onMouseMove={(event) => this.props.mouseMoved(event.pageX, event.pageY) + console.log('coucou')}></circle>
            </svg>
        </div>
    }
}

export default Following