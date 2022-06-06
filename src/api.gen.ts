export interface Application{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    setForeground:(is_foreground:any)=>any;
    isForeground:()=>any;
    getNetworkState:()=>any;
    triggerHeartbeat:()=>any;
    getServerTime:()=>any;
    getDynamicConfig:()=>any;
    uploadLogAsync:(task_id:any ,upload_info:any)=>any;
    cleanCacheAsync:(task_id:any ,size:any)=>any;
    getCacheSizeAsync:(task_id:any)=>any;
    getInfo:()=>any;
    constructor:()=>any;
}
export interface UserManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    getUserList:()=>any;
    getRecentUser:()=>any;
    deleteUser:(username:any)=>any;
    getLoggedInUserProfile:()=>any;
    updateLoggedInUserProfileAsync:(task_id:any ,profile:any)=>any;
    updateLoggedInUserAvatarAsync:(task_id:any ,image_path:any)=>any;
    getLoggedInUserQrCodeAsync:(task_id:any)=>any;
    constructor:()=>any;
}
export interface LoginManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    autoLoginAsync:(task_id:any ,username:any)=>any;
    pushLoginAsync:(task_id:any ,username:any)=>any;
    loginByPasswordAsync:(task_id:any ,username:any ,password:any)=>any;
    getLoginSmsCodeAsync:(task_id:any ,phoneNumber:any)=>any;
    loginBySmsCodeAsync:(task_id:any ,phone_number:any ,sms_code:any)=>any;
    cancelLogin:()=>any;
    getLoginState:()=>any;
    checkLoginQrCodeStateAsync:(task_id:any)=>any;
    checkBindQrCodeStateAsync:(task_id:any)=>any;
    logoutAsync:(task_id:any)=>any;
    getLoginQrCodeAsync:(task_id:any)=>any;
    getBindQrCodeAsync:(task_id:any ,ilink_id:any ,third_token:any ,op_code:any)=>any;
    loginByLoginQrCodeAsync:(task_id:any)=>any;
    loginByBindQrCodeAsync:(task_id:any)=>any;
    getLoginAttr:()=>any;
    setPushAutoLoginStateAsync:()=>any;
    constructor:()=>any;
}
export interface ContactManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    initContactsAsync:(task_id:any)=>any;
    getInitState:()=>any;
    getContactList:()=>any;
    getContact:(username:any)=>any;
    deleteContactAsync:(task_id:any ,username:any)=>any;
    batchUpdateContactAsync:(task_id:any ,username_list:any)=>any;
    updateContactAsync:(task_id:any ,username:any)=>any;
    remarkContactAsync:(task_id:any ,username:any ,remark:any)=>any;
    setContactOnTopAsync:(task_id:any ,username:any ,is_ontop:any)=>any;
    setContactMuteAsync:(task_id:any ,username:any ,is_mute:any)=>any;
    getVerifyContact:(username:any)=>any;
    getVerifyContactList:(limit:any)=>any;
    getVerifyContactSummary:()=>any;
    handleVerifyAsync:(task_id:any ,op_code:any ,username:any)=>any;
    searchContactAsync:()=>any;
    addToContactAsync:()=>any;
    sendAddContactRequestAsync:()=>any;
    constructor:()=>any;
}
export interface MessageManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    sendTextMessageAsync:(task_id:any ,username:any ,content:any)=>any;
    sendImageMessageAsync:(task_id:any ,username:any ,thumbnail_path:any ,media_path:any ,is_send_hd:any)=>any;
    sendVideoMessageAsync:(task_id:any ,username:any ,video_info:any ,is_send_hd:any)=>any;
    sendVoiceMessageAsync:(task_id:any ,username:any ,voice_file_path:any ,format:any ,voice_length:any)=>any;
    sendEmojiMessageAsync:(task_id:any ,username:any ,emoji_md5:any)=>any;
    sendAppMessageAsync:(task_id:any ,username:any ,type:any ,app_msg_str:any)=>any;
    resendMessageAsync:(task_id:any ,msg_id:any)=>any;
    reloadMessageAsync:(task_id:any ,msg_id:any)=>any;
    cancelSendMessage:(msg_id:any)=>any;
    recallMessageAsync:(task_id:any ,msg_id:any)=>any;
    markMessageHandled:(msg_id:any)=>any;
    markMessageOpened:(msg_id:any)=>any;
    markMessagesHandled:(username:any ,start_msg_id:any ,create_time:any ,offset:any)=>any;
    getMessageList:(username:any ,start_msg_id:any ,offset:any ,create_time:any ,order_type:any)=>any;
    getMessageList1:(username:any ,start_msg_id:any ,offset:any ,create_time:any ,order_type:any ,msg_flag:any ,msg_status:any ,msg_type:any)=>any;
    getMessage:(msg_id:any)=>any;
    searchMessageWithKeywords:(keyword_list:any ,start_msg_id:any ,offset:any)=>any;
    searchMessageWithKeywords1:(username:any ,keyword_list:any ,start_msg_id:any ,offset:any)=>any;
    searchMessageWithKeywords2:(talker_id:any ,keyword_list:any ,start_msg_id:any ,offset:any)=>any;
    deleteMessage:(username:any)=>any;
    deleteMessage1:(msg_id:any)=>any;
    downloadMessageContentAsync:(task_id:any ,msg_id:any ,type:any)=>any;
    downloadSubMessageContentAsync:(task_id:any ,msg_id:any ,data_id:any ,type:any)=>any;
    transMessageAsync:(task_id:any ,msg_id:any)=>any;
    constructor:()=>any;
}
export interface ConversationManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    syncConversationListAsync:(task_id:any ,sync_action:any ,conversation_name:any)=>any;
    syncConversationSequenceAsync:(task_id:any)=>any;
    getConversationList:()=>any;
    getConversation:(username:any)=>any;
    deleteConversation:(username:any ,is_delete_msg:any)=>any;
    deleteAllConversations:(is_delete_msg:any)=>any;
    markConversationRead:(username:any ,is_create:any)=>any;
    markConversationUnread:(username:any)=>any;
    markConversationRead1:(username:any ,msg_read_count:any ,is_create:any)=>any;
    setConversationFlags:(username:any ,flags:any)=>any;
    enterConversation:(conversation_name:any)=>any;
    constructor:()=>any;
}
export interface ChatRoomManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    updateChatRoomMemberAsync:(task_id:any ,room_username:any)=>any;
    updateChatRoomDetailAsync:(task_id:any ,room_username:any)=>any;
    getChatRoomMemberList:(room_username:any)=>any;
    getChatRoomMember:(room_username:any ,member_username:any)=>any;
    getChatRoomDetail:(room_username:any)=>any;
    addRoomMemberAsync:(task_id:any ,room_username:any ,username_list:any)=>any;
    inviteRoomMemberAsync:(task_id:any ,room_username:any ,username_list:any)=>any;
    deleteRoomMemberAsync:(task_id:any ,room_username:any ,username_list:any)=>any;
    setRoomAnnouncementAsync:(task_id:any ,room_username:any ,announcement:any)=>any;
    createChatRoomAsync:(task_id:any ,username_list:any)=>any;
    quitChatRoomAsync:(task_id:any ,room_username:any)=>any;
    setRoomMuteStatusAsync:(task_id:any ,room_username:any ,is_mute:any)=>any;
    setSelfDisplayNameAsync:(task_id:any ,room_username:any ,displayname:any)=>any;
    setRoomNickNameAsync:(task_id:any ,room_username:any ,nickname:any)=>any;
    setRoomInContactAsync:(task_id:any ,room_username:any ,is_in_contact:any)=>any;
    setDisplayNameVisibilityAsync:(task_id:any ,room_username:any ,is_visible:any)=>any;
    getMemberContact:(username:any)=>any;
    updateMemberContactAsync:(task_id:any ,username:any)=>any;
    constructor:()=>any;
}
export interface AvatarManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    downloadAvatarAsync:(task_id:any ,username:any ,type:any)=>any;
    getAvatarPath:(username:any ,type:any)=>any;
    cancelDownloadAvatar:(task_id:any)=>any;
    getAvatar:(username:any ,type:any)=>any;
    constructor:()=>any;
}
export interface VoipManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    call:(call_to:any ,call_from:any ,room_type:any)=>any;
    cancelCall:()=>any;
    reject:()=>any;
    hangup:()=>any;
    accept:(is_only_audio:any)=>any;
    ignore:()=>any;
    closeVideo:()=>any;
    getAudioData:(pcm_buffer:any ,get_data_len:any)=>any;
    sendAudioData:(pcm_data:any ,data_len:any)=>any;
    sendVideoData:(video_data:any ,data_len:any ,width:any ,height:any ,format:any)=>any;
    getVideoData:(pcm_buffer:any ,data_len:any ,width:any ,height:any)=>any;
    constructor:()=>any;
}
export interface CdnManager{
    downloadImageAsync:(task_id:any ,cdn_image_download_info:any)=>any;
    uploadImageAsync:(task_id:any ,cdn_image_upload_info:any)=>any;
    downloadFileAsync:(task_id:any ,cdn_file_info:any)=>any;
    constructor:()=>any;
}
export interface EmojiManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    getCustomEmojiList:()=>any;
    getStoreEmojiList:()=>any;
    getBuiltinEmojiList:()=>any;
    emojiOperationAsync:()=>any;
    emojiOperationCheck:()=>any;
    getEmojiMd5FromMessage:()=>any;
    constructor:()=>any;
}
export interface ReportManager{
    reportKvData:(log_id:any ,value:any ,report_now:any ,is_ignore_freq_check:any)=>any;
    reportIdKeyData:(log_id:any ,key:any ,value:any ,is_ignore_freq_check:any)=>any;
    setDebugReport:(debug:any)=>any;
    constructor:()=>any;
}
export interface WxcodepayManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    getInfo:()=>any;
    getBindState:()=>any;
    unbindAsync:(task_id:any)=>any;
    startBindAsync:(task_id:any)=>any;
    stopBind:()=>any;
    getBindingCode:()=>any;
    showPayCode:()=>any;
    hidePayCode:()=>any;
    getBalanceInfo:()=>any;
    refreshBalanceAsync:()=>any;
    constructor:()=>any;
}
export interface TaskManager{
    createTask:()=>any;
    cancelTask:()=>any;
    constructor:()=>any;
}
export interface ExtensionManager{
    setOnNotify:()=>any;
    eventExecuteCallback:(result:any)=>any;
    sendRequestAsync:(task_id:any ,request:any)=>any;
    cancelTask1:()=>any;
    subscribeNotifyCmdIds:(cmd_id_list:any)=>any;
    unsubscribeNotifyCmdIds:(cmd_id_list:any)=>any;
    constructor:()=>any;
}
export interface CommonUtil{
    voiceTranceAsync:()=>any;
    constructor:()=>any;
}
export interface Context{
    init:(config:any)=>any;
    unInit:()=>any;
    getApplication:()=>any;
    getUserManager:()=>any;
    getLoginManager:()=>any;
    getContactManager:()=>any;
    getConversationManager:()=>any;
    getChatRoomManager:()=>any;
    getMessageManager:()=>any;
    getAvatarManager:()=>any;
    getVoipManager:()=>any;
    getCdnManager:()=>any;
    getEmojiManager:()=>any;
    getReportManager:()=>any;
    getWxcodepayManager:()=>any;
    getTaskManager:()=>any;
    getExtensionManager:()=>any;
    getCommonUtil:()=>any;
    constructor:()=>any;
}
export interface IAPI{
    Application:Application;
    UserManager:UserManager;
    LoginManager:LoginManager;
    ContactManager:ContactManager;
    MessageManager:MessageManager;
    ConversationManager:ConversationManager;
    ChatRoomManager:ChatRoomManager;
    AvatarManager:AvatarManager;
    VoipManager:VoipManager;
    CdnManager:CdnManager;
    EmojiManager:EmojiManager;
    ReportManager:ReportManager;
    WxcodepayManager:WxcodepayManager;
    TaskManager:TaskManager;
    ExtensionManager:ExtensionManager;
    CommonUtil:CommonUtil;
    Context:Context;
}