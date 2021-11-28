const AllAnswers = [
  [[1, 2, 3, 4], [3, 4, 1, 2], [2, 1, 4, 3], [4, 3, 2, 1]],
  [[1, 2, 3, 4], [3, 4, 1, 2], [2, 3, 4, 1], [4, 1, 2, 3]],
  [[1, 2, 3, 4], [3, 4, 1, 2], [4, 1, 2, 3], [2, 3, 4, 1]],
  [[1, 2, 3, 4], [3, 4, 1, 2], [4, 3, 2, 1], [2, 1, 4, 3]],
  [[1, 2, 3, 4], [3, 4, 2, 1], [2, 1, 4, 3], [4, 3, 1, 2]],
  [[1, 2, 3, 4], [3, 4, 2, 1], [4, 3, 1, 2], [2, 1, 4, 3]],
  [[1, 2, 3, 4], [4, 3, 1, 2], [2, 1, 4, 3], [3, 4, 2, 1]],
  [[1, 2, 3, 4], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 4, 3]],
  [[1, 2, 3, 4], [4, 3, 2, 1], [2, 1, 4, 3], [3, 4, 1, 2]],
  [[1, 2, 3, 4], [4, 3, 2, 1], [2, 4, 1, 3], [3, 1, 4, 2]],
  [[1, 2, 3, 4], [4, 3, 2, 1], [3, 1, 4, 2], [2, 4, 1, 3]],
  [[1, 2, 3, 4], [4, 3, 2, 1], [3, 4, 1, 2], [2, 1, 4, 3]],
  [[1, 2, 4, 3], [4, 3, 1, 2], [2, 1, 3, 4], [3, 4, 2, 1]],
  [[1, 2, 4, 3], [4, 3, 1, 2], [2, 4, 3, 1], [3, 1, 2, 4]],
  [[1, 2, 4, 3], [4, 3, 1, 2], [3, 1, 2, 4], [2, 4, 3, 1]],
  [[1, 2, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [2, 1, 3, 4]],
  [[1, 2, 4, 3], [4, 3, 2, 1], [2, 1, 3, 4], [3, 4, 1, 2]],
  [[1, 2, 4, 3], [4, 3, 2, 1], [3, 4, 1, 2], [2, 1, 3, 4]],
  [[1, 2, 4, 3], [3, 4, 1, 2], [2, 1, 3, 4], [4, 3, 2, 1]],
  [[1, 2, 4, 3], [3, 4, 1, 2], [4, 3, 2, 1], [2, 1, 3, 4]],
  [[1, 2, 4, 3], [3, 4, 2, 1], [2, 1, 3, 4], [4, 3, 1, 2]],
  [[1, 2, 4, 3], [3, 4, 2, 1], [2, 3, 1, 4], [4, 1, 3, 2]],
  [[1, 2, 4, 3], [3, 4, 2, 1], [4, 1, 3, 2], [2, 3, 1, 4]],
  [[1, 2, 4, 3], [3, 4, 2, 1], [4, 3, 1, 2], [2, 1, 3, 4]],
  [[1, 3, 2, 4], [2, 4, 1, 3], [3, 1, 4, 2], [4, 2, 3, 1]],
  [[1, 3, 2, 4], [2, 4, 1, 3], [3, 2, 4, 1], [4, 1, 3, 2]],
  [[1, 3, 2, 4], [2, 4, 1, 3], [4, 1, 3, 2], [3, 2, 4, 1]],
  [[1, 3, 2, 4], [2, 4, 1, 3], [4, 2, 3, 1], [3, 1, 4, 2]],
  [[1, 3, 2, 4], [2, 4, 3, 1], [3, 1, 4, 2], [4, 2, 1, 3]],
  [[1, 3, 2, 4], [2, 4, 3, 1], [4, 2, 1, 3], [3, 1, 4, 2]],
  [[1, 3, 2, 4], [4, 2, 1, 3], [3, 1, 4, 2], [2, 4, 3, 1]],
  [[1, 3, 2, 4], [4, 2, 1, 3], [2, 4, 3, 1], [3, 1, 4, 2]],
  [[1, 3, 2, 4], [4, 2, 3, 1], [3, 1, 4, 2], [2, 4, 1, 3]],
  [[1, 3, 2, 4], [4, 2, 3, 1], [3, 4, 1, 2], [2, 1, 4, 3]],
  [[1, 3, 2, 4], [4, 2, 3, 1], [2, 1, 4, 3], [3, 4, 1, 2]],
  [[1, 3, 2, 4], [4, 2, 3, 1], [2, 4, 1, 3], [3, 1, 4, 2]],
  [[1, 3, 4, 2], [4, 2, 1, 3], [3, 1, 2, 4], [2, 4, 3, 1]],
  [[1, 3, 4, 2], [4, 2, 1, 3], [3, 4, 2, 1], [2, 1, 3, 4]],
  [[1, 3, 4, 2], [4, 2, 1, 3], [2, 1, 3, 4], [3, 4, 2, 1]],
  [[1, 3, 4, 2], [4, 2, 1, 3], [2, 4, 3, 1], [3, 1, 2, 4]],
  [[1, 3, 4, 2], [4, 2, 3, 1], [3, 1, 2, 4], [2, 4, 1, 3]],
  [[1, 3, 4, 2], [4, 2, 3, 1], [2, 4, 1, 3], [3, 1, 2, 4]],
  [[1, 3, 4, 2], [2, 4, 1, 3], [3, 1, 2, 4], [4, 2, 3, 1]],
  [[1, 3, 4, 2], [2, 4, 1, 3], [4, 2, 3, 1], [3, 1, 2, 4]],
  [[1, 3, 4, 2], [2, 4, 3, 1], [3, 1, 2, 4], [4, 2, 1, 3]],
  [[1, 3, 4, 2], [2, 4, 3, 1], [3, 2, 1, 4], [4, 1, 2, 3]],
  [[1, 3, 4, 2], [2, 4, 3, 1], [4, 1, 2, 3], [3, 2, 1, 4]],
  [[1, 3, 4, 2], [2, 4, 3, 1], [4, 2, 1, 3], [3, 1, 2, 4]],
  [[1, 4, 2, 3], [2, 3, 1, 4], [4, 1, 3, 2], [3, 2, 4, 1]],
  [[1, 4, 2, 3], [2, 3, 1, 4], [4, 2, 3, 1], [3, 1, 4, 2]],
  [[1, 4, 2, 3], [2, 3, 1, 4], [3, 1, 4, 2], [4, 2, 3, 1]],
  [[1, 4, 2, 3], [2, 3, 1, 4], [3, 2, 4, 1], [4, 1, 3, 2]],
  [[1, 4, 2, 3], [2, 3, 4, 1], [4, 1, 3, 2], [3, 2, 1, 4]],
  [[1, 4, 2, 3], [2, 3, 4, 1], [3, 2, 1, 4], [4, 1, 3, 2]],
  [[1, 4, 2, 3], [3, 2, 1, 4], [4, 1, 3, 2], [2, 3, 4, 1]],
  [[1, 4, 2, 3], [3, 2, 1, 4], [2, 3, 4, 1], [4, 1, 3, 2]],
  [[1, 4, 2, 3], [3, 2, 4, 1], [4, 1, 3, 2], [2, 3, 1, 4]],
  [[1, 4, 2, 3], [3, 2, 4, 1], [4, 3, 1, 2], [2, 1, 3, 4]],
  [[1, 4, 2, 3], [3, 2, 4, 1], [2, 1, 3, 4], [4, 3, 1, 2]],
  [[1, 4, 2, 3], [3, 2, 4, 1], [2, 3, 1, 4], [4, 1, 3, 2]],
  [[1, 4, 3, 2], [3, 2, 1, 4], [4, 1, 2, 3], [2, 3, 4, 1]],
  [[1, 4, 3, 2], [3, 2, 1, 4], [4, 3, 2, 1], [2, 1, 4, 3]],
  [[1, 4, 3, 2], [3, 2, 1, 4], [2, 1, 4, 3], [4, 3, 2, 1]],
  [[1, 4, 3, 2], [3, 2, 1, 4], [2, 3, 4, 1], [4, 1, 2, 3]],
  [[1, 4, 3, 2], [3, 2, 4, 1], [4, 1, 2, 3], [2, 3, 1, 4]],
  [[1, 4, 3, 2], [3, 2, 4, 1], [2, 3, 1, 4], [4, 1, 2, 3]],
  [[1, 4, 3, 2], [2, 3, 1, 4], [4, 1, 2, 3], [3, 2, 4, 1]],
  [[1, 4, 3, 2], [2, 3, 1, 4], [3, 2, 4, 1], [4, 1, 2, 3]],
  [[1, 4, 3, 2], [2, 3, 4, 1], [4, 1, 2, 3], [3, 2, 1, 4]],
  [[1, 4, 3, 2], [2, 3, 4, 1], [4, 2, 1, 3], [3, 1, 2, 4]],
  [[1, 4, 3, 2], [2, 3, 4, 1], [3, 1, 2, 4], [4, 2, 1, 3]],
  [[1, 4, 3, 2], [2, 3, 4, 1], [3, 2, 1, 4], [4, 1, 2, 3]],
  [[2, 1, 3, 4], [3, 4, 2, 1], [1, 2, 4, 3], [4, 3, 1, 2]],
  [[2, 1, 3, 4], [3, 4, 2, 1], [1, 3, 4, 2], [4, 2, 1, 3]],
  [[2, 1, 3, 4], [3, 4, 2, 1], [4, 2, 1, 3], [1, 3, 4, 2]],
  [[2, 1, 3, 4], [3, 4, 2, 1], [4, 3, 1, 2], [1, 2, 4, 3]],
  [[2, 1, 3, 4], [3, 4, 1, 2], [1, 2, 4, 3], [4, 3, 2, 1]],
  [[2, 1, 3, 4], [3, 4, 1, 2], [4, 3, 2, 1], [1, 2, 4, 3]],
  [[2, 1, 3, 4], [4, 3, 2, 1], [1, 2, 4, 3], [3, 4, 1, 2]],
  [[2, 1, 3, 4], [4, 3, 2, 1], [3, 4, 1, 2], [1, 2, 4, 3]],
  [[2, 1, 3, 4], [4, 3, 1, 2], [1, 2, 4, 3], [3, 4, 2, 1]],
  [[2, 1, 3, 4], [4, 3, 1, 2], [1, 4, 2, 3], [3, 2, 4, 1]],
  [[2, 1, 3, 4], [4, 3, 1, 2], [3, 2, 4, 1], [1, 4, 2, 3]],
  [[2, 1, 3, 4], [4, 3, 1, 2], [3, 4, 2, 1], [1, 2, 4, 3]],
  [[2, 1, 4, 3], [4, 3, 2, 1], [1, 2, 3, 4], [3, 4, 1, 2]],
  [[2, 1, 4, 3], [4, 3, 2, 1], [1, 4, 3, 2], [3, 2, 1, 4]],
  [[2, 1, 4, 3], [4, 3, 2, 1], [3, 2, 1, 4], [1, 4, 3, 2]],
  [[2, 1, 4, 3], [4, 3, 2, 1], [3, 4, 1, 2], [1, 2, 3, 4]],
  [[2, 1, 4, 3], [4, 3, 1, 2], [1, 2, 3, 4], [3, 4, 2, 1]],
  [[2, 1, 4, 3], [4, 3, 1, 2], [3, 4, 2, 1], [1, 2, 3, 4]],
  [[2, 1, 4, 3], [3, 4, 2, 1], [1, 2, 3, 4], [4, 3, 1, 2]],
  [[2, 1, 4, 3], [3, 4, 2, 1], [4, 3, 1, 2], [1, 2, 3, 4]],
  [[2, 1, 4, 3], [3, 4, 1, 2], [1, 2, 3, 4], [4, 3, 2, 1]],
  [[2, 1, 4, 3], [3, 4, 1, 2], [1, 3, 2, 4], [4, 2, 3, 1]],
  [[2, 1, 4, 3], [3, 4, 1, 2], [4, 2, 3, 1], [1, 3, 2, 4]],
  [[2, 1, 4, 3], [3, 4, 1, 2], [4, 3, 2, 1], [1, 2, 3, 4]],
  [[2, 3, 1, 4], [1, 4, 2, 3], [3, 2, 4, 1], [4, 1, 3, 2]],
  [[2, 3, 1, 4], [1, 4, 2, 3], [3, 1, 4, 2], [4, 2, 3, 1]],
  [[2, 3, 1, 4], [1, 4, 2, 3], [4, 2, 3, 1], [3, 1, 4, 2]],
  [[2, 3, 1, 4], [1, 4, 2, 3], [4, 1, 3, 2], [3, 2, 4, 1]],
  [[2, 3, 1, 4], [1, 4, 3, 2], [3, 2, 4, 1], [4, 1, 2, 3]],
  [[2, 3, 1, 4], [1, 4, 3, 2], [4, 1, 2, 3], [3, 2, 4, 1]],
  [[2, 3, 1, 4], [4, 1, 2, 3], [3, 2, 4, 1], [1, 4, 3, 2]],
  [[2, 3, 1, 4], [4, 1, 2, 3], [1, 4, 3, 2], [3, 2, 4, 1]],
  [[2, 3, 1, 4], [4, 1, 3, 2], [3, 2, 4, 1], [1, 4, 2, 3]],
  [[2, 3, 1, 4], [4, 1, 3, 2], [3, 4, 2, 1], [1, 2, 4, 3]],
  [[2, 3, 1, 4], [4, 1, 3, 2], [1, 2, 4, 3], [3, 4, 2, 1]],
  [[2, 3, 1, 4], [4, 1, 3, 2], [1, 4, 2, 3], [3, 2, 4, 1]],
  [[2, 3, 4, 1], [4, 1, 2, 3], [3, 2, 1, 4], [1, 4, 3, 2]],
  [[2, 3, 4, 1], [4, 1, 2, 3], [3, 4, 1, 2], [1, 2, 3, 4]],
  [[2, 3, 4, 1], [4, 1, 2, 3], [1, 2, 3, 4], [3, 4, 1, 2]],
  [[2, 3, 4, 1], [4, 1, 2, 3], [1, 4, 3, 2], [3, 2, 1, 4]],
  [[2, 3, 4, 1], [4, 1, 3, 2], [3, 2, 1, 4], [1, 4, 2, 3]],
  [[2, 3, 4, 1], [4, 1, 3, 2], [1, 4, 2, 3], [3, 2, 1, 4]],
  [[2, 3, 4, 1], [1, 4, 2, 3], [3, 2, 1, 4], [4, 1, 3, 2]],
  [[2, 3, 4, 1], [1, 4, 2, 3], [4, 1, 3, 2], [3, 2, 1, 4]],
  [[2, 3, 4, 1], [1, 4, 3, 2], [3, 2, 1, 4], [4, 1, 2, 3]],
  [[2, 3, 4, 1], [1, 4, 3, 2], [3, 1, 2, 4], [4, 2, 1, 3]],
  [[2, 3, 4, 1], [1, 4, 3, 2], [4, 2, 1, 3], [3, 1, 2, 4]],
  [[2, 3, 4, 1], [1, 4, 3, 2], [4, 1, 2, 3], [3, 2, 1, 4]],
  [[2, 4, 1, 3], [1, 3, 2, 4], [4, 2, 3, 1], [3, 1, 4, 2]],
  [[2, 4, 1, 3], [1, 3, 2, 4], [4, 1, 3, 2], [3, 2, 4, 1]],
  [[2, 4, 1, 3], [1, 3, 2, 4], [3, 2, 4, 1], [4, 1, 3, 2]],
  [[2, 4, 1, 3], [1, 3, 2, 4], [3, 1, 4, 2], [4, 2, 3, 1]],
  [[2, 4, 1, 3], [1, 3, 4, 2], [4, 2, 3, 1], [3, 1, 2, 4]],
  [[2, 4, 1, 3], [1, 3, 4, 2], [3, 1, 2, 4], [4, 2, 3, 1]],
  [[2, 4, 1, 3], [3, 1, 2, 4], [4, 2, 3, 1], [1, 3, 4, 2]],
  [[2, 4, 1, 3], [3, 1, 2, 4], [1, 3, 4, 2], [4, 2, 3, 1]],
  [[2, 4, 1, 3], [3, 1, 4, 2], [4, 2, 3, 1], [1, 3, 2, 4]],
  [[2, 4, 1, 3], [3, 1, 4, 2], [4, 3, 2, 1], [1, 2, 3, 4]],
  [[2, 4, 1, 3], [3, 1, 4, 2], [1, 2, 3, 4], [4, 3, 2, 1]],
  [[2, 4, 1, 3], [3, 1, 4, 2], [1, 3, 2, 4], [4, 2, 3, 1]],
  [[2, 4, 3, 1], [3, 1, 2, 4], [4, 2, 1, 3], [1, 3, 4, 2]],
  [[2, 4, 3, 1], [3, 1, 2, 4], [4, 3, 1, 2], [1, 2, 4, 3]],
  [[2, 4, 3, 1], [3, 1, 2, 4], [1, 2, 4, 3], [4, 3, 1, 2]],
  [[2, 4, 3, 1], [3, 1, 2, 4], [1, 3, 4, 2], [4, 2, 1, 3]],
  [[2, 4, 3, 1], [3, 1, 4, 2], [4, 2, 1, 3], [1, 3, 2, 4]],
  [[2, 4, 3, 1], [3, 1, 4, 2], [1, 3, 2, 4], [4, 2, 1, 3]],
  [[2, 4, 3, 1], [1, 3, 2, 4], [4, 2, 1, 3], [3, 1, 4, 2]],
  [[2, 4, 3, 1], [1, 3, 2, 4], [3, 1, 4, 2], [4, 2, 1, 3]],
  [[2, 4, 3, 1], [1, 3, 4, 2], [4, 2, 1, 3], [3, 1, 2, 4]],
  [[2, 4, 3, 1], [1, 3, 4, 2], [4, 1, 2, 3], [3, 2, 1, 4]],
  [[2, 4, 3, 1], [1, 3, 4, 2], [3, 2, 1, 4], [4, 1, 2, 3]],
  [[2, 4, 3, 1], [1, 3, 4, 2], [3, 1, 2, 4], [4, 2, 1, 3]],
  [[3, 1, 2, 4], [2, 4, 3, 1], [1, 3, 4, 2], [4, 2, 1, 3]],
  [[3, 1, 2, 4], [2, 4, 3, 1], [1, 2, 4, 3], [4, 3, 1, 2]],
  [[3, 1, 2, 4], [2, 4, 3, 1], [4, 3, 1, 2], [1, 2, 4, 3]],
  [[3, 1, 2, 4], [2, 4, 3, 1], [4, 2, 1, 3], [1, 3, 4, 2]],
  [[3, 1, 2, 4], [2, 4, 1, 3], [1, 3, 4, 2], [4, 2, 3, 1]],
  [[3, 1, 2, 4], [2, 4, 1, 3], [4, 2, 3, 1], [1, 3, 4, 2]],
  [[3, 1, 2, 4], [4, 2, 3, 1], [1, 3, 4, 2], [2, 4, 1, 3]],
  [[3, 1, 2, 4], [4, 2, 3, 1], [2, 4, 1, 3], [1, 3, 4, 2]],
  [[3, 1, 2, 4], [4, 2, 1, 3], [1, 3, 4, 2], [2, 4, 3, 1]],
  [[3, 1, 2, 4], [4, 2, 1, 3], [1, 4, 3, 2], [2, 3, 4, 1]],
  [[3, 1, 2, 4], [4, 2, 1, 3], [2, 3, 4, 1], [1, 4, 3, 2]],
  [[3, 1, 2, 4], [4, 2, 1, 3], [2, 4, 3, 1], [1, 3, 4, 2]],
  [[3, 1, 4, 2], [4, 2, 3, 1], [1, 3, 2, 4], [2, 4, 1, 3]],
  [[3, 1, 4, 2], [4, 2, 3, 1], [1, 4, 2, 3], [2, 3, 1, 4]],
  [[3, 1, 4, 2], [4, 2, 3, 1], [2, 3, 1, 4], [1, 4, 2, 3]],
  [[3, 1, 4, 2], [4, 2, 3, 1], [2, 4, 1, 3], [1, 3, 2, 4]],
  [[3, 1, 4, 2], [4, 2, 1, 3], [1, 3, 2, 4], [2, 4, 3, 1]],
  [[3, 1, 4, 2], [4, 2, 1, 3], [2, 4, 3, 1], [1, 3, 2, 4]],
  [[3, 1, 4, 2], [2, 4, 3, 1], [1, 3, 2, 4], [4, 2, 1, 3]],
  [[3, 1, 4, 2], [2, 4, 3, 1], [4, 2, 1, 3], [1, 3, 2, 4]],
  [[3, 1, 4, 2], [2, 4, 1, 3], [1, 3, 2, 4], [4, 2, 3, 1]],
  [[3, 1, 4, 2], [2, 4, 1, 3], [1, 2, 3, 4], [4, 3, 2, 1]],
  [[3, 1, 4, 2], [2, 4, 1, 3], [4, 3, 2, 1], [1, 2, 3, 4]],
  [[3, 1, 4, 2], [2, 4, 1, 3], [4, 2, 3, 1], [1, 3, 2, 4]],
  [[3, 2, 1, 4], [1, 4, 3, 2], [2, 3, 4, 1], [4, 1, 2, 3]],
  [[3, 2, 1, 4], [1, 4, 3, 2], [2, 1, 4, 3], [4, 3, 2, 1]],
  [[3, 2, 1, 4], [1, 4, 3, 2], [4, 3, 2, 1], [2, 1, 4, 3]],
  [[3, 2, 1, 4], [1, 4, 3, 2], [4, 1, 2, 3], [2, 3, 4, 1]],
  [[3, 2, 1, 4], [1, 4, 2, 3], [2, 3, 4, 1], [4, 1, 3, 2]],
  [[3, 2, 1, 4], [1, 4, 2, 3], [4, 1, 3, 2], [2, 3, 4, 1]],
  [[3, 2, 1, 4], [4, 1, 3, 2], [2, 3, 4, 1], [1, 4, 2, 3]],
  [[3, 2, 1, 4], [4, 1, 3, 2], [1, 4, 2, 3], [2, 3, 4, 1]],
  [[3, 2, 1, 4], [4, 1, 2, 3], [2, 3, 4, 1], [1, 4, 3, 2]],
  [[3, 2, 1, 4], [4, 1, 2, 3], [2, 4, 3, 1], [1, 3, 4, 2]],
  [[3, 2, 1, 4], [4, 1, 2, 3], [1, 3, 4, 2], [2, 4, 3, 1]],
  [[3, 2, 1, 4], [4, 1, 2, 3], [1, 4, 3, 2], [2, 3, 4, 1]],
  [[3, 2, 4, 1], [4, 1, 3, 2], [2, 3, 1, 4], [1, 4, 2, 3]],
  [[3, 2, 4, 1], [4, 1, 3, 2], [2, 4, 1, 3], [1, 3, 2, 4]],
  [[3, 2, 4, 1], [4, 1, 3, 2], [1, 3, 2, 4], [2, 4, 1, 3]],
  [[3, 2, 4, 1], [4, 1, 3, 2], [1, 4, 2, 3], [2, 3, 1, 4]],
  [[3, 2, 4, 1], [4, 1, 2, 3], [2, 3, 1, 4], [1, 4, 3, 2]],
  [[3, 2, 4, 1], [4, 1, 2, 3], [1, 4, 3, 2], [2, 3, 1, 4]],
  [[3, 2, 4, 1], [1, 4, 3, 2], [2, 3, 1, 4], [4, 1, 2, 3]],
  [[3, 2, 4, 1], [1, 4, 3, 2], [4, 1, 2, 3], [2, 3, 1, 4]],
  [[3, 2, 4, 1], [1, 4, 2, 3], [2, 3, 1, 4], [4, 1, 3, 2]],
  [[3, 2, 4, 1], [1, 4, 2, 3], [2, 1, 3, 4], [4, 3, 1, 2]],
  [[3, 2, 4, 1], [1, 4, 2, 3], [4, 3, 1, 2], [2, 1, 3, 4]],
  [[3, 2, 4, 1], [1, 4, 2, 3], [4, 1, 3, 2], [2, 3, 1, 4]],
  [[3, 4, 1, 2], [1, 2, 3, 4], [4, 3, 2, 1], [2, 1, 4, 3]],
  [[3, 4, 1, 2], [1, 2, 3, 4], [4, 1, 2, 3], [2, 3, 4, 1]],
  [[3, 4, 1, 2], [1, 2, 3, 4], [2, 3, 4, 1], [4, 1, 2, 3]],
  [[3, 4, 1, 2], [1, 2, 3, 4], [2, 1, 4, 3], [4, 3, 2, 1]],
  [[3, 4, 1, 2], [1, 2, 4, 3], [4, 3, 2, 1], [2, 1, 3, 4]],
  [[3, 4, 1, 2], [1, 2, 4, 3], [2, 1, 3, 4], [4, 3, 2, 1]],
  [[3, 4, 1, 2], [2, 1, 3, 4], [4, 3, 2, 1], [1, 2, 4, 3]],
  [[3, 4, 1, 2], [2, 1, 3, 4], [1, 2, 4, 3], [4, 3, 2, 1]],
  [[3, 4, 1, 2], [2, 1, 4, 3], [4, 3, 2, 1], [1, 2, 3, 4]],
  [[3, 4, 1, 2], [2, 1, 4, 3], [4, 2, 3, 1], [1, 3, 2, 4]],
  [[3, 4, 1, 2], [2, 1, 4, 3], [1, 3, 2, 4], [4, 2, 3, 1]],
  [[3, 4, 1, 2], [2, 1, 4, 3], [1, 2, 3, 4], [4, 3, 2, 1]],
  [[3, 4, 2, 1], [2, 1, 3, 4], [4, 3, 1, 2], [1, 2, 4, 3]],
  [[3, 4, 2, 1], [2, 1, 3, 4], [4, 2, 1, 3], [1, 3, 4, 2]],
  [[3, 4, 2, 1], [2, 1, 3, 4], [1, 3, 4, 2], [4, 2, 1, 3]],
  [[3, 4, 2, 1], [2, 1, 3, 4], [1, 2, 4, 3], [4, 3, 1, 2]],
  [[3, 4, 2, 1], [2, 1, 4, 3], [4, 3, 1, 2], [1, 2, 3, 4]],
  [[3, 4, 2, 1], [2, 1, 4, 3], [1, 2, 3, 4], [4, 3, 1, 2]],
  [[3, 4, 2, 1], [1, 2, 3, 4], [4, 3, 1, 2], [2, 1, 4, 3]],
  [[3, 4, 2, 1], [1, 2, 3, 4], [2, 1, 4, 3], [4, 3, 1, 2]],
  [[3, 4, 2, 1], [1, 2, 4, 3], [4, 3, 1, 2], [2, 1, 3, 4]],
  [[3, 4, 2, 1], [1, 2, 4, 3], [4, 1, 3, 2], [2, 3, 1, 4]],
  [[3, 4, 2, 1], [1, 2, 4, 3], [2, 3, 1, 4], [4, 1, 3, 2]],
  [[3, 4, 2, 1], [1, 2, 4, 3], [2, 1, 3, 4], [4, 3, 1, 2]],
  [[4, 1, 2, 3], [2, 3, 4, 1], [1, 4, 3, 2], [3, 2, 1, 4]],
  [[4, 1, 2, 3], [2, 3, 4, 1], [1, 2, 3, 4], [3, 4, 1, 2]],
  [[4, 1, 2, 3], [2, 3, 4, 1], [3, 4, 1, 2], [1, 2, 3, 4]],
  [[4, 1, 2, 3], [2, 3, 4, 1], [3, 2, 1, 4], [1, 4, 3, 2]],
  [[4, 1, 2, 3], [2, 3, 1, 4], [1, 4, 3, 2], [3, 2, 4, 1]],
  [[4, 1, 2, 3], [2, 3, 1, 4], [3, 2, 4, 1], [1, 4, 3, 2]],
  [[4, 1, 2, 3], [3, 2, 4, 1], [1, 4, 3, 2], [2, 3, 1, 4]],
  [[4, 1, 2, 3], [3, 2, 4, 1], [2, 3, 1, 4], [1, 4, 3, 2]],
  [[4, 1, 2, 3], [3, 2, 1, 4], [1, 4, 3, 2], [2, 3, 4, 1]],
  [[4, 1, 2, 3], [3, 2, 1, 4], [1, 3, 4, 2], [2, 4, 3, 1]],
  [[4, 1, 2, 3], [3, 2, 1, 4], [2, 4, 3, 1], [1, 3, 4, 2]],
  [[4, 1, 2, 3], [3, 2, 1, 4], [2, 3, 4, 1], [1, 4, 3, 2]],
  [[4, 1, 3, 2], [3, 2, 4, 1], [1, 4, 2, 3], [2, 3, 1, 4]],
  [[4, 1, 3, 2], [3, 2, 4, 1], [1, 3, 2, 4], [2, 4, 1, 3]],
  [[4, 1, 3, 2], [3, 2, 4, 1], [2, 4, 1, 3], [1, 3, 2, 4]],
  [[4, 1, 3, 2], [3, 2, 4, 1], [2, 3, 1, 4], [1, 4, 2, 3]],
  [[4, 1, 3, 2], [3, 2, 1, 4], [1, 4, 2, 3], [2, 3, 4, 1]],
  [[4, 1, 3, 2], [3, 2, 1, 4], [2, 3, 4, 1], [1, 4, 2, 3]],
  [[4, 1, 3, 2], [2, 3, 4, 1], [1, 4, 2, 3], [3, 2, 1, 4]],
  [[4, 1, 3, 2], [2, 3, 4, 1], [3, 2, 1, 4], [1, 4, 2, 3]],
  [[4, 1, 3, 2], [2, 3, 1, 4], [1, 4, 2, 3], [3, 2, 4, 1]],
  [[4, 1, 3, 2], [2, 3, 1, 4], [1, 2, 4, 3], [3, 4, 2, 1]],
  [[4, 1, 3, 2], [2, 3, 1, 4], [3, 4, 2, 1], [1, 2, 4, 3]],
  [[4, 1, 3, 2], [2, 3, 1, 4], [3, 2, 4, 1], [1, 4, 2, 3]],
  [[4, 2, 1, 3], [1, 3, 4, 2], [2, 4, 3, 1], [3, 1, 2, 4]],
  [[4, 2, 1, 3], [1, 3, 4, 2], [2, 1, 3, 4], [3, 4, 2, 1]],
  [[4, 2, 1, 3], [1, 3, 4, 2], [3, 4, 2, 1], [2, 1, 3, 4]],
  [[4, 2, 1, 3], [1, 3, 4, 2], [3, 1, 2, 4], [2, 4, 3, 1]],
  [[4, 2, 1, 3], [1, 3, 2, 4], [2, 4, 3, 1], [3, 1, 4, 2]],
  [[4, 2, 1, 3], [1, 3, 2, 4], [3, 1, 4, 2], [2, 4, 3, 1]],
  [[4, 2, 1, 3], [3, 1, 4, 2], [2, 4, 3, 1], [1, 3, 2, 4]],
  [[4, 2, 1, 3], [3, 1, 4, 2], [1, 3, 2, 4], [2, 4, 3, 1]],
  [[4, 2, 1, 3], [3, 1, 2, 4], [2, 4, 3, 1], [1, 3, 4, 2]],
  [[4, 2, 1, 3], [3, 1, 2, 4], [2, 3, 4, 1], [1, 4, 3, 2]],
  [[4, 2, 1, 3], [3, 1, 2, 4], [1, 4, 3, 2], [2, 3, 4, 1]],
  [[4, 2, 1, 3], [3, 1, 2, 4], [1, 3, 4, 2], [2, 4, 3, 1]],
  [[4, 2, 3, 1], [3, 1, 4, 2], [2, 4, 1, 3], [1, 3, 2, 4]],
  [[4, 2, 3, 1], [3, 1, 4, 2], [2, 3, 1, 4], [1, 4, 2, 3]],
  [[4, 2, 3, 1], [3, 1, 4, 2], [1, 4, 2, 3], [2, 3, 1, 4]],
  [[4, 2, 3, 1], [3, 1, 4, 2], [1, 3, 2, 4], [2, 4, 1, 3]],
  [[4, 2, 3, 1], [3, 1, 2, 4], [2, 4, 1, 3], [1, 3, 4, 2]],
  [[4, 2, 3, 1], [3, 1, 2, 4], [1, 3, 4, 2], [2, 4, 1, 3]],
  [[4, 2, 3, 1], [1, 3, 4, 2], [2, 4, 1, 3], [3, 1, 2, 4]],
  [[4, 2, 3, 1], [1, 3, 4, 2], [3, 1, 2, 4], [2, 4, 1, 3]],
  [[4, 2, 3, 1], [1, 3, 2, 4], [2, 4, 1, 3], [3, 1, 4, 2]],
  [[4, 2, 3, 1], [1, 3, 2, 4], [2, 1, 4, 3], [3, 4, 1, 2]],
  [[4, 2, 3, 1], [1, 3, 2, 4], [3, 4, 1, 2], [2, 1, 4, 3]],
  [[4, 2, 3, 1], [1, 3, 2, 4], [3, 1, 4, 2], [2, 4, 1, 3]],
  [[4, 3, 1, 2], [1, 2, 4, 3], [3, 4, 2, 1], [2, 1, 3, 4]],
  [[4, 3, 1, 2], [1, 2, 4, 3], [3, 1, 2, 4], [2, 4, 3, 1]],
  [[4, 3, 1, 2], [1, 2, 4, 3], [2, 4, 3, 1], [3, 1, 2, 4]],
  [[4, 3, 1, 2], [1, 2, 4, 3], [2, 1, 3, 4], [3, 4, 2, 1]],
  [[4, 3, 1, 2], [1, 2, 3, 4], [3, 4, 2, 1], [2, 1, 4, 3]],
  [[4, 3, 1, 2], [1, 2, 3, 4], [2, 1, 4, 3], [3, 4, 2, 1]],
  [[4, 3, 1, 2], [2, 1, 4, 3], [3, 4, 2, 1], [1, 2, 3, 4]],
  [[4, 3, 1, 2], [2, 1, 4, 3], [1, 2, 3, 4], [3, 4, 2, 1]],
  [[4, 3, 1, 2], [2, 1, 3, 4], [3, 4, 2, 1], [1, 2, 4, 3]],
  [[4, 3, 1, 2], [2, 1, 3, 4], [3, 2, 4, 1], [1, 4, 2, 3]],
  [[4, 3, 1, 2], [2, 1, 3, 4], [1, 4, 2, 3], [3, 2, 4, 1]],
  [[4, 3, 1, 2], [2, 1, 3, 4], [1, 2, 4, 3], [3, 4, 2, 1]],
  [[4, 3, 2, 1], [2, 1, 4, 3], [3, 4, 1, 2], [1, 2, 3, 4]],
  [[4, 3, 2, 1], [2, 1, 4, 3], [3, 2, 1, 4], [1, 4, 3, 2]],
  [[4, 3, 2, 1], [2, 1, 4, 3], [1, 4, 3, 2], [3, 2, 1, 4]],
  [[4, 3, 2, 1], [2, 1, 4, 3], [1, 2, 3, 4], [3, 4, 1, 2]],
  [[4, 3, 2, 1], [2, 1, 3, 4], [3, 4, 1, 2], [1, 2, 4, 3]],
  [[4, 3, 2, 1], [2, 1, 3, 4], [1, 2, 4, 3], [3, 4, 1, 2]],
  [[4, 3, 2, 1], [1, 2, 4, 3], [3, 4, 1, 2], [2, 1, 3, 4]],
  [[4, 3, 2, 1], [1, 2, 4, 3], [2, 1, 3, 4], [3, 4, 1, 2]],
  [[4, 3, 2, 1], [1, 2, 3, 4], [3, 4, 1, 2], [2, 1, 4, 3]],
  [[4, 3, 2, 1], [1, 2, 3, 4], [3, 1, 4, 2], [2, 4, 1, 3]],
  [[4, 3, 2, 1], [1, 2, 3, 4], [2, 4, 1, 3], [3, 1, 4, 2]],
  [[4, 3, 2, 1], [1, 2, 3, 4], [2, 1, 4, 3], [3, 4, 1, 2]]
]

