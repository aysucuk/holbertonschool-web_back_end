#!/usr/bin/env python3
"""
Async: beginning
"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """
    async func
    """
    val = random.uniform(0, max_delay)
    await asyncio.sleep(val)
    return val
