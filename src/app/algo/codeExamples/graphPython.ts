const dijkstras = `
import sys


class Graph():

    def __init__(self, vertices):
        self.V = vertices
        self.graph = [[0 for column in range(vertices)]
                      for row in range(vertices)]

    def min_distance(self, dist, visited):

        # Initilaize minimum distance for next node
        min_distance = sys.maxint
        min_index = None  # Shouldn't ever matter

        # Search not nearest vertex not in the
        # shortest path tree
        for vertex in range(self.V):
            if dist[vertex] < min_distance and visited[vertex] is False:
                min_distance = dist[vertex]
                min_index = vertex

        return min_index


    def dijkstras(self, start_node):
        visited = [False] * self.V  # Default all to false initially
        distances = [sys.maxint] * self.V  # All distances are defaulted to very high
        distances[start_node] = 0

        for j in range(self.V):
            # Get the minimum distance for the node
            min_node = self.min_distance(distances, visited)
            visited[min_node] = True

            for vertex in range(self.V):
                # Check to see if there is an edge. If there is, see if it is smaller (weight included)
                # than what is saved for the vertex. If there is no current distance, it will
                # be smaller
                if self.graph[min_node][vertex] > 0 and not visited[vertex] \\
                         and distances[vertex] > distances[min_node] + self.graph[min_node][vertex]:

                    distances[vertex] = distances[min_node] + self.graph[min_node][vertex]

        return distances
`;

const directed = `
from collections import defaultdict

class Graph:

    def __init__(self):
        self.graph = defaultdict(list)

    # Directional edges
    def add_egde(self, node_f, node_t):
        self.graph[node_f].append(node_t)

        # Check to see if there is a new vertex
        if not self.graph[node_t]:
            self.graph[node_t] = []

    def depth_first_search(self):
        visited = {}
        path = []
        for node in self.graph:
            if node not in visited:
                path.append(node)
                visited[node] = True
            # For each node, visit edges if no visited
            for edge in self.graph[node]:
                if edge not in visited:
                    path.append(edge)
                    visited[edge] = True

        return path, visited

    def breath_first_search(self, start):
        visited = {}
        queue = []
        path = []

        # Add start node. From here, get all nodes
        queue.append(start)
        path.append(start)
        visited[start] = True

        while queue:
            node_idx = queue.pop(0)

            for node in self.graph[node_idx]:
                if node not in visited.keys():
                    queue.append(node)
                    path.append(node)
                    visited[node] = True

        # Get nodes missed

        return path, visited

    def build_matrix(self):
        """
            Return a matrix representation of the graph
            O(VE)
        :return:
        """
        matrix = [[0 for x in range(len(self.graph))] for y in range(len(self.graph))]

        for node in self.graph:
            for edge in self.graph[node]:
                matrix[node][edge] = 1

        return matrix

    def _detect_cycle(self, node_idx, visited, recursive_stack):
        visited[node_idx] = True
        recursive_stack[node_idx] = True

        # Do a DFS (ish), and if there is a node that is visited twice
        # from the same parent node then there is a cycle
        for neighbour in self.graph[node_idx]:
            if not visited[neighbour]:
                if self._detect_cycle(neighbour, visited, recursive_stack):
                    return True
            elif recursive_stack[neighbour]:
                return True

        # Set this back to false
        recursive_stack[node_idx] = False
        return False

    def detect_cycle(self):
        """
            Return true if there is a cycle in the
            graph and false otherwise
            complexity of O(E log V)
        :return:
        """
        visited = [False] * len(self.graph)
        recursive_stack = [False] * len(self.graph)

        for i in self.graph:
            if not visited[i]:
                if self._detect_cycle(i, visited, recursive_stack):
                    return True
        return False
`;

