# Prior knowledge: strong Solidity, proficient Vyper

The learner already understands mappings, events, custom errors, ERC20 semantics, and storage layout at the high-level language layer. They do not need ERC20 spec tutorials or "what is assembly" motivation — future lessons should jump directly to **how Yul implements** patterns they already know from Solidity/Vyper, using Solady as the reference implementation.

**Evidence:** Stated at mission intake.

**Implications:** Skip beginner EVM intros; use Vyper/Solidity analogies as bridges (e.g. Vyper `@revert`, Solidity `mapping` layout). Zone of proximal development starts at reading Solady's `balanceOf` assembly, not at learning what `uint256` is.
