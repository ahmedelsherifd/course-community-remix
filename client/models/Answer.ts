/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuestionChoice } from './QuestionChoice';
export type Answer = {
    id: number;
    text: string;
    vote?: (number | null);
    choices: Array<QuestionChoice>;
};

