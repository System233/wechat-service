/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots.log || ($protobuf.roots.log = {});

$root.alita = (function() {

    /**
     * Namespace alita.
     * @exports alita
     * @namespace
     */
    var alita = {};

    alita.LogConfig = (function() {

        /**
         * Properties of a LogConfig.
         * @memberof alita
         * @interface ILogConfig
         * @property {boolean|null} [isUseAlitaLog] LogConfig isUseAlitaLog
         * @property {boolean|null} [isEnableConsole] LogConfig isEnableConsole
         * @property {boolean|null} [isUseFilter] LogConfig isUseFilter
         * @property {number|null} [level] LogConfig level
         * @property {string|null} [logDir] LogConfig logDir
         * @property {string|null} [publicKey] LogConfig publicKey
         * @property {number|null} [maxAliveDays] LogConfig maxAliveDays
         * @property {boolean|null} [isWriteLogFile] LogConfig isWriteLogFile
         * @property {number|null} [maxLogFileSize] LogConfig maxLogFileSize
         */

        /**
         * Constructs a new LogConfig.
         * @memberof alita
         * @classdesc Represents a LogConfig.
         * @implements ILogConfig
         * @constructor
         * @param {alita.ILogConfig=} [properties] Properties to set
         */
        function LogConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LogConfig isUseAlitaLog.
         * @member {boolean} isUseAlitaLog
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.isUseAlitaLog = false;

        /**
         * LogConfig isEnableConsole.
         * @member {boolean} isEnableConsole
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.isEnableConsole = false;

        /**
         * LogConfig isUseFilter.
         * @member {boolean} isUseFilter
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.isUseFilter = false;

        /**
         * LogConfig level.
         * @member {number} level
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.level = 0;

        /**
         * LogConfig logDir.
         * @member {string} logDir
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.logDir = "";

        /**
         * LogConfig publicKey.
         * @member {string} publicKey
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.publicKey = "";

        /**
         * LogConfig maxAliveDays.
         * @member {number} maxAliveDays
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.maxAliveDays = 0;

        /**
         * LogConfig isWriteLogFile.
         * @member {boolean} isWriteLogFile
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.isWriteLogFile = false;

        /**
         * LogConfig maxLogFileSize.
         * @member {number} maxLogFileSize
         * @memberof alita.LogConfig
         * @instance
         */
        LogConfig.prototype.maxLogFileSize = 0;

        /**
         * Creates a new LogConfig instance using the specified properties.
         * @function create
         * @memberof alita.LogConfig
         * @static
         * @param {alita.ILogConfig=} [properties] Properties to set
         * @returns {alita.LogConfig} LogConfig instance
         */
        LogConfig.create = function create(properties) {
            return new LogConfig(properties);
        };

        /**
         * Encodes the specified LogConfig message. Does not implicitly {@link alita.LogConfig.verify|verify} messages.
         * @function encode
         * @memberof alita.LogConfig
         * @static
         * @param {alita.ILogConfig} message LogConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isUseAlitaLog != null && Object.hasOwnProperty.call(message, "isUseAlitaLog"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isUseAlitaLog);
            if (message.isEnableConsole != null && Object.hasOwnProperty.call(message, "isEnableConsole"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isEnableConsole);
            if (message.isUseFilter != null && Object.hasOwnProperty.call(message, "isUseFilter"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isUseFilter);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.level);
            if (message.logDir != null && Object.hasOwnProperty.call(message, "logDir"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.logDir);
            if (message.publicKey != null && Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.publicKey);
            if (message.maxAliveDays != null && Object.hasOwnProperty.call(message, "maxAliveDays"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.maxAliveDays);
            if (message.isWriteLogFile != null && Object.hasOwnProperty.call(message, "isWriteLogFile"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isWriteLogFile);
            if (message.maxLogFileSize != null && Object.hasOwnProperty.call(message, "maxLogFileSize"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.maxLogFileSize);
            return writer;
        };

        /**
         * Encodes the specified LogConfig message, length delimited. Does not implicitly {@link alita.LogConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof alita.LogConfig
         * @static
         * @param {alita.ILogConfig} message LogConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LogConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LogConfig message from the specified reader or buffer.
         * @function decode
         * @memberof alita.LogConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {alita.LogConfig} LogConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.alita.LogConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isUseAlitaLog = reader.bool();
                    break;
                case 2:
                    message.isEnableConsole = reader.bool();
                    break;
                case 3:
                    message.isUseFilter = reader.bool();
                    break;
                case 4:
                    message.level = reader.uint32();
                    break;
                case 5:
                    message.logDir = reader.string();
                    break;
                case 6:
                    message.publicKey = reader.string();
                    break;
                case 8:
                    message.maxAliveDays = reader.uint32();
                    break;
                case 9:
                    message.isWriteLogFile = reader.bool();
                    break;
                case 10:
                    message.maxLogFileSize = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LogConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof alita.LogConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {alita.LogConfig} LogConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LogConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LogConfig message.
         * @function verify
         * @memberof alita.LogConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LogConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isUseAlitaLog != null && message.hasOwnProperty("isUseAlitaLog"))
                if (typeof message.isUseAlitaLog !== "boolean")
                    return "isUseAlitaLog: boolean expected";
            if (message.isEnableConsole != null && message.hasOwnProperty("isEnableConsole"))
                if (typeof message.isEnableConsole !== "boolean")
                    return "isEnableConsole: boolean expected";
            if (message.isUseFilter != null && message.hasOwnProperty("isUseFilter"))
                if (typeof message.isUseFilter !== "boolean")
                    return "isUseFilter: boolean expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.logDir != null && message.hasOwnProperty("logDir"))
                if (!$util.isString(message.logDir))
                    return "logDir: string expected";
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                if (!$util.isString(message.publicKey))
                    return "publicKey: string expected";
            if (message.maxAliveDays != null && message.hasOwnProperty("maxAliveDays"))
                if (!$util.isInteger(message.maxAliveDays))
                    return "maxAliveDays: integer expected";
            if (message.isWriteLogFile != null && message.hasOwnProperty("isWriteLogFile"))
                if (typeof message.isWriteLogFile !== "boolean")
                    return "isWriteLogFile: boolean expected";
            if (message.maxLogFileSize != null && message.hasOwnProperty("maxLogFileSize"))
                if (!$util.isInteger(message.maxLogFileSize))
                    return "maxLogFileSize: integer expected";
            return null;
        };

        /**
         * Creates a LogConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof alita.LogConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {alita.LogConfig} LogConfig
         */
        LogConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.alita.LogConfig)
                return object;
            var message = new $root.alita.LogConfig();
            if (object.isUseAlitaLog != null)
                message.isUseAlitaLog = Boolean(object.isUseAlitaLog);
            if (object.isEnableConsole != null)
                message.isEnableConsole = Boolean(object.isEnableConsole);
            if (object.isUseFilter != null)
                message.isUseFilter = Boolean(object.isUseFilter);
            if (object.level != null)
                message.level = object.level >>> 0;
            if (object.logDir != null)
                message.logDir = String(object.logDir);
            if (object.publicKey != null)
                message.publicKey = String(object.publicKey);
            if (object.maxAliveDays != null)
                message.maxAliveDays = object.maxAliveDays >>> 0;
            if (object.isWriteLogFile != null)
                message.isWriteLogFile = Boolean(object.isWriteLogFile);
            if (object.maxLogFileSize != null)
                message.maxLogFileSize = object.maxLogFileSize >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a LogConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof alita.LogConfig
         * @static
         * @param {alita.LogConfig} message LogConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LogConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.isUseAlitaLog = false;
                object.isEnableConsole = false;
                object.isUseFilter = false;
                object.level = 0;
                object.logDir = "";
                object.publicKey = "";
                object.maxAliveDays = 0;
                object.isWriteLogFile = false;
                object.maxLogFileSize = 0;
            }
            if (message.isUseAlitaLog != null && message.hasOwnProperty("isUseAlitaLog"))
                object.isUseAlitaLog = message.isUseAlitaLog;
            if (message.isEnableConsole != null && message.hasOwnProperty("isEnableConsole"))
                object.isEnableConsole = message.isEnableConsole;
            if (message.isUseFilter != null && message.hasOwnProperty("isUseFilter"))
                object.isUseFilter = message.isUseFilter;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.logDir != null && message.hasOwnProperty("logDir"))
                object.logDir = message.logDir;
            if (message.publicKey != null && message.hasOwnProperty("publicKey"))
                object.publicKey = message.publicKey;
            if (message.maxAliveDays != null && message.hasOwnProperty("maxAliveDays"))
                object.maxAliveDays = message.maxAliveDays;
            if (message.isWriteLogFile != null && message.hasOwnProperty("isWriteLogFile"))
                object.isWriteLogFile = message.isWriteLogFile;
            if (message.maxLogFileSize != null && message.hasOwnProperty("maxLogFileSize"))
                object.maxLogFileSize = message.maxLogFileSize;
            return object;
        };

        /**
         * Converts this LogConfig to JSON.
         * @function toJSON
         * @memberof alita.LogConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LogConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LogConfig;
    })();

    alita.WriteRequest = (function() {

        /**
         * Properties of a WriteRequest.
         * @memberof alita
         * @interface IWriteRequest
         * @property {number|Long|null} [pid] WriteRequest pid
         * @property {number|Long|null} [tid] WriteRequest tid
         * @property {number|Long|null} [cid] WriteRequest cid
         * @property {number|null} [level] WriteRequest level
         * @property {string|null} [tag] WriteRequest tag
         * @property {string|null} [filename] WriteRequest filename
         * @property {number|null} [line] WriteRequest line
         * @property {string|null} [functionName] WriteRequest functionName
         * @property {string|null} [log] WriteRequest log
         */

        /**
         * Constructs a new WriteRequest.
         * @memberof alita
         * @classdesc Represents a WriteRequest.
         * @implements IWriteRequest
         * @constructor
         * @param {alita.IWriteRequest=} [properties] Properties to set
         */
        function WriteRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteRequest pid.
         * @member {number|Long} pid
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.pid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WriteRequest tid.
         * @member {number|Long} tid
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.tid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WriteRequest cid.
         * @member {number|Long} cid
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.cid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WriteRequest level.
         * @member {number} level
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.level = 0;

        /**
         * WriteRequest tag.
         * @member {string} tag
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.tag = "";

        /**
         * WriteRequest filename.
         * @member {string} filename
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.filename = "";

        /**
         * WriteRequest line.
         * @member {number} line
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.line = 0;

        /**
         * WriteRequest functionName.
         * @member {string} functionName
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.functionName = "";

        /**
         * WriteRequest log.
         * @member {string} log
         * @memberof alita.WriteRequest
         * @instance
         */
        WriteRequest.prototype.log = "";

        /**
         * Creates a new WriteRequest instance using the specified properties.
         * @function create
         * @memberof alita.WriteRequest
         * @static
         * @param {alita.IWriteRequest=} [properties] Properties to set
         * @returns {alita.WriteRequest} WriteRequest instance
         */
        WriteRequest.create = function create(properties) {
            return new WriteRequest(properties);
        };

        /**
         * Encodes the specified WriteRequest message. Does not implicitly {@link alita.WriteRequest.verify|verify} messages.
         * @function encode
         * @memberof alita.WriteRequest
         * @static
         * @param {alita.IWriteRequest} message WriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pid);
            if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.tid);
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.cid);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tag);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.filename);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.line);
            if (message.functionName != null && Object.hasOwnProperty.call(message, "functionName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.functionName);
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.log);
            return writer;
        };

        /**
         * Encodes the specified WriteRequest message, length delimited. Does not implicitly {@link alita.WriteRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof alita.WriteRequest
         * @static
         * @param {alita.IWriteRequest} message WriteRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteRequest message from the specified reader or buffer.
         * @function decode
         * @memberof alita.WriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {alita.WriteRequest} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.alita.WriteRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.uint64();
                    break;
                case 2:
                    message.tid = reader.uint64();
                    break;
                case 3:
                    message.cid = reader.uint64();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.tag = reader.string();
                    break;
                case 6:
                    message.filename = reader.string();
                    break;
                case 7:
                    message.line = reader.uint32();
                    break;
                case 8:
                    message.functionName = reader.string();
                    break;
                case 9:
                    message.log = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WriteRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof alita.WriteRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {alita.WriteRequest} WriteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteRequest message.
         * @function verify
         * @memberof alita.WriteRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid) && !(message.pid && $util.isInteger(message.pid.low) && $util.isInteger(message.pid.high)))
                    return "pid: integer|Long expected";
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (!$util.isInteger(message.tid) && !(message.tid && $util.isInteger(message.tid.low) && $util.isInteger(message.tid.high)))
                    return "tid: integer|Long expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isInteger(message.cid) && !(message.cid && $util.isInteger(message.cid.low) && $util.isInteger(message.cid.high)))
                    return "cid: integer|Long expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                if (!$util.isString(message.functionName))
                    return "functionName: string expected";
            if (message.log != null && message.hasOwnProperty("log"))
                if (!$util.isString(message.log))
                    return "log: string expected";
            return null;
        };

        /**
         * Creates a WriteRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof alita.WriteRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {alita.WriteRequest} WriteRequest
         */
        WriteRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.alita.WriteRequest)
                return object;
            var message = new $root.alita.WriteRequest();
            if (object.pid != null)
                if ($util.Long)
                    (message.pid = $util.Long.fromValue(object.pid)).unsigned = true;
                else if (typeof object.pid === "string")
                    message.pid = parseInt(object.pid, 10);
                else if (typeof object.pid === "number")
                    message.pid = object.pid;
                else if (typeof object.pid === "object")
                    message.pid = new $util.LongBits(object.pid.low >>> 0, object.pid.high >>> 0).toNumber(true);
            if (object.tid != null)
                if ($util.Long)
                    (message.tid = $util.Long.fromValue(object.tid)).unsigned = true;
                else if (typeof object.tid === "string")
                    message.tid = parseInt(object.tid, 10);
                else if (typeof object.tid === "number")
                    message.tid = object.tid;
                else if (typeof object.tid === "object")
                    message.tid = new $util.LongBits(object.tid.low >>> 0, object.tid.high >>> 0).toNumber(true);
            if (object.cid != null)
                if ($util.Long)
                    (message.cid = $util.Long.fromValue(object.cid)).unsigned = true;
                else if (typeof object.cid === "string")
                    message.cid = parseInt(object.cid, 10);
                else if (typeof object.cid === "number")
                    message.cid = object.cid;
                else if (typeof object.cid === "object")
                    message.cid = new $util.LongBits(object.cid.low >>> 0, object.cid.high >>> 0).toNumber(true);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.line != null)
                message.line = object.line >>> 0;
            if (object.functionName != null)
                message.functionName = String(object.functionName);
            if (object.log != null)
                message.log = String(object.log);
            return message;
        };

        /**
         * Creates a plain object from a WriteRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof alita.WriteRequest
         * @static
         * @param {alita.WriteRequest} message WriteRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.tid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cid = options.longs === String ? "0" : 0;
                object.level = 0;
                object.tag = "";
                object.filename = "";
                object.line = 0;
                object.functionName = "";
                object.log = "";
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (typeof message.pid === "number")
                    object.pid = options.longs === String ? String(message.pid) : message.pid;
                else
                    object.pid = options.longs === String ? $util.Long.prototype.toString.call(message.pid) : options.longs === Number ? new $util.LongBits(message.pid.low >>> 0, message.pid.high >>> 0).toNumber(true) : message.pid;
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (typeof message.tid === "number")
                    object.tid = options.longs === String ? String(message.tid) : message.tid;
                else
                    object.tid = options.longs === String ? $util.Long.prototype.toString.call(message.tid) : options.longs === Number ? new $util.LongBits(message.tid.low >>> 0, message.tid.high >>> 0).toNumber(true) : message.tid;
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (typeof message.cid === "number")
                    object.cid = options.longs === String ? String(message.cid) : message.cid;
                else
                    object.cid = options.longs === String ? $util.Long.prototype.toString.call(message.cid) : options.longs === Number ? new $util.LongBits(message.cid.low >>> 0, message.cid.high >>> 0).toNumber(true) : message.cid;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                object.functionName = message.functionName;
            if (message.log != null && message.hasOwnProperty("log"))
                object.log = message.log;
            return object;
        };

        /**
         * Converts this WriteRequest to JSON.
         * @function toJSON
         * @memberof alita.WriteRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WriteRequest;
    })();

    alita.WriteLogRequest = (function() {

        /**
         * Properties of a WriteLogRequest.
         * @memberof alita
         * @interface IWriteLogRequest
         * @property {number|Long|null} [pid] WriteLogRequest pid
         * @property {number|Long|null} [tid] WriteLogRequest tid
         * @property {number|Long|null} [cid] WriteLogRequest cid
         * @property {number|null} [level] WriteLogRequest level
         * @property {string|null} [tag] WriteLogRequest tag
         * @property {string|null} [filename] WriteLogRequest filename
         * @property {number|null} [line] WriteLogRequest line
         * @property {string|null} [functionName] WriteLogRequest functionName
         * @property {string|null} [log] WriteLogRequest log
         */

        /**
         * Constructs a new WriteLogRequest.
         * @memberof alita
         * @classdesc Represents a WriteLogRequest.
         * @implements IWriteLogRequest
         * @constructor
         * @param {alita.IWriteLogRequest=} [properties] Properties to set
         */
        function WriteLogRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WriteLogRequest pid.
         * @member {number|Long} pid
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.pid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WriteLogRequest tid.
         * @member {number|Long} tid
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.tid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WriteLogRequest cid.
         * @member {number|Long} cid
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.cid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * WriteLogRequest level.
         * @member {number} level
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.level = 0;

        /**
         * WriteLogRequest tag.
         * @member {string} tag
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.tag = "";

        /**
         * WriteLogRequest filename.
         * @member {string} filename
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.filename = "";

        /**
         * WriteLogRequest line.
         * @member {number} line
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.line = 0;

        /**
         * WriteLogRequest functionName.
         * @member {string} functionName
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.functionName = "";

        /**
         * WriteLogRequest log.
         * @member {string} log
         * @memberof alita.WriteLogRequest
         * @instance
         */
        WriteLogRequest.prototype.log = "";

        /**
         * Creates a new WriteLogRequest instance using the specified properties.
         * @function create
         * @memberof alita.WriteLogRequest
         * @static
         * @param {alita.IWriteLogRequest=} [properties] Properties to set
         * @returns {alita.WriteLogRequest} WriteLogRequest instance
         */
        WriteLogRequest.create = function create(properties) {
            return new WriteLogRequest(properties);
        };

        /**
         * Encodes the specified WriteLogRequest message. Does not implicitly {@link alita.WriteLogRequest.verify|verify} messages.
         * @function encode
         * @memberof alita.WriteLogRequest
         * @static
         * @param {alita.IWriteLogRequest} message WriteLogRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteLogRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pid);
            if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.tid);
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.cid);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tag);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.filename);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.line);
            if (message.functionName != null && Object.hasOwnProperty.call(message, "functionName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.functionName);
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.log);
            return writer;
        };

        /**
         * Encodes the specified WriteLogRequest message, length delimited. Does not implicitly {@link alita.WriteLogRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof alita.WriteLogRequest
         * @static
         * @param {alita.IWriteLogRequest} message WriteLogRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WriteLogRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WriteLogRequest message from the specified reader or buffer.
         * @function decode
         * @memberof alita.WriteLogRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {alita.WriteLogRequest} WriteLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteLogRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.alita.WriteLogRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.uint64();
                    break;
                case 2:
                    message.tid = reader.uint64();
                    break;
                case 3:
                    message.cid = reader.uint64();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.tag = reader.string();
                    break;
                case 6:
                    message.filename = reader.string();
                    break;
                case 7:
                    message.line = reader.uint32();
                    break;
                case 8:
                    message.functionName = reader.string();
                    break;
                case 9:
                    message.log = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WriteLogRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof alita.WriteLogRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {alita.WriteLogRequest} WriteLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WriteLogRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WriteLogRequest message.
         * @function verify
         * @memberof alita.WriteLogRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WriteLogRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid) && !(message.pid && $util.isInteger(message.pid.low) && $util.isInteger(message.pid.high)))
                    return "pid: integer|Long expected";
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (!$util.isInteger(message.tid) && !(message.tid && $util.isInteger(message.tid.low) && $util.isInteger(message.tid.high)))
                    return "tid: integer|Long expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isInteger(message.cid) && !(message.cid && $util.isInteger(message.cid.low) && $util.isInteger(message.cid.high)))
                    return "cid: integer|Long expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                if (!$util.isString(message.functionName))
                    return "functionName: string expected";
            if (message.log != null && message.hasOwnProperty("log"))
                if (!$util.isString(message.log))
                    return "log: string expected";
            return null;
        };

        /**
         * Creates a WriteLogRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof alita.WriteLogRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {alita.WriteLogRequest} WriteLogRequest
         */
        WriteLogRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.alita.WriteLogRequest)
                return object;
            var message = new $root.alita.WriteLogRequest();
            if (object.pid != null)
                if ($util.Long)
                    (message.pid = $util.Long.fromValue(object.pid)).unsigned = true;
                else if (typeof object.pid === "string")
                    message.pid = parseInt(object.pid, 10);
                else if (typeof object.pid === "number")
                    message.pid = object.pid;
                else if (typeof object.pid === "object")
                    message.pid = new $util.LongBits(object.pid.low >>> 0, object.pid.high >>> 0).toNumber(true);
            if (object.tid != null)
                if ($util.Long)
                    (message.tid = $util.Long.fromValue(object.tid)).unsigned = true;
                else if (typeof object.tid === "string")
                    message.tid = parseInt(object.tid, 10);
                else if (typeof object.tid === "number")
                    message.tid = object.tid;
                else if (typeof object.tid === "object")
                    message.tid = new $util.LongBits(object.tid.low >>> 0, object.tid.high >>> 0).toNumber(true);
            if (object.cid != null)
                if ($util.Long)
                    (message.cid = $util.Long.fromValue(object.cid)).unsigned = true;
                else if (typeof object.cid === "string")
                    message.cid = parseInt(object.cid, 10);
                else if (typeof object.cid === "number")
                    message.cid = object.cid;
                else if (typeof object.cid === "object")
                    message.cid = new $util.LongBits(object.cid.low >>> 0, object.cid.high >>> 0).toNumber(true);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.line != null)
                message.line = object.line >>> 0;
            if (object.functionName != null)
                message.functionName = String(object.functionName);
            if (object.log != null)
                message.log = String(object.log);
            return message;
        };

        /**
         * Creates a plain object from a WriteLogRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof alita.WriteLogRequest
         * @static
         * @param {alita.WriteLogRequest} message WriteLogRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WriteLogRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.tid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cid = options.longs === String ? "0" : 0;
                object.level = 0;
                object.tag = "";
                object.filename = "";
                object.line = 0;
                object.functionName = "";
                object.log = "";
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (typeof message.pid === "number")
                    object.pid = options.longs === String ? String(message.pid) : message.pid;
                else
                    object.pid = options.longs === String ? $util.Long.prototype.toString.call(message.pid) : options.longs === Number ? new $util.LongBits(message.pid.low >>> 0, message.pid.high >>> 0).toNumber(true) : message.pid;
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (typeof message.tid === "number")
                    object.tid = options.longs === String ? String(message.tid) : message.tid;
                else
                    object.tid = options.longs === String ? $util.Long.prototype.toString.call(message.tid) : options.longs === Number ? new $util.LongBits(message.tid.low >>> 0, message.tid.high >>> 0).toNumber(true) : message.tid;
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (typeof message.cid === "number")
                    object.cid = options.longs === String ? String(message.cid) : message.cid;
                else
                    object.cid = options.longs === String ? $util.Long.prototype.toString.call(message.cid) : options.longs === Number ? new $util.LongBits(message.cid.low >>> 0, message.cid.high >>> 0).toNumber(true) : message.cid;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                object.functionName = message.functionName;
            if (message.log != null && message.hasOwnProperty("log"))
                object.log = message.log;
            return object;
        };

        /**
         * Converts this WriteLogRequest to JSON.
         * @function toJSON
         * @memberof alita.WriteLogRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WriteLogRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WriteLogRequest;
    })();

    alita.FilterLogRequest = (function() {

        /**
         * Properties of a FilterLogRequest.
         * @memberof alita
         * @interface IFilterLogRequest
         * @property {number|Long|null} [pid] FilterLogRequest pid
         * @property {number|Long|null} [tid] FilterLogRequest tid
         * @property {number|Long|null} [cid] FilterLogRequest cid
         * @property {number|null} [level] FilterLogRequest level
         * @property {string|null} [tag] FilterLogRequest tag
         * @property {string|null} [filename] FilterLogRequest filename
         * @property {number|null} [line] FilterLogRequest line
         * @property {string|null} [functionName] FilterLogRequest functionName
         * @property {string|null} [log] FilterLogRequest log
         */

        /**
         * Constructs a new FilterLogRequest.
         * @memberof alita
         * @classdesc Represents a FilterLogRequest.
         * @implements IFilterLogRequest
         * @constructor
         * @param {alita.IFilterLogRequest=} [properties] Properties to set
         */
        function FilterLogRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FilterLogRequest pid.
         * @member {number|Long} pid
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.pid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FilterLogRequest tid.
         * @member {number|Long} tid
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.tid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FilterLogRequest cid.
         * @member {number|Long} cid
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.cid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * FilterLogRequest level.
         * @member {number} level
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.level = 0;

        /**
         * FilterLogRequest tag.
         * @member {string} tag
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.tag = "";

        /**
         * FilterLogRequest filename.
         * @member {string} filename
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.filename = "";

        /**
         * FilterLogRequest line.
         * @member {number} line
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.line = 0;

        /**
         * FilterLogRequest functionName.
         * @member {string} functionName
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.functionName = "";

        /**
         * FilterLogRequest log.
         * @member {string} log
         * @memberof alita.FilterLogRequest
         * @instance
         */
        FilterLogRequest.prototype.log = "";

        /**
         * Creates a new FilterLogRequest instance using the specified properties.
         * @function create
         * @memberof alita.FilterLogRequest
         * @static
         * @param {alita.IFilterLogRequest=} [properties] Properties to set
         * @returns {alita.FilterLogRequest} FilterLogRequest instance
         */
        FilterLogRequest.create = function create(properties) {
            return new FilterLogRequest(properties);
        };

        /**
         * Encodes the specified FilterLogRequest message. Does not implicitly {@link alita.FilterLogRequest.verify|verify} messages.
         * @function encode
         * @memberof alita.FilterLogRequest
         * @static
         * @param {alita.IFilterLogRequest} message FilterLogRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilterLogRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pid != null && Object.hasOwnProperty.call(message, "pid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pid);
            if (message.tid != null && Object.hasOwnProperty.call(message, "tid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.tid);
            if (message.cid != null && Object.hasOwnProperty.call(message, "cid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.cid);
            if (message.level != null && Object.hasOwnProperty.call(message, "level"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
            if (message.tag != null && Object.hasOwnProperty.call(message, "tag"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.tag);
            if (message.filename != null && Object.hasOwnProperty.call(message, "filename"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.filename);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.line);
            if (message.functionName != null && Object.hasOwnProperty.call(message, "functionName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.functionName);
            if (message.log != null && Object.hasOwnProperty.call(message, "log"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.log);
            return writer;
        };

        /**
         * Encodes the specified FilterLogRequest message, length delimited. Does not implicitly {@link alita.FilterLogRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof alita.FilterLogRequest
         * @static
         * @param {alita.IFilterLogRequest} message FilterLogRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilterLogRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FilterLogRequest message from the specified reader or buffer.
         * @function decode
         * @memberof alita.FilterLogRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {alita.FilterLogRequest} FilterLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilterLogRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.alita.FilterLogRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pid = reader.uint64();
                    break;
                case 2:
                    message.tid = reader.uint64();
                    break;
                case 3:
                    message.cid = reader.uint64();
                    break;
                case 4:
                    message.level = reader.int32();
                    break;
                case 5:
                    message.tag = reader.string();
                    break;
                case 6:
                    message.filename = reader.string();
                    break;
                case 7:
                    message.line = reader.uint32();
                    break;
                case 8:
                    message.functionName = reader.string();
                    break;
                case 9:
                    message.log = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FilterLogRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof alita.FilterLogRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {alita.FilterLogRequest} FilterLogRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilterLogRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FilterLogRequest message.
         * @function verify
         * @memberof alita.FilterLogRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FilterLogRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (!$util.isInteger(message.pid) && !(message.pid && $util.isInteger(message.pid.low) && $util.isInteger(message.pid.high)))
                    return "pid: integer|Long expected";
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (!$util.isInteger(message.tid) && !(message.tid && $util.isInteger(message.tid.low) && $util.isInteger(message.tid.high)))
                    return "tid: integer|Long expected";
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (!$util.isInteger(message.cid) && !(message.cid && $util.isInteger(message.cid.low) && $util.isInteger(message.cid.high)))
                    return "cid: integer|Long expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.tag != null && message.hasOwnProperty("tag"))
                if (!$util.isString(message.tag))
                    return "tag: string expected";
            if (message.filename != null && message.hasOwnProperty("filename"))
                if (!$util.isString(message.filename))
                    return "filename: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                if (!$util.isString(message.functionName))
                    return "functionName: string expected";
            if (message.log != null && message.hasOwnProperty("log"))
                if (!$util.isString(message.log))
                    return "log: string expected";
            return null;
        };

        /**
         * Creates a FilterLogRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof alita.FilterLogRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {alita.FilterLogRequest} FilterLogRequest
         */
        FilterLogRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.alita.FilterLogRequest)
                return object;
            var message = new $root.alita.FilterLogRequest();
            if (object.pid != null)
                if ($util.Long)
                    (message.pid = $util.Long.fromValue(object.pid)).unsigned = true;
                else if (typeof object.pid === "string")
                    message.pid = parseInt(object.pid, 10);
                else if (typeof object.pid === "number")
                    message.pid = object.pid;
                else if (typeof object.pid === "object")
                    message.pid = new $util.LongBits(object.pid.low >>> 0, object.pid.high >>> 0).toNumber(true);
            if (object.tid != null)
                if ($util.Long)
                    (message.tid = $util.Long.fromValue(object.tid)).unsigned = true;
                else if (typeof object.tid === "string")
                    message.tid = parseInt(object.tid, 10);
                else if (typeof object.tid === "number")
                    message.tid = object.tid;
                else if (typeof object.tid === "object")
                    message.tid = new $util.LongBits(object.tid.low >>> 0, object.tid.high >>> 0).toNumber(true);
            if (object.cid != null)
                if ($util.Long)
                    (message.cid = $util.Long.fromValue(object.cid)).unsigned = true;
                else if (typeof object.cid === "string")
                    message.cid = parseInt(object.cid, 10);
                else if (typeof object.cid === "number")
                    message.cid = object.cid;
                else if (typeof object.cid === "object")
                    message.cid = new $util.LongBits(object.cid.low >>> 0, object.cid.high >>> 0).toNumber(true);
            if (object.level != null)
                message.level = object.level | 0;
            if (object.tag != null)
                message.tag = String(object.tag);
            if (object.filename != null)
                message.filename = String(object.filename);
            if (object.line != null)
                message.line = object.line >>> 0;
            if (object.functionName != null)
                message.functionName = String(object.functionName);
            if (object.log != null)
                message.log = String(object.log);
            return message;
        };

        /**
         * Creates a plain object from a FilterLogRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof alita.FilterLogRequest
         * @static
         * @param {alita.FilterLogRequest} message FilterLogRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FilterLogRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.tid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.tid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cid = options.longs === String ? "0" : 0;
                object.level = 0;
                object.tag = "";
                object.filename = "";
                object.line = 0;
                object.functionName = "";
                object.log = "";
            }
            if (message.pid != null && message.hasOwnProperty("pid"))
                if (typeof message.pid === "number")
                    object.pid = options.longs === String ? String(message.pid) : message.pid;
                else
                    object.pid = options.longs === String ? $util.Long.prototype.toString.call(message.pid) : options.longs === Number ? new $util.LongBits(message.pid.low >>> 0, message.pid.high >>> 0).toNumber(true) : message.pid;
            if (message.tid != null && message.hasOwnProperty("tid"))
                if (typeof message.tid === "number")
                    object.tid = options.longs === String ? String(message.tid) : message.tid;
                else
                    object.tid = options.longs === String ? $util.Long.prototype.toString.call(message.tid) : options.longs === Number ? new $util.LongBits(message.tid.low >>> 0, message.tid.high >>> 0).toNumber(true) : message.tid;
            if (message.cid != null && message.hasOwnProperty("cid"))
                if (typeof message.cid === "number")
                    object.cid = options.longs === String ? String(message.cid) : message.cid;
                else
                    object.cid = options.longs === String ? $util.Long.prototype.toString.call(message.cid) : options.longs === Number ? new $util.LongBits(message.cid.low >>> 0, message.cid.high >>> 0).toNumber(true) : message.cid;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.tag != null && message.hasOwnProperty("tag"))
                object.tag = message.tag;
            if (message.filename != null && message.hasOwnProperty("filename"))
                object.filename = message.filename;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.functionName != null && message.hasOwnProperty("functionName"))
                object.functionName = message.functionName;
            if (message.log != null && message.hasOwnProperty("log"))
                object.log = message.log;
            return object;
        };

        /**
         * Converts this FilterLogRequest to JSON.
         * @function toJSON
         * @memberof alita.FilterLogRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FilterLogRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FilterLogRequest;
    })();

    /**
     * AlitaLogEventType enum.
     * @name alita.AlitaLogEventType
     * @enum {number}
     * @property {number} kWriteLogEvent=0 kWriteLogEvent value
     * @property {number} kFilterLogEvent=1 kFilterLogEvent value
     */
    alita.AlitaLogEventType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kWriteLogEvent"] = 0;
        values[valuesById[1] = "kFilterLogEvent"] = 1;
        return values;
    })();

    /**
     * LogLevel enum.
     * @name alita.LogLevel
     * @enum {number}
     * @property {number} kLogLevelAll=0 kLogLevelAll value
     * @property {number} kLogLevelDebug=1 kLogLevelDebug value
     * @property {number} kLogLevelInfo=2 kLogLevelInfo value
     * @property {number} kLogLevelWarn=3 kLogLevelWarn value
     * @property {number} kLogLevelError=4 kLogLevelError value
     * @property {number} kLogLevelFatal=5 kLogLevelFatal value
     * @property {number} kLogLevelNone=6 kLogLevelNone value
     */
    alita.LogLevel = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kLogLevelAll"] = 0;
        values[valuesById[1] = "kLogLevelDebug"] = 1;
        values[valuesById[2] = "kLogLevelInfo"] = 2;
        values[valuesById[3] = "kLogLevelWarn"] = 3;
        values[valuesById[4] = "kLogLevelError"] = 4;
        values[valuesById[5] = "kLogLevelFatal"] = 5;
        values[valuesById[6] = "kLogLevelNone"] = 6;
        return values;
    })();

    /**
     * PresetDebugIp enum.
     * @name alita.PresetDebugIp
     * @enum {number}
     * @property {number} kPresetDebugIpNone=0 kPresetDebugIpNone value
     * @property {number} kPresetDebugIpManual=1 kPresetDebugIpManual value
     * @property {number} kPresetDebugIp995=2 kPresetDebugIp995 value
     * @property {number} kPresetDebugIpHK990=3 kPresetDebugIpHK990 value
     * @property {number} kPresetDebugIp1001=4 kPresetDebugIp1001 value
     * @property {number} kPresetDebugIp1002=5 kPresetDebugIp1002 value
     * @property {number} kPresetDebugIpSZ1001=6 kPresetDebugIpSZ1001 value
     * @property {number} kPresetDebugIpSZ1002=7 kPresetDebugIpSZ1002 value
     * @property {number} kPresetDebugIpHK1001=8 kPresetDebugIpHK1001 value
     * @property {number} kPresetDebugIpHK1002=9 kPresetDebugIpHK1002 value
     * @property {number} kPresetDebugIpCA1001=10 kPresetDebugIpCA1001 value
     * @property {number} kPresetDebugIpCA1002=11 kPresetDebugIpCA1002 value
     * @property {number} kPresetDebugIp993=12 kPresetDebugIp993 value
     */
    alita.PresetDebugIp = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kPresetDebugIpNone"] = 0;
        values[valuesById[1] = "kPresetDebugIpManual"] = 1;
        values[valuesById[2] = "kPresetDebugIp995"] = 2;
        values[valuesById[3] = "kPresetDebugIpHK990"] = 3;
        values[valuesById[4] = "kPresetDebugIp1001"] = 4;
        values[valuesById[5] = "kPresetDebugIp1002"] = 5;
        values[valuesById[6] = "kPresetDebugIpSZ1001"] = 6;
        values[valuesById[7] = "kPresetDebugIpSZ1002"] = 7;
        values[valuesById[8] = "kPresetDebugIpHK1001"] = 8;
        values[valuesById[9] = "kPresetDebugIpHK1002"] = 9;
        values[valuesById[10] = "kPresetDebugIpCA1001"] = 10;
        values[valuesById[11] = "kPresetDebugIpCA1002"] = 11;
        values[valuesById[12] = "kPresetDebugIp993"] = 12;
        return values;
    })();

    /**
     * DeviceTypeId enum.
     * @name alita.DeviceTypeId
     * @enum {number}
     * @property {number} kDeviceTypeIdUnknown=0 kDeviceTypeIdUnknown value
     * @property {number} kDeviceTypeIdIphone=1 kDeviceTypeIdIphone value
     * @property {number} kDeviceTypeIdAndroid=2 kDeviceTypeIdAndroid value
     * @property {number} kDeviceTypeIdS60V3=3 kDeviceTypeIdS60V3 value
     * @property {number} kDeviceTypeIdS60V5=4 kDeviceTypeIdS60V5 value
     * @property {number} kDeviceTypeIdWp7=5 kDeviceTypeIdWp7 value
     * @property {number} kDeviceTypeIdWebWx=6 kDeviceTypeIdWebWx value
     * @property {number} kDeviceTypeIdBlackberry=7 kDeviceTypeIdBlackberry value
     * @property {number} kDeviceTypeIdWp8=8 kDeviceTypeIdWp8 value
     * @property {number} kDeviceTypeIdS40Asha=9 kDeviceTypeIdS40Asha value
     * @property {number} kDeviceTypeIdBlackberry10=10 kDeviceTypeIdBlackberry10 value
     * @property {number} kDeviceTypeIdS40AshaV5=11 kDeviceTypeIdS40AshaV5 value
     * @property {number} kDeviceTypeIdAndroidLite=12 kDeviceTypeIdAndroidLite value
     * @property {number} kDeviceTypeIdIpad=13 kDeviceTypeIdIpad value
     * @property {number} kDeviceTypeIdImac=14 kDeviceTypeIdImac value
     * @property {number} kDeviceTypeIdWindows=15 kDeviceTypeIdWindows value
     * @property {number} kDeviceTypeIdDjj=19 kDeviceTypeIdDjj value
     * @property {number} kDeviceTypeIdAlbum=24 kDeviceTypeIdAlbum value
     * @property {number} kDeviceTypeIdKidsWatch=26 kDeviceTypeIdKidsWatch value
     */
    alita.DeviceTypeId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kDeviceTypeIdUnknown"] = 0;
        values[valuesById[1] = "kDeviceTypeIdIphone"] = 1;
        values[valuesById[2] = "kDeviceTypeIdAndroid"] = 2;
        values[valuesById[3] = "kDeviceTypeIdS60V3"] = 3;
        values[valuesById[4] = "kDeviceTypeIdS60V5"] = 4;
        values[valuesById[5] = "kDeviceTypeIdWp7"] = 5;
        values[valuesById[6] = "kDeviceTypeIdWebWx"] = 6;
        values[valuesById[7] = "kDeviceTypeIdBlackberry"] = 7;
        values[valuesById[8] = "kDeviceTypeIdWp8"] = 8;
        values[valuesById[9] = "kDeviceTypeIdS40Asha"] = 9;
        values[valuesById[10] = "kDeviceTypeIdBlackberry10"] = 10;
        values[valuesById[11] = "kDeviceTypeIdS40AshaV5"] = 11;
        values[valuesById[12] = "kDeviceTypeIdAndroidLite"] = 12;
        values[valuesById[13] = "kDeviceTypeIdIpad"] = 13;
        values[valuesById[14] = "kDeviceTypeIdImac"] = 14;
        values[valuesById[15] = "kDeviceTypeIdWindows"] = 15;
        values[valuesById[19] = "kDeviceTypeIdDjj"] = 19;
        values[valuesById[24] = "kDeviceTypeIdAlbum"] = 24;
        values[valuesById[26] = "kDeviceTypeIdKidsWatch"] = 26;
        return values;
    })();

    /**
     * NetworkPolicy enum.
     * @name alita.NetworkPolicy
     * @enum {number}
     * @property {number} kNetworkPolicyDefault=0 kNetworkPolicyDefault value
     * @property {number} kNetworkPolicyShort=1 kNetworkPolicyShort value
     * @property {number} kNetworkPolicyLong=2 kNetworkPolicyLong value
     * @property {number} kNetworkPolicyBoth=3 kNetworkPolicyBoth value
     */
    alita.NetworkPolicy = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kNetworkPolicyDefault"] = 0;
        values[valuesById[1] = "kNetworkPolicyShort"] = 1;
        values[valuesById[2] = "kNetworkPolicyLong"] = 2;
        values[valuesById[3] = "kNetworkPolicyBoth"] = 3;
        return values;
    })();

    /**
     * LoginState enum.
     * @name alita.LoginState
     * @enum {number}
     * @property {number} kLoginStateIdle=0 kLoginStateIdle value
     * @property {number} kLoginStateLoggingIn=1 kLoginStateLoggingIn value
     * @property {number} kLoginStateLoggedIn=2 kLoginStateLoggedIn value
     * @property {number} kLoginStateLoggingOut=3 kLoginStateLoggingOut value
     * @property {number} kLoginStateExpired=4 kLoginStateExpired value
     * @property {number} kLoginStateLoggedOut=5 kLoginStateLoggedOut value
     * @property {number} kLoginStateKickedOut=6 kLoginStateKickedOut value
     */
    alita.LoginState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kLoginStateIdle"] = 0;
        values[valuesById[1] = "kLoginStateLoggingIn"] = 1;
        values[valuesById[2] = "kLoginStateLoggedIn"] = 2;
        values[valuesById[3] = "kLoginStateLoggingOut"] = 3;
        values[valuesById[4] = "kLoginStateExpired"] = 4;
        values[valuesById[5] = "kLoginStateLoggedOut"] = 5;
        values[valuesById[6] = "kLoginStateKickedOut"] = 6;
        return values;
    })();

    /**
     * AvatarImageType enum.
     * @name alita.AvatarImageType
     * @enum {number}
     * @property {number} kAvatarImageTypeUnknown=0 kAvatarImageTypeUnknown value
     * @property {number} kAvatarImageTypeSmall=1 kAvatarImageTypeSmall value
     * @property {number} kAvatarImageTypeHd=2 kAvatarImageTypeHd value
     */
    alita.AvatarImageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kAvatarImageTypeUnknown"] = 0;
        values[valuesById[1] = "kAvatarImageTypeSmall"] = 1;
        values[valuesById[2] = "kAvatarImageTypeHd"] = 2;
        return values;
    })();

    /**
     * LoginQrCodeNotifyStatus enum.
     * @name alita.LoginQrCodeNotifyStatus
     * @enum {number}
     * @property {number} kLoginQrCodeNotifyStatusWait=0 kLoginQrCodeNotifyStatusWait value
     * @property {number} kLoginQrCodeNotifyStatusScaned=1 kLoginQrCodeNotifyStatusScaned value
     * @property {number} kLoginQrCodeNotifyStatusConfirmed=2 kLoginQrCodeNotifyStatusConfirmed value
     * @property {number} kLoginQrCodeNotifyStatusExpired=3 kLoginQrCodeNotifyStatusExpired value
     * @property {number} kLoginQrCodeNotifyStatusCancel=4 kLoginQrCodeNotifyStatusCancel value
     * @property {number} kLoginQrCodeNotifyStatusBluetoothScaned=5 kLoginQrCodeNotifyStatusBluetoothScaned value
     * @property {number} kLoginQrCodeNotifyStatusBluetoothConfirmed=6 kLoginQrCodeNotifyStatusBluetoothConfirmed value
     * @property {number} kLoginQrCodeNotifyStatusBluetoothLogin=7 kLoginQrCodeNotifyStatusBluetoothLogin value
     * @property {number} kLoginQrCodeNotifyStatusBluetoothAutoAuthCheck=8 kLoginQrCodeNotifyStatusBluetoothAutoAuthCheck value
     * @property {number} kLoginQrCodeNotifyStatusError=9 kLoginQrCodeNotifyStatusError value
     * @property {number} kLoginQrCodeNotifyStatusAlbumCheckBind=10 kLoginQrCodeNotifyStatusAlbumCheckBind value
     */
    alita.LoginQrCodeNotifyStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kLoginQrCodeNotifyStatusWait"] = 0;
        values[valuesById[1] = "kLoginQrCodeNotifyStatusScaned"] = 1;
        values[valuesById[2] = "kLoginQrCodeNotifyStatusConfirmed"] = 2;
        values[valuesById[3] = "kLoginQrCodeNotifyStatusExpired"] = 3;
        values[valuesById[4] = "kLoginQrCodeNotifyStatusCancel"] = 4;
        values[valuesById[5] = "kLoginQrCodeNotifyStatusBluetoothScaned"] = 5;
        values[valuesById[6] = "kLoginQrCodeNotifyStatusBluetoothConfirmed"] = 6;
        values[valuesById[7] = "kLoginQrCodeNotifyStatusBluetoothLogin"] = 7;
        values[valuesById[8] = "kLoginQrCodeNotifyStatusBluetoothAutoAuthCheck"] = 8;
        values[valuesById[9] = "kLoginQrCodeNotifyStatusError"] = 9;
        values[valuesById[10] = "kLoginQrCodeNotifyStatusAlbumCheckBind"] = 10;
        return values;
    })();

    /**
     * CommonOperation enum.
     * @name alita.CommonOperation
     * @enum {number}
     * @property {number} kCommonOperationAdd=0 kCommonOperationAdd value
     * @property {number} kCommonOperationDelete=1 kCommonOperationDelete value
     * @property {number} kCommonOperationUpdate=2 kCommonOperationUpdate value
     */
    alita.CommonOperation = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kCommonOperationAdd"] = 0;
        values[valuesById[1] = "kCommonOperationDelete"] = 1;
        values[valuesById[2] = "kCommonOperationUpdate"] = 2;
        return values;
    })();

    /**
     * MessageFlag enum.
     * @name alita.MessageFlag
     * @enum {number}
     * @property {number} kMessageFlagNone=0 kMessageFlagNone value
     * @property {number} kMessageFlagSend=1 kMessageFlagSend value
     * @property {number} kMessageFlagReceive=2 kMessageFlagReceive value
     * @property {number} kMessageFlagUnRead=4 kMessageFlagUnRead value
     * @property {number} kMessageFlagUnOpened=8 kMessageFlagUnOpened value
     */
    alita.MessageFlag = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMessageFlagNone"] = 0;
        values[valuesById[1] = "kMessageFlagSend"] = 1;
        values[valuesById[2] = "kMessageFlagReceive"] = 2;
        values[valuesById[4] = "kMessageFlagUnRead"] = 4;
        values[valuesById[8] = "kMessageFlagUnOpened"] = 8;
        return values;
    })();

    /**
     * MessageStatus enum.
     * @name alita.MessageStatus
     * @enum {number}
     * @property {number} kMessageStatusUnknown=0 kMessageStatusUnknown value
     * @property {number} kMessageStatusNone=1 kMessageStatusNone value
     * @property {number} kMessageStatusSending=2 kMessageStatusSending value
     * @property {number} kMessageStatusSent=3 kMessageStatusSent value
     * @property {number} kMessageStatusReceiving=4 kMessageStatusReceiving value
     * @property {number} kMessageStatusReceived=5 kMessageStatusReceived value
     * @property {number} kMessageStatusFail=6 kMessageStatusFail value
     * @property {number} kMessageStatusVoipAnswer=7 kMessageStatusVoipAnswer value
     * @property {number} kMessageStatusVoipNoAnswer=8 kMessageStatusVoipNoAnswer value
     * @property {number} kMessageStatusVoipFail=9 kMessageStatusVoipFail value
     */
    alita.MessageStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMessageStatusUnknown"] = 0;
        values[valuesById[1] = "kMessageStatusNone"] = 1;
        values[valuesById[2] = "kMessageStatusSending"] = 2;
        values[valuesById[3] = "kMessageStatusSent"] = 3;
        values[valuesById[4] = "kMessageStatusReceiving"] = 4;
        values[valuesById[5] = "kMessageStatusReceived"] = 5;
        values[valuesById[6] = "kMessageStatusFail"] = 6;
        values[valuesById[7] = "kMessageStatusVoipAnswer"] = 7;
        values[valuesById[8] = "kMessageStatusVoipNoAnswer"] = 8;
        values[valuesById[9] = "kMessageStatusVoipFail"] = 9;
        return values;
    })();

    /**
     * MessageDataType enum.
     * @name alita.MessageDataType
     * @enum {number}
     * @property {number} kMessageDataTypeUnknown=0 kMessageDataTypeUnknown value
     * @property {number} kMessageDataTypeText=1 kMessageDataTypeText value
     * @property {number} kMessageDataTypeImg=3 kMessageDataTypeImg value
     * @property {number} kMessageDataTypePrivateMsgText=11 kMessageDataTypePrivateMsgText value
     * @property {number} kMessageDataTypePrivateMsgImg=13 kMessageDataTypePrivateMsgImg value
     * @property {number} kMessageDataTypeChatRoomMsgText=21 kMessageDataTypeChatRoomMsgText value
     * @property {number} kMessageDataTypeChatRoomMsgImg=23 kMessageDataTypeChatRoomMsgImg value
     * @property {number} kMessageDataTypeVoiceMsg=34 kMessageDataTypeVoiceMsg value
     * @property {number} kMessageDataTypePushMail=35 kMessageDataTypePushMail value
     * @property {number} kMessageDataTypeQMsg=36 kMessageDataTypeQMsg value
     * @property {number} kMessageDataTypeVerifyMsg=37 kMessageDataTypeVerifyMsg value
     * @property {number} kMessageDataTypePushSystemMsg=38 kMessageDataTypePushSystemMsg value
     * @property {number} kMessageDataTypeQQLiXianMsg=39 kMessageDataTypeQQLiXianMsg value
     * @property {number} kMessageDataTypePossibleFriendMsg=40 kMessageDataTypePossibleFriendMsg value
     * @property {number} kMessageDataTypePushSoftware=41 kMessageDataTypePushSoftware value
     * @property {number} kMessageDataTypeShareCard=42 kMessageDataTypeShareCard value
     * @property {number} kMessageDataTypeVideo=43 kMessageDataTypeVideo value
     * @property {number} kMessageDataTypeVideoIphoneExport=44 kMessageDataTypeVideoIphoneExport value
     * @property {number} kMessageDataTypeGmailPushMail=45 kMessageDataTypeGmailPushMail value
     * @property {number} kMessageDataTypeEmpty=46 kMessageDataTypeEmpty value
     * @property {number} kMessageDataTypeEmoji=47 kMessageDataTypeEmoji value
     * @property {number} kMessageDataTypeLocation=48 kMessageDataTypeLocation value
     * @property {number} kMessageDataTypeAppMsg=49 kMessageDataTypeAppMsg value
     * @property {number} kMessageDataTypeVoipMsg=50 kMessageDataTypeVoipMsg value
     * @property {number} kMessageDataTypeStatusNotify=51 kMessageDataTypeStatusNotify value
     * @property {number} kMessageDataTypeWeiboPush=52 kMessageDataTypeWeiboPush value
     * @property {number} kMessageDataTypeWebwxVoipNotify=53 kMessageDataTypeWebwxVoipNotify value
     * @property {number} kMessageDataTypeChatRoomVerifyMsg=54 kMessageDataTypeChatRoomVerifyMsg value
     * @property {number} kMessageDataTypeBrandQaAsk=55 kMessageDataTypeBrandQaAsk value
     * @property {number} kMessageDataTypeTalkSysMsg=56 kMessageDataTypeTalkSysMsg value
     * @property {number} kMessageDataTypeBrandQaMsg=57 kMessageDataTypeBrandQaMsg value
     * @property {number} kMessageDataTypeOpenSubscribe=58 kMessageDataTypeOpenSubscribe value
     * @property {number} kMessageDataTypeOpenReport=59 kMessageDataTypeOpenReport value
     * @property {number} kMessageDataTypeOpenLink=60 kMessageDataTypeOpenLink value
     * @property {number} kMessageDataTypeKF=61 kMessageDataTypeKF value
     * @property {number} kMessageDataTypeShortVideo=62 kMessageDataTypeShortVideo value
     * @property {number} kMessageDataTypeSysCmdIpxx=9998 kMessageDataTypeSysCmdIpxx value
     * @property {number} kMessageDataTypeSysNotice=9999 kMessageDataTypeSysNotice value
     * @property {number} kMessageDataTypeSys=10000 kMessageDataTypeSys value
     * @property {number} kMessageDataTypeSysCmdXml=10001 kMessageDataTypeSysCmdXml value
     * @property {number} kMessageDataTypeSysCmdNewXml=10002 kMessageDataTypeSysCmdNewXml value
     */
    alita.MessageDataType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMessageDataTypeUnknown"] = 0;
        values[valuesById[1] = "kMessageDataTypeText"] = 1;
        values[valuesById[3] = "kMessageDataTypeImg"] = 3;
        values[valuesById[11] = "kMessageDataTypePrivateMsgText"] = 11;
        values[valuesById[13] = "kMessageDataTypePrivateMsgImg"] = 13;
        values[valuesById[21] = "kMessageDataTypeChatRoomMsgText"] = 21;
        values[valuesById[23] = "kMessageDataTypeChatRoomMsgImg"] = 23;
        values[valuesById[34] = "kMessageDataTypeVoiceMsg"] = 34;
        values[valuesById[35] = "kMessageDataTypePushMail"] = 35;
        values[valuesById[36] = "kMessageDataTypeQMsg"] = 36;
        values[valuesById[37] = "kMessageDataTypeVerifyMsg"] = 37;
        values[valuesById[38] = "kMessageDataTypePushSystemMsg"] = 38;
        values[valuesById[39] = "kMessageDataTypeQQLiXianMsg"] = 39;
        values[valuesById[40] = "kMessageDataTypePossibleFriendMsg"] = 40;
        values[valuesById[41] = "kMessageDataTypePushSoftware"] = 41;
        values[valuesById[42] = "kMessageDataTypeShareCard"] = 42;
        values[valuesById[43] = "kMessageDataTypeVideo"] = 43;
        values[valuesById[44] = "kMessageDataTypeVideoIphoneExport"] = 44;
        values[valuesById[45] = "kMessageDataTypeGmailPushMail"] = 45;
        values[valuesById[46] = "kMessageDataTypeEmpty"] = 46;
        values[valuesById[47] = "kMessageDataTypeEmoji"] = 47;
        values[valuesById[48] = "kMessageDataTypeLocation"] = 48;
        values[valuesById[49] = "kMessageDataTypeAppMsg"] = 49;
        values[valuesById[50] = "kMessageDataTypeVoipMsg"] = 50;
        values[valuesById[51] = "kMessageDataTypeStatusNotify"] = 51;
        values[valuesById[52] = "kMessageDataTypeWeiboPush"] = 52;
        values[valuesById[53] = "kMessageDataTypeWebwxVoipNotify"] = 53;
        values[valuesById[54] = "kMessageDataTypeChatRoomVerifyMsg"] = 54;
        values[valuesById[55] = "kMessageDataTypeBrandQaAsk"] = 55;
        values[valuesById[56] = "kMessageDataTypeTalkSysMsg"] = 56;
        values[valuesById[57] = "kMessageDataTypeBrandQaMsg"] = 57;
        values[valuesById[58] = "kMessageDataTypeOpenSubscribe"] = 58;
        values[valuesById[59] = "kMessageDataTypeOpenReport"] = 59;
        values[valuesById[60] = "kMessageDataTypeOpenLink"] = 60;
        values[valuesById[61] = "kMessageDataTypeKF"] = 61;
        values[valuesById[62] = "kMessageDataTypeShortVideo"] = 62;
        values[valuesById[9998] = "kMessageDataTypeSysCmdIpxx"] = 9998;
        values[valuesById[9999] = "kMessageDataTypeSysNotice"] = 9999;
        values[valuesById[10000] = "kMessageDataTypeSys"] = 10000;
        values[valuesById[10001] = "kMessageDataTypeSysCmdXml"] = 10001;
        values[valuesById[10002] = "kMessageDataTypeSysCmdNewXml"] = 10002;
        return values;
    })();

    /**
     * ConversationSyncAction enum.
     * @name alita.ConversationSyncAction
     * @enum {number}
     * @property {number} kConversationSyncActionNone=0 kConversationSyncActionNone value
     * @property {number} kConversationSyncActionAfterLogin=1 kConversationSyncActionAfterLogin value
     * @property {number} kConversationSyncActionAfterSleep=2 kConversationSyncActionAfterSleep value
     * @property {number} kConversationSyncActionLoadMore=3 kConversationSyncActionLoadMore value
     */
    alita.ConversationSyncAction = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kConversationSyncActionNone"] = 0;
        values[valuesById[1] = "kConversationSyncActionAfterLogin"] = 1;
        values[valuesById[2] = "kConversationSyncActionAfterSleep"] = 2;
        values[valuesById[3] = "kConversationSyncActionLoadMore"] = 3;
        return values;
    })();

    /**
     * ContactFlag enum.
     * @name alita.ContactFlag
     * @enum {number}
     * @property {number} kContactFlagNone=0 kContactFlagNone value
     * @property {number} kContactFlagContact=1 kContactFlagContact value
     * @property {number} kContactFlagChat=2 kContactFlagChat value
     * @property {number} kContactFlagChatRoom=4 kContactFlagChatRoom value
     * @property {number} kContactFlagBlackList=8 kContactFlagBlackList value
     * @property {number} kContactFlagDomain=16 kContactFlagDomain value
     * @property {number} kContactFlagHide=32 kContactFlagHide value
     * @property {number} kContactFlagFavour=64 kContactFlagFavour value
     * @property {number} kContactFlag3RdApp=128 kContactFlag3RdApp value
     * @property {number} kContactFlagSnsBlackList=256 kContactFlagSnsBlackList value
     * @property {number} kContactFlagMute=512 kContactFlagMute value
     * @property {number} kContactFlagUnDeliver=1024 kContactFlagUnDeliver value
     * @property {number} kContactFlagTop=2048 kContactFlagTop value
     * @property {number} kContactFlagAutoAdd=4096 kContactFlagAutoAdd value
     * @property {number} kContactFlagTextTranslate=8192 kContactFlagTextTranslate value
     * @property {number} kContactFlagFrozen=16384 kContactFlagFrozen value
     * @property {number} kContactFlagWatchContact=131072 kContactFlagWatchContact value
     */
    alita.ContactFlag = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kContactFlagNone"] = 0;
        values[valuesById[1] = "kContactFlagContact"] = 1;
        values[valuesById[2] = "kContactFlagChat"] = 2;
        values[valuesById[4] = "kContactFlagChatRoom"] = 4;
        values[valuesById[8] = "kContactFlagBlackList"] = 8;
        values[valuesById[16] = "kContactFlagDomain"] = 16;
        values[valuesById[32] = "kContactFlagHide"] = 32;
        values[valuesById[64] = "kContactFlagFavour"] = 64;
        values[valuesById[128] = "kContactFlag3RdApp"] = 128;
        values[valuesById[256] = "kContactFlagSnsBlackList"] = 256;
        values[valuesById[512] = "kContactFlagMute"] = 512;
        values[valuesById[1024] = "kContactFlagUnDeliver"] = 1024;
        values[valuesById[2048] = "kContactFlagTop"] = 2048;
        values[valuesById[4096] = "kContactFlagAutoAdd"] = 4096;
        values[valuesById[8192] = "kContactFlagTextTranslate"] = 8192;
        values[valuesById[16384] = "kContactFlagFrozen"] = 16384;
        values[valuesById[131072] = "kContactFlagWatchContact"] = 131072;
        return values;
    })();

    /**
     * VoIPState enum.
     * @name alita.VoIPState
     * @enum {number}
     * @property {number} kVoIPStateUnknown=0 kVoIPStateUnknown value
     * @property {number} kVoIPStateInited=1 kVoIPStateInited value
     * @property {number} kVoIPStateDialing=2 kVoIPStateDialing value
     * @property {number} kVoIPStateIncoming=3 kVoIPStateIncoming value
     * @property {number} kVoIPStateWaitConnect=4 kVoIPStateWaitConnect value
     * @property {number} kVoIPStateConnected=5 kVoIPStateConnected value
     * @property {number} kVoIPStateTalking=6 kVoIPStateTalking value
     */
    alita.VoIPState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kVoIPStateUnknown"] = 0;
        values[valuesById[1] = "kVoIPStateInited"] = 1;
        values[valuesById[2] = "kVoIPStateDialing"] = 2;
        values[valuesById[3] = "kVoIPStateIncoming"] = 3;
        values[valuesById[4] = "kVoIPStateWaitConnect"] = 4;
        values[valuesById[5] = "kVoIPStateConnected"] = 5;
        values[valuesById[6] = "kVoIPStateTalking"] = 6;
        return values;
    })();

    /**
     * VoIPFinishType enum.
     * @name alita.VoIPFinishType
     * @enum {number}
     * @property {number} kVoIPFinishTypeNormal=0 kVoIPFinishTypeNormal value
     * @property {number} kVoIPFinishTypeReject=1 kVoIPFinishTypeReject value
     * @property {number} kVoIPFinishTypeCancel=2 kVoIPFinishTypeCancel value
     * @property {number} kVoIPFinishTypeRecvReject=3 kVoIPFinishTypeRecvReject value
     * @property {number} kVoIPFinishTypeRecvShutDown=4 kVoIPFinishTypeRecvShutDown value
     * @property {number} kVoIPFinishTypeBlock=5 kVoIPFinishTypeBlock value
     * @property {number} kVoIPFinishTypeBusy=6 kVoIPFinishTypeBusy value
     * @property {number} kVoIPFinishTypeNotFriend=7 kVoIPFinishTypeNotFriend value
     * @property {number} kVoIPFinishTypeRecvCancel=8 kVoIPFinishTypeRecvCancel value
     * @property {number} kVoIPFinishTypeNotSupport=9 kVoIPFinishTypeNotSupport value
     * @property {number} kVoIPFinishTypePluginClose=10 kVoIPFinishTypePluginClose value
     * @property {number} kVoIPFinishTypeTimeout=11 kVoIPFinishTypeTimeout value
     * @property {number} kVoIPFinishTypeUnknownError=12 kVoIPFinishTypeUnknownError value
     */
    alita.VoIPFinishType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kVoIPFinishTypeNormal"] = 0;
        values[valuesById[1] = "kVoIPFinishTypeReject"] = 1;
        values[valuesById[2] = "kVoIPFinishTypeCancel"] = 2;
        values[valuesById[3] = "kVoIPFinishTypeRecvReject"] = 3;
        values[valuesById[4] = "kVoIPFinishTypeRecvShutDown"] = 4;
        values[valuesById[5] = "kVoIPFinishTypeBlock"] = 5;
        values[valuesById[6] = "kVoIPFinishTypeBusy"] = 6;
        values[valuesById[7] = "kVoIPFinishTypeNotFriend"] = 7;
        values[valuesById[8] = "kVoIPFinishTypeRecvCancel"] = 8;
        values[valuesById[9] = "kVoIPFinishTypeNotSupport"] = 9;
        values[valuesById[10] = "kVoIPFinishTypePluginClose"] = 10;
        values[valuesById[11] = "kVoIPFinishTypeTimeout"] = 11;
        values[valuesById[12] = "kVoIPFinishTypeUnknownError"] = 12;
        return values;
    })();

    /**
     * AppMessageType enum.
     * @name alita.AppMessageType
     * @enum {number}
     * @property {number} kAppMessageTypeUnknown=0 kAppMessageTypeUnknown value
     * @property {number} kAppMessageTypeText=1 kAppMessageTypeText value
     * @property {number} kAppMessageTypeImage=2 kAppMessageTypeImage value
     * @property {number} kAppMessageTypeMusic=3 kAppMessageTypeMusic value
     * @property {number} kAppMessageTypeVideo=4 kAppMessageTypeVideo value
     * @property {number} kAppMessageTypeUrl=5 kAppMessageTypeUrl value
     * @property {number} kAppMessageTypeFile=6 kAppMessageTypeFile value
     * @property {number} kAppMessageTypeAppData=7 kAppMessageTypeAppData value
     * @property {number} kAppMessageTypeEmoji=8 kAppMessageTypeEmoji value
     * @property {number} kAppMessageTypeProduct=10 kAppMessageTypeProduct value
     * @property {number} kAppMessageTypeEmoticonGift=11 kAppMessageTypeEmoticonGift value
     * @property {number} kAppMessageTypeDeviceAccess=12 kAppMessageTypeDeviceAccess value
     * @property {number} kAppMessageTypeMallProduct=13 kAppMessageTypeMallProduct value
     * @property {number} kAppMessageTypeOldTv=14 kAppMessageTypeOldTv value
     * @property {number} kAppMessageTypeEmoticonShared=15 kAppMessageTypeEmoticonShared value
     * @property {number} kAppMessageTypeCardShare=16 kAppMessageTypeCardShare value
     * @property {number} kAppMessageTypeLocationShare=17 kAppMessageTypeLocationShare value
     * @property {number} kAppMessageTypeRecord=19 kAppMessageTypeRecord value
     * @property {number} kAppMessageTypeTv=20 kAppMessageTypeTv value
     * @property {number} kAppMessageTypeNote=24 kAppMessageTypeNote value
     * @property {number} kAppMessageTypeDesignerShared=25 kAppMessageTypeDesignerShared value
     * @property {number} kAppMessageTypeEmotionListShared=26 kAppMessageTypeEmotionListShared value
     * @property {number} kAppMessageTypeEmojiListShared=27 kAppMessageTypeEmojiListShared value
     * @property {number} kAppMessageTypeLocation=30 kAppMessageTypeLocation value
     * @property {number} kAppMessageTypeAppBrand=33 kAppMessageTypeAppBrand value
     * @property {number} kAppMessageTypeGiftCard=34 kAppMessageTypeGiftCard value
     * @property {number} kAppMessageTypeSyncRecord=35 kAppMessageTypeSyncRecord value
     * @property {number} kAppMessageTypeOpenSdkAppBrand=36 kAppMessageTypeOpenSdkAppBrand value
     * @property {number} kAppMessageTypeVideoFile=38 kAppMessageTypeVideoFile value
     * @property {number} kAppMessageTypeGameVideoFile=39 kAppMessageTypeGameVideoFile value
     * @property {number} kAppMessageTypeBusinessCard=45 kAppMessageTypeBusinessCard value
     * @property {number} kAppMessageTypeOpenSdkAppBrandWeishiVideo=46 kAppMessageTypeOpenSdkAppBrandWeishiVideo value
     * @property {number} kAppMessageTypeOpenSdkWeworkObject=49 kAppMessageTypeOpenSdkWeworkObject value
     * @property {number} kAppMessageTypeFinderNameCard=50 kAppMessageTypeFinderNameCard value
     * @property {number} kAppMessageTypeFinderFeed=51 kAppMessageTypeFinderFeed value
     * @property {number} kAppMessageTypeFinderEndorsment=52 kAppMessageTypeFinderEndorsment value
     * @property {number} kAppMessageTypeSolitaire=53 kAppMessageTypeSolitaire value
     * @property {number} kAppMessageTypeMpShareVideoAppMsg=54 kAppMessageTypeMpShareVideoAppMsg value
     * @property {number} kAppMessageTypeMsgQuote=57 kAppMessageTypeMsgQuote value
     * @property {number} kAppMessageTypeFinderTopic=59 kAppMessageTypeFinderTopic value
     * @property {number} kAppMessageTypeMegaVideoShare=71 kAppMessageTypeMegaVideoShare value
     * @property {number} kAppMessageTypeMmliveShare=60 kAppMessageTypeMmliveShare value
     * @property {number} kAppMessageTypePatMsg=62 kAppMessageTypePatMsg value
     * @property {number} kAppMessageTypeFinderLive=63 kAppMessageTypeFinderLive value
     * @property {number} kAppMessageTypeFinderLiveBooking=64 kAppMessageTypeFinderLiveBooking value
     * @property {number} kAppMessageTypeFinderLiveInvite=65 kAppMessageTypeFinderLiveInvite value
     * @property {number} kAppMessageTypeGameLifeGift=66 kAppMessageTypeGameLifeGift value
     * @property {number} kAppMessageTypeGameLifeCard=69 kAppMessageTypeGameLifeCard value
     * @property {number} kAppMessageTypeLiteApp=68 kAppMessageTypeLiteApp value
     * @property {number} kAppMessageTypeFinderColumnCard=73 kAppMessageTypeFinderColumnCard value
     * @property {number} kAppMessageTypeFinderFollowTopic=72 kAppMessageTypeFinderFollowTopic value
     */
    alita.AppMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kAppMessageTypeUnknown"] = 0;
        values[valuesById[1] = "kAppMessageTypeText"] = 1;
        values[valuesById[2] = "kAppMessageTypeImage"] = 2;
        values[valuesById[3] = "kAppMessageTypeMusic"] = 3;
        values[valuesById[4] = "kAppMessageTypeVideo"] = 4;
        values[valuesById[5] = "kAppMessageTypeUrl"] = 5;
        values[valuesById[6] = "kAppMessageTypeFile"] = 6;
        values[valuesById[7] = "kAppMessageTypeAppData"] = 7;
        values[valuesById[8] = "kAppMessageTypeEmoji"] = 8;
        values[valuesById[10] = "kAppMessageTypeProduct"] = 10;
        values[valuesById[11] = "kAppMessageTypeEmoticonGift"] = 11;
        values[valuesById[12] = "kAppMessageTypeDeviceAccess"] = 12;
        values[valuesById[13] = "kAppMessageTypeMallProduct"] = 13;
        values[valuesById[14] = "kAppMessageTypeOldTv"] = 14;
        values[valuesById[15] = "kAppMessageTypeEmoticonShared"] = 15;
        values[valuesById[16] = "kAppMessageTypeCardShare"] = 16;
        values[valuesById[17] = "kAppMessageTypeLocationShare"] = 17;
        values[valuesById[19] = "kAppMessageTypeRecord"] = 19;
        values[valuesById[20] = "kAppMessageTypeTv"] = 20;
        values[valuesById[24] = "kAppMessageTypeNote"] = 24;
        values[valuesById[25] = "kAppMessageTypeDesignerShared"] = 25;
        values[valuesById[26] = "kAppMessageTypeEmotionListShared"] = 26;
        values[valuesById[27] = "kAppMessageTypeEmojiListShared"] = 27;
        values[valuesById[30] = "kAppMessageTypeLocation"] = 30;
        values[valuesById[33] = "kAppMessageTypeAppBrand"] = 33;
        values[valuesById[34] = "kAppMessageTypeGiftCard"] = 34;
        values[valuesById[35] = "kAppMessageTypeSyncRecord"] = 35;
        values[valuesById[36] = "kAppMessageTypeOpenSdkAppBrand"] = 36;
        values[valuesById[38] = "kAppMessageTypeVideoFile"] = 38;
        values[valuesById[39] = "kAppMessageTypeGameVideoFile"] = 39;
        values[valuesById[45] = "kAppMessageTypeBusinessCard"] = 45;
        values[valuesById[46] = "kAppMessageTypeOpenSdkAppBrandWeishiVideo"] = 46;
        values[valuesById[49] = "kAppMessageTypeOpenSdkWeworkObject"] = 49;
        values[valuesById[50] = "kAppMessageTypeFinderNameCard"] = 50;
        values[valuesById[51] = "kAppMessageTypeFinderFeed"] = 51;
        values[valuesById[52] = "kAppMessageTypeFinderEndorsment"] = 52;
        values[valuesById[53] = "kAppMessageTypeSolitaire"] = 53;
        values[valuesById[54] = "kAppMessageTypeMpShareVideoAppMsg"] = 54;
        values[valuesById[57] = "kAppMessageTypeMsgQuote"] = 57;
        values[valuesById[59] = "kAppMessageTypeFinderTopic"] = 59;
        values[valuesById[71] = "kAppMessageTypeMegaVideoShare"] = 71;
        values[valuesById[60] = "kAppMessageTypeMmliveShare"] = 60;
        values[valuesById[62] = "kAppMessageTypePatMsg"] = 62;
        values[valuesById[63] = "kAppMessageTypeFinderLive"] = 63;
        values[valuesById[64] = "kAppMessageTypeFinderLiveBooking"] = 64;
        values[valuesById[65] = "kAppMessageTypeFinderLiveInvite"] = 65;
        values[valuesById[66] = "kAppMessageTypeGameLifeGift"] = 66;
        values[valuesById[69] = "kAppMessageTypeGameLifeCard"] = 69;
        values[valuesById[68] = "kAppMessageTypeLiteApp"] = 68;
        values[valuesById[73] = "kAppMessageTypeFinderColumnCard"] = 73;
        values[valuesById[72] = "kAppMessageTypeFinderFollowTopic"] = 72;
        return values;
    })();

    /**
     * AppBrandShareType enum.
     * @name alita.AppBrandShareType
     * @enum {number}
     * @property {number} kAppBrandShareTypeShareToFriendsNews=0 kAppBrandShareTypeShareToFriendsNews value
     * @property {number} kAppBrandShareTypeShareToFriendsCard=1 kAppBrandShareTypeShareToFriendsCard value
     * @property {number} kAppBrandShareTypePage=2 kAppBrandShareTypePage value
     * @property {number} kAppBrandShareTypePageWithShareTicket=3 kAppBrandShareTypePageWithShareTicket value
     */
    alita.AppBrandShareType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kAppBrandShareTypeShareToFriendsNews"] = 0;
        values[valuesById[1] = "kAppBrandShareTypeShareToFriendsCard"] = 1;
        values[valuesById[2] = "kAppBrandShareTypePage"] = 2;
        values[valuesById[3] = "kAppBrandShareTypePageWithShareTicket"] = 3;
        return values;
    })();

    /**
     * CdnFileType enum.
     * @name alita.CdnFileType
     * @enum {number}
     * @property {number} kMediaTypeAny=0 kMediaTypeAny value
     * @property {number} kMediaTypeFullSizeImage=1 kMediaTypeFullSizeImage value
     * @property {number} kMediaTypeImage=2 kMediaTypeImage value
     * @property {number} kMediaTypeThumbImage=3 kMediaTypeThumbImage value
     * @property {number} kMediaTypeVideo=4 kMediaTypeVideo value
     * @property {number} kMediaTypeSCVideo=54 kMediaTypeSCVideo value
     * @property {number} kMediaTypeFile=5 kMediaTypeFile value
     * @property {number} kMediaTypeTinyVideo=6 kMediaTypeTinyVideo value
     * @property {number} kMediaTypeBigFile=7 kMediaTypeBigFile value
     * @property {number} kMediaTypeBigFile_1G=9 kMediaTypeBigFile_1G value
     * @property {number} kMediaTypeActivityFile=10 kMediaTypeActivityFile value
     * @property {number} kMediaTypeBackupChatMsg=14 kMediaTypeBackupChatMsg value
     * @property {number} kMediaTypeBackupChatAudio=15 kMediaTypeBackupChatAudio value
     * @property {number} kMediaTypeWIMDownload=19 kMediaTypeWIMDownload value
     * @property {number} kMediaTypeSeeSeeVideo=90 kMediaTypeSeeSeeVideo value
     * @property {number} kMediaTypeFavoriteFile=10001 kMediaTypeFavoriteFile value
     * @property {number} kMediaTypeFavoriteVideo=10002 kMediaTypeFavoriteVideo value
     * @property {number} kMediaTypeFavoriteBigFile=10007 kMediaTypeFavoriteBigFile value
     * @property {number} kMediaTypeExposeImage=11000 kMediaTypeExposeImage value
     * @property {number} kMediaTypeBeatificFile=10011 kMediaTypeBeatificFile value
     * @property {number} kMediaTypeBackupFile=20001 kMediaTypeBackupFile value
     * @property {number} kMediaTypeFriends=20201 kMediaTypeFriends value
     * @property {number} kMediaTypeFriendsVideo=20202 kMediaTypeFriendsVideo value
     * @property {number} kMediaTypeFriendsADImageThumb=20204 kMediaTypeFriendsADImageThumb value
     * @property {number} kMediaTypeFriendsImageThumb=20205 kMediaTypeFriendsImageThumb value
     * @property {number} kMediaTypeFriendsVideoThumbImage=20250 kMediaTypeFriendsVideoThumbImage value
     * @property {number} kMediaTypeShop=20301 kMediaTypeShop value
     * @property {number} kMediaTypeNearEvent=20310 kMediaTypeNearEvent value
     * @property {number} kMediaTypeSmartHwPage=20321 kMediaTypeSmartHwPage value
     * @property {number} kMediaTypeAdVideo=20210 kMediaTypeAdVideo value
     * @property {number} kMediaTypeAppVideo=20302 kMediaTypeAppVideo value
     * @property {number} kMediaTypeAppFile=20303 kMediaTypeAppFile value
     * @property {number} kMediaTypeAppImageStorage=20304 kMediaTypeAppImageStorage value
     * @property {number} kMediaTypeHWDevice=20322 kMediaTypeHWDevice value
     * @property {number} kMediaTypeAppVideoThumb=20350 kMediaTypeAppVideoThumb value
     * @property {number} kMediaTypeEmojiNormal=20401 kMediaTypeEmojiNormal value
     * @property {number} kMediaTypeEmojiGIF=20402 kMediaTypeEmojiGIF value
     * @property {number} kMediaTypeEmojiWXAM=20403 kMediaTypeEmojiWXAM value
     * @property {number} kMediaLittleAppPacket=30001 kMediaLittleAppPacket value
     * @property {number} kMediaGamePacket=30002 kMediaGamePacket value
     * @property {number} kMediaTinkerPatch=30003 kMediaTinkerPatch value
     * @property {number} kMediaXWebRuntime=30004 kMediaXWebRuntime value
     * @property {number} kMediaXWebRuntimePatch=30005 kMediaXWebRuntimePatch value
     * @property {number} kMediaXWebConfig=30006 kMediaXWebConfig value
     * @property {number} kMediaGeneralResource=40001 kMediaGeneralResource value
     * @property {number} kMediaWAGameVideo=50001 kMediaWAGameVideo value
     */
    alita.CdnFileType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMediaTypeAny"] = 0;
        values[valuesById[1] = "kMediaTypeFullSizeImage"] = 1;
        values[valuesById[2] = "kMediaTypeImage"] = 2;
        values[valuesById[3] = "kMediaTypeThumbImage"] = 3;
        values[valuesById[4] = "kMediaTypeVideo"] = 4;
        values[valuesById[54] = "kMediaTypeSCVideo"] = 54;
        values[valuesById[5] = "kMediaTypeFile"] = 5;
        values[valuesById[6] = "kMediaTypeTinyVideo"] = 6;
        values[valuesById[7] = "kMediaTypeBigFile"] = 7;
        values[valuesById[9] = "kMediaTypeBigFile_1G"] = 9;
        values[valuesById[10] = "kMediaTypeActivityFile"] = 10;
        values[valuesById[14] = "kMediaTypeBackupChatMsg"] = 14;
        values[valuesById[15] = "kMediaTypeBackupChatAudio"] = 15;
        values[valuesById[19] = "kMediaTypeWIMDownload"] = 19;
        values[valuesById[90] = "kMediaTypeSeeSeeVideo"] = 90;
        values[valuesById[10001] = "kMediaTypeFavoriteFile"] = 10001;
        values[valuesById[10002] = "kMediaTypeFavoriteVideo"] = 10002;
        values[valuesById[10007] = "kMediaTypeFavoriteBigFile"] = 10007;
        values[valuesById[11000] = "kMediaTypeExposeImage"] = 11000;
        values[valuesById[10011] = "kMediaTypeBeatificFile"] = 10011;
        values[valuesById[20001] = "kMediaTypeBackupFile"] = 20001;
        values[valuesById[20201] = "kMediaTypeFriends"] = 20201;
        values[valuesById[20202] = "kMediaTypeFriendsVideo"] = 20202;
        values[valuesById[20204] = "kMediaTypeFriendsADImageThumb"] = 20204;
        values[valuesById[20205] = "kMediaTypeFriendsImageThumb"] = 20205;
        values[valuesById[20250] = "kMediaTypeFriendsVideoThumbImage"] = 20250;
        values[valuesById[20301] = "kMediaTypeShop"] = 20301;
        values[valuesById[20310] = "kMediaTypeNearEvent"] = 20310;
        values[valuesById[20321] = "kMediaTypeSmartHwPage"] = 20321;
        values[valuesById[20210] = "kMediaTypeAdVideo"] = 20210;
        values[valuesById[20302] = "kMediaTypeAppVideo"] = 20302;
        values[valuesById[20303] = "kMediaTypeAppFile"] = 20303;
        values[valuesById[20304] = "kMediaTypeAppImageStorage"] = 20304;
        values[valuesById[20322] = "kMediaTypeHWDevice"] = 20322;
        values[valuesById[20350] = "kMediaTypeAppVideoThumb"] = 20350;
        values[valuesById[20401] = "kMediaTypeEmojiNormal"] = 20401;
        values[valuesById[20402] = "kMediaTypeEmojiGIF"] = 20402;
        values[valuesById[20403] = "kMediaTypeEmojiWXAM"] = 20403;
        values[valuesById[30001] = "kMediaLittleAppPacket"] = 30001;
        values[valuesById[30002] = "kMediaGamePacket"] = 30002;
        values[valuesById[30003] = "kMediaTinkerPatch"] = 30003;
        values[valuesById[30004] = "kMediaXWebRuntime"] = 30004;
        values[valuesById[30005] = "kMediaXWebRuntimePatch"] = 30005;
        values[valuesById[30006] = "kMediaXWebConfig"] = 30006;
        values[valuesById[40001] = "kMediaGeneralResource"] = 40001;
        values[valuesById[50001] = "kMediaWAGameVideo"] = 50001;
        return values;
    })();

    /**
     * MessageDownloadType enum.
     * @name alita.MessageDownloadType
     * @enum {number}
     * @property {number} kMessageDownloadTypeNone=0 kMessageDownloadTypeNone value
     * @property {number} kMessageDownloadTypeImageMessageThumb=10 kMessageDownloadTypeImageMessageThumb value
     * @property {number} kMessageDownloadTypeImageMessageMiddle=11 kMessageDownloadTypeImageMessageMiddle value
     * @property {number} kMessageDownloadTypeImageMessageFullSize=12 kMessageDownloadTypeImageMessageFullSize value
     * @property {number} kMessageDownloadTypeVoiceMessageVoice=20 kMessageDownloadTypeVoiceMessageVoice value
     * @property {number} kMessageDownloadTypeEmojiMessageEmoji=30 kMessageDownloadTypeEmojiMessageEmoji value
     * @property {number} kMessageDownloadTypeVideoMessageThumb=40 kMessageDownloadTypeVideoMessageThumb value
     * @property {number} kMessageDownloadTypeVideoMessageVideo=41 kMessageDownloadTypeVideoMessageVideo value
     * @property {number} kMessageDownloadTypeAppMessageAppBrandThumb=50 kMessageDownloadTypeAppMessageAppBrandThumb value
     * @property {number} kMessageDownloadTypeAppMessageFile=51 kMessageDownloadTypeAppMessageFile value
     * @property {number} kMessageDownloadTypeAppMessageEmoji=52 kMessageDownloadTypeAppMessageEmoji value
     * @property {number} kMessageDownloadTypeAppMessageUrlThumb=53 kMessageDownloadTypeAppMessageUrlThumb value
     * @property {number} kMessageDownloadTypeAppMessageRecord=54 kMessageDownloadTypeAppMessageRecord value
     */
    alita.MessageDownloadType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMessageDownloadTypeNone"] = 0;
        values[valuesById[10] = "kMessageDownloadTypeImageMessageThumb"] = 10;
        values[valuesById[11] = "kMessageDownloadTypeImageMessageMiddle"] = 11;
        values[valuesById[12] = "kMessageDownloadTypeImageMessageFullSize"] = 12;
        values[valuesById[20] = "kMessageDownloadTypeVoiceMessageVoice"] = 20;
        values[valuesById[30] = "kMessageDownloadTypeEmojiMessageEmoji"] = 30;
        values[valuesById[40] = "kMessageDownloadTypeVideoMessageThumb"] = 40;
        values[valuesById[41] = "kMessageDownloadTypeVideoMessageVideo"] = 41;
        values[valuesById[50] = "kMessageDownloadTypeAppMessageAppBrandThumb"] = 50;
        values[valuesById[51] = "kMessageDownloadTypeAppMessageFile"] = 51;
        values[valuesById[52] = "kMessageDownloadTypeAppMessageEmoji"] = 52;
        values[valuesById[53] = "kMessageDownloadTypeAppMessageUrlThumb"] = 53;
        values[valuesById[54] = "kMessageDownloadTypeAppMessageRecord"] = 54;
        return values;
    })();

    /**
     * MessageDownloadGeneralType enum.
     * @name alita.MessageDownloadGeneralType
     * @enum {number}
     * @property {number} kMessageDownloadGeneralTypeGeneral=0 kMessageDownloadGeneralTypeGeneral value
     * @property {number} kMessageDownloadGeneralTypeNone=1 kMessageDownloadGeneralTypeNone value
     */
    alita.MessageDownloadGeneralType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMessageDownloadGeneralTypeGeneral"] = 0;
        values[valuesById[1] = "kMessageDownloadGeneralTypeNone"] = 1;
        return values;
    })();

    /**
     * VoiceMessageMediaFormat enum.
     * @name alita.VoiceMessageMediaFormat
     * @enum {number}
     * @property {number} kVoiceMessageMediaFormatAmr=0 kVoiceMessageMediaFormatAmr value
     * @property {number} kVoiceMessageMediaFormatSpeex=1 kVoiceMessageMediaFormatSpeex value
     * @property {number} kVoiceMessageMediaFormatMp3=2 kVoiceMessageMediaFormatMp3 value
     * @property {number} kVoiceMessageMediaFormatWave=3 kVoiceMessageMediaFormatWave value
     * @property {number} kVoiceMessageMediaFormatSilk=4 kVoiceMessageMediaFormatSilk value
     */
    alita.VoiceMessageMediaFormat = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kVoiceMessageMediaFormatAmr"] = 0;
        values[valuesById[1] = "kVoiceMessageMediaFormatSpeex"] = 1;
        values[valuesById[2] = "kVoiceMessageMediaFormatMp3"] = 2;
        values[valuesById[3] = "kVoiceMessageMediaFormatWave"] = 3;
        values[valuesById[4] = "kVoiceMessageMediaFormatSilk"] = 4;
        return values;
    })();

    /**
     * StatusNotifyMessageType enum.
     * @name alita.StatusNotifyMessageType
     * @enum {number}
     * @property {number} kStatusNotifyMessageTypeUnknown=0 kStatusNotifyMessageTypeUnknown value
     * @property {number} kStatusNotifyMessageTypeSendCommand=11 kStatusNotifyMessageTypeSendCommand value
     */
    alita.StatusNotifyMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kStatusNotifyMessageTypeUnknown"] = 0;
        values[valuesById[11] = "kStatusNotifyMessageTypeSendCommand"] = 11;
        return values;
    })();

    /**
     * StatusNotifySendCommand enum.
     * @name alita.StatusNotifySendCommand
     * @enum {number}
     * @property {number} kStatusNotifySendCommandUnknown=0 kStatusNotifySendCommandUnknown value
     * @property {number} kStatusNotifySendCommandHandOffMaster=1 kStatusNotifySendCommandHandOffMaster value
     */
    alita.StatusNotifySendCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kStatusNotifySendCommandUnknown"] = 0;
        values[valuesById[1] = "kStatusNotifySendCommandHandOffMaster"] = 1;
        return values;
    })();

    /**
     * StatusNotifyHandOffDataType enum.
     * @name alita.StatusNotifyHandOffDataType
     * @enum {number}
     * @property {number} kStatusNotifyHandOffDataTypeUnknown=0 kStatusNotifyHandOffDataTypeUnknown value
     * @property {number} kStatusNotifyHandOffDataTypeFile=1 kStatusNotifyHandOffDataTypeFile value
     * @property {number} kStatusNotifyHandOffDataTypeUrl=2 kStatusNotifyHandOffDataTypeUrl value
     * @property {number} kStatusNotifyHandOffDataTypeMiniProgram=3 kStatusNotifyHandOffDataTypeMiniProgram value
     * @property {number} kStatusNotifyHandOffDataTypeMiniGame=4 kStatusNotifyHandOffDataTypeMiniGame value
     * @property {number} kStatusNotifyHandOffDataTypeWsVideoFlow=5 kStatusNotifyHandOffDataTypeWsVideoFlow value
     */
    alita.StatusNotifyHandOffDataType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kStatusNotifyHandOffDataTypeUnknown"] = 0;
        values[valuesById[1] = "kStatusNotifyHandOffDataTypeFile"] = 1;
        values[valuesById[2] = "kStatusNotifyHandOffDataTypeUrl"] = 2;
        values[valuesById[3] = "kStatusNotifyHandOffDataTypeMiniProgram"] = 3;
        values[valuesById[4] = "kStatusNotifyHandOffDataTypeMiniGame"] = 4;
        values[valuesById[5] = "kStatusNotifyHandOffDataTypeWsVideoFlow"] = 5;
        return values;
    })();

    /**
     * StatusNotifyHandOffType enum.
     * @name alita.StatusNotifyHandOffType
     * @enum {number}
     * @property {number} kStatusNotifyHandOffTypeUnknown=0 kStatusNotifyHandOffTypeUnknown value
     * @property {number} kStatusNotifyHandOffTypeHandOff=1 kStatusNotifyHandOffTypeHandOff value
     * @property {number} kStatusNotifyHandOffTypeFloatWindow=2 kStatusNotifyHandOffTypeFloatWindow value
     */
    alita.StatusNotifyHandOffType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kStatusNotifyHandOffTypeUnknown"] = 0;
        values[valuesById[1] = "kStatusNotifyHandOffTypeHandOff"] = 1;
        values[valuesById[2] = "kStatusNotifyHandOffTypeFloatWindow"] = 2;
        return values;
    })();

    /**
     * StatusNotifyHandOffOpCode enum.
     * @name alita.StatusNotifyHandOffOpCode
     * @enum {number}
     * @property {number} kStatusNotifyHandOffOpCodeUnknown=0 kStatusNotifyHandOffOpCodeUnknown value
     * @property {number} kStatusNotifyHandOffOpCodeAdd=1 kStatusNotifyHandOffOpCodeAdd value
     * @property {number} kStatusNotifyHandOffOpCodeDel=2 kStatusNotifyHandOffOpCodeDel value
     * @property {number} kStatusNotifyHandOffOpCodeMod=3 kStatusNotifyHandOffOpCodeMod value
     * @property {number} kStatusNotifyHandOffOpCodeAllList=4 kStatusNotifyHandOffOpCodeAllList value
     * @property {number} kStatusNotifyHandOffOpCodeExpired=5 kStatusNotifyHandOffOpCodeExpired value
     * @property {number} kStatusNotifyHandOffOpCodeGetAllList=6 kStatusNotifyHandOffOpCodeGetAllList value
     * @property {number} kStatusNotifyHandOffOpCodeUploading=7 kStatusNotifyHandOffOpCodeUploading value
     * @property {number} kStatusNotifyHandOffOpCodeUploadFailed=8 kStatusNotifyHandOffOpCodeUploadFailed value
     * @property {number} kStatusNotifyHandOffOpCodeCancelUpload=9 kStatusNotifyHandOffOpCodeCancelUpload value
     */
    alita.StatusNotifyHandOffOpCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kStatusNotifyHandOffOpCodeUnknown"] = 0;
        values[valuesById[1] = "kStatusNotifyHandOffOpCodeAdd"] = 1;
        values[valuesById[2] = "kStatusNotifyHandOffOpCodeDel"] = 2;
        values[valuesById[3] = "kStatusNotifyHandOffOpCodeMod"] = 3;
        values[valuesById[4] = "kStatusNotifyHandOffOpCodeAllList"] = 4;
        values[valuesById[5] = "kStatusNotifyHandOffOpCodeExpired"] = 5;
        values[valuesById[6] = "kStatusNotifyHandOffOpCodeGetAllList"] = 6;
        values[valuesById[7] = "kStatusNotifyHandOffOpCodeUploading"] = 7;
        values[valuesById[8] = "kStatusNotifyHandOffOpCodeUploadFailed"] = 8;
        values[valuesById[9] = "kStatusNotifyHandOffOpCodeCancelUpload"] = 9;
        return values;
    })();

    /**
     * StatusNotifyHandOffFileStatus enum.
     * @name alita.StatusNotifyHandOffFileStatus
     * @enum {number}
     * @property {number} kStatusNotifyHandOffFileStatusUnknown=0 kStatusNotifyHandOffFileStatusUnknown value
     * @property {number} kStatusNotifyHandOffFileStatusDownloaded=1 kStatusNotifyHandOffFileStatusDownloaded value
     * @property {number} kStatusNotifyHandOffFileStatusNotDownloaded=2 kStatusNotifyHandOffFileStatusNotDownloaded value
     * @property {number} kStatusNotifyHandOffFileStatusExpired=3 kStatusNotifyHandOffFileStatusExpired value
     */
    alita.StatusNotifyHandOffFileStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kStatusNotifyHandOffFileStatusUnknown"] = 0;
        values[valuesById[1] = "kStatusNotifyHandOffFileStatusDownloaded"] = 1;
        values[valuesById[2] = "kStatusNotifyHandOffFileStatusNotDownloaded"] = 2;
        values[valuesById[3] = "kStatusNotifyHandOffFileStatusExpired"] = 3;
        return values;
    })();

    /**
     * StatusNotifyHandOffSource enum.
     * @name alita.StatusNotifyHandOffSource
     * @enum {number}
     * @property {number} kStatusNotifyHandOffSourceUnknown=0 kStatusNotifyHandOffSourceUnknown value
     * @property {number} kStatusNotifyHandOffSourceMsg=1 kStatusNotifyHandOffSourceMsg value
     * @property {number} kStatusNotifyHandOffSourceMessageFav=2 kStatusNotifyHandOffSourceMessageFav value
     */
    alita.StatusNotifyHandOffSource = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kStatusNotifyHandOffSourceUnknown"] = 0;
        values[valuesById[1] = "kStatusNotifyHandOffSourceMsg"] = 1;
        values[valuesById[2] = "kStatusNotifyHandOffSourceMessageFav"] = 2;
        return values;
    })();

    /**
     * UsernameType enum.
     * @name alita.UsernameType
     * @enum {number}
     * @property {number} kUsernameTypeUnknown=0 kUsernameTypeUnknown value
     * @property {number} kUsernameTypeEncode=1 kUsernameTypeEncode value
     * @property {number} kUsernameTypeChatRoom=2 kUsernameTypeChatRoom value
     * @property {number} kUsernameTypeLbsRoom=3 kUsernameTypeLbsRoom value
     * @property {number} kUsernameTypeGroupCard=4 kUsernameTypeGroupCard value
     * @property {number} kUsernameTypeQQContact=5 kUsernameTypeQQContact value
     * @property {number} kUsernameTypeSXContact=6 kUsernameTypeSXContact value
     * @property {number} kUsernameTypeBottleContact=7 kUsernameTypeBottleContact value
     * @property {number} kUsernameTypeFBFriend=8 kUsernameTypeFBFriend value
     * @property {number} kUsernameTypeBrandContact=9 kUsernameTypeBrandContact value
     * @property {number} kUsernameTypeOpenIMChatRoom=10 kUsernameTypeOpenIMChatRoom value
     * @property {number} kUsernameTypeOpenIMContact=11 kUsernameTypeOpenIMContact value
     */
    alita.UsernameType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kUsernameTypeUnknown"] = 0;
        values[valuesById[1] = "kUsernameTypeEncode"] = 1;
        values[valuesById[2] = "kUsernameTypeChatRoom"] = 2;
        values[valuesById[3] = "kUsernameTypeLbsRoom"] = 3;
        values[valuesById[4] = "kUsernameTypeGroupCard"] = 4;
        values[valuesById[5] = "kUsernameTypeQQContact"] = 5;
        values[valuesById[6] = "kUsernameTypeSXContact"] = 6;
        values[valuesById[7] = "kUsernameTypeBottleContact"] = 7;
        values[valuesById[8] = "kUsernameTypeFBFriend"] = 8;
        values[valuesById[9] = "kUsernameTypeBrandContact"] = 9;
        values[valuesById[10] = "kUsernameTypeOpenIMChatRoom"] = 10;
        values[valuesById[11] = "kUsernameTypeOpenIMContact"] = 11;
        return values;
    })();

    /**
     * ChatRoomMemberFlag enum.
     * @name alita.ChatRoomMemberFlag
     * @enum {number}
     * @property {number} kChatRoomMemberFlagNone=0 kChatRoomMemberFlagNone value
     * @property {number} kChatRoomMemberFlagDisplayName=1 kChatRoomMemberFlagDisplayName value
     * @property {number} kChatRoomMemberFlagUndeliver=2 kChatRoomMemberFlagUndeliver value
     * @property {number} kChatRoomMemberFlagInroomVerify=4 kChatRoomMemberFlagInroomVerify value
     * @property {number} kChatRoomMemberFlagContact=8 kChatRoomMemberFlagContact value
     * @property {number} kChatRoomMemberFlagOverhead=16 kChatRoomMemberFlagOverhead value
     */
    alita.ChatRoomMemberFlag = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kChatRoomMemberFlagNone"] = 0;
        values[valuesById[1] = "kChatRoomMemberFlagDisplayName"] = 1;
        values[valuesById[2] = "kChatRoomMemberFlagUndeliver"] = 2;
        values[valuesById[4] = "kChatRoomMemberFlagInroomVerify"] = 4;
        values[valuesById[8] = "kChatRoomMemberFlagContact"] = 8;
        values[valuesById[16] = "kChatRoomMemberFlagOverhead"] = 16;
        return values;
    })();

    /**
     * EmojiPanelType enum.
     * @name alita.EmojiPanelType
     * @enum {number}
     * @property {number} kEmojiPanelTypeCustomNormal=0 kEmojiPanelTypeCustomNormal value
     * @property {number} kEmojiPanelTypeCustomCapture=1 kEmojiPanelTypeCustomCapture value
     * @property {number} kEmojiPanelTypeStore=2 kEmojiPanelTypeStore value
     * @property {number} kEmojiPanelTypeSimilar=3 kEmojiPanelTypeSimilar value
     * @property {number} kEmojiPanelTypeBuiltin=999 kEmojiPanelTypeBuiltin value
     */
    alita.EmojiPanelType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kEmojiPanelTypeCustomNormal"] = 0;
        values[valuesById[1] = "kEmojiPanelTypeCustomCapture"] = 1;
        values[valuesById[2] = "kEmojiPanelTypeStore"] = 2;
        values[valuesById[3] = "kEmojiPanelTypeSimilar"] = 3;
        values[valuesById[999] = "kEmojiPanelTypeBuiltin"] = 999;
        return values;
    })();

    /**
     * EmojiType enum.
     * @name alita.EmojiType
     * @enum {number}
     * @property {number} kEmojiTypeUnknown=0 kEmojiTypeUnknown value
     * @property {number} kEmojiTypePng=1 kEmojiTypePng value
     * @property {number} kEmojiTypeGif=2 kEmojiTypeGif value
     * @property {number} kEmojiTypeJpg=3 kEmojiTypeJpg value
     * @property {number} kEmojiTypeText=4 kEmojiTypeText value
     * @property {number} kEmojiTypeAppEmojiGif=10 kEmojiTypeAppEmojiGif value
     * @property {number} kEmojiTypeAppEmojiJpg=11 kEmojiTypeAppEmojiJpg value
     */
    alita.EmojiType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kEmojiTypeUnknown"] = 0;
        values[valuesById[1] = "kEmojiTypePng"] = 1;
        values[valuesById[2] = "kEmojiTypeGif"] = 2;
        values[valuesById[3] = "kEmojiTypeJpg"] = 3;
        values[valuesById[4] = "kEmojiTypeText"] = 4;
        values[valuesById[10] = "kEmojiTypeAppEmojiGif"] = 10;
        values[valuesById[11] = "kEmojiTypeAppEmojiJpg"] = 11;
        return values;
    })();

    /**
     * OrderType enum.
     * @name alita.OrderType
     * @enum {number}
     * @property {number} kOrderTypeDefault=0 kOrderTypeDefault value
     * @property {number} kOrderTypeDesc=1 kOrderTypeDesc value
     * @property {number} kOrderTypeAsc=2 kOrderTypeAsc value
     */
    alita.OrderType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kOrderTypeDefault"] = 0;
        values[valuesById[1] = "kOrderTypeDesc"] = 1;
        values[valuesById[2] = "kOrderTypeAsc"] = 2;
        return values;
    })();

    /**
     * ContactAddScene enum.
     * @name alita.ContactAddScene
     * @enum {number}
     * @property {number} kContactAddScenePassiveBase=1000000 kContactAddScenePassiveBase value
     * @property {number} kContactAddSceneSearchQQ=1 kContactAddSceneSearchQQ value
     * @property {number} kContactAddSceneSearchEmail=2 kContactAddSceneSearchEmail value
     * @property {number} kContactAddSceneSearchWeixin=3 kContactAddSceneSearchWeixin value
     * @property {number} kContactAddScenePfQQ=4 kContactAddScenePfQQ value
     * @property {number} kContactAddScenePfEmail=5 kContactAddScenePfEmail value
     * @property {number} kContactAddScenePfContact=6 kContactAddScenePfContact value
     * @property {number} kContactAddScenePfWeixin=7 kContactAddScenePfWeixin value
     * @property {number} kContactAddScenePfGroup=8 kContactAddScenePfGroup value
     * @property {number} kContactAddScenePfUnknown=9 kContactAddScenePfUnknown value
     * @property {number} kContactAddScenePfMobile=10 kContactAddScenePfMobile value
     * @property {number} kContactAddScenePfMobileEmail=11 kContactAddScenePfMobileEmail value
     * @property {number} kContactAddSceneViewQQ=12 kContactAddSceneViewQQ value
     * @property {number} kContactAddSceneViewMobile=13 kContactAddSceneViewMobile value
     * @property {number} kContactAddSceneChatroom=14 kContactAddSceneChatroom value
     * @property {number} kContactAddSceneSearchPhone=15 kContactAddSceneSearchPhone value
     * @property {number} kContactAddSceneCorpEmail=16 kContactAddSceneCorpEmail value
     * @property {number} kContactAddSceneSendCard=17 kContactAddSceneSendCard value
     * @property {number} kContactAddSceneLBS=18 kContactAddSceneLBS value
     * @property {number} kContactAddScenePfMobileReverse=21 kContactAddScenePfMobileReverse value
     * @property {number} kContactAddScenePfShakePhonePair=22 kContactAddScenePfShakePhonePair value
     * @property {number} kContactAddScenePfShakePhoneGroup=23 kContactAddScenePfShakePhoneGroup value
     * @property {number} kContactAddScenePfShakePhoneOppSex=24 kContactAddScenePfShakePhoneOppSex value
     * @property {number} kContactAddSceneBottle=25 kContactAddSceneBottle value
     * @property {number} kContactAddSceneShakeScene1=26 kContactAddSceneShakeScene1 value
     * @property {number} kContactAddSceneShakeScene2=27 kContactAddSceneShakeScene2 value
     * @property {number} kContactAddSceneShakeScene3=28 kContactAddSceneShakeScene3 value
     * @property {number} kContactAddSceneShakeScene4=29 kContactAddSceneShakeScene4 value
     * @property {number} kContactAddSceneQRCode=30 kContactAddSceneQRCode value
     * @property {number} kContactAddSceneFacebook=31 kContactAddSceneFacebook value
     * @property {number} kContactAddSceneSns=32 kContactAddSceneSns value
     * @property {number} kContactAddSceneWeb=33 kContactAddSceneWeb value
     * @property {number} kContactAddSceneBrandQA=34 kContactAddSceneBrandQA value
     * @property {number} kContactAddSceneFuzzySearch=35 kContactAddSceneFuzzySearch value
     * @property {number} kContactAddSceneLogoWall=36 kContactAddSceneLogoWall value
     * @property {number} kContactAddSceneTimeLineBiz=37 kContactAddSceneTimeLineBiz value
     * @property {number} kContactAddScenePromoteMsg=38 kContactAddScenePromoteMsg value
     * @property {number} kContactAddSceneSearchBrandBrand=39 kContactAddSceneSearchBrandBrand value
     * @property {number} kContactAddScenePromoteBizCard=41 kContactAddScenePromoteBizCard value
     * @property {number} kContactAddSceneWebPageInside=42 kContactAddSceneWebPageInside value
     * @property {number} kContactAddSceneWebPageTopButton=43 kContactAddSceneWebPageTopButton value
     * @property {number} kContactAddSceneLBSRoom=44 kContactAddSceneLBSRoom value
     * @property {number} kContactAddSceneScanImage=45 kContactAddSceneScanImage value
     * @property {number} kContactAddSceneScanImageBook=47 kContactAddSceneScanImageBook value
     * @property {number} kContactAddSceneRadarSearch=48 kContactAddSceneRadarSearch value
     * @property {number} kContactAddSceneScanBarCode=49 kContactAddSceneScanBarCode value
     * @property {number} kContactAddSceneRegAddMFriend=52 kContactAddSceneRegAddMFriend value
     * @property {number} kContactAddSceneSearchBrandService=53 kContactAddSceneSearchBrandService value
     * @property {number} kContactAddSceneSearchBrandSubscr=54 kContactAddSceneSearchBrandSubscr value
     * @property {number} kContactAddSceneRecommendBrand=55 kContactAddSceneRecommendBrand value
     * @property {number} kContactAddSceneInterestedBrand=56 kContactAddSceneInterestedBrand value
     * @property {number} kContactAddSceneFtsSearchBrand=57 kContactAddSceneFtsSearchBrand value
     * @property {number} kContactAddSceneViewGoogleContactList=58 kContactAddSceneViewGoogleContactList value
     * @property {number} kContactAddSceneViewGoogleContactAccount=59 kContactAddSceneViewGoogleContactAccount value
     * @property {number} kContactAddSceneViewGoogleContactAsyncRecommend=60 kContactAddSceneViewGoogleContactAsyncRecommend value
     * @property {number} kContactAddSceneTv=67 kContactAddSceneTv value
     * @property {number} kContactAddSceneSubscribeBizApp=68 kContactAddSceneSubscribeBizApp value
     * @property {number} kContactAddSceneSubscribeBizH5=69 kContactAddSceneSubscribeBizH5 value
     * @property {number} kContactAddSceneLinkedinContactList=76 kContactAddSceneLinkedinContactList value
     * @property {number} kContactAddSceneFromTimeLineAdHeadImage=78 kContactAddSceneFromTimeLineAdHeadImage value
     * @property {number} kContactAddSceneFromTimeLineAdNickname=79 kContactAddSceneFromTimeLineAdNickname value
     * @property {number} kContactAddSceneFromTempSession=81 kContactAddSceneFromTempSession value
     * @property {number} kContactAddSceneWebSearchRecommend=85 kContactAddSceneWebSearchRecommend value
     * @property {number} kContactAddSceneWechatoutContactList=86 kContactAddSceneWechatoutContactList value
     * @property {number} kContactAddSceneWebSearchHomePage=87 kContactAddSceneWebSearchHomePage value
     * @property {number} kContactAddSceneWebSearchDetailPage=88 kContactAddSceneWebSearchDetailPage value
     * @property {number} kContactAddSceneWebSearchRecommendHotWord=89 kContactAddSceneWebSearchRecommendHotWord value
     * @property {number} kContactAddSceneFromBizTimeLine=90 kContactAddSceneFromBizTimeLine value
     * @property {number} kContactAddSceneJsApiQuicklyAdd=91 kContactAddSceneJsApiQuicklyAdd value
     * @property {number} kContactAddSceneFromTempSessionShakeTvHistory=92 kContactAddSceneFromTempSessionShakeTvHistory value
     * @property {number} kContactAddSceneFromTempSessionShakeTv=93 kContactAddSceneFromTempSessionShakeTv value
     * @property {number} kContactAddSceneFromTempSessionShakeTvWeb=94 kContactAddSceneFromTempSessionShakeTvWeb value
     * @property {number} kContactAddSceneFriendReadAppMsgProfile=95 kContactAddSceneFriendReadAppMsgProfile value
     * @property {number} kContactAddSceneAccessVerify=96 kContactAddSceneAccessVerify value
     * @property {number} kContactAddSceneBizFromMpDetailPage=152 kContactAddSceneBizFromMpDetailPage value
     * @property {number} kContactAddSceneBizFromMpPageMenu=153 kContactAddSceneBizFromMpPageMenu value
     * @property {number} kContactAddSceneBizFromWebViewTopBar=154 kContactAddSceneBizFromWebViewTopBar value
     * @property {number} kContactAddSceneAddKidsShake=155 kContactAddSceneAddKidsShake value
     * @property {number} kContactAddSceneAddKidsGuardian=156 kContactAddSceneAddKidsGuardian value
     * @property {number} kContactAddSceneBizFromBrandRejectMsg=158 kContactAddSceneBizFromBrandRejectMsg value
     * @property {number} kContactAddSceneBizFromRecCard=160 kContactAddSceneBizFromRecCard value
     * @property {number} kContactAddSceneBizFromMpVideo=163 kContactAddSceneBizFromMpVideo value
     * @property {number} kContactAddSceneBizFromWebViewMenuTop=173 kContactAddSceneBizFromWebViewMenuTop value
     * @property {number} kContactAddSceneBizFromUnFocuse=174 kContactAddSceneBizFromUnFocuse value
     * @property {number} kContactAddSceneBizFromVideoFullScreen=179 kContactAddSceneBizFromVideoFullScreen value
     */
    alita.ContactAddScene = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1000000] = "kContactAddScenePassiveBase"] = 1000000;
        values[valuesById[1] = "kContactAddSceneSearchQQ"] = 1;
        values[valuesById[2] = "kContactAddSceneSearchEmail"] = 2;
        values[valuesById[3] = "kContactAddSceneSearchWeixin"] = 3;
        values[valuesById[4] = "kContactAddScenePfQQ"] = 4;
        values[valuesById[5] = "kContactAddScenePfEmail"] = 5;
        values[valuesById[6] = "kContactAddScenePfContact"] = 6;
        values[valuesById[7] = "kContactAddScenePfWeixin"] = 7;
        values[valuesById[8] = "kContactAddScenePfGroup"] = 8;
        values[valuesById[9] = "kContactAddScenePfUnknown"] = 9;
        values[valuesById[10] = "kContactAddScenePfMobile"] = 10;
        values[valuesById[11] = "kContactAddScenePfMobileEmail"] = 11;
        values[valuesById[12] = "kContactAddSceneViewQQ"] = 12;
        values[valuesById[13] = "kContactAddSceneViewMobile"] = 13;
        values[valuesById[14] = "kContactAddSceneChatroom"] = 14;
        values[valuesById[15] = "kContactAddSceneSearchPhone"] = 15;
        values[valuesById[16] = "kContactAddSceneCorpEmail"] = 16;
        values[valuesById[17] = "kContactAddSceneSendCard"] = 17;
        values[valuesById[18] = "kContactAddSceneLBS"] = 18;
        values[valuesById[21] = "kContactAddScenePfMobileReverse"] = 21;
        values[valuesById[22] = "kContactAddScenePfShakePhonePair"] = 22;
        values[valuesById[23] = "kContactAddScenePfShakePhoneGroup"] = 23;
        values[valuesById[24] = "kContactAddScenePfShakePhoneOppSex"] = 24;
        values[valuesById[25] = "kContactAddSceneBottle"] = 25;
        values[valuesById[26] = "kContactAddSceneShakeScene1"] = 26;
        values[valuesById[27] = "kContactAddSceneShakeScene2"] = 27;
        values[valuesById[28] = "kContactAddSceneShakeScene3"] = 28;
        values[valuesById[29] = "kContactAddSceneShakeScene4"] = 29;
        values[valuesById[30] = "kContactAddSceneQRCode"] = 30;
        values[valuesById[31] = "kContactAddSceneFacebook"] = 31;
        values[valuesById[32] = "kContactAddSceneSns"] = 32;
        values[valuesById[33] = "kContactAddSceneWeb"] = 33;
        values[valuesById[34] = "kContactAddSceneBrandQA"] = 34;
        values[valuesById[35] = "kContactAddSceneFuzzySearch"] = 35;
        values[valuesById[36] = "kContactAddSceneLogoWall"] = 36;
        values[valuesById[37] = "kContactAddSceneTimeLineBiz"] = 37;
        values[valuesById[38] = "kContactAddScenePromoteMsg"] = 38;
        values[valuesById[39] = "kContactAddSceneSearchBrandBrand"] = 39;
        values[valuesById[41] = "kContactAddScenePromoteBizCard"] = 41;
        values[valuesById[42] = "kContactAddSceneWebPageInside"] = 42;
        values[valuesById[43] = "kContactAddSceneWebPageTopButton"] = 43;
        values[valuesById[44] = "kContactAddSceneLBSRoom"] = 44;
        values[valuesById[45] = "kContactAddSceneScanImage"] = 45;
        values[valuesById[47] = "kContactAddSceneScanImageBook"] = 47;
        values[valuesById[48] = "kContactAddSceneRadarSearch"] = 48;
        values[valuesById[49] = "kContactAddSceneScanBarCode"] = 49;
        values[valuesById[52] = "kContactAddSceneRegAddMFriend"] = 52;
        values[valuesById[53] = "kContactAddSceneSearchBrandService"] = 53;
        values[valuesById[54] = "kContactAddSceneSearchBrandSubscr"] = 54;
        values[valuesById[55] = "kContactAddSceneRecommendBrand"] = 55;
        values[valuesById[56] = "kContactAddSceneInterestedBrand"] = 56;
        values[valuesById[57] = "kContactAddSceneFtsSearchBrand"] = 57;
        values[valuesById[58] = "kContactAddSceneViewGoogleContactList"] = 58;
        values[valuesById[59] = "kContactAddSceneViewGoogleContactAccount"] = 59;
        values[valuesById[60] = "kContactAddSceneViewGoogleContactAsyncRecommend"] = 60;
        values[valuesById[67] = "kContactAddSceneTv"] = 67;
        values[valuesById[68] = "kContactAddSceneSubscribeBizApp"] = 68;
        values[valuesById[69] = "kContactAddSceneSubscribeBizH5"] = 69;
        values[valuesById[76] = "kContactAddSceneLinkedinContactList"] = 76;
        values[valuesById[78] = "kContactAddSceneFromTimeLineAdHeadImage"] = 78;
        values[valuesById[79] = "kContactAddSceneFromTimeLineAdNickname"] = 79;
        values[valuesById[81] = "kContactAddSceneFromTempSession"] = 81;
        values[valuesById[85] = "kContactAddSceneWebSearchRecommend"] = 85;
        values[valuesById[86] = "kContactAddSceneWechatoutContactList"] = 86;
        values[valuesById[87] = "kContactAddSceneWebSearchHomePage"] = 87;
        values[valuesById[88] = "kContactAddSceneWebSearchDetailPage"] = 88;
        values[valuesById[89] = "kContactAddSceneWebSearchRecommendHotWord"] = 89;
        values[valuesById[90] = "kContactAddSceneFromBizTimeLine"] = 90;
        values[valuesById[91] = "kContactAddSceneJsApiQuicklyAdd"] = 91;
        values[valuesById[92] = "kContactAddSceneFromTempSessionShakeTvHistory"] = 92;
        values[valuesById[93] = "kContactAddSceneFromTempSessionShakeTv"] = 93;
        values[valuesById[94] = "kContactAddSceneFromTempSessionShakeTvWeb"] = 94;
        values[valuesById[95] = "kContactAddSceneFriendReadAppMsgProfile"] = 95;
        values[valuesById[96] = "kContactAddSceneAccessVerify"] = 96;
        values[valuesById[152] = "kContactAddSceneBizFromMpDetailPage"] = 152;
        values[valuesById[153] = "kContactAddSceneBizFromMpPageMenu"] = 153;
        values[valuesById[154] = "kContactAddSceneBizFromWebViewTopBar"] = 154;
        values[valuesById[155] = "kContactAddSceneAddKidsShake"] = 155;
        values[valuesById[156] = "kContactAddSceneAddKidsGuardian"] = 156;
        values[valuesById[158] = "kContactAddSceneBizFromBrandRejectMsg"] = 158;
        values[valuesById[160] = "kContactAddSceneBizFromRecCard"] = 160;
        values[valuesById[163] = "kContactAddSceneBizFromMpVideo"] = 163;
        values[valuesById[173] = "kContactAddSceneBizFromWebViewMenuTop"] = 173;
        values[valuesById[174] = "kContactAddSceneBizFromUnFocuse"] = 174;
        values[valuesById[179] = "kContactAddSceneBizFromVideoFullScreen"] = 179;
        return values;
    })();

    /**
     * UserAttrVerifyFlag enum.
     * @name alita.UserAttrVerifyFlag
     * @enum {number}
     * @property {number} kUserAttrVerifyFlagBiz=1 kUserAttrVerifyFlagBiz value
     * @property {number} kUserAttrVerifyFlagFamous=2 kUserAttrVerifyFlagFamous value
     * @property {number} kUserAttrVerifyFlagBizBig=4 kUserAttrVerifyFlagBizBig value
     * @property {number} kUserAttrVerifyFlagBizBrand=8 kUserAttrVerifyFlagBizBrand value
     * @property {number} kUserAttrVerifyFlagBizVerified=16 kUserAttrVerifyFlagBizVerified value
     * @property {number} kUserAttrVerifyFlagBizPersonalVerified=64 kUserAttrVerifyFlagBizPersonalVerified value
     */
    alita.UserAttrVerifyFlag = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "kUserAttrVerifyFlagBiz"] = 1;
        values[valuesById[2] = "kUserAttrVerifyFlagFamous"] = 2;
        values[valuesById[4] = "kUserAttrVerifyFlagBizBig"] = 4;
        values[valuesById[8] = "kUserAttrVerifyFlagBizBrand"] = 8;
        values[valuesById[16] = "kUserAttrVerifyFlagBizVerified"] = 16;
        values[valuesById[64] = "kUserAttrVerifyFlagBizPersonalVerified"] = 64;
        return values;
    })();

    /**
     * ContactVerifyOpCode enum.
     * @name alita.ContactVerifyOpCode
     * @enum {number}
     * @property {number} kContactVerifyOpCodeMarkRead=0 kContactVerifyOpCodeMarkRead value
     * @property {number} kContactVerifyOpCodeMarkReadAll=1 kContactVerifyOpCodeMarkReadAll value
     * @property {number} kContactVerifyOpCodeAccept=3 kContactVerifyOpCodeAccept value
     */
    alita.ContactVerifyOpCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kContactVerifyOpCodeMarkRead"] = 0;
        values[valuesById[1] = "kContactVerifyOpCodeMarkReadAll"] = 1;
        values[valuesById[3] = "kContactVerifyOpCodeAccept"] = 3;
        return values;
    })();

    /**
     * VerifyContactState enum.
     * @name alita.VerifyContactState
     * @enum {number}
     * @property {number} kContactVerifyStateUnread=0 kContactVerifyStateUnread value
     * @property {number} kContactVerifyStatePending=1 kContactVerifyStatePending value
     * @property {number} kContactVerifyStateAccept=2 kContactVerifyStateAccept value
     */
    alita.VerifyContactState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kContactVerifyStateUnread"] = 0;
        values[valuesById[1] = "kContactVerifyStatePending"] = 1;
        values[valuesById[2] = "kContactVerifyStateAccept"] = 2;
        return values;
    })();

    /**
     * AccountType enum.
     * @name alita.AccountType
     * @enum {number}
     * @property {number} kAccountTypeUnknown=0 kAccountTypeUnknown value
     * @property {number} kAccountTypeNormal=1 kAccountTypeNormal value
     * @property {number} kAccountTypeKid=2 kAccountTypeKid value
     */
    alita.AccountType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kAccountTypeUnknown"] = 0;
        values[valuesById[1] = "kAccountTypeNormal"] = 1;
        values[valuesById[2] = "kAccountTypeKid"] = 2;
        return values;
    })();

    /**
     * SessionType enum.
     * @name alita.SessionType
     * @enum {number}
     * @property {number} kSessionTypeUnknown=0 kSessionTypeUnknown value
     * @property {number} kSessionTypeMain=1 kSessionTypeMain value
     * @property {number} kSessionTypeExt=2 kSessionTypeExt value
     */
    alita.SessionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kSessionTypeUnknown"] = 0;
        values[valuesById[1] = "kSessionTypeMain"] = 1;
        values[valuesById[2] = "kSessionTypeExt"] = 2;
        return values;
    })();

    /**
     * ExtensionRequestFlag enum.
     * @name alita.ExtensionRequestFlag
     * @enum {number}
     * @property {number} ExtensionRequestFlagFlowLimit=1 ExtensionRequestFlagFlowLimit value
     * @property {number} ExtensionRequestFlagFrequencyLimit=2 ExtensionRequestFlagFrequencyLimit value
     */
    alita.ExtensionRequestFlag = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "ExtensionRequestFlagFlowLimit"] = 1;
        values[valuesById[2] = "ExtensionRequestFlagFrequencyLimit"] = 2;
        return values;
    })();

    /**
     * ProgressType enum.
     * @name alita.ProgressType
     * @enum {number}
     * @property {number} kProgressTypeUnknown=0 kProgressTypeUnknown value
     * @property {number} kProgressTypeUpload=1 kProgressTypeUpload value
     * @property {number} kProgressTypeDownload=2 kProgressTypeDownload value
     */
    alita.ProgressType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kProgressTypeUnknown"] = 0;
        values[valuesById[1] = "kProgressTypeUpload"] = 1;
        values[valuesById[2] = "kProgressTypeDownload"] = 2;
        return values;
    })();

    /**
     * ContactType enum.
     * @name alita.ContactType
     * @enum {number}
     * @property {number} kContactTypeUnknown=0 kContactTypeUnknown value
     * @property {number} kContactTypeCommon=1 kContactTypeCommon value
     * @property {number} kContactTypeBusiness=2 kContactTypeBusiness value
     * @property {number} kContactTypeChatRoom=4 kContactTypeChatRoom value
     * @property {number} kContactTypeSystem=8 kContactTypeSystem value
     * @property {number} kContactTypeSystemFunction=16 kContactTypeSystemFunction value
     * @property {number} kContactTypeOpenIm=32 kContactTypeOpenIm value
     * @property {number} kContactTypeImChatRoom=64 kContactTypeImChatRoom value
     */
    alita.ContactType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kContactTypeUnknown"] = 0;
        values[valuesById[1] = "kContactTypeCommon"] = 1;
        values[valuesById[2] = "kContactTypeBusiness"] = 2;
        values[valuesById[4] = "kContactTypeChatRoom"] = 4;
        values[valuesById[8] = "kContactTypeSystem"] = 8;
        values[valuesById[16] = "kContactTypeSystemFunction"] = 16;
        values[valuesById[32] = "kContactTypeOpenIm"] = 32;
        values[valuesById[64] = "kContactTypeImChatRoom"] = 64;
        return values;
    })();

    /**
     * VoipMessageState enum.
     * @name alita.VoipMessageState
     * @enum {number}
     * @property {number} kVoipMessageStateUnknown=0 kVoipMessageStateUnknown value
     * @property {number} kVoipMessageStateFinish=1 kVoipMessageStateFinish value
     * @property {number} kVoipMessageStateCancel=2 kVoipMessageStateCancel value
     * @property {number} kVoipMessageStateReject=3 kVoipMessageStateReject value
     * @property {number} kVoipMessageStateNoResponse=4 kVoipMessageStateNoResponse value
     * @property {number} kVoipMessageStateInterrupt=5 kVoipMessageStateInterrupt value
     */
    alita.VoipMessageState = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kVoipMessageStateUnknown"] = 0;
        values[valuesById[1] = "kVoipMessageStateFinish"] = 1;
        values[valuesById[2] = "kVoipMessageStateCancel"] = 2;
        values[valuesById[3] = "kVoipMessageStateReject"] = 3;
        values[valuesById[4] = "kVoipMessageStateNoResponse"] = 4;
        values[valuesById[5] = "kVoipMessageStateInterrupt"] = 5;
        return values;
    })();

    /**
     * VoipMessageType enum.
     * @name alita.VoipMessageType
     * @enum {number}
     * @property {number} kVoipMessageTypeUnknown=0 kVoipMessageTypeUnknown value
     * @property {number} kVoipMessageTypeAudio=1 kVoipMessageTypeAudio value
     * @property {number} kVoipMessageTypeVideo=2 kVoipMessageTypeVideo value
     */
    alita.VoipMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kVoipMessageTypeUnknown"] = 0;
        values[valuesById[1] = "kVoipMessageTypeAudio"] = 1;
        values[valuesById[2] = "kVoipMessageTypeVideo"] = 2;
        return values;
    })();

    /**
     * RecordFromScene enum.
     * @name alita.RecordFromScene
     * @enum {number}
     * @property {number} kRecordFromSceneFromFav=1 kRecordFromSceneFromFav value
     * @property {number} kRecordFromSceneFromChat=2 kRecordFromSceneFromChat value
     * @property {number} kRecordFromSceneFromMsgList=3 kRecordFromSceneFromMsgList value
     */
    alita.RecordFromScene = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "kRecordFromSceneFromFav"] = 1;
        values[valuesById[2] = "kRecordFromSceneFromChat"] = 2;
        values[valuesById[3] = "kRecordFromSceneFromMsgList"] = 3;
        return values;
    })();

    /**
     * FavDataType enum.
     * @name alita.FavDataType
     * @enum {number}
     * @property {number} kFavDataTypeTxt=1 kFavDataTypeTxt value
     * @property {number} kFavDataTypeImg=2 kFavDataTypeImg value
     * @property {number} kFavDataTypeVoice=3 kFavDataTypeVoice value
     * @property {number} kFavDataTypeVideo=4 kFavDataTypeVideo value
     * @property {number} kFavDataTypeWebPage=5 kFavDataTypeWebPage value
     * @property {number} kFavDataTypeLoc=6 kFavDataTypeLoc value
     * @property {number} kFavDataTypeMusic=7 kFavDataTypeMusic value
     * @property {number} kFavDataTypeFile=8 kFavDataTypeFile value
     * @property {number} kFavDataTypeBook=9 kFavDataTypeBook value
     * @property {number} kFavDataTypeGoods=10 kFavDataTypeGoods value
     * @property {number} kFavDataTypeGeneralProduct=11 kFavDataTypeGeneralProduct value
     * @property {number} kFavDataTypeOldTv=12 kFavDataTypeOldTv value
     * @property {number} kFavDataTypeCard=13 kFavDataTypeCard value
     * @property {number} kFavDataTypeTV=14 kFavDataTypeTV value
     * @property {number} kFavDataTypeSight=15 kFavDataTypeSight value
     * @property {number} kFavDataTypeShardCard=16 kFavDataTypeShardCard value
     * @property {number} kFavDataTypeRecord=17 kFavDataTypeRecord value
     * @property {number} kFavDataTypeNoteShare=18 kFavDataTypeNoteShare value
     * @property {number} kFavDataTypeWeApp=19 kFavDataTypeWeApp value
     * @property {number} kFavDataTypeFinder=22 kFavDataTypeFinder value
     * @property {number} kFavDataTypeFinderLive=23 kFavDataTypeFinderLive value
     */
    alita.FavDataType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "kFavDataTypeTxt"] = 1;
        values[valuesById[2] = "kFavDataTypeImg"] = 2;
        values[valuesById[3] = "kFavDataTypeVoice"] = 3;
        values[valuesById[4] = "kFavDataTypeVideo"] = 4;
        values[valuesById[5] = "kFavDataTypeWebPage"] = 5;
        values[valuesById[6] = "kFavDataTypeLoc"] = 6;
        values[valuesById[7] = "kFavDataTypeMusic"] = 7;
        values[valuesById[8] = "kFavDataTypeFile"] = 8;
        values[valuesById[9] = "kFavDataTypeBook"] = 9;
        values[valuesById[10] = "kFavDataTypeGoods"] = 10;
        values[valuesById[11] = "kFavDataTypeGeneralProduct"] = 11;
        values[valuesById[12] = "kFavDataTypeOldTv"] = 12;
        values[valuesById[13] = "kFavDataTypeCard"] = 13;
        values[valuesById[14] = "kFavDataTypeTV"] = 14;
        values[valuesById[15] = "kFavDataTypeSight"] = 15;
        values[valuesById[16] = "kFavDataTypeShardCard"] = 16;
        values[valuesById[17] = "kFavDataTypeRecord"] = 17;
        values[valuesById[18] = "kFavDataTypeNoteShare"] = 18;
        values[valuesById[19] = "kFavDataTypeWeApp"] = 19;
        values[valuesById[22] = "kFavDataTypeFinder"] = 22;
        values[valuesById[23] = "kFavDataTypeFinderLive"] = 23;
        return values;
    })();

    /**
     * FavSourceType enum.
     * @name alita.FavSourceType
     * @enum {number}
     * @property {number} kFavSourceTypeChat=1 kFavSourceTypeChat value
     * @property {number} kFavSourceTypeWC=2 kFavSourceTypeWC value
     * @property {number} kFavSourceTypeWebPage=3 kFavSourceTypeWebPage value
     * @property {number} kFavSourceType3rd=4 kFavSourceType3rd value
     * @property {number} kFavSourceTypeShake=5 kFavSourceTypeShake value
     * @property {number} kFavSourceTypePost=6 kFavSourceTypePost value
     * @property {number} kFavSourceTypeFTN=7 kFavSourceTypeFTN value
     * @property {number} kFavSourceTypeScan=8 kFavSourceTypeScan value
     * @property {number} kFavSourceTypeMail=9 kFavSourceTypeMail value
     * @property {number} kFavSourceTypeBanner=10 kFavSourceTypeBanner value
     * @property {number} kFavSourceTypeGeneralProductDetail=11 kFavSourceTypeGeneralProductDetail value
     * @property {number} kFavSourceTypeCard=12 kFavSourceTypeCard value
     * @property {number} kFavSourceType3rdShare=13 kFavSourceType3rdShare value
     * @property {number} kFavSourceTypeSingleChat=21 kFavSourceTypeSingleChat value
     * @property {number} kFavSourceTypeChatroom=22 kFavSourceTypeChatroom value
     * @property {number} kFavSourceTypeBIZ=23 kFavSourceTypeBIZ value
     * @property {number} kFavSourceTypeGameCenter=24 kFavSourceTypeGameCenter value
     * @property {number} kFavSourceTypeTopStory=25 kFavSourceTypeTopStory value
     * @property {number} kFavSourceTypeWebSearch=26 kFavSourceTypeWebSearch value
     * @property {number} kFavSourceTypeWwbPageSingleChat=27 kFavSourceTypeWwbPageSingleChat value
     * @property {number} kFavSourceTypeWebPageChatroom=28 kFavSourceTypeWebPageChatroom value
     * @property {number} kFavSourceTypeWebPageBIZ=29 kFavSourceTypeWebPageBIZ value
     * @property {number} kFavSourceTypeConvertToNote=30 kFavSourceTypeConvertToNote value
     */
    alita.FavSourceType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "kFavSourceTypeChat"] = 1;
        values[valuesById[2] = "kFavSourceTypeWC"] = 2;
        values[valuesById[3] = "kFavSourceTypeWebPage"] = 3;
        values[valuesById[4] = "kFavSourceType3rd"] = 4;
        values[valuesById[5] = "kFavSourceTypeShake"] = 5;
        values[valuesById[6] = "kFavSourceTypePost"] = 6;
        values[valuesById[7] = "kFavSourceTypeFTN"] = 7;
        values[valuesById[8] = "kFavSourceTypeScan"] = 8;
        values[valuesById[9] = "kFavSourceTypeMail"] = 9;
        values[valuesById[10] = "kFavSourceTypeBanner"] = 10;
        values[valuesById[11] = "kFavSourceTypeGeneralProductDetail"] = 11;
        values[valuesById[12] = "kFavSourceTypeCard"] = 12;
        values[valuesById[13] = "kFavSourceType3rdShare"] = 13;
        values[valuesById[21] = "kFavSourceTypeSingleChat"] = 21;
        values[valuesById[22] = "kFavSourceTypeChatroom"] = 22;
        values[valuesById[23] = "kFavSourceTypeBIZ"] = 23;
        values[valuesById[24] = "kFavSourceTypeGameCenter"] = 24;
        values[valuesById[25] = "kFavSourceTypeTopStory"] = 25;
        values[valuesById[26] = "kFavSourceTypeWebSearch"] = 26;
        values[valuesById[27] = "kFavSourceTypeWwbPageSingleChat"] = 27;
        values[valuesById[28] = "kFavSourceTypeWebPageChatroom"] = 28;
        values[valuesById[29] = "kFavSourceTypeWebPageBIZ"] = 29;
        values[valuesById[30] = "kFavSourceTypeConvertToNote"] = 30;
        return values;
    })();

    /**
     * CustomMenuType enum.
     * @name alita.CustomMenuType
     * @enum {number}
     * @property {number} kCustomMenuTypeShowSubMenu=0 kCustomMenuTypeShowSubMenu value
     * @property {number} kCustomMenuTypeReportClick=1 kCustomMenuTypeReportClick value
     * @property {number} kCustomMenuTypeJump2WebView=2 kCustomMenuTypeJump2WebView value
     * @property {number} kCustomMenuTypeShowInputMode=3 kCustomMenuTypeShowInputMode value
     * @property {number} kCustomMenuTypeClientAction=4 kCustomMenuTypeClientAction value
     * @property {number} kCustomMenuTypeOpenWeApp=5 kCustomMenuTypeOpenWeApp value
     */
    alita.CustomMenuType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kCustomMenuTypeShowSubMenu"] = 0;
        values[valuesById[1] = "kCustomMenuTypeReportClick"] = 1;
        values[valuesById[2] = "kCustomMenuTypeJump2WebView"] = 2;
        values[valuesById[3] = "kCustomMenuTypeShowInputMode"] = 3;
        values[valuesById[4] = "kCustomMenuTypeClientAction"] = 4;
        values[valuesById[5] = "kCustomMenuTypeOpenWeApp"] = 5;
        return values;
    })();

    /**
     * MMBizInteractiveMode enum.
     * @name alita.MMBizInteractiveMode
     * @enum {number}
     * @property {number} kMMBizInteractiveModeComm=0 kMMBizInteractiveModeComm value
     * @property {number} kMMBizInteractiveModeQuestion=1 kMMBizInteractiveModeQuestion value
     * @property {number} kMMBizInteractiveModeSelfMenu=2 kMMBizInteractiveModeSelfMenu value
     */
    alita.MMBizInteractiveMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "kMMBizInteractiveModeComm"] = 0;
        values[valuesById[1] = "kMMBizInteractiveModeQuestion"] = 1;
        values[valuesById[2] = "kMMBizInteractiveModeSelfMenu"] = 2;
        return values;
    })();

    alita.StartRequest = (function() {

        /**
         * Properties of a StartRequest.
         * @memberof alita
         * @interface IStartRequest
         * @property {alita.ILogConfig|null} [config] StartRequest config
         */

        /**
         * Constructs a new StartRequest.
         * @memberof alita
         * @classdesc Represents a StartRequest.
         * @implements IStartRequest
         * @constructor
         * @param {alita.IStartRequest=} [properties] Properties to set
         */
        function StartRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartRequest config.
         * @member {alita.ILogConfig|null|undefined} config
         * @memberof alita.StartRequest
         * @instance
         */
        StartRequest.prototype.config = null;

        /**
         * Creates a new StartRequest instance using the specified properties.
         * @function create
         * @memberof alita.StartRequest
         * @static
         * @param {alita.IStartRequest=} [properties] Properties to set
         * @returns {alita.StartRequest} StartRequest instance
         */
        StartRequest.create = function create(properties) {
            return new StartRequest(properties);
        };

        /**
         * Encodes the specified StartRequest message. Does not implicitly {@link alita.StartRequest.verify|verify} messages.
         * @function encode
         * @memberof alita.StartRequest
         * @static
         * @param {alita.IStartRequest} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.config != null && Object.hasOwnProperty.call(message, "config"))
                $root.alita.LogConfig.encode(message.config, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StartRequest message, length delimited. Does not implicitly {@link alita.StartRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof alita.StartRequest
         * @static
         * @param {alita.IStartRequest} message StartRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer.
         * @function decode
         * @memberof alita.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {alita.StartRequest} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.alita.StartRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.config = $root.alita.LogConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof alita.StartRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {alita.StartRequest} StartRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartRequest message.
         * @function verify
         * @memberof alita.StartRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.config != null && message.hasOwnProperty("config")) {
                var error = $root.alita.LogConfig.verify(message.config);
                if (error)
                    return "config." + error;
            }
            return null;
        };

        /**
         * Creates a StartRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof alita.StartRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {alita.StartRequest} StartRequest
         */
        StartRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.alita.StartRequest)
                return object;
            var message = new $root.alita.StartRequest();
            if (object.config != null) {
                if (typeof object.config !== "object")
                    throw TypeError(".alita.StartRequest.config: object expected");
                message.config = $root.alita.LogConfig.fromObject(object.config);
            }
            return message;
        };

        /**
         * Creates a plain object from a StartRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof alita.StartRequest
         * @static
         * @param {alita.StartRequest} message StartRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.config = null;
            if (message.config != null && message.hasOwnProperty("config"))
                object.config = $root.alita.LogConfig.toObject(message.config, options);
            return object;
        };

        /**
         * Converts this StartRequest to JSON.
         * @function toJSON
         * @memberof alita.StartRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartRequest;
    })();

    alita.StartResponse = (function() {

        /**
         * Properties of a StartResponse.
         * @memberof alita
         * @interface IStartResponse
         * @property {number|null} [errCode] StartResponse errCode
         */

        /**
         * Constructs a new StartResponse.
         * @memberof alita
         * @classdesc Represents a StartResponse.
         * @implements IStartResponse
         * @constructor
         * @param {alita.IStartResponse=} [properties] Properties to set
         */
        function StartResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartResponse errCode.
         * @member {number} errCode
         * @memberof alita.StartResponse
         * @instance
         */
        StartResponse.prototype.errCode = 0;

        /**
         * Creates a new StartResponse instance using the specified properties.
         * @function create
         * @memberof alita.StartResponse
         * @static
         * @param {alita.IStartResponse=} [properties] Properties to set
         * @returns {alita.StartResponse} StartResponse instance
         */
        StartResponse.create = function create(properties) {
            return new StartResponse(properties);
        };

        /**
         * Encodes the specified StartResponse message. Does not implicitly {@link alita.StartResponse.verify|verify} messages.
         * @function encode
         * @memberof alita.StartResponse
         * @static
         * @param {alita.IStartResponse} message StartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errCode != null && Object.hasOwnProperty.call(message, "errCode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode);
            return writer;
        };

        /**
         * Encodes the specified StartResponse message, length delimited. Does not implicitly {@link alita.StartResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof alita.StartResponse
         * @static
         * @param {alita.IStartResponse} message StartResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartResponse message from the specified reader or buffer.
         * @function decode
         * @memberof alita.StartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {alita.StartResponse} StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.alita.StartResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StartResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof alita.StartResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {alita.StartResponse} StartResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartResponse message.
         * @function verify
         * @memberof alita.StartResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                if (!$util.isInteger(message.errCode))
                    return "errCode: integer expected";
            return null;
        };

        /**
         * Creates a StartResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof alita.StartResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {alita.StartResponse} StartResponse
         */
        StartResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.alita.StartResponse)
                return object;
            var message = new $root.alita.StartResponse();
            if (object.errCode != null)
                message.errCode = object.errCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a StartResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof alita.StartResponse
         * @static
         * @param {alita.StartResponse} message StartResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.errCode = 0;
            if (message.errCode != null && message.hasOwnProperty("errCode"))
                object.errCode = message.errCode;
            return object;
        };

        /**
         * Converts this StartResponse to JSON.
         * @function toJSON
         * @memberof alita.StartResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StartResponse;
    })();

    alita.FilterLogResponse = (function() {

        /**
         * Properties of a FilterLogResponse.
         * @memberof alita
         * @interface IFilterLogResponse
         * @property {number|null} [isKeepLog] FilterLogResponse isKeepLog
         */

        /**
         * Constructs a new FilterLogResponse.
         * @memberof alita
         * @classdesc Represents a FilterLogResponse.
         * @implements IFilterLogResponse
         * @constructor
         * @param {alita.IFilterLogResponse=} [properties] Properties to set
         */
        function FilterLogResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FilterLogResponse isKeepLog.
         * @member {number} isKeepLog
         * @memberof alita.FilterLogResponse
         * @instance
         */
        FilterLogResponse.prototype.isKeepLog = 0;

        /**
         * Creates a new FilterLogResponse instance using the specified properties.
         * @function create
         * @memberof alita.FilterLogResponse
         * @static
         * @param {alita.IFilterLogResponse=} [properties] Properties to set
         * @returns {alita.FilterLogResponse} FilterLogResponse instance
         */
        FilterLogResponse.create = function create(properties) {
            return new FilterLogResponse(properties);
        };

        /**
         * Encodes the specified FilterLogResponse message. Does not implicitly {@link alita.FilterLogResponse.verify|verify} messages.
         * @function encode
         * @memberof alita.FilterLogResponse
         * @static
         * @param {alita.IFilterLogResponse} message FilterLogResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilterLogResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.isKeepLog != null && Object.hasOwnProperty.call(message, "isKeepLog"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.isKeepLog);
            return writer;
        };

        /**
         * Encodes the specified FilterLogResponse message, length delimited. Does not implicitly {@link alita.FilterLogResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof alita.FilterLogResponse
         * @static
         * @param {alita.IFilterLogResponse} message FilterLogResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilterLogResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FilterLogResponse message from the specified reader or buffer.
         * @function decode
         * @memberof alita.FilterLogResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {alita.FilterLogResponse} FilterLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilterLogResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.alita.FilterLogResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.isKeepLog = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FilterLogResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof alita.FilterLogResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {alita.FilterLogResponse} FilterLogResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilterLogResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FilterLogResponse message.
         * @function verify
         * @memberof alita.FilterLogResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FilterLogResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.isKeepLog != null && message.hasOwnProperty("isKeepLog"))
                if (!$util.isInteger(message.isKeepLog))
                    return "isKeepLog: integer expected";
            return null;
        };

        /**
         * Creates a FilterLogResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof alita.FilterLogResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {alita.FilterLogResponse} FilterLogResponse
         */
        FilterLogResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.alita.FilterLogResponse)
                return object;
            var message = new $root.alita.FilterLogResponse();
            if (object.isKeepLog != null)
                message.isKeepLog = object.isKeepLog >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a FilterLogResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof alita.FilterLogResponse
         * @static
         * @param {alita.FilterLogResponse} message FilterLogResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FilterLogResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.isKeepLog = 0;
            if (message.isKeepLog != null && message.hasOwnProperty("isKeepLog"))
                object.isKeepLog = message.isKeepLog;
            return object;
        };

        /**
         * Converts this FilterLogResponse to JSON.
         * @function toJSON
         * @memberof alita.FilterLogResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FilterLogResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FilterLogResponse;
    })();

    return alita;
})();

$root.logcallback = (function() {

    /**
     * Namespace logcallback.
     * @exports logcallback
     * @namespace
     */
    var logcallback = {};

    /**
     * CallbackType enum.
     * @name logcallback.CallbackType
     * @enum {number}
     * @property {number} kCallbackTypeResponse=1 kCallbackTypeResponse value
     * @property {number} kCallbackTypeEvent=2 kCallbackTypeEvent value
     */
    logcallback.CallbackType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "kCallbackTypeResponse"] = 1;
        values[valuesById[2] = "kCallbackTypeEvent"] = 2;
        return values;
    })();

    logcallback.CommCallback = (function() {

        /**
         * Properties of a CommCallback.
         * @memberof logcallback
         * @interface ICommCallback
         * @property {number|null} [type] CommCallback type
         * @property {number|Long|null} [handle] CommCallback handle
         * @property {number|Long|null} [taskid] CommCallback taskid
         * @property {number|null} [eventType] CommCallback eventType
         * @property {Uint8Array|null} [content] CommCallback content
         */

        /**
         * Constructs a new CommCallback.
         * @memberof logcallback
         * @classdesc Represents a CommCallback.
         * @implements ICommCallback
         * @constructor
         * @param {logcallback.ICommCallback=} [properties] Properties to set
         */
        function CommCallback(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommCallback type.
         * @member {number} type
         * @memberof logcallback.CommCallback
         * @instance
         */
        CommCallback.prototype.type = 0;

        /**
         * CommCallback handle.
         * @member {number|Long} handle
         * @memberof logcallback.CommCallback
         * @instance
         */
        CommCallback.prototype.handle = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CommCallback taskid.
         * @member {number|Long} taskid
         * @memberof logcallback.CommCallback
         * @instance
         */
        CommCallback.prototype.taskid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * CommCallback eventType.
         * @member {number} eventType
         * @memberof logcallback.CommCallback
         * @instance
         */
        CommCallback.prototype.eventType = 0;

        /**
         * CommCallback content.
         * @member {Uint8Array} content
         * @memberof logcallback.CommCallback
         * @instance
         */
        CommCallback.prototype.content = $util.newBuffer([]);

        /**
         * Creates a new CommCallback instance using the specified properties.
         * @function create
         * @memberof logcallback.CommCallback
         * @static
         * @param {logcallback.ICommCallback=} [properties] Properties to set
         * @returns {logcallback.CommCallback} CommCallback instance
         */
        CommCallback.create = function create(properties) {
            return new CommCallback(properties);
        };

        /**
         * Encodes the specified CommCallback message. Does not implicitly {@link logcallback.CommCallback.verify|verify} messages.
         * @function encode
         * @memberof logcallback.CommCallback
         * @static
         * @param {logcallback.ICommCallback} message CommCallback message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommCallback.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.handle != null && Object.hasOwnProperty.call(message, "handle"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.handle);
            if (message.taskid != null && Object.hasOwnProperty.call(message, "taskid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.taskid);
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.eventType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.content);
            return writer;
        };

        /**
         * Encodes the specified CommCallback message, length delimited. Does not implicitly {@link logcallback.CommCallback.verify|verify} messages.
         * @function encodeDelimited
         * @memberof logcallback.CommCallback
         * @static
         * @param {logcallback.ICommCallback} message CommCallback message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommCallback.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommCallback message from the specified reader or buffer.
         * @function decode
         * @memberof logcallback.CommCallback
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {logcallback.CommCallback} CommCallback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommCallback.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.logcallback.CommCallback();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.handle = reader.int64();
                    break;
                case 3:
                    message.taskid = reader.uint64();
                    break;
                case 4:
                    message.eventType = reader.int32();
                    break;
                case 5:
                    message.content = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommCallback message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof logcallback.CommCallback
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {logcallback.CommCallback} CommCallback
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommCallback.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommCallback message.
         * @function verify
         * @memberof logcallback.CommCallback
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommCallback.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.handle != null && message.hasOwnProperty("handle"))
                if (!$util.isInteger(message.handle) && !(message.handle && $util.isInteger(message.handle.low) && $util.isInteger(message.handle.high)))
                    return "handle: integer|Long expected";
            if (message.taskid != null && message.hasOwnProperty("taskid"))
                if (!$util.isInteger(message.taskid) && !(message.taskid && $util.isInteger(message.taskid.low) && $util.isInteger(message.taskid.high)))
                    return "taskid: integer|Long expected";
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                if (!$util.isInteger(message.eventType))
                    return "eventType: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            return null;
        };

        /**
         * Creates a CommCallback message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof logcallback.CommCallback
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {logcallback.CommCallback} CommCallback
         */
        CommCallback.fromObject = function fromObject(object) {
            if (object instanceof $root.logcallback.CommCallback)
                return object;
            var message = new $root.logcallback.CommCallback();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.handle != null)
                if ($util.Long)
                    (message.handle = $util.Long.fromValue(object.handle)).unsigned = false;
                else if (typeof object.handle === "string")
                    message.handle = parseInt(object.handle, 10);
                else if (typeof object.handle === "number")
                    message.handle = object.handle;
                else if (typeof object.handle === "object")
                    message.handle = new $util.LongBits(object.handle.low >>> 0, object.handle.high >>> 0).toNumber();
            if (object.taskid != null)
                if ($util.Long)
                    (message.taskid = $util.Long.fromValue(object.taskid)).unsigned = true;
                else if (typeof object.taskid === "string")
                    message.taskid = parseInt(object.taskid, 10);
                else if (typeof object.taskid === "number")
                    message.taskid = object.taskid;
                else if (typeof object.taskid === "object")
                    message.taskid = new $util.LongBits(object.taskid.low >>> 0, object.taskid.high >>> 0).toNumber(true);
            if (object.eventType != null)
                message.eventType = object.eventType | 0;
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length)
                    message.content = object.content;
            return message;
        };

        /**
         * Creates a plain object from a CommCallback message. Also converts values to other types if specified.
         * @function toObject
         * @memberof logcallback.CommCallback
         * @static
         * @param {logcallback.CommCallback} message CommCallback
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommCallback.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.handle = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.handle = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.taskid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.taskid = options.longs === String ? "0" : 0;
                object.eventType = 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.handle != null && message.hasOwnProperty("handle"))
                if (typeof message.handle === "number")
                    object.handle = options.longs === String ? String(message.handle) : message.handle;
                else
                    object.handle = options.longs === String ? $util.Long.prototype.toString.call(message.handle) : options.longs === Number ? new $util.LongBits(message.handle.low >>> 0, message.handle.high >>> 0).toNumber() : message.handle;
            if (message.taskid != null && message.hasOwnProperty("taskid"))
                if (typeof message.taskid === "number")
                    object.taskid = options.longs === String ? String(message.taskid) : message.taskid;
                else
                    object.taskid = options.longs === String ? $util.Long.prototype.toString.call(message.taskid) : options.longs === Number ? new $util.LongBits(message.taskid.low >>> 0, message.taskid.high >>> 0).toNumber(true) : message.taskid;
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = message.eventType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            return object;
        };

        /**
         * Converts this CommCallback to JSON.
         * @function toJSON
         * @memberof logcallback.CommCallback
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommCallback.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CommCallback;
    })();

    return logcallback;
})();

module.exports = $root;
