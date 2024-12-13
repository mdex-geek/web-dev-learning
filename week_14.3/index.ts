interface user{
    id:string;
    email:string;
    password:string;
    name: string;
    age:number;
    createdAt : Date;
};

type UpdateProps = Pick<user, 'createdAt' |'name'|'age'|"email">

type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updateProps:UpdatePropsOptional){
    console.log(`date: ${updateProps.createdAt}`);
}

updateUser({
    createdAt: new Date() ,
})
