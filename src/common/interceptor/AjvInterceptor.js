import { Injectable } from '@nestjs/common'

import Ajv from 'ajv'
import localize from 'ajv-i18n'

const ajv = new Ajv()

@Injectable()
export default class AjvInterceptor {
	constructor(properties) {
		this.v = ajv.compile({
			type: 'object',
			properties,
		})
	}

	intercept(context, next) {
		const request = context.switchToHttp().getRequest()
		const response = context.switchToHttp().getResponse()

		const valid = this.v({
			body: request.body,
			query: request.query,
		})
		if (!valid) {
			localize.zh(this.v.errors)
			response.status(403).send({ message: '无效请求参数', errors: this.v.errors })
			return undefined
		}

		return next.handle()
	}
}
