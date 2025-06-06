import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class ConfigEntity {
  @PrimaryColumn()
  key!: string;

  @Column({ default: false })
     maintenanceMode: boolean = false;
}
