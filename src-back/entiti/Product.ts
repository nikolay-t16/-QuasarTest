import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn, ManyToMany, JoinTable,
} from 'typeorm';
import IProduct from '../../common/data/interface/IProduct';
import IRubric from '../../common/data/interface/iRubric';
import { Rubric } from './Rubric';

const TABLE_NAME:string = 'product';

@Entity(TABLE_NAME)
export class Product implements IProduct {
  static TABLE_NAME:string = TABLE_NAME;

  static FIELD_ID = 'productId';

  @PrimaryGeneratedColumn()
  productId: number;

  @Column('text')
  name:string;

  @Column('text')
  code:string;

  @Column('boolean', {
    default: 'false',
  })
  show: boolean;

  @Column('numeric')
  price: number;

  @Column('boolean', {
    default: 'false',
  })
  isHit: boolean;

  @Column('boolean', {
    default: 'false',
  })
  isNew: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToMany(type => Rubric)
  @JoinTable({
    name: 'rubric_product',
    joinColumn: {
      name: 'productId',
      referencedColumnName: 'productId',
    },
    inverseJoinColumn: {
      name: 'rubricId',
      referencedColumnName: 'rubricId',
    },
  })
  rubrics: IRubric[];
}
