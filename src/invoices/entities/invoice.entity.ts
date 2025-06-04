import { User } from '../../users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryInvoice } from '../../category-invoce/entities/category-invoice.entity';
@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => User, (user) => user.invoices)
  user: User;

  @OneToMany(
    () => CategoryInvoice,
    (categoryInvoice) => categoryInvoice.invoices,
  )
  categoryInvoice: CategoryInvoice;
  @Column()
  title: string;

  @Column('decimal', { precision: 12, scale: 2 })
  amount: number;

  @Column({ nullable: true })
  category: string;

  @Column({ type: 'text', nullable: true })
  note: string;

  @Column()
  invoiceDate: Date;

  @Column({ nullable: true })
  dueDate: Date;

  @Column({ default: false })
  isPaid: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
