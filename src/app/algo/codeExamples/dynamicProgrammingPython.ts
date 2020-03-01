
const coinChange = `
def coin_change(coins, value):
    """
        More or less make a 2D table that will contain all possible iterations of the
        value and the change needed to make such values

        Time complexity: O(cb)
        Space complexity: O(cb)

        Note: This will determine if we have the coins to make some sort of change, and not exact change
    :param coins:
    :param value:
    :return:
    """
    t = [[0 for x in range(len(coins))] for y in range(value + 1)]

    for i in range(len(coins)):
        t[0][i] = 1  # Init

    # Fill the rest of the table from the bottom up
    for i in range(1, value + 1):
        for j in range(len(coins)):
            # The number of possible variations of change up to this point
            k = t[i - coins[j]][j] if i - coins[j] >= 0 else 0
            b = t[i][j - 1] if j >= 1 else 0

            t[i][j] = k + b

    return t[value][len(coins) - 1]

`;

const coinChangeNoRepeat = `
def coin_change_no_repeat(coins, value):
    """
        More or less make a 2D table that will contain all possible iterations of the
        value and the change needed to make such values. Same as above but no repeating

        Time complexity: O(cb)
        Space complexity: O(cb)

        Note: This will determine if we have the coins to make some sort of change, and not exact change
    :param coins:
    :param value:
    :return: True if you can make change and false if you cannot
    """
    t = [[0 for x in range(value + 1)] for y in range(len(coins))]

    for i in range(len(coins)):
        t[i][0] = 1

    for b in range(value + 1):
        if b >= 1:
            t[0][b] = 0

    for i in range(len(coins)):
        for b in range(value + 1):
            if coins[i] <= b:
                t[i][b] = t[i - 1][b - coins[i]] + 1
            else:
                t[i][b] = t[i - 1][b]
    return t[len(coins) - 1][value]
`;

const canMakeChange = `
def can_make_change(coins, v):
    """
        Same as the ones above but return true or false
    :param coins:
    :param v:
    :return:
    """
    t = [[False for x in range(v + 1)] for y in range(len(coins))]
    t[0][0] = True

    for i in range(len(coins)):
        t[i][0] = True

    for b in range(v + 1):
        if b >= 1:
            t[0][b] = False

    for i in range(len(coins)):
        for b in range(v + 1):
            if coins[i] <= b:
                t[i][b] = t[i][b - coins[i]] or t[i-1][b - coins[i]]
            else:
                t[i][b] = t[i-1][b]
    return t[len(coins) - 1][v - 1]
`;
const canMakeChangeNoRepeat = `
def can_make_change_no_repeat(coins, v):
    """
        Same as the ones above but return true or false
    :param coins:
    :param v:
    :return:
    """
    t = [[False for x in range(v + 1)] for y in range(len(coins))]
    t[0][0] = True

    for i in range(len(coins)):
        t[i][0] = True

    for b in range(v + 1):
        if b >= 1:
            t[0][b] = False

    for i in range(len(coins)):
        for b in range(v + 1):
            if coins[i] <= b:
                t[i][b] = t[i-1][b - coins[i]]
            else:
                t[i][b] = t[i-1][b]
    return t[len(coins) - 1][v]
`;

const leastCoins = `
def least_coins(coins, value):
    added_coins = []

    i = len(coins) - 1

    while i >= 0:

        while coins[i] <= value:
            value -= coins[i]
            added_coins.append(coins[i])

        i -= 1

    return added_coins
`;

