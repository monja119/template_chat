import numpy as np


def cal(a, b, c):

    solution = ''
    d = np.power(b, 2) - 4 * a * c
    if d > 0:
        x1 = (-b - np.sqrt(d)) / (2 * a)
        #  <>
        x2 = (-b + np.sqrt(d)) / (2 * a)
        solution = 'x1={} et x2={}'.format(x1, x2)
    elif d == 0:
        x1 = x2 = (-b) / (2 * a)
        solution = 'on a une double solution qui est {}'.format(x1)
    else:
        solution = 'Pas de solution'

    print(solution)