let BoardCells = [
  [document.getElementById('Board-A1'),
   document.getElementById('Board-B1'),
   document.getElementById('Board-C1'),
   document.getElementById('Board-D1')],
  [document.getElementById('Board-A2'),
   document.getElementById('Board-B2'),
   document.getElementById('Board-C2'),
   document.getElementById('Board-D2')],
  [document.getElementById('Board-A3'),
   document.getElementById('Board-B3'),
   document.getElementById('Board-C3'),
   document.getElementById('Board-D3')],
  [document.getElementById('Board-A4'),
   document.getElementById('Board-B4'),
   document.getElementById('Board-C4'),
   document.getElementById('Board-D4')]
];

const MaxAnswerPattern = 288;
let TotalAnswerPattern = MaxAnswerPattern;
let AnswerPatternFlag = [];
const PatternNumDoc = document.getElementById('PatternNum');

let PlayFlag = true;

let RowNum = -1;
let ColumnCha = -1;
let SelectedNum = 0;
let DevilNum = 0;

const SelectedPosDoc = document.getElementById('SelectedPos');
const SelectedNumDoc = document.getElementById('SelectedNum');
const ViewResultDoc = document.getElementById('ViewResult');
const ViewAnswerPatternDoc = document.getElementById('ViewAnswerPattern');
const PlayModeRowDoc = document.getElementById('PlayModeRow');
const PlayModeDoc = document.getElementsByName('PlayMode');
let PlayModeValue;

