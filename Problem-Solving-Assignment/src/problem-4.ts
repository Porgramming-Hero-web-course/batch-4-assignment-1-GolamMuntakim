type Circle= {
    shape : "circle";
    radius : number;
}
type Rectangle={
    shape : "rectangle",
    width : number,
    height : number
}
type Shape = Circle | Rectangle
function calculateShapeArea(shape:Shape):number | undefined{
    if(shape.shape === "circle" && typeof shape.radius === "number"){
        const pi = Math.PI;
        return pi * Math.pow(shape.radius,2)
    }else if(shape.shape === "rectangle" && typeof shape.height === "number" && typeof shape.width === "number"){
       return shape.height  * shape.width
    }else{
        console.log("please insert a number")
    }
}
