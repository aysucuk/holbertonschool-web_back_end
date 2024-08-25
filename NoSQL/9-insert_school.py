#!/usr/bin/env python3
"""
Insert Docs int the Collection
"""
import pymongo


def insert_school(mongo_collection, **kwargs):
    """
    Insert Docs
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
