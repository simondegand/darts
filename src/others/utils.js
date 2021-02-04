export function CreateId () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export function distanceBetweenTwoPoints(pointA, pointB){
    return Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2));
}

export class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}