import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var Steam =  require('@titangmz/steam-resources')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const client = new Steam.SteamClient()
  // const steamClient = new steam.SteamClient()
  console.log(client)
  await app.listen(3000);
}
bootstrap();
