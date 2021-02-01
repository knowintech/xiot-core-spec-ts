export enum Status {

    UNDEFINED = -1,
    COMPLETED = 0,
    TO_BE_EXECUTE = 1,
    INTERNAL_ERROR = -500,
    ACCESS_KEY_INVALID = -501,
    DEVICE_ID_NOT_EXIST = -502,
    QUERY_NOT_SUPPORTED = -503,

    /**
     * FOR XCP DEVICE ENDPO    VERIFY
     */
    DEVICE_ID_INVALID = -100,
    DEVICE_TYPE_INVALID = -101,
    PUBLIC_KEY_NOT_FOUND = -102,
    SIGNATURE_NOT_FOUND = -103,
    VERSION_NOT_FOUND = -104,
    AUTHENTICATION_NOT_FOUND = -105,
    AUTHENTICATION_NOT_SUPPORTED = -106,
    STATUS_INVALID = -107,
    SIGNATURE_INVALID = -108,
    CODEC_NOT_FOUND = -109,
    CODEC_NOT_IMPLEMENTED = -110,

    /**
     * FOR OPERATION
     */
    DEVICE_OFFLINE = -400,
    AUTHENTICATION_FAILED = -401,
    SERVICE_NOT_FOUND = -410,

    PID_INVALID = -420,
    PROPERTY_NOT_FOUND = -421,
    PROPERTY_CANNOT_READ = -422,
    PROPERTY_CANNOT_WRITE = -423,
    PROPERTY_CANNOT_NOTIFY = -424,
    PROPERTY_VALUE_INVALID = -425,

    AID_INVALID = -430,
    ACTION_NOT_FOUND = -431,
    ACTION_IN_ERROR = -432,
    ACTION_IN_VALUE_INVALID = -433,
    ACTION_OUT_ERROR = -434,
    ACTION_OUT_VALUE_INVALID = -435,

    EID_INVALID = -440,
    EVENT_NOT_FOUND = -441,
    EVENT_ARGUMENTS_ERROR = -442,
    EVENT_ARGUMENTS_VALUE_ERROR = -443,

    /**
     * FOR C2C
     */
    CLOUD_ERROR = -600,
}
