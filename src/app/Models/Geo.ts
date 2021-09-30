export class Geo{
    lat!: string;
    lng!: string;


    public constructor(init?: Partial<Geo>) {
        Object.assign(this, init);
    }

    public static convertToModel(obj: any): Geo {

        const geo = new Geo();

        geo.lat=obj.lat;
        geo.lng=obj.lng;
        
        return geo;
    }


    public static mapList(list: any): Geo[] {
        const array: Array<any> = <Array<any>>list;
        return array.map(x => Geo.convertToModel(x));
    }
}