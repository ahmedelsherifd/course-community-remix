/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Course } from '../models/Course';
import type { CourseInput } from '../models/CourseInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CoursesService {
    /**
     * Get Courses
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static getCourses(): CancelablePromise<Array<Course>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/courses/',
        });
    }
    /**
     * Create Course
     * @param requestBody
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static createCourse(
        requestBody: CourseInput,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/courses/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Course By Community Id
     * @param communityId
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static getCourseByCommunityId(
        communityId: number,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/courses/by_community_id/{community_id}',
            path: {
                'community_id': communityId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Course
     * @param pk
     * @returns Course Successful Response
     * @throws ApiError
     */
    public static getCourse(
        pk: number,
    ): CancelablePromise<Course> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/courses/{pk}',
            path: {
                'pk': pk,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
