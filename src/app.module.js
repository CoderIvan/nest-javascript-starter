import { Module } from '@nestjs/common'
import { DeviceTypeModule } from './device_type/device_type.module'

@Module({
	imports: [DeviceTypeModule],
	controllers: [],
	providers: [],
})

export default class AppModule {}
