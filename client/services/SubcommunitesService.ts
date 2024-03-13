/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubCommunity } from '../models/SubCommunity';
import type { SubcommunityInput } from '../models/SubcommunityInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SubcommunitesService {
    /**
     * Create Subcommunity
     * @param requestBody
     * @returns SubCommunity Successful Response
     * @throws ApiError
     */
    public static createSubcommunity(
        requestBody: SubcommunityInput,
    ): CancelablePromise<SubCommunity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/subcommunites/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
