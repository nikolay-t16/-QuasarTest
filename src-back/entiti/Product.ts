import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn, ManyToMany, JoinTable,
} from 'typeorm';
import ProductData from '../../common/data/interface/ProductData';
import RubricData from '../../common/data/interface/RubricData';
import { Rubric } from './Rubric';

const TABLE_NAME = 'product';

@Entity(TABLE_NAME)
export class Product implements ProductData {
  public static TABLE_NAME = TABLE_NAME;

  public static FIELD_ID = 'productId';

  @PrimaryGeneratedColumn()
  public productId: number | null = null;

  @Column('text')
  public name:string = '';

  @Column('text')
  public code:string = '';

  @Column('boolean', {
    default: 'false',
  })
  public show: boolean = false;

  @Column('numeric')
  public price: number = 0;

  @Column('boolean', {
    default: 'false',
  })
  public isHit: boolean = false;

  @Column('boolean', {
    default: 'false',
  })
  public isNew: boolean = false;

  @CreateDateColumn()
  public createdAt: Date = new Date();

  @UpdateDateColumn()
  public updatedAt: Date = new Date();

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
  // @ts-ignore
  public rubrics: RubricData[];
}
