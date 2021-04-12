import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { DeviceTypeModule } from './device_type/device_type.module'

import configuration from './common/config/configuration'

@Module({
	imports: [
		ConfigModule.forRoot({ load: [configuration] }),
		DeviceTypeModule,
	],
	controllers: [],
	providers: [],
})
export default class AppModule {}
