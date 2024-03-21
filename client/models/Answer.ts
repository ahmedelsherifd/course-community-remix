/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerChoice } from './AnswerChoice';
export type Answer = {
    id: number;
    text: string;
    vote?: (number | null);
    choices: Array<AnswerChoice>;
};

