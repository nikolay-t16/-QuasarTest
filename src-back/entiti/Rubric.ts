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
import IRubric from '../../common/data/interface/iRubric';
import IProduct from '../../common/data/interface/IProduct';
import { Product } from './Product';

const TABLE_NAME:string = 'rubric';

@Entity(TABLE_NAME)
export class Rubric implements IRubric {
  static TABLE_NAME:string = TABLE_NAME;

  static FIELD_ID:string = 'rubricId';

  @PrimaryGeneratedColumn()
  rubricId: number;

  @Column(
    'int',
    {
      default: 0,
    },
  )
  parentId: number;

  @Column('text')
  name:string;

  @Column('boolean', {
    default: 'false',
  })
  show: boolean;

  @Column(
    'int',
    {
      default: 0,
    },
  )
  sort: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // eslint-disable-next-line no-unused-vars
  @OneToOne(type => Rubric)
  @JoinColumn({
    name: 'parentId',
  })
  parent: IRubric;

  // eslint-disable-next-line no-unused-vars
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
  products: IProduct[];
}
