interface Profile {
    name : string;
    age : number ;
    email : string
}

const updateProfile = (profile:Profile, updateProfile:Partial<Profile>) =>{
    return {...profile , ...updateProfile}
}
