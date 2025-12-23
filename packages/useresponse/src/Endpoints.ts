export const Endpoint = {
  Auth: {
    login(): string {
      return '/auth/login.json';
    },
  },

  Categories: {
    listOfCategories(): string {
      return '/categories.json';
    },

    categoryById(id: string): string {
      return `/categories/${id}.json`;
    },
  },

  Changelog: {
    objects(id: string): string {
      return `/changelog/object/${id}.json`;
    },

    users(id: string): string {
      return `/changelog/user/${id}.json`;
    },
  },

  Chats: {
    chats(): string {
      return '/chats.json';
    },

    chat(id: string): string {
      return `/chats/${id}.json`;
    },

    messages(chatId: string): string {
      return `/chats/${chatId}/messages.json`;
    },
  },

  Moderation: {
    approveComment(commentId: string): string {
      return `/comment/${commentId}/approve.json`;
    },

    declineComment(commentId: string): string {
      return `/comment/${commentId}/decline.json`;
    },

    approveTopic(topicId: string): string {
      return `/topic/${topicId}/approve.json`;
    },

    declineTopic(topicId: string): string {
      return `/topic/${topicId}/decline.json`;
    },
  },

  Comments: {
    comments(): string {
      return '/comments.json';
    },

    editComment(commentId: string): string {
      return `/comment/${commentId}/edit.json`;
    },

    objectComments(objectId: string): string {
      return `/objects/${objectId}/comments.json`;
    },

    recoveryComment(commentId: string): string {
      return `/comment/${commentId}/recovery.json`;
    },

    trashComment(commentId: string): string {
      return `/comment/${commentId}/trash.json`;
    },

    toggleBestComment(commentId: string): string {
      return `/comment/${commentId}/best/toggle.json`;
    },

    toggleVoteComment(commentId: string): string {
      return `/comment/${commentId}/votes/toggle.json`;
    },
  },

  Additional: {
    forums(): string {
      return '/forums.json';
    },

    statuses(): string {
      return '/statuses.json';
    },
  },

  Users: {
    activity(userId: string): string {
      return `/users/${userId}/activity.json`;
    },

    banUser(userId: string): string {
      return `/users/${userId}/ban.json`;
    },

    changePassword(userId: string): string {
      return `/users/${userId}/change-password.json`;
    },

    me(): string {
      return '/me.json';
    },

    searchUsers(): string {
      return '/users/search.json';
    },

    updateProfile(): string {
      return '/profile/update.json';
    },

    user(id: string): string {
      return `/users/${id}.json`;
    },

    users(): string {
      return '/users.json';
    },
  },

  Objects: {
    archive(id: string): string {
      return `/objects/${id}/archive.json`;
    },

    attachFile(id: string): string {
      return `/objects/${id}/attach-file.json`;
    },

    commentsToggle(id: string): string {
      return `/objects/${id}/comments/toggle.json`;
    },

    object(id: string): string {
      return `/objects/${id}.json`;
    },

    objects(): string {
      return '/objects.json';
    },

    search(): string {
      return '/objects/search.json';
    },

    subscribe(id: string): string {
      return `/objects/${id}/subscribe.json`;
    },

    tickets(): string {
      return '/tickets.json';
    },

    trash(id: string): string {
      return `/objects/${id}/trash.json`;
    },

    unsubscribe(id: string): string {
      return `/objects/${id}/unsubscribe.json`;
    },

    toggleVote(id: string): string {
      return `/objects/${id}/votes/toggle.json`;
    },
  },

  CustomFields: {
    objectCustomFields(objectId: string): string {
      return `/objects/${objectId}/custom-fields/list.json`;
    },

    userCustomFields(): string {
      return '/users/custom-fields/list.json';
    },
  },

  Reports: {
    reportObjects(reportId: string): string {
      return `/report/${reportId}/objects.json`;
    },

    reportsList(): string {
      return '/reports/list.json';
    },
  },

  UserNotes: {
    add(userId: string): string {
      return `/users/${userId}/notes/add.json`;
    },

    delete(noteId: string): string {
      return `/users/notes/${noteId}/delete.json`;
    },

    edit(noteId: string): string {
      return `/users/notes/${noteId}/edit.json`;
    },

    notes(userId: string): string {
      return `/users/${userId}/notes.json`;
    },
  },
};
