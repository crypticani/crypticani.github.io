#!/usr/bin/python   
print('Content-type: text/html\r\n\r')


import random


def main():
    dice_rolls = int(input('How many dice would you like to roll? '))
    dice_sum = 0
    for i in range(0, dice_rolls):
        roll = random.randint(1, 6)
        dice_sum = dice_sum + roll
        if roll == 1:
            print(f'You rolled a {roll}! Critical Fail')
        elif roll == 6:
            print(f'You rolled a {roll}! Critical Success!')
        else:
            print('You rolled a ', roll)
    print(f'You have rolled a total of {dice_sum}')


if __name__ == "__main__":
    main()
