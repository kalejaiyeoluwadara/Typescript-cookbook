var id : string = "dara";
function add(a:number,b:number):number{
return a + b;
}
let things = [1,'this',true];
let age:any = 'itle'
let user:{firstname:string,age:number} ={
    firstname:'dara',
    age:15
}



const arr:[number,string,string, number] = [10,'hello','hi',30];
let anth :[number,number];
anth = [10,20];
const Coords = ():[number,number] =>{
    let long = 10;
    let lat = 30;
    return [long,lat];
}
const [x,y] = Coords();


type Rgb = [number,number,number];
const getRandomColor = ():Rgb =>{
    const r = Math.floor(Math.random() * 225);
    const g = Math.floor(Math.random() * 225);
    const b = Math.floor(Math.random() * 225);
    return [r,g,b]
}
    const first = getRandomColor();
    const sec = getRandomColor();

    
    type User  = {
        name:string,
        age:number
    }
    const FormatUser = (user:User):void =>{
        console.log("User name is",user.name);
        
    }
    // FormatUser({name:"dara",age:19});

    let someId:number|string;

    type Id = string |null;

    const Swap =(id:Id):Id =>{
        return null
    }

const addUser = (obj: typeof user) =>{
    return obj;
}