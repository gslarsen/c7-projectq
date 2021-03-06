import { FETCH_QUESTIONS, FETCH_QUESTIONS_NEW } from "../actions/actions";

import { normalize, schema } from "normalizr";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
    case FETCH_QUESTIONS_NEW:
      if (action.payload.data) {
        console.log("Order Reduce API Resp: ", action.payload.data);
        const question = new schema.Entity(
          "questions",
          {},
          { idAttribute: "_id" }
        );
        const mySchema = { questions: [question] };

        const normalizedQuestions = normalize(action.payload.data, mySchema)
          .entities.questions;

        let returnObj = state;
        if (action.type === FETCH_QUESTIONS_NEW) {
          console.log("questions added NEW");
          returnObj = { ...normalizedQuestions };
        } else {
          console.log("questions added");
          returnObj = { ...normalizedQuestions, ...state };
        }

        return returnObj;
      }
      return state;
    default:
      return state;
  }
}
