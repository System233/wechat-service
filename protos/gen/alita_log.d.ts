import * as $protobuf from "protobufjs";
/** Namespace alita. */
export namespace alita {

    /** Properties of a LogConfig. */
    interface ILogConfig {

        /** LogConfig isUseAlitaLog */
        isUseAlitaLog?: (boolean|null);

        /** LogConfig isEnableConsole */
        isEnableConsole?: (boolean|null);

        /** LogConfig isUseFilter */
        isUseFilter?: (boolean|null);

        /** LogConfig level */
        level?: (number|null);

        /** LogConfig logDir */
        logDir?: (string|null);

        /** LogConfig publicKey */
        publicKey?: (string|null);

        /** LogConfig maxAliveDays */
        maxAliveDays?: (number|null);

        /** LogConfig isWriteLogFile */
        isWriteLogFile?: (boolean|null);

        /** LogConfig maxLogFileSize */
        maxLogFileSize?: (number|null);
    }

    /** Represents a LogConfig. */
    class LogConfig implements ILogConfig {

        /**
         * Constructs a new LogConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: alita.ILogConfig);

        /** LogConfig isUseAlitaLog. */
        public isUseAlitaLog: boolean;

        /** LogConfig isEnableConsole. */
        public isEnableConsole: boolean;

        /** LogConfig isUseFilter. */
        public isUseFilter: boolean;

        /** LogConfig level. */
        public level: number;

        /** LogConfig logDir. */
        public logDir: string;

        /** LogConfig publicKey. */
        public publicKey: string;

        /** LogConfig maxAliveDays. */
        public maxAliveDays: number;

        /** LogConfig isWriteLogFile. */
        public isWriteLogFile: boolean;

        /** LogConfig maxLogFileSize. */
        public maxLogFileSize: number;

        /**
         * Creates a new LogConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LogConfig instance
         */
        public static create(properties?: alita.ILogConfig): alita.LogConfig;

        /**
         * Encodes the specified LogConfig message. Does not implicitly {@link alita.LogConfig.verify|verify} messages.
         * @param message LogConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: alita.ILogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LogConfig message, length delimited. Does not implicitly {@link alita.LogConfig.verify|verify} messages.
         * @param message LogConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: alita.ILogConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LogConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LogConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alita.LogConfig;

        /**
         * Decodes a LogConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LogConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alita.LogConfig;

        /**
         * Verifies a LogConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LogConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LogConfig
         */
        public static fromObject(object: { [k: string]: any }): alita.LogConfig;

        /**
         * Creates a plain object from a LogConfig message. Also converts values to other types if specified.
         * @param message LogConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: alita.LogConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LogConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WriteRequest. */
    interface IWriteRequest {

        /** WriteRequest pid */
        pid?: (number|Long|null);

        /** WriteRequest tid */
        tid?: (number|Long|null);

        /** WriteRequest cid */
        cid?: (number|Long|null);

        /** WriteRequest level */
        level?: (number|null);

        /** WriteRequest tag */
        tag?: (string|null);

        /** WriteRequest filename */
        filename?: (string|null);

        /** WriteRequest line */
        line?: (number|null);

        /** WriteRequest functionName */
        functionName?: (string|null);

        /** WriteRequest log */
        log?: (string|null);
    }

    /** Represents a WriteRequest. */
    class WriteRequest implements IWriteRequest {

        /**
         * Constructs a new WriteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: alita.IWriteRequest);

        /** WriteRequest pid. */
        public pid: (number|Long);

        /** WriteRequest tid. */
        public tid: (number|Long);

        /** WriteRequest cid. */
        public cid: (number|Long);

        /** WriteRequest level. */
        public level: number;

        /** WriteRequest tag. */
        public tag: string;

        /** WriteRequest filename. */
        public filename: string;

        /** WriteRequest line. */
        public line: number;

        /** WriteRequest functionName. */
        public functionName: string;

        /** WriteRequest log. */
        public log: string;

        /**
         * Creates a new WriteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteRequest instance
         */
        public static create(properties?: alita.IWriteRequest): alita.WriteRequest;

        /**
         * Encodes the specified WriteRequest message. Does not implicitly {@link alita.WriteRequest.verify|verify} messages.
         * @param message WriteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: alita.IWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteRequest message, length delimited. Does not implicitly {@link alita.WriteRequest.verify|verify} messages.
         * @param message WriteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: alita.IWriteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alita.WriteRequest;

        /**
         * Decodes a WriteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alita.WriteRequest;

        /**
         * Verifies a WriteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteRequest
         */
        public static fromObject(object: { [k: string]: any }): alita.WriteRequest;

        /**
         * Creates a plain object from a WriteRequest message. Also converts values to other types if specified.
         * @param message WriteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: alita.WriteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WriteLogRequest. */
    interface IWriteLogRequest {

        /** WriteLogRequest pid */
        pid?: (number|Long|null);

        /** WriteLogRequest tid */
        tid?: (number|Long|null);

        /** WriteLogRequest cid */
        cid?: (number|Long|null);

        /** WriteLogRequest level */
        level?: (number|null);

        /** WriteLogRequest tag */
        tag?: (string|null);

        /** WriteLogRequest filename */
        filename?: (string|null);

        /** WriteLogRequest line */
        line?: (number|null);

        /** WriteLogRequest functionName */
        functionName?: (string|null);

        /** WriteLogRequest log */
        log?: (string|null);
    }

    /** Represents a WriteLogRequest. */
    class WriteLogRequest implements IWriteLogRequest {

