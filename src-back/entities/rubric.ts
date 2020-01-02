import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';
import { Product } from './product';

const TABLE_NAME:string = 'rubric';

@Entity(TABLE_NAME)
export class Rubric {
  static TABLE_NAME:string = TABLE_NAME;

  @PrimaryGeneratedColumn()
  rubricId: number;

  @Column('int')
  parentId: number;

  @Column('text')
  name:string;

  @Column('boolean', {
    default: 'false',
  })
  show: boolean;

  @Column('int')
  sort: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(type => Rubric)
  @JoinColumn({
    name: 'parentId',
  })
  parent: Rubric;

  @ManyToMany(type => Product)
  @JoinTable({
    name: 'rubric_product',
    joinColumn: {
      name: 'rubricId',
      referencedColumnName: 'rubricId',
    },
    inverseJoinColumn: {
      name: 'productId',
      referencedColumnName: 'productId',
    },
  })
  products: Product[];
}
