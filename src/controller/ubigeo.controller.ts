import { Body, Controller, Delete, Get , Param, Post, Put } from "@nestjs/common";
import path from "path";
import { UbigeoEntity } from "src/entities/ubigeo.entity";
import { UbigeoService } from "src/services/ubigeo.service";

@Controller('ubigeos')
export class UbigeoController {

    constructor(private ubigeoService: UbigeoService){
    }

    // Registrar
    @Post()
    async register(@Body() ubigeo: UbigeoEntity): Promise<UbigeoEntity>{
        return this.ubigeoService.register(ubigeo);
    }

    // Modificar
    @Put()
    async update(@Body() ubigeo: UbigeoEntity): Promise<UbigeoEntity>{
        return this.ubigeoService.update(ubigeo);
    }

    // Para que se muestre
    @Get()
    async findAll(): Promise<UbigeoEntity[]>{
        return this.ubigeoService.findAll();
    }

    @Get(':id')
    findById(@Param('id')id: string){
        return this.ubigeoService.findById(id);
    }

    @Delete(':id')
    deleteById(@Param('id')id: string){
        return this.ubigeoService.delete(id);
    }
}