        /**
         * Constructs a new WriteLogRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: alita.IWriteLogRequest);

        /** WriteLogRequest pid. */
        public pid: (number|Long);

        /** WriteLogRequest tid. */
        public tid: (number|Long);

        /** WriteLogRequest cid. */
        public cid: (number|Long);

        /** WriteLogRequest level. */
        public level: number;

        /** WriteLogRequest tag. */
        public tag: string;

        /** WriteLogRequest filename. */
        public filename: string;

        /** WriteLogRequest line. */
        public line: number;

        /** WriteLogRequest functionName. */
        public functionName: string;

        /** WriteLogRequest log. */
        public log: string;

        /**
         * Creates a new WriteLogRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteLogRequest instance
         */
        public static create(properties?: alita.IWriteLogRequest): alita.WriteLogRequest;

        /**
         * Encodes the specified WriteLogRequest message. Does not implicitly {@link alita.WriteLogRequest.verify|verify} messages.
         * @param message WriteLogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: alita.IWriteLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteLogRequest message, length delimited. Does not implicitly {@link alita.WriteLogRequest.verify|verify} messages.
         * @param message WriteLogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: alita.IWriteLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteLogRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alita.WriteLogRequest;

        /**
         * Decodes a WriteLogRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alita.WriteLogRequest;

        /**
         * Verifies a WriteLogRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteLogRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteLogRequest
         */
        public static fromObject(object: { [k: string]: any }): alita.WriteLogRequest;

        /**
         * Creates a plain object from a WriteLogRequest message. Also converts values to other types if specified.
         * @param message WriteLogRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: alita.WriteLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteLogRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilterLogRequest. */
    interface IFilterLogRequest {

        /** FilterLogRequest pid */
        pid?: (number|Long|null);

        /** FilterLogRequest tid */
        tid?: (number|Long|null);

        /** FilterLogRequest cid */
        cid?: (number|Long|null);

        /** FilterLogRequest level */
        level?: (number|null);

        /** FilterLogRequest tag */
        tag?: (string|null);

        /** FilterLogRequest filename */
        filename?: (string|null);

        /** FilterLogRequest line */
        line?: (number|null);

        /** FilterLogRequest functionName */
        functionName?: (string|null);

        /** FilterLogRequest log */
        log?: (string|null);
    }

    /** Represents a FilterLogRequest. */
    class FilterLogRequest implements IFilterLogRequest {

        /**
         * Constructs a new FilterLogRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: alita.IFilterLogRequest);

        /** FilterLogRequest pid. */
        public pid: (number|Long);

        /** FilterLogRequest tid. */
        public tid: (number|Long);

        /** FilterLogRequest cid. */
        public cid: (number|Long);

        /** FilterLogRequest level. */
        public level: number;

        /** FilterLogRequest tag. */
        public tag: string;

        /** FilterLogRequest filename. */
        public filename: string;

        /** FilterLogRequest line. */
        public line: number;

        /** FilterLogRequest functionName. */
        public functionName: string;

        /** FilterLogRequest log. */
        public log: string;

        /**
         * Creates a new FilterLogRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilterLogRequest instance
         */
        public static create(properties?: alita.IFilterLogRequest): alita.FilterLogRequest;

        /**
         * Encodes the specified FilterLogRequest message. Does not implicitly {@link alita.FilterLogRequest.verify|verify} messages.
         * @param message FilterLogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: alita.IFilterLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilterLogRequest message, length delimited. Does not implicitly {@link alita.FilterLogRequest.verify|verify} messages.
         * @param message FilterLogRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: alita.IFilterLogRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilterLogRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilterLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alita.FilterLogRequest;

        /**
         * Decodes a FilterLogRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilterLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alita.FilterLogRequest;

        /**
         * Verifies a FilterLogRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilterLogRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilterLogRequest
         */
        public static fromObject(object: { [k: string]: any }): alita.FilterLogRequest;

        /**
         * Creates a plain object from a FilterLogRequest message. Also converts values to other types if specified.
         * @param message FilterLogRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: alita.FilterLogRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilterLogRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AlitaLogEventType enum. */
    enum AlitaLogEventType {
        kWriteLogEvent = 0,
        kFilterLogEvent = 1
    }

    /** LogLevel enum. */
    enum LogLevel {
        kLogLevelAll = 0,
        kLogLevelDebug = 1,
        kLogLevelInfo = 2,
        kLogLevelWarn = 3,
        kLogLevelError = 4,
        kLogLevelFatal = 5,
        kLogLevelNone = 6
    }

    /** PresetDebugIp enum. */
    enum PresetDebugIp {
        kPresetDebugIpNone = 0,
        kPresetDebugIpManual = 1,
        kPresetDebugIp995 = 2,
        kPresetDebugIpHK990 = 3,
        kPresetDebugIp1001 = 4,
        kPresetDebugIp1002 = 5,
        kPresetDebugIpSZ1001 = 6,
        kPresetDebugIpSZ1002 = 7,
        kPresetDebugIpHK1001 = 8,
        kPresetDebugIpHK1002 = 9,
        kPresetDebugIpCA1001 = 10,
        kPresetDebugIpCA1002 = 11,
        kPresetDebugIp993 = 12
    }

