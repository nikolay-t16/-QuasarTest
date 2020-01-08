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
import RubricData from '../../common/data/interface/RubricData';
import ProductData from '../../common/data/interface/ProductData';
import {Product} from './Product';

const TABLE_NAME = 'rubric';

@Entity(TABLE_NAME)
export class Rubric implements RubricData {
  public static TABLE_NAME = TABLE_NAME;

  public static FIELD_ID = 'rubricId';

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
  @OneToOne(type => Rubric)
  @JoinColumn({
    name: 'parentId',
  })
  public parent: RubricData | null = null;

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
  // @ts-ignore
  public products: ProductData[];
}
