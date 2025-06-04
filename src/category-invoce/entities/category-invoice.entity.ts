import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Invoice } from '../../invoices/entities/invoice.entity';

@Entity()
export class CategoryInvoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  icon: string;

  @OneToMany(() => Invoice, (invoice) => invoice.category)
  invoices: Invoice[];
}
