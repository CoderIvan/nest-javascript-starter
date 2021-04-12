import { Controller, Dependencies, UseInterceptors, Post, Bind, Body } from '@nestjs/common'

import AjvInterceptor from '../common/interceptor/AjvInterceptor'

import { DeviceTypeService } from './device_type.service'

@Controller('device_type')
@Dependencies(DeviceTypeService)
export class DeviceTypeController {
	constructor(deviceTypeService) {
		this.deviceTypeService = deviceTypeService
	}

	@Post()
	@UseInterceptors(new AjvInterceptor({
		body: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					maxLength: 45,
				},
			},
			required: ['name'],
		},
	}))
	@Bind(Body())
	// eslint-disable-next-line class-methods-use-this
	async create(device_type) {
		return this.deviceTypeService.create(device_type)
	}
}
