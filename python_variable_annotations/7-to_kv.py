#!/usr/bin/env python3
"""
Annotating variables and function with complex types
"""
from typing import List, Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Function sum of list
    """
    return k, v**2
