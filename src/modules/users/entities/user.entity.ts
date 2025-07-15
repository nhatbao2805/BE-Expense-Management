import { Board } from 'src/modules/boards/entities/board.entity';
import { Invoice } from '../../invoices/entities/invoice.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  refreshToken: string;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices: Invoice[];

  @ManyToMany(() => Board, (board) => board.members)
  shareBoards: Board[];
}
