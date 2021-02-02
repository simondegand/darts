import React from 'react'

class Following extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {size, mouseEnter, color, points} = this.props;
        const fontSize = 30;
        let fontColor = '#000000';
        if(color === '#000000') fontColor = '#ffffff';
        return <div style={{position: 'absolute', display: this.props.display ? 'block' : 'none', top:this.props.y, left: this.props.x}} >
            <svg width={size} height={size}>
                <circle cx={size/2} cy={size/2} r={size/2} onMouseEnter={mouseEnter} fill={color}> </circle>
                <text fontSize={fontSize} x={(size/2) - (fontSize / 2)} y={(size/2) + (fontSize / 2)} fill={fontColor}>{points}</text>
            </svg>
        </div>;
    }
}

export default Following