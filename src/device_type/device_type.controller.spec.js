import { Test } from '@nestjs/testing'
import { DeviceTypeController } from './device_type.controller'

describe('DeviceType Controller', () => {
	let controller

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			controllers: [DeviceTypeController],
		}).compile()

		controller = module.get(DeviceTypeController)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})
})
