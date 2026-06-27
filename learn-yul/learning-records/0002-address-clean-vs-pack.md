# Address clean (shr/shl) vs pack (shl/or) are different idioms

The learner asked whether packed slot lookup (`shl(96, from)` + `or` with seed) should also use `shr(96, shl(96, from))`. They correctly noticed both patterns manipulate address bits and wanted to unify them.

**Evidence:** Follow-up question after Lesson 0001, demonstrating active reading of storage-slot reference material.

**Implications:** Can teach Pattern C (packed transfer path) without re-explaining cleaning from scratch. Future lessons on `permit` should explicitly contrast the two idioms once, then move on. Zone of proximal development supports Lesson 0003 (custom errors) next.