    /** DeviceTypeId enum. */
    enum DeviceTypeId {
        kDeviceTypeIdUnknown = 0,
        kDeviceTypeIdIphone = 1,
        kDeviceTypeIdAndroid = 2,
        kDeviceTypeIdS60V3 = 3,
        kDeviceTypeIdS60V5 = 4,
        kDeviceTypeIdWp7 = 5,
        kDeviceTypeIdWebWx = 6,
        kDeviceTypeIdBlackberry = 7,
        kDeviceTypeIdWp8 = 8,
        kDeviceTypeIdS40Asha = 9,
        kDeviceTypeIdBlackberry10 = 10,
        kDeviceTypeIdS40AshaV5 = 11,
        kDeviceTypeIdAndroidLite = 12,
        kDeviceTypeIdIpad = 13,
        kDeviceTypeIdImac = 14,
        kDeviceTypeIdWindows = 15,
        kDeviceTypeIdDjj = 19,
        kDeviceTypeIdAlbum = 24,
        kDeviceTypeIdKidsWatch = 26
    }

    /** NetworkPolicy enum. */
    enum NetworkPolicy {
        kNetworkPolicyDefault = 0,
        kNetworkPolicyShort = 1,
        kNetworkPolicyLong = 2,
        kNetworkPolicyBoth = 3
    }

    /** LoginState enum. */
    enum LoginState {
        kLoginStateIdle = 0,
        kLoginStateLoggingIn = 1,
        kLoginStateLoggedIn = 2,
        kLoginStateLoggingOut = 3,
        kLoginStateExpired = 4,
        kLoginStateLoggedOut = 5,
        kLoginStateKickedOut = 6
    }

    /** AvatarImageType enum. */
    enum AvatarImageType {
        kAvatarImageTypeUnknown = 0,
        kAvatarImageTypeSmall = 1,
        kAvatarImageTypeHd = 2
    }

    /** LoginQrCodeNotifyStatus enum. */
    enum LoginQrCodeNotifyStatus {
        kLoginQrCodeNotifyStatusWait = 0,
        kLoginQrCodeNotifyStatusScaned = 1,
        kLoginQrCodeNotifyStatusConfirmed = 2,
        kLoginQrCodeNotifyStatusExpired = 3,
        kLoginQrCodeNotifyStatusCancel = 4,
        kLoginQrCodeNotifyStatusBluetoothScaned = 5,
        kLoginQrCodeNotifyStatusBluetoothConfirmed = 6,
        kLoginQrCodeNotifyStatusBluetoothLogin = 7,
        kLoginQrCodeNotifyStatusBluetoothAutoAuthCheck = 8,
        kLoginQrCodeNotifyStatusError = 9,
        kLoginQrCodeNotifyStatusAlbumCheckBind = 10
    }

    /** CommonOperation enum. */
    enum CommonOperation {
        kCommonOperationAdd = 0,
        kCommonOperationDelete = 1,
        kCommonOperationUpdate = 2
    }

    /** MessageFlag enum. */
    enum MessageFlag {
        kMessageFlagNone = 0,
        kMessageFlagSend = 1,
        kMessageFlagReceive = 2,
        kMessageFlagUnRead = 4,
        kMessageFlagUnOpened = 8
    }

    /** MessageStatus enum. */
    enum MessageStatus {
        kMessageStatusUnknown = 0,
        kMessageStatusNone = 1,
        kMessageStatusSending = 2,
        kMessageStatusSent = 3,
        kMessageStatusReceiving = 4,
        kMessageStatusReceived = 5,
        kMessageStatusFail = 6,
        kMessageStatusVoipAnswer = 7,
        kMessageStatusVoipNoAnswer = 8,
        kMessageStatusVoipFail = 9
    }

    /** MessageDataType enum. */
    enum MessageDataType {
        kMessageDataTypeUnknown = 0,
        kMessageDataTypeText = 1,
        kMessageDataTypeImg = 3,
        kMessageDataTypePrivateMsgText = 11,
        kMessageDataTypePrivateMsgImg = 13,
        kMessageDataTypeChatRoomMsgText = 21,
        kMessageDataTypeChatRoomMsgImg = 23,
        kMessageDataTypeVoiceMsg = 34,
        kMessageDataTypePushMail = 35,
        kMessageDataTypeQMsg = 36,
        kMessageDataTypeVerifyMsg = 37,
        kMessageDataTypePushSystemMsg = 38,
        kMessageDataTypeQQLiXianMsg = 39,
        kMessageDataTypePossibleFriendMsg = 40,
        kMessageDataTypePushSoftware = 41,
        kMessageDataTypeShareCard = 42,
        kMessageDataTypeVideo = 43,
        kMessageDataTypeVideoIphoneExport = 44,
        kMessageDataTypeGmailPushMail = 45,
        kMessageDataTypeEmpty = 46,
        kMessageDataTypeEmoji = 47,
        kMessageDataTypeLocation = 48,
        kMessageDataTypeAppMsg = 49,
        kMessageDataTypeVoipMsg = 50,
        kMessageDataTypeStatusNotify = 51,
        kMessageDataTypeWeiboPush = 52,
        kMessageDataTypeWebwxVoipNotify = 53,
        kMessageDataTypeChatRoomVerifyMsg = 54,
        kMessageDataTypeBrandQaAsk = 55,
        kMessageDataTypeTalkSysMsg = 56,
        kMessageDataTypeBrandQaMsg = 57,
        kMessageDataTypeOpenSubscribe = 58,
        kMessageDataTypeOpenReport = 59,
        kMessageDataTypeOpenLink = 60,
        kMessageDataTypeKF = 61,
        kMessageDataTypeShortVideo = 62,
        kMessageDataTypeSysCmdIpxx = 9998,
        kMessageDataTypeSysNotice = 9999,
        kMessageDataTypeSys = 10000,
        kMessageDataTypeSysCmdXml = 10001,
        kMessageDataTypeSysCmdNewXml = 10002
    }

