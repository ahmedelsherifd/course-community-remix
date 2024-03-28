/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Post } from '../models/Post';
import type { PostInput } from '../models/PostInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostsService {
    /**
     * Get Posts
     * @param communityId
     * @returns Post Successful Response
     * @throws ApiError
     */
    public static getPosts(
        communityId?: (number | null),
    ): CancelablePromise<Array<Post>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/posts/',
            query: {
                'community_id': communityId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Post
     * @param requestBody
     * @returns Post Successful Response
     * @throws ApiError
     */
    public static createPost(
        requestBody: PostInput,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/posts/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
