/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Unit } from '../models/Unit';
import type { UnitInput } from '../models/UnitInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UnitsService {
    /**
     * Create Unit
     * @param requestBody
     * @returns Unit Successful Response
     * @throws ApiError
     */
    public static createUnit(
        requestBody: UnitInput,
    ): CancelablePromise<Unit> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/units/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
