/**
 * 调用MCP工具时传递的参数对象
 * 通常是一个键值对，键是参数名，值是参数值
 */
export type ToolExecutionParams = Record<string, any>;

/**
 * MCP工具执行成功后的结果
 */
export interface ToolExecutionSuccessResult<TData = any> {
  /** 指示执行是否成功 */
  success: true;
  /** 工具执行返回的实际数据 */
  data: TData; // 具体的返回数据结构由工具自身定义
  /** (可选) 原始的MCP响应，用于调试 */
  rawResponse?: any;
}

/**
 * MCP工具执行失败后的结果
 */
export interface ToolExecutionErrorResult {
  /** 指示执行是否成功 */
  success: false;
  /** 错误信息 */
  error: {
    message: string;
    /** (可选) 错误码 */
    code?: string | number;
    /** (可选) 详细错误信息或堆栈 */
    details?: any;
  };
  /** (可选) 原始的MCP响应，用于调试 */
  rawResponse?: any;
}

/**
 * MCP工具执行结果的联合类型
 */
export type ToolExecutionResult = ToolExecutionSuccessResult | ToolExecutionErrorResult;
