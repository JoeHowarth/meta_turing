import torch
import torch.nn as nn
import numpy as np
import torch.nn.init as init
import torch.nn.functional as F
from torch.autograd import Variable
from data_utils import *


#Hyperparameters
vocab_size = 2000
embedding_size = 200
filter_size = 64
num_layers = 10
block_size = 5
filter_h = 5
context_size = 20
batch_size = 64
epochs = 50
num_sampled = 1
learning_rate = 1.0

momentum = 0.99
grad_clip = 0.1


for epoch in range(num_epochs):