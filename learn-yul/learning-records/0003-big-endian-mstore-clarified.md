# Big-endian mstore explains the 0x0c hash offset

Lessons 0001–0002 originally described the Solady scratch overlap using little-endian byte intuition, which made `keccak256(0x0c, 0x20)` seem to hash “seed + partial owner.” The correct model: EVM `mstore` writes each 32-byte word big-endian; `mstore(0x00, owner)` places the address at `mem[0x0c..0x1f]`; seed-first + owner-second leaves the seed at `mem[0x28..0x2b]` untouched.

**Evidence:** Learner confusion on “why start at 0x0c” triggered a full byte-layout audit.

**Implications:** All memory diagrams in lessons and reference docs must use BE layout. Packed `or(shl(96, addr), seed)` produces the same 32-byte preimage as the two-mstore sequence.
