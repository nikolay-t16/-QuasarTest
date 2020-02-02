import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn, ManyToMany, JoinTable,
} from 'typeorm';
import Product from '../../common/data/type/Product';
import Rubric from '../../common/data/type/Rubric';
import { RubricEntity } from './RubricEntity';

const TABLE_NAME = 'product';

@Entity(TABLE_NAME)
class ProductEntity extends Product {
  public static TABLE_NAME = TABLE_NAME;

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

  @ManyToMany(type => RubricEntity)
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
  public rubrics: RubricEntity[];
}

export default ProductEntity;
