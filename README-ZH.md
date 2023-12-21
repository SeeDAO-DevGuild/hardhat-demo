# Hardhat 示例项目

这个项目展示了 Hardhat 的基本用例。它包含一个示例合约、一个用于测试该合约的测试脚本，以及一个用于部署该合约的脚本。

## 配置

建议：最好在测试网络（当前项目配置为 Sepolia，chainId:11155111，可以从 https://chainList.org 添加到 MetaMask）上部署该演示项目。

在运行部署命令之前，需要将 .env.example 的内容复制到 .env，并在 .env 中配置您自己的 Infura API 密钥和测试账户私钥。这些信息可以在 https://www.infura.io/ 获取。

您还需要从水龙头为您的合约账户申请一些 Sepolia 测试币，用于合约在测试网的部署：https://www.infura.io/faucet/sepolia

## 开始任务

尝试运行以下一些任务：

```shell

# 编译 contracts 文件夹下所有合约（.sol）生成 artifacts 和 cache
pnpm run compile

# 根据 scripts 文件夹下所有脚本（.ts）测试合约
pnpm run test

# 根据 hardhat.config.ts 中的配置部署合约
pnpm run deploy

```