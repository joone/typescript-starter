import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
