import re
import nltk

def hasNumbers(inputString):
	return any(char.isdigit() for char in inputString)

def replaceNumbers(fileName):
	with open(fileName, "r+") as inputfile:
		text = inputfile.read()
		splitText = text.split()
		for string in splitText:
			if hasNumbers(string):
				print("Replacing Number")
				text = text.replace(string, "N")
	inputfile.close()

	with open(fileName, "w+") as inputfile:
		inputfile.seek(0)
		inputfile.truncate()
		inputfile.write(text)
	inputfile.close()

def replacewithUnk(fileName):
	with open(fileName, "r+") as inputfile:
		text = inputfile.read()
		tokens = nltk.regexp_tokenize(text, pattern = '\w+|\S+')
		vocab = set(tokens)
		print("Building Vocab Dict")
		countDict = dict((word,0) for word in vocab)
		#get counts
		print("Getting Counts")
		splitText = nltk.regexp_tokenize(text, pattern = '\w+|\S+')
		for string in splitText:
			countDict[string] += 1
	inputfile.close()

	print(countDict)
	for word in countDict.keys():
		if countDict[word] < 3:
			print("Replacing Unknown")
			word = " " + word + " "
			text = text.replace(word, " <unk> ")
	print("Writing")
	with open(fileName, "w+") as inputfile:
		inputfile.seek(0)
		inputfile.truncate()
		inputfile.write(text)
	inputfile.close()

def lowercase(filename):
	f = open(filename, 'r')
	text = f.read()
	lines = [line.lower() for line in text]

	with open(filename, "w+") as inputfile:
		inputfile.seek(0)
		inputfile.truncate()
		for line in lines:
			inputfile.write(line)
	inputfile.close()

filename = "data/newtraining.txt"

#replacewithUnk(filename)
#lowercase(filename)
replaceNumbers(filename)