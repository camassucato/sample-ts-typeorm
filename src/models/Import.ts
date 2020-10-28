import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Status from './Status';

@Entity('import')
class Import {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  userId: number;

  /**
   * Imports (N) ----<>----> (1) Status
   */
  @ManyToOne(() => Status)
  @JoinColumn({ name: 'statusId', referencedColumnName: 'id' })
  statusId: Status;

  @Column()
  filename: string;

  @Column()
  hash: string;

  @Column({ type: 'timestamp' })
  importDate: Date;

  @Column()
  target: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  deleted: string;
}

export default Import;