    /** ConversationSyncAction enum. */
    enum ConversationSyncAction {
        kConversationSyncActionNone = 0,
        kConversationSyncActionAfterLogin = 1,
        kConversationSyncActionAfterSleep = 2,
        kConversationSyncActionLoadMore = 3
    }

    /** ContactFlag enum. */
    enum ContactFlag {
        kContactFlagNone = 0,
        kContactFlagContact = 1,
        kContactFlagChat = 2,
        kContactFlagChatRoom = 4,
        kContactFlagBlackList = 8,
        kContactFlagDomain = 16,
        kContactFlagHide = 32,
        kContactFlagFavour = 64,
        kContactFlag3RdApp = 128,
        kContactFlagSnsBlackList = 256,
        kContactFlagMute = 512,
        kContactFlagUnDeliver = 1024,
        kContactFlagTop = 2048,
        kContactFlagAutoAdd = 4096,
        kContactFlagTextTranslate = 8192,
        kContactFlagFrozen = 16384,
        kContactFlagWatchContact = 131072
    }

    /** VoIPState enum. */
    enum VoIPState {
        kVoIPStateUnknown = 0,
        kVoIPStateInited = 1,
        kVoIPStateDialing = 2,
        kVoIPStateIncoming = 3,
        kVoIPStateWaitConnect = 4,
        kVoIPStateConnected = 5,
        kVoIPStateTalking = 6
    }

    /** VoIPFinishType enum. */
    enum VoIPFinishType {
        kVoIPFinishTypeNormal = 0,
        kVoIPFinishTypeReject = 1,
        kVoIPFinishTypeCancel = 2,
        kVoIPFinishTypeRecvReject = 3,
        kVoIPFinishTypeRecvShutDown = 4,
        kVoIPFinishTypeBlock = 5,
        kVoIPFinishTypeBusy = 6,
        kVoIPFinishTypeNotFriend = 7,
        kVoIPFinishTypeRecvCancel = 8,
        kVoIPFinishTypeNotSupport = 9,
        kVoIPFinishTypePluginClose = 10,
        kVoIPFinishTypeTimeout = 11,
        kVoIPFinishTypeUnknownError = 12
    }

    /** AppMessageType enum. */
    enum AppMessageType {
        kAppMessageTypeUnknown = 0,
        kAppMessageTypeText = 1,
        kAppMessageTypeImage = 2,
        kAppMessageTypeMusic = 3,
        kAppMessageTypeVideo = 4,
        kAppMessageTypeUrl = 5,
        kAppMessageTypeFile = 6,
        kAppMessageTypeAppData = 7,
        kAppMessageTypeEmoji = 8,
        kAppMessageTypeProduct = 10,
        kAppMessageTypeEmoticonGift = 11,
        kAppMessageTypeDeviceAccess = 12,
        kAppMessageTypeMallProduct = 13,
        kAppMessageTypeOldTv = 14,
        kAppMessageTypeEmoticonShared = 15,
        kAppMessageTypeCardShare = 16,
        kAppMessageTypeLocationShare = 17,
        kAppMessageTypeRecord = 19,
        kAppMessageTypeTv = 20,
        kAppMessageTypeNote = 24,
        kAppMessageTypeDesignerShared = 25,
        kAppMessageTypeEmotionListShared = 26,
        kAppMessageTypeEmojiListShared = 27,
        kAppMessageTypeLocation = 30,
        kAppMessageTypeAppBrand = 33,
        kAppMessageTypeGiftCard = 34,
        kAppMessageTypeSyncRecord = 35,
        kAppMessageTypeOpenSdkAppBrand = 36,
        kAppMessageTypeVideoFile = 38,
        kAppMessageTypeGameVideoFile = 39,
        kAppMessageTypeBusinessCard = 45,
        kAppMessageTypeOpenSdkAppBrandWeishiVideo = 46,
        kAppMessageTypeOpenSdkWeworkObject = 49,
        kAppMessageTypeFinderNameCard = 50,
        kAppMessageTypeFinderFeed = 51,
        kAppMessageTypeFinderEndorsment = 52,
        kAppMessageTypeSolitaire = 53,
        kAppMessageTypeMpShareVideoAppMsg = 54,
        kAppMessageTypeMsgQuote = 57,
        kAppMessageTypeFinderTopic = 59,
        kAppMessageTypeMegaVideoShare = 71,
        kAppMessageTypeMmliveShare = 60,
        kAppMessageTypePatMsg = 62,
        kAppMessageTypeFinderLive = 63,
        kAppMessageTypeFinderLiveBooking = 64,
        kAppMessageTypeFinderLiveInvite = 65,
        kAppMessageTypeGameLifeGift = 66,
        kAppMessageTypeGameLifeCard = 69,
        kAppMessageTypeLiteApp = 68,
        kAppMessageTypeFinderColumnCard = 73,
        kAppMessageTypeFinderFollowTopic = 72
    }

    /** AppBrandShareType enum. */
    enum AppBrandShareType {
        kAppBrandShareTypeShareToFriendsNews = 0,
        kAppBrandShareTypeShareToFriendsCard = 1,
        kAppBrandShareTypePage = 2,
        kAppBrandShareTypePageWithShareTicket = 3
    }

