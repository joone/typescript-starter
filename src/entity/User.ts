import {Entity, ObjectIdColumn, ObjectID, Column} from "typeorm";

// https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
@Entity()
export class User {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
