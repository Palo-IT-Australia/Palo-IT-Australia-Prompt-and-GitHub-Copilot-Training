"""
Exercise 1 — Inline Completions
================================
Objective: Use Copilot's inline completions to implement functions from comments and docstrings.

Instructions:
1. Place your cursor at the end of each comment or docstring
2. Wait for Copilot to suggest an implementation
3. Press Tab to accept, or use Alt+] to cycle through alternatives
4. Run the file to verify your functions work correctly: python 01_inline_completions.py
"""


# ----- Task 1 -----
# Implement the function below using Copilot's inline completion.
# The comment describes what the function should do.

# Calculate the number of business days (Mon-Fri) between two dates, inclusive of both endpoints.
# Returns 0 if start_date is after end_date.
def count_business_days(start_date, end_date):
    pass  # Delete this line — let Copilot suggest the implementation


# ----- Task 2 -----
# Copilot reads docstrings well. Let it implement this function.

def calculate_reading_time(text: str, words_per_minute: int = 200) -> dict:
    """
    Calculate the estimated reading time for a given text.

    Args:
        text: The text to analyse.
        words_per_minute: Average reading speed. Defaults to 200.

    Returns:
        A dict with keys:
          - 'word_count': total number of words
          - 'minutes': full minutes to read
          - 'seconds': remaining seconds beyond full minutes
          - 'display': human-readable string, e.g. "3 min 20 sec"
    """
    pass  # Delete this line — let Copilot suggest the implementation


# ----- Task 3 -----
# Copilot is great at completing patterns. Start the first entry in this data
# structure and let Copilot suggest the rest.

# A list of Australian state capitals with their state name, population (approx.), and timezone.
australian_capitals = [
    {"city": "Sydney", "state": "New South Wales", "population": 5_300_000, "timezone": "Australia/Sydney"},
    # Let Copilot suggest the remaining capitals (Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, Canberra)
]


# ----- Task 4 -----
# Use a descriptive function name to guide Copilot.

def is_valid_australian_phone_number(phone: str) -> bool:
    pass  # Delete this line — let Copilot suggest the implementation


# ----- Verification -----
if __name__ == "__main__":
    from datetime import date

    # Task 1 verification
    start = date(2024, 1, 1)   # Monday
    end = date(2024, 1, 7)     # Sunday
    result = count_business_days(start, end)
    print(f"Business days (Mon 1 Jan to Sun 7 Jan): {result}")  # Expected: 5

    start2 = date(2024, 1, 5)  # Friday
    end2 = date(2024, 1, 8)    # Monday
    result2 = count_business_days(start2, end2)
    print(f"Business days (Fri 5 Jan to Mon 8 Jan): {result2}")  # Expected: 2

    # Task 2 verification
    sample_text = " ".join(["word"] * 450)
    reading = calculate_reading_time(sample_text, words_per_minute=200)
    print(f"Reading time for 450 words: {reading}")  # Expected: 2 min 15 sec

    # Task 3 verification
    print(f"\nAustralian capitals: {len(australian_capitals)} entries")

    # Task 4 verification
    print(f"\nValid number +61 412 345 678: {is_valid_australian_phone_number('+61412345678')}")
    print(f"Valid number 0412 345 678:    {is_valid_australian_phone_number('0412345678')}")
    print(f"Invalid number 12345:         {is_valid_australian_phone_number('12345')}")