    /** CdnFileType enum. */
    enum CdnFileType {
        kMediaTypeAny = 0,
        kMediaTypeFullSizeImage = 1,
        kMediaTypeImage = 2,
        kMediaTypeThumbImage = 3,
        kMediaTypeVideo = 4,
        kMediaTypeSCVideo = 54,
        kMediaTypeFile = 5,
        kMediaTypeTinyVideo = 6,
        kMediaTypeBigFile = 7,
        kMediaTypeBigFile_1G = 9,
        kMediaTypeActivityFile = 10,
        kMediaTypeBackupChatMsg = 14,
        kMediaTypeBackupChatAudio = 15,
        kMediaTypeWIMDownload = 19,
        kMediaTypeSeeSeeVideo = 90,
        kMediaTypeFavoriteFile = 10001,
        kMediaTypeFavoriteVideo = 10002,
        kMediaTypeFavoriteBigFile = 10007,
        kMediaTypeExposeImage = 11000,
        kMediaTypeBeatificFile = 10011,
        kMediaTypeBackupFile = 20001,
        kMediaTypeFriends = 20201,
        kMediaTypeFriendsVideo = 20202,
        kMediaTypeFriendsADImageThumb = 20204,
        kMediaTypeFriendsImageThumb = 20205,
        kMediaTypeFriendsVideoThumbImage = 20250,
        kMediaTypeShop = 20301,
        kMediaTypeNearEvent = 20310,
        kMediaTypeSmartHwPage = 20321,
        kMediaTypeAdVideo = 20210,
        kMediaTypeAppVideo = 20302,
        kMediaTypeAppFile = 20303,
        kMediaTypeAppImageStorage = 20304,
        kMediaTypeHWDevice = 20322,
        kMediaTypeAppVideoThumb = 20350,
        kMediaTypeEmojiNormal = 20401,
        kMediaTypeEmojiGIF = 20402,
        kMediaTypeEmojiWXAM = 20403,
        kMediaLittleAppPacket = 30001,
        kMediaGamePacket = 30002,
        kMediaTinkerPatch = 30003,
        kMediaXWebRuntime = 30004,
        kMediaXWebRuntimePatch = 30005,
        kMediaXWebConfig = 30006,
        kMediaGeneralResource = 40001,
        kMediaWAGameVideo = 50001
    }

    /** MessageDownloadType enum. */
    enum MessageDownloadType {
        kMessageDownloadTypeNone = 0,
        kMessageDownloadTypeImageMessageThumb = 10,
        kMessageDownloadTypeImageMessageMiddle = 11,
        kMessageDownloadTypeImageMessageFullSize = 12,
        kMessageDownloadTypeVoiceMessageVoice = 20,
        kMessageDownloadTypeEmojiMessageEmoji = 30,
        kMessageDownloadTypeVideoMessageThumb = 40,
        kMessageDownloadTypeVideoMessageVideo = 41,
        kMessageDownloadTypeAppMessageAppBrandThumb = 50,
        kMessageDownloadTypeAppMessageFile = 51,
        kMessageDownloadTypeAppMessageEmoji = 52,
        kMessageDownloadTypeAppMessageUrlThumb = 53,
        kMessageDownloadTypeAppMessageRecord = 54
    }

    /** MessageDownloadGeneralType enum. */
    enum MessageDownloadGeneralType {
        kMessageDownloadGeneralTypeGeneral = 0,
        kMessageDownloadGeneralTypeNone = 1
    }

    /** VoiceMessageMediaFormat enum. */
    enum VoiceMessageMediaFormat {
        kVoiceMessageMediaFormatAmr = 0,
        kVoiceMessageMediaFormatSpeex = 1,
        kVoiceMessageMediaFormatMp3 = 2,
        kVoiceMessageMediaFormatWave = 3,
        kVoiceMessageMediaFormatSilk = 4
    }

    /** StatusNotifyMessageType enum. */
    enum StatusNotifyMessageType {
        kStatusNotifyMessageTypeUnknown = 0,
        kStatusNotifyMessageTypeSendCommand = 11
    }

    /** StatusNotifySendCommand enum. */
    enum StatusNotifySendCommand {
        kStatusNotifySendCommandUnknown = 0,
        kStatusNotifySendCommandHandOffMaster = 1
    }

    /** StatusNotifyHandOffDataType enum. */
    enum StatusNotifyHandOffDataType {
        kStatusNotifyHandOffDataTypeUnknown = 0,
        kStatusNotifyHandOffDataTypeFile = 1,
        kStatusNotifyHandOffDataTypeUrl = 2,
        kStatusNotifyHandOffDataTypeMiniProgram = 3,
        kStatusNotifyHandOffDataTypeMiniGame = 4,
        kStatusNotifyHandOffDataTypeWsVideoFlow = 5
    }

    /** StatusNotifyHandOffType enum. */
    enum StatusNotifyHandOffType {
        kStatusNotifyHandOffTypeUnknown = 0,
        kStatusNotifyHandOffTypeHandOff = 1,
        kStatusNotifyHandOffTypeFloatWindow = 2
    }

    /** StatusNotifyHandOffOpCode enum. */
    enum StatusNotifyHandOffOpCode {
        kStatusNotifyHandOffOpCodeUnknown = 0,
        kStatusNotifyHandOffOpCodeAdd = 1,
        kStatusNotifyHandOffOpCodeDel = 2,
        kStatusNotifyHandOffOpCodeMod = 3,
        kStatusNotifyHandOffOpCodeAllList = 4,
        kStatusNotifyHandOffOpCodeExpired = 5,
        kStatusNotifyHandOffOpCodeGetAllList = 6,
        kStatusNotifyHandOffOpCodeUploading = 7,
        kStatusNotifyHandOffOpCodeUploadFailed = 8,
        kStatusNotifyHandOffOpCodeCancelUpload = 9
    }

