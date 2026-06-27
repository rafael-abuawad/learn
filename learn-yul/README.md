# Learn Yul

Interactive HTML lessons for reading and writing **inline Yul assembly** in Solidity, using [Solady ERC20](https://github.com/Vectorized/solady/blob/main/src/tokens/ERC20.sol) as the north-star implementation.

Built for developers who already know Solidity (and optionally Vyper) and want intermediate fluency in gas-optimized token patterns: namespaced storage slots, custom errors, events, and permit.

## Quick start

Open the lesson index in your browser:

```
lessons/index.html
```

Or from repo root, `index.html` redirects to the lesson index.

No build step required — static HTML + CSS + a small quiz script.

## Curriculum

| # | Lesson | Topic |
|---|--------|-------|
| 0001 | [Yul for Solidity & Vyper devs](lessons/0001-yul-for-solidity-devs.html) | Mental model, scratch memory, sload/mstore |
| 0002 | [Mapping slots & keccak256](lessons/0002-mapping-slots-keccak256.html) | Balance, allowance, nonce slot derivation |
| 0003 | [Custom errors & revert](lessons/0003-custom-errors-revert.html) | Selectors, revert(0x1c, 0x04), control flow |
| 0004 | [Events & log3](lessons/0004-events-log3.html) | Topic hashes, indexed addresses |
| 0005 | [Read transfer & mint](lessons/0005-read-transfer-mint.html) | Line-by-line Solady walkthrough |
| 0006 | [Write minimal ERC20 core](lessons/0006-write-minimal-erc20.html) | Annotated contract skeleton |
| 0007 | [EIP-2612 permit (bonus)](lessons/0007-permit-eip2612.html) | EIP-712, ecrecover, nonces |

## Reference sheets

Print-friendly cheatsheets in [`reference/`](reference/):

- [Glossary](reference/glossary.html)
- [Yul opcodes](reference/yul-opcodes-cheatsheet.html)
- [Storage slot layout](reference/storage-slot-layout.html)
- [Custom errors](reference/custom-errors.html)
- [Events & log3](reference/events-log3.html)
- [EIP-2612 permit](reference/permit-eip2612.html)

## Publish to GitHub

```bash
git add .
git commit -m "Complete learn-yul curriculum"
git remote add origin git@github.com:YOUR_USER/learn-yul.git
git push -u origin main
```

Enable GitHub Pages (optional): Settings → Pages → deploy from branch `main`, folder `/` (root). The root `index.html` redirects to lessons.

## Credits

- Teaching structure inspired by retrieval-practice learning design
- Code patterns reference [Solady](https://github.com/Vectorized/solady) by Vectorized (MIT)
- Primary docs: [Solidity Yul](https://docs.soliditylang.org/en/latest/yul.html)

## License

MIT — see [LICENSE](LICENSE). Educational content only; not affiliated with Solady.
