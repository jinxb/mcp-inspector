# MCP Suite Monorepo

开发、测试和调试MCP（模型上下文协议）服务器的工具套件。

## 📜 项目结构

本项目使用 pnpm workspaces 和 Turborepo 管理的 Monorepo。

- `packages/shared-types`: 共享的TypeScript类型定义。
- `packages/core-engine`: MCP交互和测试的核心逻辑库。
- `packages/api-server`: 为Web GUI提供服务的本地API服务器。
- `packages/cli-tool`: 命令行工具。
- `packages/gui-web-app`: Web图形用户界面 (Vue/React)。
- `packages/vscode-extension`: VS Code插件。
- `packages/chrome-extension`: Chrome浏览器插件。

## 🚀 快速开始

1.  **安装依赖**:

    ```bash
    pnpm install
    ```

2.  **构建所有包**:

    ```bash
    pnpm turbo build
    # 或者单独构建某个包: pnpm turbo run build --filter=@mcp-suite/core-engine
    ```

3.  **运行 Lint**:

    ```bash
    pnpm turbo lint
    ```

4.  **运行格式化**:
    ```bash
    pnpm format
    ```

## 🛠️ 开发

启动某个包的开发模式 (例如 `core-engine`):

```bash
pnpm turbo run dev --filter=@mcp-suite/core-engine --parallel
```

_(具体 `dev` 脚本需要在各个包的 `package.json` 中定义)_

## ✨ 代码规范

本项目使用 ESLint 和 Prettier 进行代码规范。请确保在提交代码前运行 lint 和 format。
已配置 Husky 和 lint-staged 进行 pre-commit 检查。
