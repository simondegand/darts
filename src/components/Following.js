import React from 'react'
import dart from '../images/flechette_vector.svg'
import {distanceBetweenTwoPoints, Point} from '../others/utils';

const basePointDart = new Point(500, 250);

class Following extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {size, mouseEnter, color, points, x, y} = this.props;
        const cursorSize = 100;
        const fontSize = 20;
        let fontColor = '#000000';
        let strokeColor = 'black';
        if(color === '#000000'){
            fontColor = '#ffffff';
            strokeColor = '#ffffff';
        } 
        this.getPointerAngle(this.props.x, this.props.y)
        return <>
            
            <div style={{position: 'absolute', display: this.props.display ? 'block' : 'none', top:y, left: x, pointerEvents:'none', transform:`rotate(${(- Math.PI / 4) + this.getPointerAngle(x, y)}rad)`, transformOrigin:'top left'}} >
                <svg viewBox="0 0 798.44 797.75" width={cursorSize} height={cursorSize} transform="rotate(90)">
                    <path fill="#fff" stroke="#000" d="M412.17,468.7l-82.84-83.2a24.07,24.07,0,0,1,1.95-2.42c11.2-10.94,22.26-22,33.68-32.71,9-8.45,19.7-13.67,32.4-13.31,4.37.12,7.41-1.71,10.31-4.66q33.46-34,67-68c3.15-3.2,6.43-6.38,8.9-10.06a10,10,0,0,0,1-7.26c-8.12-31.07-16.57-62-24.71-93.1-3.29-12.55-6.18-25.2-8.89-37.89a8.52,8.52,0,0,1,1.75-6.6q24.32-25.8,49.07-51.18Q526.4,33.37,551.46,9A55.14,55.14,0,0,1,563,.54c1.62-.91,4.71-.59,6.49.36q43.2,22.92,86.21,46.21c7.47,4,14.7,8.5,22.31,12.22,2.19,1.07,5.53.86,8,.1,9.09-2.82,18.12-4.27,27.46-1.36,20.75,6.45,32.38,27.73,26.45,49.68-1.86,6.91-1.49,12.46,2.16,18.82,13.67,23.79,26.77,47.92,40,72,4.57,8.31,8.94,16.74,13.23,25.19,4.81,9.46,4.43,12.24-3,19.87-18.85,19.29-37.65,38.66-56.79,57.66-14.52,14.42-29.57,28.31-44.32,42.5-3.7,3.56-7.69,4.75-12.75,3.38-31.15-8.43-62.33-16.73-93.5-25.11-11.73-3.15-23.46-6.29-35.11-9.7-3.65-1.07-6.06-.5-8.81,2.27-24.74,25-49.67,49.75-74.43,74.71-1.73,1.74-3.42,4.41-3.52,6.72-.69,16-7.07,29.36-18,40.56C434.39,447.42,423.34,457.8,412.17,468.7Zm39.38-101.19c1.68-2.49,2.57-4.39,4-5.78Q568.7,248,681.92,134.41q13.74-13.8,26.87-28.21a22.67,22.67,0,0,0,5.41-9.77c1.08-4.84-1.8-8.6-6.11-11S698.3,84,694.26,87.68C683.75,97.39,673.09,107,663,117.06Q570,209.65,477.3,302.48q-20.87,20.85-41.71,41.7c-1.88,1.87-3.63,3.42-.86,6.12C440,355.4,445,360.74,451.55,367.51Z"/>
                    <path fill="#fff" stroke="#000" d="M156.52,558.26l81.77,82.48c-6.49,7.2-13.44,15.69-21.26,23.28a62.4,62.4,0,0,1-16.92,12.08c-14.93,6.83-30,4.89-44.23-2.52-5.07-2.65-8.33-2.38-12.26,1.53Q96.1,722.3,48.36,769.25c-8.78,8.63-17.84,17-27,25.18a12.58,12.58,0,0,1-19.4-3c-2.68-4.48-2.74-8.91.82-12.9,6.64-7.44,13.18-15,20.2-22.09q51.26-51.6,102.81-102.92c2.71-2.7,3.33-4.77,1.19-8.14-13.35-21-12.11-41.21,3.78-60.7,3.88-4.76,8.21-9.18,12.51-13.58S152.06,562.57,156.52,558.26Z"/>
                    <path fill="#fff" stroke="#000" d="M257.36,456.59,340.65,541,307.87,570c-6.47-6.51-14.83-15-23.25-23.42-18-18-35.87-36-54-53.83-3.56-3.48-3.91-5.47-.13-9.06C239.5,475.07,248.06,466,257.36,456.59Z"/>
                    <path fill="#fff" stroke="#000" d="M391.34,489.14l-29.95,30-82.81-82.93a19.55,19.55,0,0,1,1.91-2.32c8.34-8.12,16.73-16.19,25.05-24.33,1.85-1.8,3.41-3.09,5.81-.68q39.87,39.93,79.81,79.8C391.36,488.84,391.38,489.24,391.34,489.14Z"/>
                    <path fill="#fff" stroke="#000" d="M288.3,593.78c-8,8-16.39,16.26-24.73,24.62-1.78,1.78-3.19,1.84-5,0q-27.17-27.55-54.44-55-11.9-11.94-24.09-23.6c-2-1.95-2.25-3.29-.22-5.29,8.39-8.31,16.69-16.71,24.64-24.68Z"/>
                </svg>
            </div>

            <div style={{position: 'absolute', display: this.props.display ? 'block' : 'none', top:this.props.zoomY, left: this.props.zoomX, pointerEvents:'none'}} >
                <svg width={size} height={size}>
                    <circle cx={size/2} cy={size/2} r={size/2} onMouseEnter={mouseEnter} fill={color} stroke={strokeColor}> </circle>
                    <text fontSize={fontSize} x={'50%'} y={'50%'} dy={0.3 * fontSize} textAnchor="middle" fill={fontColor}>{points}</text>
                </svg>
            </div>
        </>;
    }

    getPointerAngle(x, y){
        x -= this.props.padding;
        y -= this.props.padding;
        
        const A = basePointDart;
        const B = new Point(x, y);
        const C = new Point(250,250);

        const a = distanceBetweenTwoPoints(B, C);
        const b = 250;
        const c = distanceBetweenTwoPoints(A, B);
        const angle = Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b));
        if(y < 250) return (2 * Math.PI) - angle;
        return angle;
    }
}

export default Following