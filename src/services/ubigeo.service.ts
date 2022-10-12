import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UbigeoEntity } from "src/entities/ubigeo.entity";
import { Repository } from "typeorm";

@Injectable()
export class UbigeoService{

    constructor(@InjectRepository(UbigeoEntity) private ubigeoRepository: Repository<UbigeoEntity>) {
    }

    // Para registrar
    register(ubigeo: UbigeoEntity){
        return this.ubigeoRepository.save(ubigeo)
    }

    // Modificar
    update(ubigeo: UbigeoEntity){
        return this.ubigeoRepository.save(ubigeo)
    }

    // Para que se muestre los registros de la tabla
    findAll(){
        return this.ubigeoRepository.find();
    }

    // Eliminar
    delete(id: string){
        return this.ubigeoRepository.delete(id)
    }

    findById(id: string){
        return this.ubigeoRepository.findBy({id})
    }
}