const longestCommonSubstring = `
def longest_common_substring(x, y):
    """
        Input: StringsArrays x, y
        Output: Length of the longest common substring in x, y
        Subproblem: For 0<=i<=n 0<=j<=m let T(i, j) = length of the longest palindrome sub sequence in x=x1,x2,...xi
            and y=y1,y2,...yj which includes xi, yj

        time complexity is O(x * y) as is space complexity
    :param x
    :param y
    :return:
    """
    i_len = range(len(x) + 1)
    j_len = range(len(y) + 1)

    # Int table of all 0s
    t = [[0 for i in i_len] for j in j_len]
    imax = 0
    jmax = 0

    # Check each character at start and end of string,
    # If there is a match then increment the count
    for i in i_len:
        for j in range(i, len(j_len)):
            if i == 0 or j == 0:
                t[i][j] = 0
            elif x[i - 1] == y[j - 1]:
                new_cell = t[i - 1][j - 1] + 1
                t[i][j] = new_cell
                if new_cell > t[imax][jmax]:
                    imax = i
                    jmax = j
            else:
                t[i][j] = 0

    return t[imax][jmax]
`;
const longestPalindromeSubsequence =`
    def longest_palindrome_subsequence(x):
    """
        Input: String s
        Output: Length of the longest palindrome subsequence in s
        Subproblem: For 0<=i<=n let T(i, j) = length of the longest palindrome
            sub sequence in s = s1,s2,...si which includes si

        time complexity is O(x^2) as is space complexity
    :param x:
    :return:
    """
    range_x = range(len(x))
    t = [[0 for j in range_x] for i in range_x]

    imax = 0
    jmax = 0

    # Same character is always a 1
    for j in range_x:
        t[j][j] = 1

    for i in range_x:
        for j in range(i, len(x) - 1):
            if x[i] == x[j]:
                # If we are one character ahead just add 1
                if j == (i + 1):
                    t[i][j] = 2
                else:
                    # There is a character in between, so add 2
                    # Which we are at most
                    t[i][j] = 2 + t[i + 1][j - 1]
            else:
                t[i][j] = t[i + 1][j - 1]

            if t[imax][jmax] < t[i][j]:
                imax = i
                jmax = j

    # This is unnecessary but its how I learned at Tech
    return t[imax][jmax]
`;
const longestPalindromeSubstring =`
def longest_palindrome_substring(x):
    """
        Input: String s
        Output: Length of the longest palindrome substring in s
        Subproblem: For 0<=j<=n 0<=i<=j let T(i, j) = length of the longest palindrome sub
            sequence in s = s1,s2,...si which includes si, sj

        time complexity is O(x^2) as is space complexity
    :param x:
    :return:
    """

    n = len(x)
    # Init table
    t = [[0 for i in range(n)] for l in range(n)]

    # Mark each table item as true. Store the length separately, but use the previous value
    # or False to determine if we should keep going. This makes it easier they trying to add and
    # subtract sub arrays
    max_len = 1

    # Set the same letter to True
    for j in range(n - 1):
        if x[j] == x[j + 1]:
            t[j][j + 1] = True
            max_len = 2

    # In this case, substring has to be at min size 3 (to beat max)
    k = 3  # Length of substring
    while k < n:
        i = 0
        while i < n - k + 1:
            # Get the ending index of
            # substring from starting
            # index i and length k
            j = k + i - 1
            # Check to see if the previous value is true. If so, set to True
            if t[i + 1][j - 1] and x[i] == x[j]:
                t[i][j] = True
                # If we are already at a higher K then set max len
                max_len = k if max_len < k else max_len
            i += 1
        k += 1  # Increment substring

    return max_len
`;

const kadanes = `
def kadanes(array):
    """
        O(n) complexity
    :param array:
    :return:
    """

    answer = - sys.maxint - 1

    t = [answer for i in range(len(array))]
    t[0] = array[0]
    start = end = temp = 0

    for j in range(1, len(array)):
        t[j] = max(t[j - 1], 0) + array[j]

        if t[j] == 0:
            temp = 0

        if t[j] > answer:
            answer = t[j]
            start = temp
            end = j

    # We can return start and end if we want
    return answer
`;
const missing = `
def missing(array):
    """
        Find the missing elements in an array
        assume the array is sorted
        for example 1, 3, 4 is missing 2
    :param array:
    :return:
    """

    missing = []
    length = len(array)

    if length >= 1:
        end = array[length - 1]
        index = length - 2
        while index >= 0:  # We want to go to the second to last character
            next = array[index]

            while next + 1 != end:
                next += 1
                missing.append(next)
            # So confusing a bit but make the new end this index
            end = array[index]
            index -= 1

        return missing
`;

const substringSum = `
def substring_sum(n):
    length = len(n)

    sum = []
    # Init
    sum.append(int(n[0]))

    result = sum[0]

    for i in range(1, length):
        num_i = int(n[i])
        # Get the current val plus the previous digits
        sum.append((i + 1) * num_i + 10 * sum[i - 1])
        result += sum[i]

    return result
`;
const maxSubarray = `
def max_subarray(arr):
    n = len(arr)
    # Sub sequence array
    t = [0 for x in range(n)]

    t[0] = arr[0]

    max_val = -999
    curr_max = arr[0]

    # Sub sequence
    for i in range(1, n):
        # Max will be t[n]
        t[i] = max(t[i - 1] + arr[i], t[i - 1])
        curr_max = max(arr[i], curr_max + arr[i])
        max_val = max(max_val, curr_max)

    max_sub = t[n - 1]
    # Now get single value
    for i in range(n):
        if max_sub < arr[i]:
            max_sub = arr[i]
        if max_val < arr[i]:
            max_val = arr[i]

    return max_val, max_sub
`;

const Python = {
    canMakeChange,
    canMakeChangeNoRepeat,
    coinChange,
    coinChangeNoRepeat,
    leastCoins,
    longestCommonSubstring,
    longestPalindromeSubsequence,
    longestPalindromeSubstring,
    kadanes,
    maxSubarray,
    missing,
    substringSum
};

export default Python;