    /** StatusNotifyHandOffFileStatus enum. */
    enum StatusNotifyHandOffFileStatus {
        kStatusNotifyHandOffFileStatusUnknown = 0,
        kStatusNotifyHandOffFileStatusDownloaded = 1,
        kStatusNotifyHandOffFileStatusNotDownloaded = 2,
        kStatusNotifyHandOffFileStatusExpired = 3
    }

    /** StatusNotifyHandOffSource enum. */
    enum StatusNotifyHandOffSource {
        kStatusNotifyHandOffSourceUnknown = 0,
        kStatusNotifyHandOffSourceMsg = 1,
        kStatusNotifyHandOffSourceMessageFav = 2
    }

    /** UsernameType enum. */
    enum UsernameType {
        kUsernameTypeUnknown = 0,
        kUsernameTypeEncode = 1,
        kUsernameTypeChatRoom = 2,
        kUsernameTypeLbsRoom = 3,
        kUsernameTypeGroupCard = 4,
        kUsernameTypeQQContact = 5,
        kUsernameTypeSXContact = 6,
        kUsernameTypeBottleContact = 7,
        kUsernameTypeFBFriend = 8,
        kUsernameTypeBrandContact = 9,
        kUsernameTypeOpenIMChatRoom = 10,
        kUsernameTypeOpenIMContact = 11
    }

    /** ChatRoomMemberFlag enum. */
    enum ChatRoomMemberFlag {
        kChatRoomMemberFlagNone = 0,
        kChatRoomMemberFlagDisplayName = 1,
        kChatRoomMemberFlagUndeliver = 2,
        kChatRoomMemberFlagInroomVerify = 4,
        kChatRoomMemberFlagContact = 8,
        kChatRoomMemberFlagOverhead = 16
    }

    /** EmojiPanelType enum. */
    enum EmojiPanelType {
        kEmojiPanelTypeCustomNormal = 0,
        kEmojiPanelTypeCustomCapture = 1,
        kEmojiPanelTypeStore = 2,
        kEmojiPanelTypeSimilar = 3,
        kEmojiPanelTypeBuiltin = 999
    }

    /** EmojiType enum. */
    enum EmojiType {
        kEmojiTypeUnknown = 0,
        kEmojiTypePng = 1,
        kEmojiTypeGif = 2,
        kEmojiTypeJpg = 3,
        kEmojiTypeText = 4,
        kEmojiTypeAppEmojiGif = 10,
        kEmojiTypeAppEmojiJpg = 11
    }

    /** OrderType enum. */
    enum OrderType {
        kOrderTypeDefault = 0,
        kOrderTypeDesc = 1,
        kOrderTypeAsc = 2
    }

    /** ContactAddScene enum. */
    enum ContactAddScene {
        kContactAddScenePassiveBase = 1000000,
        kContactAddSceneSearchQQ = 1,
        kContactAddSceneSearchEmail = 2,
        kContactAddSceneSearchWeixin = 3,
        kContactAddScenePfQQ = 4,
        kContactAddScenePfEmail = 5,
        kContactAddScenePfContact = 6,
        kContactAddScenePfWeixin = 7,
        kContactAddScenePfGroup = 8,
        kContactAddScenePfUnknown = 9,
        kContactAddScenePfMobile = 10,
        kContactAddScenePfMobileEmail = 11,
        kContactAddSceneViewQQ = 12,
        kContactAddSceneViewMobile = 13,
        kContactAddSceneChatroom = 14,
        kContactAddSceneSearchPhone = 15,
        kContactAddSceneCorpEmail = 16,
        kContactAddSceneSendCard = 17,
        kContactAddSceneLBS = 18,
        kContactAddScenePfMobileReverse = 21,
        kContactAddScenePfShakePhonePair = 22,
        kContactAddScenePfShakePhoneGroup = 23,
        kContactAddScenePfShakePhoneOppSex = 24,
        kContactAddSceneBottle = 25,
        kContactAddSceneShakeScene1 = 26,
        kContactAddSceneShakeScene2 = 27,
        kContactAddSceneShakeScene3 = 28,
        kContactAddSceneShakeScene4 = 29,
        kContactAddSceneQRCode = 30,
        kContactAddSceneFacebook = 31,
        kContactAddSceneSns = 32,
        kContactAddSceneWeb = 33,
        kContactAddSceneBrandQA = 34,
        kContactAddSceneFuzzySearch = 35,
        kContactAddSceneLogoWall = 36,
        kContactAddSceneTimeLineBiz = 37,
        kContactAddScenePromoteMsg = 38,
        kContactAddSceneSearchBrandBrand = 39,
        kContactAddScenePromoteBizCard = 41,
        kContactAddSceneWebPageInside = 42,
        kContactAddSceneWebPageTopButton = 43,
        kContactAddSceneLBSRoom = 44,
        kContactAddSceneScanImage = 45,
        kContactAddSceneScanImageBook = 47,
        kContactAddSceneRadarSearch = 48,
        kContactAddSceneScanBarCode = 49,
        kContactAddSceneRegAddMFriend = 52,
        kContactAddSceneSearchBrandService = 53,
        kContactAddSceneSearchBrandSubscr = 54,
        kContactAddSceneRecommendBrand = 55,
        kContactAddSceneInterestedBrand = 56,
        kContactAddSceneFtsSearchBrand = 57,
        kContactAddSceneViewGoogleContactList = 58,
        kContactAddSceneViewGoogleContactAccount = 59,
        kContactAddSceneViewGoogleContactAsyncRecommend = 60,
        kContactAddSceneTv = 67,
        kContactAddSceneSubscribeBizApp = 68,
        kContactAddSceneSubscribeBizH5 = 69,
        kContactAddSceneLinkedinContactList = 76,
        kContactAddSceneFromTimeLineAdHeadImage = 78,
        kContactAddSceneFromTimeLineAdNickname = 79,
        kContactAddSceneFromTempSession = 81,
        kContactAddSceneWebSearchRecommend = 85,
        kContactAddSceneWechatoutContactList = 86,
        kContactAddSceneWebSearchHomePage = 87,
        kContactAddSceneWebSearchDetailPage = 88,
        kContactAddSceneWebSearchRecommendHotWord = 89,
        kContactAddSceneFromBizTimeLine = 90,
        kContactAddSceneJsApiQuicklyAdd = 91,
        kContactAddSceneFromTempSessionShakeTvHistory = 92,
        kContactAddSceneFromTempSessionShakeTv = 93,
        kContactAddSceneFromTempSessionShakeTvWeb = 94,
        kContactAddSceneFriendReadAppMsgProfile = 95,
        kContactAddSceneAccessVerify = 96,
        kContactAddSceneBizFromMpDetailPage = 152,
        kContactAddSceneBizFromMpPageMenu = 153,
        kContactAddSceneBizFromWebViewTopBar = 154,
        kContactAddSceneAddKidsShake = 155,
        kContactAddSceneAddKidsGuardian = 156,
        kContactAddSceneBizFromBrandRejectMsg = 158,
        kContactAddSceneBizFromRecCard = 160,
        kContactAddSceneBizFromMpVideo = 163,
        kContactAddSceneBizFromWebViewMenuTop = 173,
        kContactAddSceneBizFromUnFocuse = 174,
        kContactAddSceneBizFromVideoFullScreen = 179
    }

