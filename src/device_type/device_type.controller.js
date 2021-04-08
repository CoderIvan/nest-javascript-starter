import { Controller, UseInterceptors, Post, Bind, Body } from '@nestjs/common'

import AjvInterceptor from '../common/interceptor/AjvInterceptor'

@Controller('device_type')
export class DeviceTypeController {
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
	create(device_type) {
		return device_type
	}
}
