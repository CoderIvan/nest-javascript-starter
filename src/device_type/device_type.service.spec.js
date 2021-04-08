import { Test } from '@nestjs/testing'
import { DeviceTypeService } from './device_type.service'

describe('DeviceTypeService', () => {
	let service

	beforeEach(async () => {
		const module = await Test.createTestingModule({
			providers: [DeviceTypeService],
		}).compile()

		service = module.get(DeviceTypeService)
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})
})
