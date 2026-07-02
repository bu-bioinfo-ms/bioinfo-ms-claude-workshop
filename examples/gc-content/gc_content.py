#!/usr/bin/env python3
"""Compute GC content for each sequence in a FASTA file.

GC content is the fraction of bases in a sequence that are guanine (G) or
cytosine (C). It's a basic summary statistic used all over genomics.

Usage:
    python gc_content.py sample.fasta
"""

import sys


def read_fasta(path):
    """Yield (header, sequence) tuples from a FASTA file."""
    header = None
    seq_lines = []
    with open(path) as fh:
        for line in fh:
            line = line.rstrip("\n")
            if line.startswith(">"):
                if header is not None:
                    yield header, "".join(seq_lines)
                header = line[1:]
                seq_lines = []
            else:
                seq_lines.append(line)
    if header is not None:
        yield header, "".join(seq_lines)


def gc_content(seq):
    """Return the fraction of G/C bases in a sequence (0.0 if empty)."""
    if not seq:
        return 0.0
    gc = sum(1 for base in seq if base in ("G", "C"))
    return gc / len(seq)


def main(argv):
    if len(argv) != 2:
        print("usage: python gc_content.py <fasta>", file=sys.stderr)
        return 1
    for header, seq in read_fasta(argv[1]):
        print(f"{header}\t{gc_content(seq):.3f}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
