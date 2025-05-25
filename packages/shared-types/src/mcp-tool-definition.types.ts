import { JSONSchema7 } from 'json-schema'; // 导入完整的JSON Schema类型

/**
 * MCP服务器提供的工具的定义
 */
export interface MCPToolDefinition {
  /**
   * 工具的唯一名称 (由MCP服务器定义，应符合一定的命名规范，例如小驼峰或下划线)
   * @example "getUserDetails"
   * @pattern "^[a-zA-Z0-9_]+([a-zA-Z0-9_.-]*[a-zA-Z0-9_])?$" // 示例正则，可根据实际需求调整
   */
  name: string;

  /**
   * 工具功能的自然语言描述
   * 这个描述非常重要，可能会被LLM用于理解工具的用途，或者展示给用户。
   * 应清晰、准确、简洁。
   * @example "Fetches user details based on user ID."
   */
  description?: string;

  /**
   * 工具输入参数的JSON Schema (Draft 7)
   * 用于校验输入参数、生成UI表单、或供LLM理解如何调用工具。
   * 如果工具没有输入参数，此字段可以省略或为一个表示空对象的schema (e.g., { type: "object", properties: {} })。
   */
  parametersSchema?: JSONSchema7;

  /**
   * (可选) 工具成功执行后输出结果的JSON Schema (Draft 7)
   * 用于校验工具的实际输出是否符合预期，或用于类型提示。
   */
  outputSchema?: JSONSchema7;

  /**
   * (可选) 工具可能抛出的特定错误的Schema或列表 (高级功能)
   * 可以帮助调用者更好地处理预期的错误情况。
   * @example [{ "errorCode": "USER_NOT_FOUND", "description": "User with the given ID does not exist.", "schema": { "type": "object", ... } }]
   */
  errorSchemas?: {
    errorCode: string;
    description?: string;
    schema?: JSONSchema7; // 特定错误附带的数据的schema
  }[];

  /**
   * (可选) 其他元数据
   * 例如：
   *  - `category`: "data_retrieval", "communication", "file_system"
   *  - `version`: "1.0.2"
   *  - `owner`: "team-alpha"
   *  - `isSynchronous`: true/false (指工具执行是同步还是异步返回结果，对于MCP交互模型可能不直接相关，但可作为元信息)
   *  - `costEstimate`: "low" | "medium" | "high" (如果工具调用有成本)
   */
  metadata?: Record<string, any> & {
    category?: string;
    version?: string;
    tags?: string[];
    // ...其他可预定义的元数据字段
  };
}
