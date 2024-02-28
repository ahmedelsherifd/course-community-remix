/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Question } from '../models/Question';
import type { QuestionInput } from '../models/QuestionInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionsService {
    /**
     * Get Questions
     * @returns Question Successful Response
     * @throws ApiError
     */
    public static getQuestions(): CancelablePromise<Array<Question>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/questions/',
        });
    }
    /**
     * Create Question
     * @param requestBody
     * @returns QuestionInput Successful Response
     * @throws ApiError
     */
    public static createQuestion(
        requestBody: QuestionInput,
    ): CancelablePromise<QuestionInput> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/questions/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Question
     * @param pk
     * @returns Question Successful Response
     * @throws ApiError
     */
    public static getQuestion(
        pk: string,
    ): CancelablePromise<Question> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/questions/{pk}',
            path: {
                'pk': pk,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