const undirected = `
from collections import defaultdict


class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    def add_edge(self, node_t, node_f):
        self.graph[node_t].append(node_f)
        self.graph[node_f].append(node_t)

    def _detect_cycle(self, node_idx, parent_node, visited):
        visited[node_idx] = True
        # Do a DFS (ish), and if there is a node that is visited twice
        # from the same parent node then there is a cycle
        for i in self.graph[node_idx]:
            if not visited[i]:
                if self._detect_cycle(i, node_idx, visited):
                    return True
            elif i != parent_node:
                return True
        return False

    def detect_cycle(self):
        """
            Return true if there is a cycle in the
            graph and false otherwise
            complexity of O(E log V)
        :return:
        """
        visited = [False] * len(self.graph)

        for i in self.graph:
            if not visited[i]:
                # Default parent to -1
                if self._detect_cycle(i, -1, visited):
                    return True
        return False

    def build_matrix(self):
        """
            Return a matrix representation of the graph
            O(VE)
        :return:
        """
        matrix = [[0 for x in range(len(self.graph))] for y in range(len(self.graph))]

        for node in self.graph:
            for edge in self.graph[node]:
                matrix[node][edge] = 1

        return matrix

    def dfs_matrix(self, matrix, row, col):
        """
            Special DFS search for matrix graph representation
        :param matrix:
        :param row:
        :param col:
        :return:
        """
        row_len = len(matrix)
        col_len = len(matrix[0])

        if matrix[row][col] == 0:
            return

        matrix[row][col] = 0

        if row != 0:
            self.dfs_matrix(matrix, row - 1, col)
        if row != row_len - 1:
            self.dfs_matrix(matrix, row + 1, col)
        if col != 0:
            self.dfs_matrix(matrix, row, col - 1)
        if col != col_len - 1:
            self.dfs_matrix(matrix, row, col + 1)

    def count_islands(self, matrix=None):
        """
            Return the number of islands in a graph.
            An island is where all nodes are not connected
            to an outer node
            O(VE)
        :param matrix:
        :return:
        """
        matrix = self.build_matrix() if matrix is None else matrix

        island_count = 0

        row = len(matrix)
        col = len(matrix[0])

        for i in range(row):
            for j in range(col):
                if matrix[i][j] == 1:
                    self.dfs_matrix(matrix, i, j)
                    island_count += 1

        return island_count
`;

const flood = `
from collections import defaultdict


class Graph:

    def __init__(self):
        self.graph = defaultdict(list)
        self.num_rows = 0
        self.num_cols = 0

    def set_graph(self, graph):
        self.graph = graph
        self.num_rows = len(self.graph)
        self.num_cols = len(self.graph[0])

    def flood_fill(self, x, y, old_val, new_val):
        """
            Recursive algorithm.
            Given a 2D screen, location of a pixel in the screen ie(x,y) and a color(K), your task is to
            replace color of the given pixel and all adjacent(excluding diagonally adjacent) same colored
            pixels with the given color K.

            Check to see if color is new or old value. If not, then return, else change and check the cells
            around it for 1 +/- x and y
        :param x:
        :param y:
        :param old_val:
        :param new_val:
        :return:
        """

        # Doing it this way so I can clearly see edge cases
        if x < 0 or y < 0 or x >= self.num_rows or y >= self.num_cols:
            # Out of bounds
            return
        elif self.graph[x][y] == new_val:
            # Already new color
            return
        elif self.graph[x][y] != old_val:
            # Not a cell to replace
            return

        self.graph[x][y] = new_val

        # For all cells next to this, do the same thing
        self.flood_fill(x + 1, y, old_val, new_val)
        self.flood_fill(x, y + 1, old_val, new_val)
        self.flood_fill(x - 1, y, old_val, new_val)
        self.flood_fill(x, y - 1, old_val, new_val)

    def replace_xs_os(self):
        """
            Use the flood fill algorithm
        :param graph:
        :return:
        """
        # First replace all 'O's with '*'
        for x in range(self.num_rows):
            for y in range(self.num_cols):
                if self.graph[x][y] == 'O':
                    self.graph[x][y] = '*'

        # Now run the flood fill algorithm on edges
        for x in range(self.num_rows):
            # Top
            self.flood_fill(x, 0, '*', 'O')

        for x in range(self.num_rows):
            # Top
            self.flood_fill(x, self.num_cols - 1, '*', 'O')

        for y in range(self.num_cols):
            # Left
            self.flood_fill(0, y, '*', 'O')

        for y in range(self.num_cols):
            # Left
            self.flood_fill(self.num_rows - 1, y, '*', 'O')

        # Now replace all remaining '*' with 'O'
        for x in range(self.num_rows):
            for y in range(self.num_cols):
                if self.graph[x][y] == '*':
                    self.graph[x][y] = 'X'

        return self.graph
`;

