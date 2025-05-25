/**
 * 项目中通用的错误代码枚举 (示例)
 */
export enum MCPErrorCode {
  UnknownError = 'UNKNOWN_ERROR',
  NetworkError = 'NETWORK_ERROR',
  ConnectionFailed = 'CONNECTION_FAILED',
  MCPProtocolError = 'MCP_PROTOCOL_ERROR',
  ToolNotFound = 'TOOL_NOT_FOUND',
  ToolExecutionFailed = 'TOOL_EXECUTION_FAILED',
  InvalidParameters = 'INVALID_PARAMETERS',
  AuthenticationError = 'AUTHENTICATION_ERROR',
  PermissionDenied = 'PERMISSION_DENIED',
  TimeoutError = 'TIMEOUT_ERROR',
  ConfigurationError = 'CONFIGURATION_ERROR',
}

/**
 * 自定义错误对象的接口
 */
export interface MCPError {
  /** 错误代码 */
  code: MCPErrorCode | string; // 可以是枚举值或自定义字符串
  /** 用户友好的错误消息 */
  message: string;
  /** (可选) 原始错误对象或更详细的调试信息 */
  cause?: any;
  /** (可选) 额外的上下文数据 */
  context?: Record<string, any>;
}
