import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';
import Ember from 'ember';
const { Promise } = Ember.RSVP;

moduleForComponent('post-a-job-area-container', 'Unit | Component | post a job area container', {
  needs: ['service:redux'],
  unit: true
});

test('it returns true for disabled when name, title, url, description & email empty', function(assert) {
  let component = this.subject();
  assert.equal(component.get('disabled'), true, 'It has disabled submit');
});

test('it returns false for disabled when name, title, url, description & email are valid', function(assert) {
  let component = this.subject();
  component.actions.updateName('The FrontHAT');
  component.actions.updateEmail('the@fronthat.com');
  component.actions.updateURL('https://fronthat.com');
  component.actions.updateTitle('Some Title Goes Here Which Has To Be More Than 20 Characters');
  const generateStringWithXCharacters = (characters) => {
    let string = '';
    for (let i=0; i < characters; ++i) {
      string += 'A';
    }
    return string;
  };
  component.actions.updateDescription(generateStringWithXCharacters(500));
  assert.equal(component.get('disabled'), false, 'It has enabled submit');
});

test('it returns true for disabled when name, title, url, description & email are invalid', function(assert) {
  let component = this.subject();
  component.actions.updateName('AS');
  component.actions.updateEmail('invalid.mail');
  component.actions.updateURL('notvalidurl');
  component.actions.updateTitle('Too Short');
  component.actions.updateDescription('Too Short');
  assert.equal(component.get('disabled'), true, 'It has disabled submit');
});

test('it does show errors while idle', function(assert) {
  let component = this.subject();
  const error1 = 'A';
  const error2 = 'B';
  component.actions.postingAJobError([error1, error2]);
  assert.deepEqual(component.get('errors'), [error1, error2], 'Does show errors while idle');
});

test('it does not show errors while loading', function(assert) {
  let component = this.subject();
  const error1 = 'A';
  const error2 = 'B';
  component.actions.postingAJobError([error1, error2]);
  component.actions.postingAJob();
  assert.deepEqual(component.get('errors'), [], 'Does not show errors while loading');
});

test('postAJob dispatches POSTING_A_JOB -> POSTING_A_JOB_COMPLETE', async function(assert) {
  let component = this.subject();
  const postAJobRequest = this.stub(component.actions, 'postAJobRequest')
    .returns(new Promise((resolve) => { return resolve(); }));
  const postingAJobComplete = this.stub(component.actions, 'postingAJobComplete');
  await component.actions.postAJob();
  assert.equal(postAJobRequest.calledOnce, true, 'It does a post a job request');
  assert.equal(postingAJobComplete.calledOnce, true, 'It dispatches POSTING_A_JOB_COMPLETE');
});

test('postAJob dispatches POSTING_A_JOB -> POSTING_A_JOB_ERROR', async function(assert) {
  let component = this.subject();
  const postAJobRequest = this.stub(component.actions, 'postAJobRequest')
    .returns(new Promise((resolve, reject) => { return reject(['error']); }));
  const postingAJobError = this.stub(component.actions, 'postingAJobError');
  await component.actions.postAJob();
  assert.equal(postAJobRequest.calledOnce, true, 'It does a post a job request');
  assert.equal(postingAJobError.calledOnce, true, 'It dispatches POSTING_A_JOB_ERROR');
});
