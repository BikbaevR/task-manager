import {generateId} from '../scripts/generateId'

export class TaskType {
    constructor(typeName) {
        this._id = generateId();
        this._typeName = typeName;
    }

    get id() {
        return this._id;
    }
    get typeName(){
        return this._typeName;
    }

    set typeName(value){
        this._typeName = value;
    }
}

export const taskTypes = [
    new TaskType('Тип 1'),
    new TaskType('Тип 2'),
    new TaskType('Тип 3'),
    new TaskType('Тип 4'),
    new TaskType('Тип 5'),
]