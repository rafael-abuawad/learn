# Yul Resources

## Knowledge

- [Solidity docs: Yul](https://docs.soliditylang.org/en/latest/yul.html)
  Official spec for syntax, EVM builtins (`sload`, `mstore`, `keccak256`, `log3`), and inline-assembly semantics. Use for: any opcode behavior, memory safety annotations.
- [Solidity docs: Inline Assembly](https://docs.soliditylang.org/en/latest/assembly.html)
  How Yul embeds inside Solidity — access to `caller()`, `calldataload`, `return`, and Solidity variable scoping. Use for: bridging high-level vars into assembly blocks.
- [Solady ERC20.sol](https://github.com/Vectorized/solady/blob/main/src/tokens/ERC20.sol)
  Production reference for Yul token patterns: namespaced slots, custom errors, events, Permit2 hooks. Use for: every lesson in this workspace.
- [Solady LibStorage](https://github.com/Vectorized/solady/blob/main/src/utils/LibStorage.sol)
  How Solady derives pseudorandom storage slot seeds. Use for: understanding `_BALANCE_SLOT_SEED` and collision avoidance.
- [EVM Opcodes reference (evm.codes)](https://www.evm.codes/)
  Opcode gas costs and stack effects. Use for: why Solady inlines instead of calling internal Solidity helpers.
- [Solidity docs: Layout of State Variables in Storage](https://docs.soliditylang.org/en/latest/internals/layout_in_storage.html)
  Compiler storage layout for mappings. Use for: contrasting default Solidity slots with Solady's manual layout.

## Wisdom (Communities)

- [Solidity GitHub Discussions](https://github.com/ethereum/solidity/discussions)
  High-signal for assembly edge cases and compiler bugs. Use for: "is this memory-safe?" questions.
- [Solady GitHub Issues / PRs](https://github.com/Vectorized/solady/issues)
  Real-world Yul patterns and gas regressions. Use for: reading how experts review assembly diffs.
- [r/ethdev](https://reddit.com/r/ethdev)
  Broad EVM community. Use for: architecture questions; assembly threads vary in quality — cross-check with docs.

## Gaps

- No single canonical "Yul ERC20 tutorial" at Solady's level — we derive the curriculum from Solady + official docs.
- Standalone Yul object notation under-documented for beginners; deferred per mission.
