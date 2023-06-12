import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as session from 'express-session';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as MongoDBStore from 'connect-mongodb-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3333;
  app.useGlobalPipes(new ValidationPipe());
  const configService: ConfigService = new ConfigService();

  const mongoDBSession = MongoDBStore(session);
  const mongoStore = new mongoDBSession({
    uri: configService.get<string>('SESSION_STORE_URL') as string,
    collection: 'sessions',
    databaseName: 'digitekisi',
    expires: 900000,
    connectionOptions: {
      serverSelectionTimeoutMS: 10000,
    },
  });

  mongoStore.on('error', console.error);

  app.use(
    session({
      secret: configService.get<string>('EXPRESS_SESSION_SECRET') as string,
      resave: false,
      saveUninitialized: false,
      store: mongoStore,
    }),
  );

  const documentConfig = new DocumentBuilder()
    .setTitle('DIGITEKISI API')
    .setDescription(
      'This document defines the API for DIGITEKISI - Passenger Positioning System',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(PORT);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}`);
}
bootstrap();
