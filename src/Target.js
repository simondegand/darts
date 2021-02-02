import React from 'react'

class Target extends React.Component{
    constructor(props){
        super(props);
        this.mouseMove = this.mouseMove.bind(this);
        this.mouseLeaving = this.mouseLeaving.bind(this);
        const points = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
        const {size, arcThickness} = props;
        const radius = size / 2;
        const rotationAngle = Math.PI / 10;
        const black = '#000000';
        const white = '#D9D4B6';
        const red = ' #FC0108';
        const green = '#028600';
        let triangles = [this.getFirstTriangle(rotationAngle, radius)];
        let outsideArcs = [this.getFirstOutsideArc(rotationAngle, radius, arcThickness)];
        let insideArcs = [this.getFirstInsideArc(rotationAngle, radius, arcThickness)];
        for(let i = 0; i < 19; i++){
            triangles.push(this.getNextTriangle(triangles[triangles.length - 1], rotationAngle));
            outsideArcs.push(this.getNextArc(outsideArcs[outsideArcs.length - 1], rotationAngle));
            insideArcs.push(this.getNextArc(insideArcs[insideArcs.length - 1], rotationAngle));
        }
        this.svg = <svg width={size} height={size}>
            {triangles.map((triangle, index) => {
                let color = triangle.even ? black : white;
                return <path onMouseMove={this.mouseMove.bind(this, points[index], color)} fill={color} d={`M${triangle.point1.x + radius} ${triangle.point1.y + radius} A${radius} ${radius} 0 0 1 ${triangle.point2.x + radius} ${triangle.point2.y + radius} L${radius} ${radius} Z`}/>
            })}
            {outsideArcs.map((outsideArc, index) => {
                let color = outsideArc.even ? red : green;
                return (
                        <path onMouseOut={this.mouseLeaving} onMouseMove={this.mouseMove.bind(this, points[index] * 2, color)} fill={color} 
                            d={`M${outsideArc.point1.x + radius} ${outsideArc.point1.y + radius} 
                            A${radius} ${radius} 0 0 1 ${outsideArc.point2.x + radius} ${outsideArc.point2.y + radius} 
                            L${outsideArc.point3.x + radius} ${outsideArc.point3.y + radius} 
                            A${radius} ${radius} 0 0 0 ${outsideArc.point4.x + radius} ${outsideArc.point4.y + radius} Z`}></path>
                    );
            })}
            {insideArcs.map((insideArc, index) => {
                let color = insideArc.even ? red : green;
                return (
                        <path onMouseMove={this.mouseMove.bind(this, points[index] * 3, color)} fill={color} 
                            d={`M${insideArc.point1.x + radius} ${insideArc.point1.y + radius} 
                            A${radius} ${radius} 0 0 1 ${insideArc.point2.x + radius} ${insideArc.point2.y + radius} 
                            L${insideArc.point3.x + radius} ${insideArc.point3.y + radius} 
                            A${radius} ${radius} 0 0 0 ${insideArc.point4.x + radius} ${insideArc.point4.y + radius} Z`}></path>
                    );
            })}
            
            <circle onMouseMove={this.mouseMove.bind(this, 25, green)} fill={green} cx={radius} cy={radius} r="40"></circle>
            <circle onMouseMove={this.mouseMove.bind(this, 50, red)} fill={red} cx={radius} cy={radius} r="20"></circle> 
        </svg>
    }

    render() {
        return this.svg;
    }

    mouseLeaving(){
        this.props.mouseLeaving();
    }

    mouseMove(points, color, event){
        this.props.mouseMoved(event.pageX, event.pageY, points, color)
    }

    getFirstTriangle(rotationAngle, radius){
        let x1 = -(Math.sin(rotationAngle/2) * radius);
        let x2 = 0 - x1;
        let y = -(Math.cos(rotationAngle/2) * radius);
        return new Triangle(new Point(x1, y), new Point(x2, y), true);
    }

    getFirstOutsideArc(rotationAngle, radius, arcThickness){
        let x1 = -(Math.sin(rotationAngle/2) * radius);
        let x2 = 0 - x1;
        let y12 = -(Math.cos(rotationAngle/2) * radius);
        let x4 = -(Math.sin(rotationAngle/2) * (radius - arcThickness));
        let y34 = -(Math.cos(rotationAngle/2) * (radius - arcThickness));
        let x3 = 0 - x4;
        return new Arc(new Point(x1, y12), new Point(x2, y12), new Point(x3, y34), new Point(x4, y34), true)
    }

    getFirstInsideArc(rotationAngle, radius, arcThickness){
        var x1 = -(Math.sin(rotationAngle/2) * ((radius / 2) + (arcThickness/2)));
        var x2 = 0 - x1;
        var y12 = -(Math.cos(rotationAngle/2) * ((radius / 2) + (arcThickness / 2)));
        var x4 = -(Math.sin(rotationAngle/2) * ((radius / 2) - (arcThickness / 2)));
        var y34 = -(Math.cos(rotationAngle/2) * ((radius / 2) - (arcThickness / 2)));
        var x3 = 0 - x4;
        return new Arc(new Point(x1, y12), new Point(x2, y12), new Point(x3, y34), new Point(x4, y34), true);
    }

    getNextTriangle(triangle, rotationAngle){
        let x1 = triangle.point2.x;
        let y1 = triangle.point2.y;
        let x2 = (Math.cos(rotationAngle) * x1) - (Math.sin(rotationAngle) * y1);
        let y2 = (Math.sin(rotationAngle) * x1) + (Math.cos(rotationAngle) * y1);
        return new Triangle(new Point(x1, y1), new Point(x2, y2), !triangle.even);
    }

    getNextArc(arc, rotationAngle){
        let x1 = arc.point2.x;
        let x4 = arc.point3.x;
        let y4 = arc.point3.y;
        let y1 = arc.point2.y;
  
        let x2 = (Math.cos(rotationAngle) * x1) - (Math.sin(rotationAngle) * y1);
        let y2 = (Math.sin(rotationAngle) * x1) + (Math.cos(rotationAngle) * y1);
        let x3 = (Math.cos(rotationAngle) * x4) - (Math.sin(rotationAngle) * y4);
        let y3 = (Math.sin(rotationAngle) * x4) + (Math.cos(rotationAngle) * y4);
        return new Arc(new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), new Point(x4, y4), !arc.even);
    }
}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Triangle{
    constructor(point1, point2, even){
        this.point1 = point1;
        this.point2 = point2;
        this.even = even;
    }
}

class Arc {
    constructor(point1, point2, point3, point4, even){
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
        this.even = even;
    }
}

// Target.defaultProps = {
//     size: 500, arcThickness: 30
// }

export default Target;
