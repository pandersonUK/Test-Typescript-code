var RoleID;
(function (RoleID) {
    RoleID[RoleID["USER"] = 0] = "USER";
    RoleID[RoleID["OFFICER"] = 1] = "OFFICER";
    RoleID[RoleID["ADMINID"] = 2] = "ADMINID";
})(RoleID || (RoleID = {}));
var RoleName;
(function (RoleName) {
    RoleName["Low"] = "User";
    RoleName["Med"] = "officer";
    RoleName["High"] = "admin";
})(RoleName || (RoleName = {}));
var person = {
    name: 'Peter',
    nickname: 'Pete',
    age: 29,
    hobbies: ['skiing', 'dancing'],
    role: [RoleID.USER, RoleName.Low]
};
var favouriteActivities; /* any type allows a mixed array. Ideally it's better to use typed variables. */
favouriteActivities = ['Sports', 1];
if (person.role[0] === 0) {
    console.log('user ' + person.name + ' has security clearance ' + person.role[1]);
}
console.log(person.nickname);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var activities = _a[_i];
    console.log(activities.toUpperCase());
}
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
