/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerVoteInput } from '../models/AnswerVoteInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnswersService {
    /**
     * Create Vote On Answer
     * @param requestBody
     * @returns number Successful Response
     * @throws ApiError
     */
    public static createVoteOnAnswer(
        requestBody: AnswerVoteInput,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/answers/votes/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
