""" Given an list nums, write a function to move all 0's to the end of it while maintaining 
the relative order of the non-zero elements.
Example:Input: [0,1,0,3,12]Output: [1,3,12,0,0]
Example Input: [0,0,11,2,3,4]
Example Output: [11,2,3,4,0,0]"""

def move_zeros(li):    
    zeros = []    
    counter = li.count(0)    
    for _ in range(counter):        
        li.remove(0)        
        zeros.append(0)
    result = li + zeros
    return result
print(move_zeros([0,1,0,3,12]))


"""
Consecutive Indices
You are given a list of unique integers (arr), and two integers (a and b). 
Your task is to find out whether or not a and b appear consecutively in arr, 
and return a boolean value (True if a and b are consecutive, False otherwise).
It is guaranteed that a and b are both present in arr.
Example:
Input: ([1, 6, 9, -3, 4, -78, 0], -3, 4)
Output: True
Input: ([3,1,0,19], 19, 0)
Output: True 
"""
def isConsecutive(arr, a, b):
    index_a = None
    index_b = None

    i = 0
    for item in arr:
        if item == a:
            index_a = i
        if item == b:
            index_b = i
        i += 1

    difference = index_a - index_b

    print(index_a, index_b)
    return difference == 1 or difference == -1

print(isConsecutive([3,1,19,0], 19, 0))
print(isConsecutive([3,1,19,0], 19, 0))