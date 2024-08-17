#!/usr/bin/env python3
"""
Annotating variables and function with complex types
"""
from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function diy
    """
    return [(i, len(i)) for i in lst]
