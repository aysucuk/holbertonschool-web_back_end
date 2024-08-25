#!/usr/bin/env python3
'''List all documents in Python'''


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection.

    Parameters:
    mongo_collection (pymongo.collection.Collection):
    The pymongo collection object.
    Returns:
    list: A list of all documents in the collection,
    or an empty list if no documents are found.
    """
    docs = list(mongo_collection.find())
    return docs
