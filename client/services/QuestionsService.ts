/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Answer } from '../models/Answer';
import type { AnswerInput } from '../models/AnswerInput';
import type { Question } from '../models/Question';
import type { QuestionInput } from '../models/QuestionInput';
import type { QuestionVoteInput } from '../models/QuestionVoteInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionsService {
    /**
     * Get Questions
     * @param communityId
     * @returns Question Successful Response
     * @throws ApiError
     */
    public static getQuestions(
        communityId?: (number | null),
    ): CancelablePromise<Array<Question>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/questions/',
            query: {
                'community_id': communityId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Question
     * @param requestBody
     * @returns Question Successful Response
     * @throws ApiError
     */
    public static createQuestion(
        requestBody: QuestionInput,
    ): CancelablePromise<Question> {
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
     * Create Vote On Question
     * @param requestBody
     * @returns number Successful Response
     * @throws ApiError
     */
    public static createVoteOnQuestion(
        requestBody: QuestionVoteInput,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/questions/votes/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Answer
     * @param requestBody
     * @returns Answer Successful Response
     * @throws ApiError
     */
    public static createAnswer(
        requestBody: AnswerInput,
    ): CancelablePromise<Answer> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/answers/',
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
