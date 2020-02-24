import { ListItem } from "./list-item.model";


export class List {

    id: number;
    title: string;
    createdDate: Date;
    finishedDate: Date;
    completed: boolean;
    items: ListItem[];

    constructor(title: string){
        this.title = title;
        this.completed = false;
        this.createdDate = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
}