let ViewAnswerPatternFlag = true;
let ComBattleFlag = false;

window.onload = function () {
  ViewAnswerPatternDoc.checked = true;
  PlayModeDoc[0].checked = true;
  Initialize();
}

function Initialize() {
  let m, n;

  for (m = 0; m < 4; m++) {
    for (n = 0; n < 4; n++) {
      BoardCells[m][n].innerHTML = "<button onclick='SelectNum(" + m + ", " + n + ", 1)'>1</button><button onclick='SelectNum(" + m + ", " + n + ", 2)'>2</button><br><button onclick='SelectNum(" + m + ", " + n + ", 3)'>3</button><button onclick='SelectNum(" + m + ", " + n + ", 4)'>4</button>";
    }
  }

  TotalAnswerPattern = MaxAnswerPattern;
  PatternNumDoc.innerHTML = TotalAnswerPattern;
  for (m = 0; m < MaxAnswerPattern; m++) {
    AnswerPatternFlag[m] = true;
  }

  ChangePatternNum();
  PatternNumDoc.style.color = "#000";
  ViewResultDoc.innerHTML = "..."
  ViewResultDoc.style.color = "#000";
  PlayFlag = true;

  for(let Num in PlayModeDoc){
    if(PlayModeDoc[Num].checked){
      PlayModeValue = PlayModeDoc[Num].value;
      break;
    }
  }

  if(PlayModeValue == "PvP"){
    ComBattleFlag = false;
  }
  else if(PlayModeValue.includes('COM')){
    ComBattleFlag = true;
  }

  if (ComBattleFlag) {
    ViewResultDoc.innerHTML = "YOUR TURN"
  }
  else {
    ViewResultDoc.innerHTML = "..."
  }

  ResetSelect();
  DevilNum = 0;
}

