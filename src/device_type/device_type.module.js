import { Module } from '@nestjs/common'
import { DeviceTypeController } from './device_type.controller'
import { DeviceTypeService } from './device_type.service'

@Module({
	controllers: [DeviceTypeController],
	providers: [DeviceTypeService],
})
export class DeviceTypeModule {}
