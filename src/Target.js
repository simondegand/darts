import React from 'react'

class Target extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        const {size, arcThickness} = this.props;
        const radius = size / 2;
        const rotationAngle = Math.PI / 10;
        const black = '#000000'
        const white = '#D9D4B6'
        const red = ' #FC0108'
        const green = '#028600'
        let triangles = [this.getFirstTriangle(rotationAngle, radius)];
        let outsideArcs = [this.getFirstOutsideArc(rotationAngle, radius, arcThickness)];
        let insideArcs = [this.getFirstInsideArc(rotationAngle, radius, arcThickness)];
        for(let i = 0; i < 19; i++){
            triangles.push(this.getNextTriangle(triangles[triangles.length - 1], rotationAngle));
            outsideArcs.push(this.getNextArc(outsideArcs[outsideArcs.length - 1], rotationAngle));
            insideArcs.push(this.getNextArc(insideArcs[insideArcs.length - 1], rotationAngle));
        }
        return <svg width={size} height={size}>
            {triangles.map(triangle => {
                return <path fill={triangle.even ? black : white} d={`M${triangle.point1.x + radius} ${triangle.point1.y + radius} A${radius} ${radius} 0 0 1 ${triangle.point2.x + radius} ${triangle.point2.y + radius} L${radius} ${radius} Z`}/>
            })}
        </svg>
    }

    getFirstTriangle(rotationAngle, radius){
        let x1 = -(Math.sin(rotationAngle/2) * radius);
        let x2 = 0 - x1;
        let y = -(Math.cos(rotationAngle/2) * radius);
        console.log(x1, x2, y)
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
        console.log(point1)
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
