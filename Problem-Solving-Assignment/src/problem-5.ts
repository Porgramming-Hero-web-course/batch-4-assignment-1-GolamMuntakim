const getProperty = <T , K extends keyof T>(obj:T , key:K):T[K] =>{
    return obj[key];
}
const exobj = {
    name : "property",
    price : 20
}

