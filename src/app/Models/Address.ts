import { Geo } from "./Geo";

export class Address{
    street!: string;
    suite!: string;
    city!: string;
    zipcode!: string;
    geo!: Geo;


    public constructor(init?: Partial<Address>) {
        Object.assign(this, init);
    }

    public static convertToModel(obj: any): Address {

        const address = new Address();

        address.street=obj.street;
        address.suite=obj.suite;
        address.city=obj.city;
        address.zipcode=obj.zipcode;
        address.geo=obj.geo;

        return address;
    }


    public static mapList(list: any): Address[] {
        const array: Array<any> = <Array<any>>list;
        return array.map(x => Address.convertToModel(x));
    }
}