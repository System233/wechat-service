export const Alita =  {
    Application: {
        eventExecuteCallback: {
            name: "Application.eventExecuteCallback",
            params: ["result"],
        },
        setForeground: {
            name: "Application.setForeground",
            params: ["is_foreground"],
        },
        isForeground: { name: "Application.isForeground", params: [] },
        getNetworkState: { name: "Application.getNetworkState", params: [] },
        triggerHeartbeat: {
            name: "Application.triggerHeartbeat",
            params: [],
        },
        getServerTime: { name: "Application.getServerTime", params: [] },
        getDynamicConfig: {
            name: "Application.getDynamicConfig",
            params: [],
        },
        uploadLogAsync: {
            name: "Application.uploadLogAsync",
            params: ["task_id", "upload_info"],
        },
        cleanCacheAsync: {
            name: "Application.cleanCacheAsync",
            params: ["task_id", "size"],
        },
        getCacheSizeAsync: {
            name: "Application.getCacheSizeAsync",
            params: ["task_id"],
        },
    },
    UserManager: {
        eventExecuteCallback: {
            name: "UserManager.eventExecuteCallback",
            params: ["result"],
        },
        getUserList: { name: "UserManager.getUserList", params: [] },
        getRecentUser: { name: "UserManager.getRecentUser", params: [] },
        deleteUser: { name: "UserManager.deleteUser", params: ["username"] },
        getLoggedInUserProfile: {
            name: "UserManager.getLoggedInUserProfile",
            params: [],
        },
        updateLoggedInUserProfileAsync: {
            name: "UserManager.updateLoggedInUserProfileAsync",
            params: ["task_id", "profile"],
        },
        updateLoggedInUserAvatarAsync: {
            name: "UserManager.updateLoggedInUserAvatarAsync",
            params: ["task_id", "image_path"],
        },
        getLoggedInUserQrCodeAsync: {
            name: "UserManager.getLoggedInUserQrCodeAsync",
            params: ["task_id"],
        },
    },
    LoginManager: {
        eventExecuteCallback: {
            name: "LoginManager.eventExecuteCallback",
            params: ["result"],
        },
        autoLoginAsync: {
            name: "LoginManager.autoLoginAsync",
            params: ["task_id", "username"],
        },
        pushLoginAsync: {
            name: "LoginManager.pushLoginAsync",
            params: ["task_id", "username"],
        },
        loginByPasswordAsync: {
            name: "LoginManager.loginByPasswordAsync",
            params: ["task_id", "username", "password"],
        },
        getLoginSmsCodeAsync: {
            name: "LoginManager.getLoginSmsCodeAsync",
            params: ["task_id", "phoneNumber"],
        },
        loginBySmsCodeAsync: {
            name: "LoginManager.loginBySmsCodeAsync",
            params: ["task_id", "phone_number", "sms_code"],
        },
        cancelLogin: { name: "LoginManager.cancelLogin", params: [] },
        getLoginState: { name: "LoginManager.getLoginState", params: [] },
        checkLoginQrCodeStateAsync: {
            name: "LoginManager.checkLoginQrCodeStateAsync",
            params: ["task_id"],
        },
        checkBindQrCodeStateAsync: {
            name: "LoginManager.checkBindQrCodeStateAsync",
            params: ["task_id"],
        },
        logoutAsync: {
            name: "LoginManager.logoutAsync",
            params: ["task_id"],
        },
        getLoginQrCodeAsync: {
            name: "LoginManager.getLoginQrCodeAsync",
            params: ["task_id"],
        },
        getBindQrCodeAsync: {
            name: "LoginManager.getBindQrCodeAsync",
            params: ["task_id", "ilink_id", "third_token", "op_code"],
        },
        loginByLoginQrCodeAsync: {
            name: "LoginManager.loginByLoginQrCodeAsync",
            params: ["task_id"],
        },
        loginByBindQrCodeAsync: {
            name: "LoginManager.loginByBindQrCodeAsync",
            params: ["task_id"],
        },
    },
    ContactManager: {
        eventExecuteCallback: {
            name: "ContactManager.eventExecuteCallback",
            params: ["result"],
        },
        initContactsAsync: {
            name: "ContactManager.initContactsAsync",
            params: ["task_id"],
        },
        getInitState: { name: "ContactManager.getInitState", params: [] },
        getContactList: { name: "ContactManager.getContactList", params: [] },
        getContact: {
            name: "ContactManager.getContact",
            params: ["username"],
        },
        deleteContactAsync: {
            name: "ContactManager.deleteContactAsync",
            params: ["task_id", "username"],
        },
        setContactOnTopAsync: {
            name: "ContactManager.setContactOnTopAsync",
            params: ["task_id", "username", "is_ontop"],
        },
        setContactMuteAsync: {
            name: "ContactManager.setContactMuteAsync",
            params: ["task_id", "username", "is_mute"],
        },
        batchUpdateContactAsync: {
            name: "ContactManager.batchUpdateContactAsync",
            params: ["task_id", "username_list"],
        },
        updateContactAsync: {
            name: "ContactManager.updateContactAsync",
            params: ["task_id", "username"],
        },
        remarkContactAsync: {
            name: "ContactManager.remarkContactAsync",
            params: ["task_id", "username", "remark"],
        },
        getVerifyContact: {
            name: "ContactManager.getVerifyContact",
            params: ["username"],
        },
        getVerifyContactList: {
            name: "ContactManager.getVerifyContactList",
            params: ["limit"],
        },
        getVerifyContactSummary: {
            name: "ContactManager.getVerifyContactSummary",
            params: [],
        },
        handleVerifyAsync: {
            name: "ContactManager.handleVerifyAsync",
            params: ["task_id", "op_code", "username"],
        },
    },
    MessageManager: {
        eventExecuteCallback: {
            name: "MessageManager.eventExecuteCallback",
            params: ["result"],
        },
        sendTextMessageAsync: {
            name: "MessageManager.sendTextMessageAsync",
            params: ["task_id", "username", "content"],
        },
        sendImageMessageAsync: {
            name: "MessageManager.sendImageMessageAsync",
            params: [
                "task_id",
                "username",
                "thumbnail_path",
                "media_path",
                "is_send_hd",
            ],
        },
        sendVoiceMessageAsync: {
            name: "MessageManager.sendVoiceMessageAsync",
            params: [
                "task_id",
                "username",
                "voice_file_path",
                "format",
                "voice_length",
            ],
        },
        sendEmojiMessageAsync: {
            name: "MessageManager.sendEmojiMessageAsync",
            params: ["task_id", "username", "emoji_md5"],
        },
        sendAppMessageAsync: {
            name: "MessageManager.sendAppMessageAsync",
            params: ["task_id", "username", "type", "app_msg_str"],
        },
        sendVideoMessageAsync: {
            name: "MessageManager.sendVideoMessageAsync",
            params: ["task_id", "username", "video_info", "is_send_hd"],
        },
        resendMessageAsync: {
            name: "MessageManager.resendMessageAsync",
            params: ["task_id", "msg_id"],
        },
        reloadMessageAsync: {
            name: "MessageManager.reloadMessageAsync",
            params: ["task_id", "msg_id"],
        },
        cancelSendMessage: {
            name: "MessageManager.cancelSendMessage",
            params: ["msg_id"],
        },
        recallMessageAsync: {
            name: "MessageManager.recallMessageAsync",
            params: ["task_id", "msg_id"],
        },
        markMessageHandled: {
            name: "MessageManager.markMessageHandled",
            params: ["msg_id"],
        },
        markMessageOpened: {
            name: "MessageManager.markMessageOpened",
            params: ["msg_id"],
        },
        markMessagesHandled: {
            name: "MessageManager.markMessagesHandled",
            params: ["username", "start_msg_id", "create_time", "offset"],
        },
        getMessageList: {
            name: "MessageManager.getMessageList",
            params: [
                "username",
                "start_msg_id",
                "offset",
                "create_time",
                "order_type",
            ],
        },
        getMessageList1: {
            name: "MessageManager.getMessageList1",
            params: [
                "username",
                "start_msg_id",
                "offset",
                "create_time",
                "order_type",
                "msg_flag",
                "msg_status",
                "msg_type",
            ],
        },
        getMessage: { name: "MessageManager.getMessage", params: ["msg_id"] },
        searchMessageWithKeywords: {
            name: "MessageManager.searchMessageWithKeywords",
            params: ["keyword_list", "start_msg_id", "offset"],
        },
        searchMessageWithKeywords1: {
            name: "MessageManager.searchMessageWithKeywords1",
            params: ["username", "keyword_list", "start_msg_id", "offset"],
        },
        searchMessageWithKeywords2: {
            name: "MessageManager.searchMessageWithKeywords2",
            params: ["talker_id", "keyword_list", "start_msg_id", "offset"],
        },
        deleteMessage: {
            name: "MessageManager.deleteMessage",
            params: ["username"],
        },
        deleteMessage1: {
            name: "MessageManager.deleteMessage1",
            params: ["msg_id"],
        },
        downloadMessageContentAsync: {
            name: "MessageManager.downloadMessageContentAsync",
            params: ["task_id", "msg_id", "type"],
        },
        downloadSubMessageContentAsync: {
            name: "MessageManager.downloadSubMessageContentAsync",
            params: ["task_id", "msg_id", "data_id", "type"],
        },
        transMessageAsync: {
            name: "MessageManager.transMessageAsync",
            params: ["task_id", "msg_id"],
        },
    },
    ConversationManager: {
        eventExecuteCallback: {
            name: "ConversationManager.eventExecuteCallback",
            params: ["result"],
        },
        syncConversationListAsync: {
            name: "ConversationManager.syncConversationListAsync",
            params: ["task_id", "sync_action", "conversation_name"],
        },
        syncConversationSequenceAsync: {
            name: "ConversationManager.syncConversationSequenceAsync",
            params: ["task_id"],
        },
        getConversationList: {
            name: "ConversationManager.getConversationList",
            params: [],
        },
        getConversation: {
            name: "ConversationManager.getConversation",
            params: ["username"],
        },
        deleteConversation: {
            name: "ConversationManager.deleteConversation",
            params: ["username", "is_delete_msg"],
        },
        deleteAllConversations: {
            name: "ConversationManager.deleteAllConversations",
            params: ["is_delete_msg"],
        },
        markConversationRead: {
            name: "ConversationManager.markConversationRead",
            params: ["username", "is_create"],
        },
        markConversationUnread: {
            name: "ConversationManager.markConversationUnread",
            params: ["username"],
        },
        markConversationRead1: {
            name: "ConversationManager.markConversationRead1",
            params: ["username", "msg_read_count", "is_create"],
        },
        setConversationFlags: {
            name: "ConversationManager.setConversationFlags",
            params: ["username", "flags"],
        },
        enterConversation: {
            name: "ConversationManager.enterConversation",
            params: ["conversation_name"],
        },
    },
    ChatRoomManager: {
        eventExecuteCallback: {
            name: "ChatRoomManager.eventExecuteCallback",
            params: ["result"],
        },
        updateChatRoomMemberAsync: {
            name: "ChatRoomManager.updateChatRoomMemberAsync",
            params: ["task_id", "room_username"],
        },
        updateChatRoomDetailAsync: {
            name: "ChatRoomManager.updateChatRoomDetailAsync",
            params: ["task_id", "room_username"],
        },
        getChatRoomMemberList: {
            name: "ChatRoomManager.getChatRoomMemberList",
            params: ["room_username"],
        },
        getChatRoomMember: {
            name: "ChatRoomManager.getChatRoomMember",
            params: ["room_username", "member_username"],
        },
        getChatRoomDetail: {
            name: "ChatRoomManager.getChatRoomDetail",
            params: ["room_username"],
        },
        addRoomMemberAsync: {
            name: "ChatRoomManager.addRoomMemberAsync",
            params: ["task_id", "room_username", "username_list"],
        },
        inviteRoomMemberAsync: {
            name: "ChatRoomManager.inviteRoomMemberAsync",
            params: ["task_id", "room_username", "username_list"],
        },
        deleteRoomMemberAsync: {
            name: "ChatRoomManager.deleteRoomMemberAsync",
            params: ["task_id", "room_username", "username_list"],
        },
        setRoomAnnouncementAsync: {
            name: "ChatRoomManager.setRoomAnnouncementAsync",
            params: ["task_id", "room_username", "announcement"],
        },
        createChatRoomAsync: {
            name: "ChatRoomManager.createChatRoomAsync",
            params: ["task_id", "username_list"],
        },
        quitChatRoomAsync: {
            name: "ChatRoomManager.quitChatRoomAsync",
            params: ["task_id", "room_username"],
        },
        setRoomMuteStatusAsync: {
            name: "ChatRoomManager.setRoomMuteStatusAsync",
            params: ["task_id", "room_username", "is_mute"],
        },
        setSelfDisplayNameAsync: {
            name: "ChatRoomManager.setSelfDisplayNameAsync",
            params: ["task_id", "room_username", "displayname"],
        },
        setRoomNickNameAsync: {
            name: "ChatRoomManager.setRoomNickNameAsync",
            params: ["task_id", "room_username", "nickname"],
        },
        setRoomInContactAsync: {
            name: "ChatRoomManager.setRoomInContactAsync",
            params: ["task_id", "room_username", "is_in_contact"],
        },
        setDisplayNameVisibilityAsync: {
            name: "ChatRoomManager.setDisplayNameVisibilityAsync",
            params: ["task_id", "room_username", "is_visible"],
        },
        getMemberContact: {
            name: "ChatRoomManager.getMemberContact",
            params: ["username"],
        },
        updateMemberContactAsync: {
            name: "ChatRoomManager.updateMemberContactAsync",
            params: ["task_id", "username"],
        },
    },
    AvatarManager: {
        eventExecuteCallback: {
            name: "AvatarManager.eventExecuteCallback",
            params: ["result"],
        },
        downloadAvatarAsync: {
            name: "AvatarManager.downloadAvatarAsync",
            params: ["task_id", "username", "type"],
        },
        getAvatarPath: {
            name: "AvatarManager.getAvatarPath",
            params: ["username", "type"],
        },
        cancelDownloadAvatar: {
            name: "AvatarManager.cancelDownloadAvatar",
            params: ["task_id"],
        },
        getAvatar: {
            name: "AvatarManager.getAvatar",
            params: ["username", "type"],
        },
    },
    VoipManager: {
        eventExecuteCallback: {
            name: "VoipManager.eventExecuteCallback",
            params: ["result"],
        },
        call: {
            name: "VoipManager.call",
            params: ["call_to", "call_from", "room_type"],
        },
        cancelCall: { name: "VoipManager.cancelCall", params: [] },
        reject: { name: "VoipManager.reject", params: [] },
        hangup: { name: "VoipManager.hangup", params: [] },
        accept: { name: "VoipManager.accept", params: ["is_only_audio"] },
        ignore: { name: "VoipManager.ignore", params: [] },
        closeVideo: { name: "VoipManager.closeVideo", params: [] },
        getAudioData: {
            name: "VoipManager.getAudioData",
            params: ["pcm_buffer", "get_data_len"],
        },
        sendAudioData: {
            name: "VoipManager.sendAudioData",
            params: ["pcm_data", "data_len"],
        },
        sendVideoData: {
            name: "VoipManager.sendVideoData",
            params: ["video_data", "data_len", "width", "height", "format"],
        },
        getVideoData: {
            name: "VoipManager.getVideoData",
            params: ["pcm_buffer", "data_len", "width", "height"],
        },
    },
    CdnManager: {
        downloadImageAsync: {
            name: "CdnManager.downloadImageAsync",
            params: ["task_id", "cdn_image_download_info"],
        },
        uploadImageAsync: {
            name: "CdnManager.uploadImageAsync",
            params: ["task_id", "cdn_image_upload_info"],
        },
        downloadFileAsync: {
            name: "CdnManager.downloadFileAsync",
            params: ["task_id", "cdn_file_info"],
        },
    },
    EmojiManager: {
        eventExecuteCallback: {
            name: "EmojiManager.eventExecuteCallback",
            params: ["result"],
        },
        getCustomEmojiList: {
            name: "EmojiManager.getCustomEmojiList",
            params: [],
        },
        getStoreEmojiList: {
            name: "EmojiManager.getStoreEmojiList",
            params: [],
        },
        getBuiltinEmojiList: {
            name: "EmojiManager.getBuiltinEmojiList",
            params: [],
        },
    },
    ReportManager: {
        reportKvData: {
            name: "ReportManager.reportKvData",
            params: ["log_id", "value", "report_now", "is_ignore_freq_check"],
        },
        reportIdKeyData: {
            name: "ReportManager.reportIdKeyData",
            params: ["log_id", "key", "value", "is_ignore_freq_check"],
        },
        setDebugReport: {
            name: "ReportManager.setDebugReport",
            params: ["debug"],
        },
    },
    WxcodepayManager: {
        eventExecuteCallback: {
            name: "WxcodepayManager.eventExecuteCallback",
            params: ["result"],
        },
        getBindUserInfo: {
            name: "WxcodepayManager.getBindUserInfo",
            params: [],
        },
        getBindState: { name: "WxcodepayManager.getBindState", params: [] },
        unbindAsync: {
            name: "WxcodepayManager.unbindAsync",
            params: ["task_id"],
        },
        startBindAsync: {
            name: "WxcodepayManager.startBindAsync",
            params: ["task_id"],
        },
        stopBind: { name: "WxcodepayManager.stopBind", params: [] },
        getBindingCode: {
            name: "WxcodepayManager.getBindingCode",
            params: [],
        },
        showPayCode: { name: "WxcodepayManager.showPayCode", params: [] },
        hidePayCode: { name: "WxcodepayManager.hidePayCode", params: [] },
    },
    TaskManager: {
        createTask: { name: "TaskManager.createTask", params: [] },
    },
    ExtensionManager: {
        eventExecuteCallback: {
            name: "ExtensionManager.eventExecuteCallback",
            params: ["result"],
        },
        sendRequestAsync: {
            name: "ExtensionManager.sendRequestAsync",
            params: ["task_id", "request"],
        },
        cancelTask: {
            name: "ExtensionManager.cancelTask",
            params: ["task_id"],
        },
        subscribeNotifyCmdIds: {
            name: "ExtensionManager.subscribeNotifyCmdIds",
            params: ["cmd_id_list"],
        },
        unsubscribeNotifyCmdIds: {
            name: "ExtensionManager.unsubscribeNotifyCmdIds",
            params: ["cmd_id_list"],
        },
    },
    Context: {
        init: { name: "Context.init", params: ["config"] },
        unInit: { name: "Context.unInit", params: [] },
        getApplication: { name: "Context.getApplication", params: [] },
        getUserManager: { name: "Context.getUserManager", params: [] },
        getLoginManager: { name: "Context.getLoginManager", params: [] },
        getContactManager: { name: "Context.getContactManager", params: [] },
        getConversationManager: {
            name: "Context.getConversationManager",
            params: [],
        },
        getChatRoomManager: {
            name: "Context.getChatRoomManager",
            params: [],
        },
        getMessageManager: { name: "Context.getMessageManager", params: [] },
        getAvatarManager: { name: "Context.getAvatarManager", params: [] },
        getVoipManager: { name: "Context.getVoipManager", params: [] },
        getCdnManager: { name: "Context.getCdnManager", params: [] },
        getEmojiManager: { name: "Context.getEmojiManager", params: [] },
        getReportManager: { name: "Context.getReportManager", params: [] },
        getWxcodepayManager: {
            name: "Context.getWxcodepayManager",
            params: [],
        },
        getTaskManager: { name: "Context.getTaskManager", params: [] },
        getExtensionManager: {
            name: "Context.getExtensionManager",
            params: [],
        },
    },
} as const;
export const Module={
    Application: [
      'setOnNotify',
      'eventExecuteCallback',
      'setForeground',
      'isForeground',
      'getNetworkState',
      'triggerHeartbeat',
      'getServerTime',
      'getDynamicConfig',
      'uploadLogAsync',
      'cleanCacheAsync',
      'getCacheSizeAsync',
      'getInfo',
      'constructor'
    ],
    UserManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'getUserList',
      'getRecentUser',
      'deleteUser',
      'getLoggedInUserProfile',
      'updateLoggedInUserProfileAsync',
      'updateLoggedInUserAvatarAsync',
      'getLoggedInUserQrCodeAsync',
      'constructor'
    ],
    LoginManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'autoLoginAsync',
      'pushLoginAsync',
      'loginByPasswordAsync',
      'getLoginSmsCodeAsync',
      'loginBySmsCodeAsync',
      'cancelLogin',
      'getLoginState',
      'checkLoginQrCodeStateAsync',
      'checkBindQrCodeStateAsync',
      'logoutAsync',
      'getLoginQrCodeAsync',
      'getBindQrCodeAsync',
      'loginByLoginQrCodeAsync',
      'loginByBindQrCodeAsync',
      'getLoginAttr',
      'setPushAutoLoginStateAsync',
      'constructor'
    ],
    ContactManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'initContactsAsync',
      'getInitState',
      'getContactList',
      'getContact',
      'deleteContactAsync',
      'batchUpdateContactAsync',
      'updateContactAsync',
      'remarkContactAsync',
      'setContactOnTopAsync',
      'setContactMuteAsync',
      'getVerifyContact',
      'getVerifyContactList',
      'getVerifyContactSummary',
      'handleVerifyAsync',
      'searchContactAsync',
      'addToContactAsync',
      'sendAddContactRequestAsync',
      'constructor'
    ],
    MessageManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'sendTextMessageAsync',
      'sendImageMessageAsync',
      'sendVideoMessageAsync',
      'sendVoiceMessageAsync',
      'sendEmojiMessageAsync',
      'sendAppMessageAsync',
      'resendMessageAsync',
      'reloadMessageAsync',
      'cancelSendMessage',
      'recallMessageAsync',
      'markMessageHandled',
      'markMessageOpened',
      'markMessagesHandled',
      'getMessageList',
      'getMessageList1',
      'getMessage',
      'searchMessageWithKeywords',
      'searchMessageWithKeywords1',
      'searchMessageWithKeywords2',
      'deleteMessage',
      'deleteMessage1',
      'downloadMessageContentAsync',
      'downloadSubMessageContentAsync',
      'transMessageAsync',
      'constructor'
    ],
    ConversationManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'syncConversationListAsync',
      'syncConversationSequenceAsync',
      'getConversationList',
      'getConversation',
      'deleteConversation',
      'deleteAllConversations',
      'markConversationRead',
      'markConversationUnread',
      'markConversationRead1',
      'setConversationFlags',
      'enterConversation',
      'constructor'
    ],
    ChatRoomManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'updateChatRoomMemberAsync',
      'updateChatRoomDetailAsync',
      'getChatRoomMemberList',
      'getChatRoomMember',
      'getChatRoomDetail',
      'addRoomMemberAsync',
      'inviteRoomMemberAsync',
      'deleteRoomMemberAsync',
      'setRoomAnnouncementAsync',
      'createChatRoomAsync',
      'quitChatRoomAsync',
      'setRoomMuteStatusAsync',
      'setSelfDisplayNameAsync',
      'setRoomNickNameAsync',
      'setRoomInContactAsync',
      'setDisplayNameVisibilityAsync',
      'getMemberContact',
      'updateMemberContactAsync',
      'constructor'
    ],
    AvatarManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'downloadAvatarAsync',
      'getAvatarPath',
      'cancelDownloadAvatar',
      'getAvatar',
      'constructor'
    ],
    VoipManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'call',
      'cancelCall',
      'reject',
      'hangup',
      'accept',
      'ignore',
      'closeVideo',
      'getAudioData',
      'sendAudioData',
      'sendVideoData',
      'getVideoData',
      'constructor'
    ],
    CdnManager: [
      'downloadImageAsync',
      'uploadImageAsync',
      'downloadFileAsync',
      'constructor'
    ],
    EmojiManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'getCustomEmojiList',
      'getStoreEmojiList',
      'getBuiltinEmojiList',
      'emojiOperationAsync',
      'emojiOperationCheck',
      'getEmojiMd5FromMessage',
      'constructor'
    ],
    ReportManager: [
      'reportKvData',
      'reportIdKeyData',
      'setDebugReport',
      'constructor'
    ],
    WxcodepayManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'getInfo',
      'getBindState',
      'unbindAsync',
      'startBindAsync',
      'stopBind',
      'getBindingCode',
      'showPayCode',
      'hidePayCode',
      'getBalanceInfo',
      'refreshBalanceAsync',
      'constructor'
    ],
    TaskManager: [ 'createTask', 'cancelTask', 'constructor' ],
    ExtensionManager: [
      'setOnNotify',
      'eventExecuteCallback',
      'sendRequestAsync',
      'cancelTask1',
      'subscribeNotifyCmdIds',
      'unsubscribeNotifyCmdIds',
      'constructor'
    ],
    CommonUtil: [ 'voiceTranceAsync', 'constructor' ],
    Context: [
      'init',
      'unInit',
      'getApplication',
      'getUserManager',
      'getLoginManager',
      'getContactManager',
      'getConversationManager',
      'getChatRoomManager',
      'getMessageManager',
      'getAvatarManager',
      'getVoipManager',
      'getCdnManager',
      'getEmojiManager',
      'getReportManager',
      'getWxcodepayManager',
      'getTaskManager',
      'getExtensionManager',
      'getCommonUtil',
      'constructor'
    ]
};

