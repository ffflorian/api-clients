import {APIClient} from '@ffflorian/api-client';
import {afterEach, describe, expect, it, vi} from 'vitest';

import {UseResponse} from '.';

type APIClientMethod = 'delete' | 'get' | 'post' | 'put';

interface MethodCallCase {
  args: unknown[];
  method: APIClientMethod;
  name: string;
  run: (useResponse: UseResponse) => Promise<unknown>;
}

const apiResponse = {data: {}, headers: new Headers(), status: 200};

describe('UseResponse', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('adds the api key to outgoing requests', async () => {
    const useResponse = new UseResponse({apiKey: 'secret'});
    const apiClient = (useResponse as unknown as {apiClient: APIClient}).apiClient;

    const config = await apiClient.interceptors.request[0]({
      headers: {},
      method: 'GET',
      url: new URL('https://api.useresponse.com/api/7.0/comments.json'),
    });

    expect(config.url.searchParams.get('api_key')).toBe('secret');
  });

  it('updates the API URL', () => {
    const spy = vi.spyOn(APIClient.prototype, 'setBaseURL');
    const useResponse = new UseResponse({});

    useResponse.setApiUrl('https://example.com/api/7.0');

    expect(spy).toHaveBeenCalledWith('https://example.com/api/7.0');
  });

  it.each<MethodCallCase>([
    {
      args: ['/forums.json'],
      method: 'get',
      name: 'gets forums',
      run: useResponse => useResponse.api.additional.getForums(),
    },
    {
      args: ['/statuses.json'],
      method: 'get',
      name: 'gets statuses',
      run: useResponse => useResponse.api.additional.getStatuses(),
    },
    {
      args: ['/comments.json', {content: 'Hello'}],
      method: 'post',
      name: 'adds comments',
      run: useResponse => useResponse.api.comments.addComment({content: 'Hello'}),
    },
    {
      args: ['/comments/8/edit.json', {content: 'Updated'}],
      method: 'post',
      name: 'edits comments',
      run: useResponse => useResponse.api.comments.editComment('8', {content: 'Updated'}),
    },
    {
      args: ['/comments.json', {params: {page: 2}}],
      method: 'get',
      name: 'lists comments',
      run: useResponse => useResponse.api.comments.getComments({page: 2}),
    },
    {
      args: ['/objects/3/comments.json'],
      method: 'get',
      name: 'gets object comments',
      run: useResponse => useResponse.api.comments.getObjectComments('3'),
    },
    {
      args: ['/comments/8/recovery.json'],
      method: 'post',
      name: 'recovers comments',
      run: useResponse => useResponse.api.comments.recoverComment('8'),
    },
    {
      args: ['/comments/8/trash.json'],
      method: 'post',
      name: 'trashes comments',
      run: useResponse => useResponse.api.comments.trashComment('8'),
    },
    {
      args: ['/comments/8/best/toggle.json'],
      method: 'post',
      name: 'toggles best comments',
      run: useResponse => useResponse.api.comments.toggleBestComment('8'),
    },
    {
      args: ['/comments/8/votes/toggle.json'],
      method: 'post',
      name: 'toggles comment votes',
      run: useResponse => useResponse.api.comments.toggleVoteComment('8'),
    },
    {
      args: ['/objects/custom-fields/list.json'],
      method: 'get',
      name: 'gets object custom fields',
      run: useResponse => useResponse.api.customFields.getObjectCustomFields(),
    },
    {
      args: ['/users/custom-fields/list.json'],
      method: 'get',
      name: 'gets user custom fields',
      run: useResponse => useResponse.api.customFields.getUserCustomFields(),
    },
    {
      args: ['/comment/8/approve.json'],
      method: 'post',
      name: 'approves comments',
      run: useResponse => useResponse.api.moderation.approveComment('8'),
    },
    {
      args: ['/comment/8/decline.json', {reason: 'spam'}],
      method: 'post',
      name: 'declines comments',
      run: useResponse => useResponse.api.moderation.declineComment('8', {reason: 'spam'}),
    },
    {
      args: ['/topic/5/approve.json'],
      method: 'post',
      name: 'approves topics',
      run: useResponse => useResponse.api.moderation.approveTopic('5'),
    },
    {
      args: ['/topic/5/decline.json', {reason: 'spam'}],
      method: 'post',
      name: 'declines topics',
      run: useResponse => useResponse.api.moderation.declineTopic('5', {reason: 'spam'}),
    },
    {
      args: ['/objects.json', {object_type: 'ticket', ownership: 'helpdesk', title: 'Hello'}],
      method: 'post',
      name: 'adds objects',
      run: useResponse =>
        useResponse.api.objects.addObject({
          object_type: 'ticket',
          ownership: 'helpdesk',
          title: 'Hello',
        }),
    },
    {
      args: ['/objects/7/archive.json'],
      method: 'get',
      name: 'archives objects',
      run: useResponse => useResponse.api.objects.archiveObject('7'),
    },
    {
      args: ['/objects/7.json'],
      method: 'delete',
      name: 'deletes objects',
      run: useResponse => useResponse.api.objects.deleteObject('7'),
    },
    {
      args: ['/objects/7/attach-file.json', {body: 'Zm9v', name: 'foo.txt'}],
      method: 'post',
      name: 'attaches files to objects',
      run: useResponse => useResponse.api.objects.attachFile('7', {body: 'Zm9v', name: 'foo.txt'}),
    },
    {
      args: ['/objects/7.json', {title: 'Updated'}],
      method: 'put',
      name: 'edits objects',
      run: useResponse => useResponse.api.objects.editObject('7', {title: 'Updated'}),
    },
    {
      args: ['/objects/7.json'],
      method: 'get',
      name: 'gets objects',
      run: useResponse => useResponse.api.objects.getObject('7'),
    },
    {
      args: ['/tickets.json', {params: {page: 1}}],
      method: 'get',
      name: 'lists tickets',
      run: useResponse => useResponse.api.objects.getTickets({page: 1}),
    },
    {
      args: ['/search.json', {params: {query: 'hello'}}],
      method: 'get',
      name: 'searches objects',
      run: useResponse => useResponse.api.objects.search({query: 'hello'}),
    },
    {
      args: ['/objects/7/subscribe.json'],
      method: 'post',
      name: 'subscribes to objects',
      run: useResponse => useResponse.api.objects.subscribe('7'),
    },
    {
      args: ['/objects/7/comments/toggle.json'],
      method: 'post',
      name: 'toggles object comments',
      run: useResponse => useResponse.api.objects.toggleComments('7'),
    },
    {
      args: ['/objects/7/votes/toggle.json'],
      method: 'post',
      name: 'toggles object votes',
      run: useResponse => useResponse.api.objects.toggleVote('7'),
    },
    {
      args: ['/objects/7/trash.json'],
      method: 'get',
      name: 'trashes objects',
      run: useResponse => useResponse.api.objects.trashObject('7'),
    },
    {
      args: ['/objects/7/unsubscribe.json'],
      method: 'post',
      name: 'unsubscribes from objects',
      run: useResponse => useResponse.api.objects.unsubscribe('7'),
    },
    {
      args: ['/report/3/objects.json', {params: {page: 1}}],
      method: 'get',
      name: 'gets report objects',
      run: useResponse => useResponse.api.reports.getReportObjects('3', {page: 1}),
    },
    {
      args: ['/reports/list.json'],
      method: 'get',
      name: 'lists reports',
      run: useResponse => useResponse.api.reports.getReportsList(),
    },
    {
      args: ['/users/2/notes/add.json', {content: 'First note'}],
      method: 'post',
      name: 'adds user notes',
      run: useResponse => useResponse.api.userNotes.add('2', {content: 'First note'}),
    },
    {
      args: ['/users/notes/4/delete.json'],
      method: 'post',
      name: 'deletes user notes',
      run: useResponse => useResponse.api.userNotes.delete('4'),
    },
    {
      args: ['/users/notes/4/edit.json', {content: 'Updated note'}],
      method: 'post',
      name: 'edits user notes',
      run: useResponse => useResponse.api.userNotes.edit('4', {content: 'Updated note'}),
    },
    {
      args: ['/users/2/notes.json'],
      method: 'get',
      name: 'gets user notes',
      run: useResponse => useResponse.api.userNotes.getNotes('2'),
    },
    {
      args: ['/users/9/ban.json', {permanent: true}],
      method: 'post',
      name: 'bans users',
      run: useResponse => useResponse.api.users.banUser('9', {permanent: true}),
    },
    {
      args: ['/users/9/change-password.json', {password: 'secret'}],
      method: 'post',
      name: 'changes passwords',
      run: useResponse => useResponse.api.users.changePassword('9', {password: 'secret'}),
    },
    {
      args: ['/users.json', {email: 'user@example.com', full_name: 'User Example'}],
      method: 'post',
      name: 'creates users',
      run: useResponse => useResponse.api.users.createUser({email: 'user@example.com', full_name: 'User Example'}),
    },
    {
      args: ['/users/9.json'],
      method: 'delete',
      name: 'deletes users',
      run: useResponse => useResponse.api.users.deleteUser('9'),
    },
    {
      args: ['/users/9.json', {email: 'updated@example.com'}],
      method: 'post',
      name: 'edits users',
      run: useResponse => useResponse.api.users.editUser('9', {email: 'updated@example.com'}),
    },
    {
      args: ['/users/9/activity.json', {params: {page: 1}}],
      method: 'get',
      name: 'gets user activity',
      run: useResponse => useResponse.api.users.getActivity('9', {page: 1}),
    },
    {
      args: ['/me.json'],
      method: 'get',
      name: 'gets the current user',
      run: useResponse => useResponse.api.users.getMe(),
    },
    {
      args: ['/users/9.json'],
      method: 'get',
      name: 'gets users by id',
      run: useResponse => useResponse.api.users.getUser('9'),
    },
    {
      args: ['/users/search.json', {params: {query: 'user'}}],
      method: 'get',
      name: 'searches users',
      run: useResponse => useResponse.api.users.searchUsers({query: 'user'}),
    },
    {
      args: ['/profile/update.json', {full_name: 'Updated User'}],
      method: 'post',
      name: 'updates the profile',
      run: useResponse => useResponse.api.users.updateProfile({full_name: 'Updated User'}),
    },
  ])('delegates %s to the API client', async ({args, method, run}) => {
    const spy = vi.spyOn(APIClient.prototype, method).mockResolvedValue(apiResponse as never);
    const useResponse = new UseResponse({});

    await run(useResponse);

    expect(spy).toHaveBeenCalledWith(...args);
  });
});