function SelectNum(M, N, Num) {
  if (PlayFlag) {
    RowNum = M;
    ColumnCha = N;
    SelectedNum = Num;

    ChangeSelectedText();
  }
}

function DetNum() {
  if (SelectedNum === 0 || !(PlayFlag)) { }
  else {
    BoardCells[RowNum][ColumnCha].innerHTML = SelectedNum;
    DevilNum++;

    for (m = 0; m < MaxAnswerPattern; m++) {
      if (AnswerPatternFlag[m] && !(AllAnswers[m][RowNum][ColumnCha] === SelectedNum)) {
        AnswerPatternFlag[m] = false;
        TotalAnswerPattern--;
      }
    }

    ChangePatternNum();
    ResetSelect();

    if (ComBattleFlag && PlayFlag) {
      ThinkNumByCom();
    }
  }
}

function ChangePatternNum() {
  if (ViewAnswerPatternFlag || TotalAnswerPattern <= 1) {
    PatternNumDoc.innerHTML = TotalAnswerPattern;
  }
  else {
    PatternNumDoc.innerHTML = "??";
  }

  JudgeGameEnd();
}

function JudgeGameEnd() {
  if (TotalAnswerPattern <= 1) {
    if (TotalAnswerPattern === 1) {
      PatternNumDoc.style.color = "#c00";
      
      if(PlayFlag){
        ViewResultDoc.innerHTML = "YOU WIN!!!"
        ViewResultDoc.style.color = "#c00";
      }
      else{
        ViewResultDoc.innerHTML = "YOU LOSE..."
        ViewResultDoc.style.color = "#00c";
      }

      if (DevilNum === 13) {
        PlayModeRowDoc.style.display = "";
      }
    }
    else if (TotalAnswerPattern === 0) {
      PatternNumDoc.style.color = "#00c";
      ViewResultDoc.innerHTML = "YOU LOSE..."
      ViewResultDoc.style.color = "#00c";
    }

    PlayFlag = false;
  }
}

