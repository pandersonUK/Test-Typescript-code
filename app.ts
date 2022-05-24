const person ={
    name: 'Peter',
    nickname: 'Pete',
    age: 29,
    hobbies: ['skiing', 'dancing']
};

let favouriteActivities: any[];
favouriteActivities = ['Sports', 1];

/* 
Object declaration.
both acceptable, first better.

const product: {
    id: string;
    price: number;
    tags: string[];
    details: {
        title: string;
        description: string;
    }
} = {
    id: 'abc1',
    price: 12.99
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
}

const person: object = {
    name = jim,
    age = 40
}

*/

console.log(person.nickname);