const union = `
class Graph:
    def __init__(self, vertices):
        self.graph = []
        self.v = vertices

    def add_edge(self, node_t, node_f, weight):
        self.graph.append([node_t, node_f, weight])

    def find(self, parent_node, i):
        if parent_node[i] == i:
            return i
        else:
            return self.find(parent_node, parent_node[i])

    def union(self, parent, rank, x, y):
        x_root = self.find(parent, x)
        y_root = self.find(parent, y)

        if rank[x_root] < rank[y_root]:
            parent[x_root] = y_root
        elif rank[x_root] > rank[y_root]:
            parent[y_root] = x_root
        else:
            parent[y_root] = x_root
            rank[x_root] += 1
`;

const kruskal = `
import sys

class UndirectedGraph(Graph):
    def __init__(self, vertices):
        Graph.__init__(self, vertices)

    def kruskal(self):
        """
            Return MST using kruskal's algo
            O(E log V)
        :return:
        """
        i = 0
        j = 0
        result_arr = []

        # Sort the graph based on weight
        sorted_graph = sorted(self.graph, key=lambda item: item[2])

        parent = [v for v in range(self.v)]
        rank = [0 for v in range(self.v)]

        while j < self.v - 1:
            # Pop out min items (if not already included in our MST
            u, v, w = sorted_graph[i]

            i += 1
            x = self.find(parent, u)
            y = self.find(parent, v)

            # Check for cycles. If no cycle add (we know its the min weight already)
            if x != y:
                j += 1
                result_arr.append([u, v, w])
                self.union(parent, rank, x, y)

        return result_arr

`;

const prims = `
import sys

class UndirectedGraph(Graph):
    def __init__(self, vertices):
        Graph.__init__(self, vertices)

    def min_weight(self, key, set):

        # Initilaize min value
        min = sys.maxint
        min_index = None

        for v in range(self.v):
            if key[v] < min and set[v] == False:
                min = key[v]
                min_index = v

        return min_index

    def prims(self):
        """
        1) Create a set mstSet that keeps track of vertices already included in MST.
        2) Assign a key value to all vertices in the input graph. Initialize all key values as INFINITE.
            Assign key value as 0 for the first vertex so that it is picked first.
        3) While mstSet doesn't include all vertices
            a) Pick a vertex u which is not there in mstSet and has minimum key value.
            b) Include u to mstSet.
            c) Update key value of all adjacent vertices of u. To update the key values, iterate through all
            adjacent vertices. For every adjacent vertex v, if weight of edge u-v is less than the previous key value of
            v, update the key value as weight of u-v

        Time complexity: O(V^2)
        Space complexity: O(V^3)
        :return:
        """
        # Init to the largest value
        keys = [sys.maxint] * self.v
        parent = [None] * self.v

        keys[0] = 0
        set = [False] * self.v
        parent[0] = -1  # 0 is always root

        path_and_weight = []  # In the form of (u, v, w)

        for i in range(self.v):
            # Find the min weight from all weights which are not visited
            min = self.min_weight(keys, set)
            # Denote as visited
            set[min] = True

            for vertex in range(self.v):
                if keys[vertex] > self.graph[min][vertex] > 0 and not set[vertex]:
                    keys[vertex] = self.graph[min][vertex]
                    parent[vertex] = min
                    path_and_weight.append((min, vertex, self.graph[vertex][parent[vertex]]))

        return path_and_weight
`;

const Python = {
    dijkstras,
    directed,
    undirected,
    flood,
    prims,
    kruskal,
    union
};

export default Python;
