import random

hero_name = "Dart"

def random_in_range(min_val, max_val):
    return random.uniform(min_val, max_val)

hero_level = random_in_range(500, 11000)

levels = ["iron", "bronze", "silver", "gold", "platinum", "ascendent", "immortal", "radiant"]

if hero_level <= 1000:
    level = levels[0]
elif 1001 <= hero_level <= 2000:
    level = levels[1]
elif 2001 <= hero_level <= 5000:
    level = levels[2]
elif 5001 <= hero_level <= 7000:
    level = levels[3]
elif 7001 <= hero_level <= 8000:
    level = levels[4]
elif 8001 <= hero_level <= 9000:
    level = levels[5]
elif 9001 <= hero_level <= 10000:
    level = levels[6]
else:
    level = levels[7]

print(hero_name, level)
