import { Module, Options } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import{UbigeoController} from "./controller/Ubigeo.Controller";
import { UbigeoService } from "./services/Ubigeo.Service";
import{UbigeoEntity} from "./entities/Ubigeo.Entity";

@Module(  {
  imports: [
    TypeOrmModule.forRoot({
     "type": "oracle",
     "host": "localhost",
     "port": 1521,
     "username": "TPRODUCT" , 
     "password": "gpalomino897",
     "sid": "xe",
     "entities": [__dirname + "/**/**.entity{.ts,.js}"],
     "synchronize": false,
     "logging": true
    }),
    TypeOrmModule.forFeature([UbigeoEntity])
  ],
  controllers: [AppController, UbigeoController],
  providers: [AppService, UbigeoService],
})
export class AppModule {}
