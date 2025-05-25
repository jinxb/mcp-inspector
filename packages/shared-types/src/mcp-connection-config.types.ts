/**
 * 定义MCP服务器的连接方式
 * - 'stdio': 通过标准输入输出与本地命令交互
 * - 'http': 通过HTTP/HTTPS与远程服务器交互
 */
export type MCPConnectionTransport = 'stdio' | 'http';

/**
 * STDIO连接方式的特定配置
 */
export interface MCPStdioConnectionDetails {
  /** 启动MCP服务器的命令 */
  command: string;
  /** 命令的参数 */
  args?: string[];
  /** 命令的工作目录 */
  cwd?: string;
  /** 传递给命令的环境变量 */
  env?: Record<string, string>;
}

/**
 * HTTP/HTTPS连接方式的特定配置
 */
export interface MCPHttpConnectionDetails {
  /** MCP服务器的完整URL */
  url: string;
  /** 自定义请求头 (例如用于认证的API Key) */
  headers?: Record<string, string>;
}

/**
 * MCP服务器连接配置对象
 */
export interface MCPConnectionConfig {
  /** 连接的唯一标识符 (可选, 用于管理多个连接) */
  id?: string;
  /** 用户友好的连接名称 */
  name: string;
  /** 连接传输方式 */
  transport: MCPConnectionTransport;
  /** STDIO连接详情 (仅当 transport === 'stdio' 时有效) */
  stdioDetails?: MCPStdioConnectionDetails;
  /** HTTP连接详情 (仅当 transport === 'http' 时有效) */
  httpDetails?: MCPHttpConnectionDetails;
  /** 连接超时时间 (毫秒) */
  timeoutMs?: number;
  /** 其他元数据 (可选) */
  metadata?: Record<string, any>;
}
