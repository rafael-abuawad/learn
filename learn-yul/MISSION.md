# Mission: Read & Write Yul for Gas-Optimized ERC20s

## Why

You already ship contracts in Solidity and Vyper. Solady's ERC20 is a benchmark for how production libraries squeeze gas out of token logic — and most of that logic is **inline Yul assembly**, not high-level Solidity. You want to **read that code fluently** and **write your own Yul** when storage layout, custom errors, events, and mappings need hand-tuning.

## Success looks like

- Open [Solady ERC20](https://github.com/Vectorized/solady/blob/main/src/tokens/ERC20.sol) and trace any function (`transfer`, `balanceOf`, `permit`) through its Yul block without pausing
- Compute mapping storage slots by hand (balance, allowance, nonce) using the same `keccak256` scratch pattern Solady uses
- Revert with Solidity custom errors from Yul (`mstore` + `revert(0x1c, 0x04)`)
- Emit `Transfer` / `Approval` with `log3` and precomputed event topic hashes
- Explain **design choices**: namespaced storage slots vs compiler layout, cleaning address upper bits, infinite-allowance shortcuts, memory scratch zones
- Write a minimal ERC20 core (`_mint`, `_transfer`, `_burn`) in inline assembly inside a Solidity shell

## Constraints

- One intensive day — lessons stay short; retrieval practice over marathon reading
- Ground everything in Solady's ERC20 as the north-star implementation
- Assume strong Solidity + proficient Vyper; skip "what is a mapping" basics, focus on **how Yul implements them**
- Use Foundry for compile/run when we reach hands-on exercises

## Out of scope

- Standalone Yul contracts (`--strict-assembly` object notation) — we focus on **inline assembly inside Solidity**
- Huff / standalone bytecode languages
- Formal verification of assembly blocks

## Bonus

- **Lesson 0007** — EIP-2612 `permit()` in Yul (EIP-712, ecrecover, nonces)