    /** UserAttrVerifyFlag enum. */
    enum UserAttrVerifyFlag {
        kUserAttrVerifyFlagBiz = 1,
        kUserAttrVerifyFlagFamous = 2,
        kUserAttrVerifyFlagBizBig = 4,
        kUserAttrVerifyFlagBizBrand = 8,
        kUserAttrVerifyFlagBizVerified = 16,
        kUserAttrVerifyFlagBizPersonalVerified = 64
    }

    /** ContactVerifyOpCode enum. */
    enum ContactVerifyOpCode {
        kContactVerifyOpCodeMarkRead = 0,
        kContactVerifyOpCodeMarkReadAll = 1,
        kContactVerifyOpCodeAccept = 3
    }

    /** VerifyContactState enum. */
    enum VerifyContactState {
        kContactVerifyStateUnread = 0,
        kContactVerifyStatePending = 1,
        kContactVerifyStateAccept = 2
    }

    /** AccountType enum. */
    enum AccountType {
        kAccountTypeUnknown = 0,
        kAccountTypeNormal = 1,
        kAccountTypeKid = 2
    }

    /** SessionType enum. */
    enum SessionType {
        kSessionTypeUnknown = 0,
        kSessionTypeMain = 1,
        kSessionTypeExt = 2
    }

    /** ExtensionRequestFlag enum. */
    enum ExtensionRequestFlag {
        ExtensionRequestFlagFlowLimit = 1,
        ExtensionRequestFlagFrequencyLimit = 2
    }

    /** ProgressType enum. */
    enum ProgressType {
        kProgressTypeUnknown = 0,
        kProgressTypeUpload = 1,
        kProgressTypeDownload = 2
    }

    /** ContactType enum. */
    enum ContactType {
        kContactTypeUnknown = 0,
        kContactTypeCommon = 1,
        kContactTypeBusiness = 2,
        kContactTypeChatRoom = 4,
        kContactTypeSystem = 8,
        kContactTypeSystemFunction = 16,
        kContactTypeOpenIm = 32,
        kContactTypeImChatRoom = 64
    }

    /** VoipMessageState enum. */
    enum VoipMessageState {
        kVoipMessageStateUnknown = 0,
        kVoipMessageStateFinish = 1,
        kVoipMessageStateCancel = 2,
        kVoipMessageStateReject = 3,
        kVoipMessageStateNoResponse = 4,
        kVoipMessageStateInterrupt = 5
    }

    /** VoipMessageType enum. */
    enum VoipMessageType {
        kVoipMessageTypeUnknown = 0,
        kVoipMessageTypeAudio = 1,
        kVoipMessageTypeVideo = 2
    }

    /** RecordFromScene enum. */
    enum RecordFromScene {
        kRecordFromSceneFromFav = 1,
        kRecordFromSceneFromChat = 2,
        kRecordFromSceneFromMsgList = 3
    }

    /** FavDataType enum. */
    enum FavDataType {
        kFavDataTypeTxt = 1,
        kFavDataTypeImg = 2,
        kFavDataTypeVoice = 3,
        kFavDataTypeVideo = 4,
        kFavDataTypeWebPage = 5,
        kFavDataTypeLoc = 6,
        kFavDataTypeMusic = 7,
        kFavDataTypeFile = 8,
        kFavDataTypeBook = 9,
        kFavDataTypeGoods = 10,
        kFavDataTypeGeneralProduct = 11,
        kFavDataTypeOldTv = 12,
        kFavDataTypeCard = 13,
        kFavDataTypeTV = 14,
        kFavDataTypeSight = 15,
        kFavDataTypeShardCard = 16,
        kFavDataTypeRecord = 17,
        kFavDataTypeNoteShare = 18,
        kFavDataTypeWeApp = 19,
        kFavDataTypeFinder = 22,
        kFavDataTypeFinderLive = 23
    }

