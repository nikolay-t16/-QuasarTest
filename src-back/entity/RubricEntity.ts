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
import Rubric from '../../common/data/type/Rubric';
import Product from '../../common/data/type/Product';
import ProductEntity from './ProductEntity';

const TABLE_NAME = 'rubric';

@Entity(TABLE_NAME)
export class RubricEntity extends Rubric {
  public static TABLE_NAME = TABLE_NAME;

  @PrimaryGeneratedColumn()
  public rubricId: number | null = null;

  @Column(
    'int',
    {
      default: 0,
    },
  )
  public parentId: number = 0;

  @Column('text')
  public name: string = '';

  @Column('boolean', {
    default: 'false',
  })
  public show: boolean = false;

  @Column(
    'int',
    {
      default: 0,
    },
  )
  public sort: number = 0;

  @CreateDateColumn()
  public createdAt: Date = new Date;

  @UpdateDateColumn()
  public updatedAt: Date = new Date;

  // eslint-disable-next-line no-unused-vars
  @OneToOne(type => RubricEntity)
  @JoinColumn({
    name: 'parentId',
  })
  public parent: RubricEntity | null = null;

  // eslint-disable-next-line no-unused-vars
  @ManyToMany(type => ProductEntity)
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
  // @ts-ignore
  public products: Product[];
}
