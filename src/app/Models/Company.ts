export class Company{
    name!: string;
    catchPhrase!: string;
    bs!: string;


    public constructor(init?: Partial<Company>) {
        Object.assign(this, init);
    }


    public static convertToModel(obj: any): Company {

        const company = new Company();

        company.name=obj.name;
        company.catchPhrase=obj.catchPhrase;
        company.bs=obj.bs;

        return company;
    }


    public static mapList(list: any): Company[] {
        const array: Array<any> = <Array<any>>list;
        return array.map(x => Company.convertToModel(x));
    }
}