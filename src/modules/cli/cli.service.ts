import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class CliService
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  onApplicationBootstrap() {
    console.log('CLI Ready');
  }

  onApplicationShutdown() {
    console.log(
      'Should close the application here, but it does not without the fix',
    );
  }
}
