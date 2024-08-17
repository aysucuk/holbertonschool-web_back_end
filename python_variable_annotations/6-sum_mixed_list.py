#!/usr/bin/env python3
"""
Annotating variables and function with complex types
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Function sum of list
    """
    return sum(mxd_lst)