function ResetSelect() {
  RowNum = -1;
  ColumnCha = -1;
  SelectedNum = 0;

  ChangeSelectedText();
}

function ChangeSelectedText() {
  if (SelectedNum === 0) {
    SelectedPosDoc.innerHTML = "??";
    SelectedNumDoc.innerHTML = "?";
  }
  else {
    switch (ColumnCha) {
      case 0:
        SelectedPosDoc.innerHTML = "A" + (RowNum + 1);
        break;
      case 1:
        SelectedPosDoc.innerHTML = "B" + (RowNum + 1);
        break;
      case 2:
        SelectedPosDoc.innerHTML = "C" + (RowNum + 1);
        break;
      case 3:
        SelectedPosDoc.innerHTML = "D" + (RowNum + 1);
        break;
    }
    SelectedNumDoc.innerHTML = SelectedNum;
  }
}

function ViewAnswerPattern(Flag) {
  ViewAnswerPatternFlag = Flag;
  ChangePatternNum();
}

let WaitForThinkNumByCom;
let MomentPlayFlag;

function ThinkNumByCom() {
  WaitForThinkNumByCom = setInterval('DetNumByCom();', 1000);

  PlayFlag = false;
  MomentPlayFlag = false;
  ViewResultDoc.innerHTML = "COM'S TURN"

  let BetaRowNum;
  let BetaColumnCha;
  let BetaSelectedNum;
  let BetaTotalAnswerPattern;
  let BetaAnswerPatternFlag = [];

  while(true){
    BetaRowNum = Math.floor(Math.random() * 4);
    BetaColumnCha = Math.floor(Math.random() * 4);
    BetaSelectedNum = Math.floor(Math.random() * 4 + 1);
    BetaTotalAnswerPattern = TotalAnswerPattern;
    BetaAnswerPatternFlag = AnswerPatternFlag.slice();

    if(isNaN(BoardCells[BetaRowNum][BetaColumnCha].innerHTML)){
      for (m = 0; m < MaxAnswerPattern; m++) {
        if (BetaAnswerPatternFlag[m] && !(AllAnswers[m][BetaRowNum][BetaColumnCha] === BetaSelectedNum)) {
          BetaAnswerPatternFlag[m] = false;
          BetaTotalAnswerPattern--;
        }
      }

      if(BetaTotalAnswerPattern !== 0 && !(PlayModeValue == "COM(Hard)" && BetaTotalAnswerPattern === TotalAnswerPattern)){
        MomentPlayFlag = true;

        RowNum = BetaRowNum;
        ColumnCha = BetaColumnCha;
        SelectedNum = BetaSelectedNum;
        TotalAnswerPattern = BetaTotalAnswerPattern;
        AnswerPatternFlag = BetaAnswerPatternFlag;
        
        break;
      }
    }
  }
}

function DetNumByCom() {
  if(MomentPlayFlag){
    clearInterval(WaitForThinkNumByCom);
    ChangePatternNum();
    
    BoardCells[RowNum][ColumnCha].innerHTML = SelectedNum;
    DevilNum++;

    if(TotalAnswerPattern > 1){
      ViewResultDoc.innerHTML = "YOUR TURN"
      PlayFlag = true;
    }
  }
}