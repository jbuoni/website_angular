const queue = `
class Queue:
    """
        We don't really need this, but it makes
        clear that we are using a stack. _stack
        is denoted as private so we can make it
        clear that the object should not be used
    """
    def __init__(self, items):
        self._queue = [item for item in items] if items else []

    def push(self, item):
        self._queue.append(item)

    def pop(self):
        return self._queue.pop(0)

    def is_empty(self):
        return len(self._queue) == 0


def next_largest(array):
    """
        Given a sorted array, get the next largest element in that array.
        Time complexity O(2n)
    :param array:
    :return:
    """
    queue = Queue(array)
    return_arr = [-1 for j in range(len(array))]

    for i in range(len(array)):
        while not queue.is_empty():
            queue_item = queue.pop()
            if array[i] < queue_item:
                return_arr[i] = queue_item
                break

    return return_arr

`;

const min = `
class StackMin:
    """
        Special class used to get the min item on the
        stack. Comprised of multiple
    """

    def __init__(self):
        self.top = None
        self.minimum = None

    def push(self, value):
        # Make node value initially
        node = self.Graphs.Node(value)

        if self.top is None or value < self.minimum:
            node = self.Graphs.Node(value) if self.top is None else self.Graphs.Node((2 * value) - self.minimum)
            self.minimum = value

        node.next = self.top if self.top is not None else None
        self.top = node  # It has always been assigned by this point

    def pop(self):
        """
            We don't actually return the top,
            but min value or (2 * min) - value
        :return:
        """
        if self.top is None:
            return None

        node = self.top
        self.top = node.next

        if node.value < self.minimum:
            self.minimum = (2 * self.minimum) - node.value

        return node.value

    def get_min(self):
        return self.minimum

    class Graphs.Node:
        def __init__(self, value):
            self.value = value
            self.next = None
`;

const matching = `
PARENTHISIS = '('
BRACKET = '{'
SQUARE_BRACKET = '['
PARENTHISIS_END = ')'
BRACKET_END = '}'
SQUARE_BRACKET_END = ']'


def is_start(char):
    start_chars = [BRACKET, PARENTHISIS, SQUARE_BRACKET]
    return char in start_chars


def is_end(char):
    end_chars = [BRACKET_END, PARENTHISIS_END, SQUARE_BRACKET_END]
    return char in end_chars

class Stack:
    """
        We don't really need this, but it makes
        clear that we are using a stack. _stack
        is denoted as private so we can make it
        clear that the object should not be used
    """
    def __init__(self):
        self._stack = []

    def push(self, item):
        self._stack.append(item)

    def pop(self):
        return self._stack.pop()

    def is_empty(self):
        return len(self._stack) == 0

def matching(str_arr):
    """
        Given a string array, determine if the string
        contains a valid sequence of open and closed
        parenthesis. EX: '[()]{}{[()()]()}'
        Time complexity O(n)
        Space complexity O(n + m/2)
    :param str_arr:
    :return:
    """
    stack = Stack()

    def get_end_char(start_character):
        if start_character == BRACKET:
            return BRACKET_END
        elif start_character == PARENTHISIS:
            return PARENTHISIS_END
        elif start_character == SQUARE_BRACKET:
            return SQUARE_BRACKET_END
        else:
            # Should never happen
            return ''

    for current_chr in str_arr:
        if is_start(current_chr):
            char_to_push = get_end_char(current_chr)
            stack.push(char_to_push)
        elif is_end(current_chr):
            comp_char = stack.pop()
            if comp_char != current_chr:
                return False

    # When we are done, see if the stack is empty. If so, return true
    return stack.is_empty()
`;

const Python = {
    queue,
    min,
    matching
};

export default Python;
