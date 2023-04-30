import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

@Entity()
export default class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    type: 'text'
  })
  title: string

  @Column({
    type: 'varchar',
    length: 255
  })
  date: string;

  @Column({
    type: 'longtext'
  })
  description: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.NORMAL
  })
  priority: Priority;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.TODO
  })
  status: Status;
}