import { ToolExecutionParams, ToolExecutionResult } from './tool-execution.types';
/**
 * 定义契约测试中对工具输出的断言
 */
export interface OutputAssertion {
  /**
   * 断言类型
   * - 'equalTo': 实际输出严格等于期望值
   * - 'deepEqualTo': 实际输出深度等于期望值 (用于对象和数组)
   * - 'contains': 实际输出 (字符串或数组) 包含期望值
   * - 'matchesSchema': 实际输出符合指定的JSON Schema
   * - 'custom': (高级) 使用自定义断言函数 (可能较难序列化和跨平台)
   */
  type: 'equalTo' | 'deepEqualTo' | 'contains' | 'matchesSchema' | 'custom';
  /** 期望值 (根据type不同，含义不同) */
  expectedValue?: any;
  /** (仅当type='matchesSchema'时) 期望的JSON Schema */
  expectedSchema?: Record<string, any>; // 或 JSONSchema7
  /** (仅当type='custom'时) 自定义断言函数的标识或路径 (较复杂) */
  // customAssertionId?: string;
}

/**
 * 单个契约测试用例的定义
 */
export interface ContractTestCase {
  /** 测试用例的唯一ID (可选) */
  id?: string;
  /** 测试用例的描述 */
  description: string;
  /** 要测试的MCP工具的名称 */
  toolName: string;
  /** 传递给工具的输入参数 */
  inputParams: ToolExecutionParams;
  /**
   * 期望的工具执行结果
   * 可以是直接期望成功并断言输出，或期望失败并断言错误
   */
  expectedResult: {
    /** 是否期望工具执行成功 */
    shouldSucceed: boolean;
    /** (仅当shouldSucceed=true时) 对成功输出的断言 */
    outputAssertions?: OutputAssertion[];
    /** (仅当shouldSucceed=false时) 对错误结果的断言 */
    errorAssertions?: {
      /** 期望的错误消息中包含的文本 (可选) */
      messageContains?: string;
      /** 期望的错误码 (可选) */
      expectedErrorCode?: string | number;
    };
  };
  /** 测试用例的标签或分类 (可选) */
  tags?: string[];
}

/**
 * 一组契约测试用例，通常针对一个或多个MCP服务器
 */
export interface ContractTestSuite {
  /** 测试套件的ID (可选) */
  id?: string;
  /** 测试套件的名称或描述 */
  name: string;
  /** (可选) 针对此套件的默认MCP服务器连接配置ID */
  defaultConnectionId?: string;
  /** 测试用例列表 */
  testCases: ContractTestCase[];
}

/**
 * 单个测试用例的执行结果状态
 */
export type TestCaseStatus = 'passed' | 'failed' | 'skipped' | 'pending';

/**
 * 单个测试用例的执行结果详情
 */
export interface TestCaseResultDetail {
  testCaseId?: string; // 对应 ContractTestCase 的 id
  description: string; // 对应 ContractTestCase 的 description
  status: TestCaseStatus;
  /** (仅当status='failed'时) 失败信息 */
  failureMessage?: string;
  /** (可选) 实际执行工具后收到的结果 */
  actualToolResult?: ToolExecutionResult;
  /** (可选) 执行耗时 (毫秒) */
  durationMs?: number;
}

/**
 * 整个测试套件的执行报告
 */
export interface TestSuiteReport {
  suiteId?: string; // 对应 ContractTestSuite 的 id
  suiteName: string; // 对应 ContractTestSuite 的 name
  startTime: Date;
  endTime: Date;
  totalTests: number;
  passed: number;
  failed: number;
  skipped: number;
  results: TestCaseResultDetail[];
}
