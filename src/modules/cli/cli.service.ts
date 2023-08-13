import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class CliService implements OnApplicationBootstrap {
  onApplicationBootstrap() {
    console.log('CLI Ready');
  }
}
