/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Answer } from './Answer';
import type { QuestionChoice } from './QuestionChoice';
export type Question = {
    id: number;
    text: string;
    answers: Array<Answer>;
    choices: Array<QuestionChoice>;
    vote?: (number | null);
};

