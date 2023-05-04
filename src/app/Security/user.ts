export class User {
       
    id: number;
    firstName: string;
    lastName: string;
    cin: number;
    role: "USER";
    password: string;
    phone: number;
    profession: string;
    email: string;
    age: number;
    sexe:string ;
    active: boolean = false;
    verificationToken: string;
}
