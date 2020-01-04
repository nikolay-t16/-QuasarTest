import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IProduct } from '../../common/data/interface/IProduct';

const TABLE_NAME:string = 'product';

@Entity(TABLE_NAME)
export class Product implements IProduct {
  static TABLE_NAME:string = TABLE_NAME;

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
}
