import { BaseEntity, BeforeInsert, Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

export default abstract class Model extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updatedAt:Date

    @Column({type:"uuid"})
    uuid:string

    @BeforeInsert()
    createUuid(){
        this.uuid= uuid()
    }

    toJSON(){
        return {...this,id:undefined}
    }

}