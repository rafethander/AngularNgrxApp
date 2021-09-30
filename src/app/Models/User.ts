import { Address } from "./Address";
import { Company } from "./Company";

export class User{
    id!: number;
    name!: string;
    username!: string;
    email!: string;
    address!: Address;
    phone!: string;
    website!: string;
    company!: Company;


    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }

    public static convertToModel(obj: any): User {

        const user = new User();
        
        user.address=Address.convertToModel(obj.address);
        user.company=Company.convertToModel(obj.company);
        user.id=obj.id;
        user.name=obj.name;
        user.username=obj.username;
        user.email=obj.email;
        user.phone=obj.phone;
        user.website=obj.website;
        
        
        return user;
    }


    public static mapList(list: any): User[] {
        const array: Array<any> = <Array<any>>list;
        return array.map(x => User.convertToModel(x));
    }


    public get geoFull(): string{
        return `lat:${this.address.geo.lat} , lng:${this.address.geo.lng}`;
    }

    
}