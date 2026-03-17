"""
Exercise 4 — Debugging with Copilot
=====================================
Objective: Use Copilot Chat to identify and fix bugs in broken code.

Instructions:
1. Read each buggy function below
2. Try to spot the bug yourself first
3. Select the function and use Copilot Chat:
   - Type /fix to ask Copilot to suggest a fix
   - Or describe the symptom: "This function returns wrong results when [describe case].
     What is the bug and how do I fix it?"
4. Run the verification section to confirm your fixes work:
   python 04_debugging.py

Note: Each function has exactly one bug. Some are logic bugs, some are off-by-one errors,
and some are common Python gotchas.
"""


# ----- Bug 1 -----
# This function is supposed to return a new list with duplicates removed,
# preserving the original order of first appearances.
# Bug: it returns an unexpected result for some inputs.

def remove_duplicates(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            result.append(item)
        seen.add(item)  # Bug is on this line or nearby
    return result


# ----- Bug 2 -----
# This function converts a list of (key, value) tuples into a dictionary.
# If the same key appears multiple times, it should keep the LAST value.
# Bug: it keeps the first value instead of the last.

def tuples_to_dict(pairs):
    result = {}
    for key, value in pairs:
        if key not in result:
            result[key] = value
    return result


# ----- Bug 3 -----
# This function returns a slice of a list from start_index up to
# (but not including) end_index. It should raise a ValueError if
# start_index >= end_index.
# Bug: the boundary check is wrong.

def safe_slice(items, start_index, end_index):
    if start_index > end_index:       # Bug: should be >= not >
        raise ValueError(f"start_index ({start_index}) must be less than end_index ({end_index})")
    return items[start_index:end_index]


# ----- Bug 4 -----
# This function is supposed to flatten a nested list one level deep.
# E.g. [[1, 2], [3, 4], [5]] -> [1, 2, 3, 4, 5]
# Bug: it does not handle non-list elements at the top level.

def flatten_one_level(nested):
    result = []
    for item in nested:
        result.extend(item)   # Bug: fails if item is not iterable (e.g. an integer)
    return result


# ----- Bug 5 -----
# This function calculates a running total (cumulative sum) of a list of numbers.
# E.g. [1, 2, 3, 4] -> [1, 3, 6, 10]
# Bug: it modifies the input list in-place instead of returning a new list.

def running_total(numbers):
    for i in range(1, len(numbers)):
        numbers[i] += numbers[i - 1]   # Bug: mutates the input
    return numbers


# ----- Verification -----
if __name__ == "__main__":
    print("=== Bug 1: remove_duplicates ===")
    result = remove_duplicates([1, 2, 2, 3, 1, 4])
    print(f"  Result:   {result}")
    print(f"  Expected: [1, 2, 3, 4]")
    print(f"  {'PASS' if result == [1, 2, 3, 4] else 'FAIL'}")

    print("\n=== Bug 2: tuples_to_dict ===")
    result = tuples_to_dict([("a", 1), ("b", 2), ("a", 3)])
    print(f"  Result:   {result}")
    print(f"  Expected: {{'a': 3, 'b': 2}}")
    print(f"  {'PASS' if result == {'a': 3, 'b': 2} else 'FAIL'}")

    print("\n=== Bug 3: safe_slice ===")
    try:
        safe_slice([1, 2, 3], 2, 2)  # start == end, should raise
        print("  FAIL — should have raised ValueError")
    except ValueError:
        print("  PASS — correctly raised ValueError for start == end")

    print("\n=== Bug 4: flatten_one_level ===")
    result = flatten_one_level([[1, 2], [3, 4], 5])  # 5 is not a list
    print(f"  Result:   {result}")
    print(f"  Expected: [1, 2, 3, 4, 5]")
    print(f"  {'PASS' if result == [1, 2, 3, 4, 5] else 'FAIL'}")

    print("\n=== Bug 5: running_total ===")
    original = [1, 2, 3, 4]
    result = running_total(original[:])  # pass a copy so we can check
    print(f"  Result:        {result}")
    print(f"  Expected:      [1, 3, 6, 10]")
    unchanged_input = [1, 2, 3, 4]
    _ = running_total(unchanged_input)
    print(f"  Input mutated: {unchanged_input} (should still be [1, 2, 3, 4])")
    print(f"  {'PASS' if result == [1, 3, 6, 10] and unchanged_input == [1, 2, 3, 4] else 'FAIL'}")