    /** FavSourceType enum. */
    enum FavSourceType {
        kFavSourceTypeChat = 1,
        kFavSourceTypeWC = 2,
        kFavSourceTypeWebPage = 3,
        kFavSourceType3rd = 4,
        kFavSourceTypeShake = 5,
        kFavSourceTypePost = 6,
        kFavSourceTypeFTN = 7,
        kFavSourceTypeScan = 8,
        kFavSourceTypeMail = 9,
        kFavSourceTypeBanner = 10,
        kFavSourceTypeGeneralProductDetail = 11,
        kFavSourceTypeCard = 12,
        kFavSourceType3rdShare = 13,
        kFavSourceTypeSingleChat = 21,
        kFavSourceTypeChatroom = 22,
        kFavSourceTypeBIZ = 23,
        kFavSourceTypeGameCenter = 24,
        kFavSourceTypeTopStory = 25,
        kFavSourceTypeWebSearch = 26,
        kFavSourceTypeWwbPageSingleChat = 27,
        kFavSourceTypeWebPageChatroom = 28,
        kFavSourceTypeWebPageBIZ = 29,
        kFavSourceTypeConvertToNote = 30
    }

    /** CustomMenuType enum. */
    enum CustomMenuType {
        kCustomMenuTypeShowSubMenu = 0,
        kCustomMenuTypeReportClick = 1,
        kCustomMenuTypeJump2WebView = 2,
        kCustomMenuTypeShowInputMode = 3,
        kCustomMenuTypeClientAction = 4,
        kCustomMenuTypeOpenWeApp = 5
    }

    /** MMBizInteractiveMode enum. */
    enum MMBizInteractiveMode {
        kMMBizInteractiveModeComm = 0,
        kMMBizInteractiveModeQuestion = 1,
        kMMBizInteractiveModeSelfMenu = 2
    }

    /** Properties of a StartRequest. */
    interface IStartRequest {

        /** StartRequest config */
        config?: (alita.ILogConfig|null);
    }

    /** Represents a StartRequest. */
    class StartRequest implements IStartRequest {

        /**
         * Constructs a new StartRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: alita.IStartRequest);

        /** StartRequest config. */
        public config?: (alita.ILogConfig|null);

        /**
         * Creates a new StartRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartRequest instance
         */
        public static create(properties?: alita.IStartRequest): alita.StartRequest;

        /**
         * Encodes the specified StartRequest message. Does not implicitly {@link alita.StartRequest.verify|verify} messages.
         * @param message StartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: alita.IStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartRequest message, length delimited. Does not implicitly {@link alita.StartRequest.verify|verify} messages.
         * @param message StartRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: alita.IStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alita.StartRequest;

        /**
         * Decodes a StartRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alita.StartRequest;

        /**
         * Verifies a StartRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartRequest
         */
        public static fromObject(object: { [k: string]: any }): alita.StartRequest;

        /**
         * Creates a plain object from a StartRequest message. Also converts values to other types if specified.
         * @param message StartRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: alita.StartRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StartResponse. */
    interface IStartResponse {

        /** StartResponse errCode */
        errCode?: (number|null);
    }

    /** Represents a StartResponse. */
    class StartResponse implements IStartResponse {

        /**
         * Constructs a new StartResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: alita.IStartResponse);

        /** StartResponse errCode. */
        public errCode: number;

        /**
         * Creates a new StartResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StartResponse instance
         */
        public static create(properties?: alita.IStartResponse): alita.StartResponse;

        /**
         * Encodes the specified StartResponse message. Does not implicitly {@link alita.StartResponse.verify|verify} messages.
         * @param message StartResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: alita.IStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StartResponse message, length delimited. Does not implicitly {@link alita.StartResponse.verify|verify} messages.
         * @param message StartResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: alita.IStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StartResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alita.StartResponse;

        /**
         * Decodes a StartResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alita.StartResponse;

        /**
         * Verifies a StartResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StartResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StartResponse
         */
        public static fromObject(object: { [k: string]: any }): alita.StartResponse;

        /**
         * Creates a plain object from a StartResponse message. Also converts values to other types if specified.
         * @param message StartResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: alita.StartResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StartResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilterLogResponse. */
    interface IFilterLogResponse {

        /** FilterLogResponse isKeepLog */
        isKeepLog?: (number|null);
    }

    /** Represents a FilterLogResponse. */
    class FilterLogResponse implements IFilterLogResponse {

        /**
         * Constructs a new FilterLogResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: alita.IFilterLogResponse);

        /** FilterLogResponse isKeepLog. */
        public isKeepLog: number;

        /**
         * Creates a new FilterLogResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilterLogResponse instance
         */
        public static create(properties?: alita.IFilterLogResponse): alita.FilterLogResponse;

        /**
         * Encodes the specified FilterLogResponse message. Does not implicitly {@link alita.FilterLogResponse.verify|verify} messages.
         * @param message FilterLogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: alita.IFilterLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilterLogResponse message, length delimited. Does not implicitly {@link alita.FilterLogResponse.verify|verify} messages.
         * @param message FilterLogResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: alita.IFilterLogResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilterLogResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilterLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): alita.FilterLogResponse;

        /**
         * Decodes a FilterLogResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilterLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): alita.FilterLogResponse;

        /**
         * Verifies a FilterLogResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilterLogResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilterLogResponse
         */
        public static fromObject(object: { [k: string]: any }): alita.FilterLogResponse;

        /**
         * Creates a plain object from a FilterLogResponse message. Also converts values to other types if specified.
         * @param message FilterLogResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: alita.FilterLogResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilterLogResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
