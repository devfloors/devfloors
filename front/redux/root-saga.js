import { all } from 'redux-saga/effects';
import authSagas from '../authentication/sagas';
import contactSagas from '@iso/redux/contacts/saga';
import invoicesSagas from '@iso/redux/invoice/saga';
import mailSagas from '@iso/redux/mail/saga';
import notesSagas from '@iso/redux/notes/saga';
import todosSagas from '@iso/redux/todos/saga';
import ecommerceSaga from '@iso/redux/ecommerce/saga';
import cardsSagas from '@iso/redux/card/saga';
import chatSagas from '@iso/redux/chat/sagas';
import youtubeSearchSagas from '@iso/redux/youtubeSearch/sagas';
import githubSagas from '@iso/redux/githubSearch/sagas';
import articles from '@iso/redux/articles/sagas';
import investors from '@iso/redux/investors/sagas';
import scrumBoardSaga from '@iso/redux/scrumBoard/saga';
import quizSaga from '@iso/redux/quiz/saga';

import profileSaga from '@iso/redux/profile/saga';

import userSagas from './user/saga';
import socketSagas from './socket/saga';
import loadSagas from './load/saga';

export default function* rootSaga(getState) {
  yield all([
    userSagas(),
    authSagas(),
    socketSagas(),
    loadSagas()
  ]);
}
