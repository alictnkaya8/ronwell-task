import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Length, IsEmail } from "class-validator";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  @Length(1, 255)
  name!: string;

  @Column("varchar")
  @IsEmail()
  email!: string;

  @Column("varchar")
  password!: string;
}
