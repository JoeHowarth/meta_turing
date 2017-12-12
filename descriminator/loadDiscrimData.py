from gensim.models import Word2Vec, KeyedVectors
import nltk
from nltk.corpus import brown
from nltk import ngrams, RegexpTokenizer, FreqDist
import random, numpy as np, re
from collections import Counter, OrderedDict
from copy import deepcopy
flatten = lambda l: [item for sublist in l for item in sublist]

real_data = list(brown.sents())
real_data = [[x.lower() for x in sent] for sent in real_data]

flat = flatten(real_data)
fdist = FreqDist(flat)

common = fdist.most_common(50000)
print(common)
