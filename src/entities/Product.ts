import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { Length } from "class-validator";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("varchar")
  @Length(1, 255)
  name!: string;

  @Column("text")
  description!: string;

  @Column("decimal")
  price!: number;

  @Column("int")
  inventory!: number;
}
