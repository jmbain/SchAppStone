import random
from tabulate import tabulate
import datetime

# Note: removed the sqlite code, need to reconfigure for sqlalchemy

court_position = ("""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  |   X  _o_  |   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   X       |   |  |
|  |   |       |   |  |
|  |   |  _o_  |   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/_X_\_  \    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  |   |  _o_  |   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   |       X   |  |
|  |   |       |   |  |
|  |   |  _o_  |   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  |   |  _o_  X   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  X   |  _o_  |   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    X  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  |   |  _o_  |   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _X_ _       | 
|     /   ___   \     |  
|    /  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  |   |  _o_  |   |  |
-----------------------

""",
"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/___\_  X    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  |   |  _o_  |   |  |
-----------------------

""",

"""
_______________________
|        \___/        |
|                     |
|       _ _ _ _       | 
|     /   ___   \     |  
|    /  _/___\_  \    |
|   /  | \ _ / |  \   |
|  |   |       |   |  |
|  |   |       |   |  |
|  |   |  _o_  |   X  |
-----------------------

""")

def create_leaderboard():
    sql = """
        CREATE TABLE IF NOT EXISTS leaderboard (
            id INTEGER PRIMARY KEY,
            name TEXT,
            score INTEGER,
            accuracy REAL
        )
    """
    cursor = conn.cursor()
    cursor.execute(sql)
    conn.commit()

def add_to_leaderboard(name, score, accuracy):
    """Adds name, score, and player accuracy to the leaderboard database"""
    sql = """
        INSERT INTO leaderboard (name, score, accuracy)
        VALUES (?, ?, ?)
    """
    cursor = conn.cursor()
    cursor.execute(sql, [name, score, accuracy])
    conn.commit()

def run():
    """This function runs the main game menu, which includes instructions, play function, view leaderboard, and quit function"""

    # create_leaderboard()
    # add_to_leaderboard()

    while True:
        prompt = """
        ~Around the Hello, World~
A python/basketball crossover (ha!) cli game!

Around the Hello, World! is a game that tests your knowledge on python. 

How to play:

There are TEN spots on the court:  Five TWO-POINT shots, and Five THREE-POINT shots.
You will start with the Five TWO-POINT shots first, and slowly work your way up to the three point line shots.

- Every time you get an easy question right (TWO-POINTER) on the first try, you get TWO points!
- Every time you get a hard question right (THREE-POINTER) on the first try, you get THREE points!

If you get the question wrong, you will stay in the same spot on the court, and you will be reasked the question. If you get that right,
you will advance, but you will get one less point for the spot.

You can only progress towards the end of the game every time you get the questions right.

Have fun, try to cash in points, and be as accurate as possible from the field!

Select an option:
1. Play the game
2. Peep the leaderboard
3. Quit aka please no more puns
>> """
        option = input(prompt)
        if option == "1":
            play()
        elif option == "2":
            show_leaderboard()
        elif option == "3": 
            print("This game broke my ankles")
            exit()
        else:
            print("Enter a number from 1-3 only.")
    
def play():
    """Runs when user selects Play Game from main game menu..."""
    timed_mode()

def show_leaderboard():
    """ Function successfully pulls scores/names/accuracies from leaderboard
    Runs when user selects Leaderboard from main game menu..."""
    
    while True:
        prompt = """
        Select a leaderboard to view:
        1. Sort by highest to lowest scores
        2. Sort by highest to lowest accuracies
        3. Return to main menu
        >> """
        option = input(prompt)
        if option == "1":
            # SHOW SQL DATABASE  SCORES HERE
            sql = """
                SELECT ROW_NUMBER() OVER (ORDER BY score DESC) AS rank, name, score FROM leaderboard;
            """
            cursor = conn.cursor()
            cursor.execute(sql)
            scores = cursor.fetchall()
            column_names = [description[0] for description in cursor.description]
            print(tabulate(scores, headers=column_names, tablefmt='grid'))

            # cursor.close()
            # conn.close()
        elif option == "2":
            # SHOW SQL DATABASE  ACCURACY HERE
            sql = """
                SELECT ROW_NUMBER() OVER (ORDER BY accuracy DESC) AS rank, name, accuracy FROM leaderboard;
            """
            cursor = conn.cursor()
            cursor.execute(sql)
            accuracies = cursor.fetchall()
            column_names = [description[0] for description in cursor.description]
            print(tabulate(accuracies, headers=column_names, tablefmt='grid'))

            # cursor.close()
            # conn.close()
            
        elif option == "3": 
            print("Returning to main menu...")
            run()
        else:
            print("")
            print("Enter a valid number between 1-3.")

def timed_mode():
    #GAME TIMER STUFF
    game_start = datetime.datetime.now() #When game starts, save starting timestamp into variable
    game_start_int = int(game_start.timestamp()) #convert start time into an integer for later checks
    game_length = 120 #in seconds, will be used to check the delta of start time and the time when a user answers a question
    current_time = 0 #initializing for latter use, gets reset after every correct answer and is used to end game loop when current time exceeds the start time + the game length
    #COUNTER STUFF
    easy_q_counter = 0 # used as the index when accessing the easy_questions list of tuples
    hard_q_counter = 0 # used as the index when accessing the hard_questions list of tuples
    q_counter = 0 # used to keep track of questions answered correctly
    attempt_counter = 0 # used to keep track of all attempts, correct or not, at the game level
    #SCORE AND POSITION
    score = 0 #initalizes score to keep track of points earned throughout each game
    court_position_tracker = 0 # used as the index for the court_ position list
    #PULL QUESTIONS FROM DB STUFF
    connection = sqlite3.connect("questions_answers.db")
    cursor = connection.cursor()
    # Pull easy questions
    sql_pull_easy_questions = """
    SELECT * from questions_answers_v1 WHERE difficulty = "Easy"
    """
    cursor.execute(sql_pull_easy_questions)
    easy_questions = cursor.fetchall()
    # Pull hard questions
    sql_pull_hard_questions = """
    SELECT * from questions_answers_v1 WHERE difficulty = "Hard"
    """
    cursor.execute(sql_pull_hard_questions)
    hard_questions = cursor.fetchall()

    #RANDMIZE QUESTIONS - shuffle is triggered each time the game starts so each time game is played, it is random
    random.shuffle(easy_questions)
    random.shuffle(hard_questions)

    #Start of the game loop!!!
    while game_start_int + game_length > current_time:
        
        local_attempt_counter = 0

        time_check = datetime.datetime.now() #When game starts, save starting timestamp into variable
        current_time = int(time_check.timestamp()) #convert start time into an integer for later checks
        time_left = (game_start_int + game_length) - current_time #calculate time left in the game
        if time_left <= 0: #if question is answered correctly AND time_left expires, print a final message and call functions to end the game
            print("")
            print(f"Thanks for playing!")
            print("")
            break

        while 0 <= q_counter <= 4 or 10 <= q_counter <= 14 or 20 <= q_counter <= 24 or 30 <= q_counter <= 34: #Logic for easy questions, location will be "inside arc", pts = 2 if right on attempt 1
            print(court_position[court_position_tracker]) #moves the user to different parts of the court
            
            print(easy_questions[easy_q_counter][1]) #accesses random easy question 
            print(easy_questions[easy_q_counter][2]) #accesses answer options for the random easy question, dynamic because index is based on a counter but same index as the question
            
            user_answer = input("Enter the correct answer: ").upper()
            
            q_points = 2 
            
            # Logic to keep track of # of attempts on a specific question; this is presented if a user answers incorrectly (if incorrect once, local_attempt_tracker is 1 if and incorrect twice on same question, local_attempt_tracker is 2)
            if local_attempt_counter > 0: 
                pass
            else:
                local_attempt_counter = 0

            if user_answer not in ["A", "B", "C", "D"]:
                print("")
                print("Invalid input! Valid options are 'a', 'b', 'c', or 'd'")
                print("")
                continue
            elif user_answer == easy_questions[easy_q_counter][4]: #checks user input against answer in database
                score += (q_points - local_attempt_counter) #Easy questions are worth 2 points on the first try
                attempt_counter += 1 #Tracks global attempts over the course of the game
                q_counter += 1 #Tracks global questions answered successfully over the course of the game
                easy_q_counter += 1 #Tracks global easy questions answered over the course of the game
                
                local_attempt_counter = 0 #Resets local attempt counter every time an answer is correct

                #REMINDER: There are only 10 positions on the court, which end at index 9...
                court_position_tracker += 1 #Tracks position on court globally, user only advances when answering a question correctly and this changes the index
                if court_position_tracker == 10: #if index reaches 10 which is out of range...
                    court_position_tracker = 0 #then reset the tracker to 0

                time_check = datetime.datetime.now() #When game starts, save starting timestamp into variable
                current_time = int(time_check.timestamp()) #convert start time into an integer for later checks
                time_left = (game_start_int + game_length) - current_time #calculate time left in the game
                if time_left <= 0: #if question is answered correctly AND time_left expires, print a final message and call functions to end the game
                    print("")
                    print(f"Game over! Your final score is {score}. You answered {q_counter} questions on {attempt_counter} attempts.")
                    print("")
                    
                    name = input("Enter your name in order to make it to the rafters (the leaderboard): ").title()
                    accuracy = round((q_counter / attempt_counter) * 100, 2)
                    add_to_leaderboard(name, score, accuracy)

                    break
                else: #If question is answered correctly and time is still left, print a pessage with updated score/states and time_left
                    print("")
                    print(f"Correct! You've earned {q_points} points! Your current score is: {score}. You've answered {q_counter} questions on {attempt_counter} attempts and have {time_left} seconds left!!")
                    print("")
                
            else: #if answer attempt is incorrect...
                attempt_counter += 1 #add to global attempt tracker which will be used to calculate accuracy
                local_attempt_counter +=1 # add to local attempt tracker which will be printed below
                print("")
                print(f"Incorrect, please try again. You have attempted this question {local_attempt_counter} times.")
                print("")
                
        while 5 <= q_counter <= 9 or 15 <= q_counter <= 19 or 25 <= q_counter <= 29 or 35 <= q_counter <= 39: #Logic for hard questions, location will be "outside arc", pts = 3 if right on attempt 1
            print(court_position[court_position_tracker]) #moves the user to different parts of the court
            
            print(hard_questions[hard_q_counter][1]) #accesses random hard question
            print(hard_questions[hard_q_counter][2]) #accesses answer options for the random hard question, dynamic because index is based on a counter but same index as the question 
            
            user_answer = input("Enter the correct answer: ").upper()
            
            q_points = 3
            
            # Logic to keep track of # of attempts on a specific question; this is presented if a user answers incorrectly (if incorrect once, local_attempt_tracker is 1 if and incorrect twice on same question, local_attempt_tracker is 2)
            if local_attempt_counter > 0: 
                pass
            else:
                local_attempt_counter = 0

            if user_answer not in ["A", "B", "C", "D"]: #quality control to ensure inputs are multiple choice options a, b, c or d
                print("")
                print("Invalid input! Valid options are 'a', 'b', 'c', or 'd'")
                print("")
                continue
            elif user_answer == hard_questions[hard_q_counter][4]: #checks user input against answer in database
                score += (q_points - local_attempt_counter) #Easy questions are worth 2 points on the first try
                attempt_counter += 1 #Tracks global attempts over the course of the game
                q_counter += 1 #Tracks global questions answered successfully over the course of the game
                hard_q_counter += 1 #Tracks global easy questions answered over the course of the game
                
                local_attempt_counter = 0 #Resets local attempt counter every time an answer is correct

                #REMINDER: There are only 10 positions on the court, which end at index 9...
                court_position_tracker += 1 #Tracks position on court globally, user only advances when answering a question correctly and this changes the index
                if court_position_tracker == 10: #if index reaches 10 which is out of range...
                    court_position_tracker = 0 #then reset the tracker to 0

                time_check = datetime.datetime.now() #When game starts, save starting timestamp into variable
                current_time = int(time_check.timestamp()) #convert start time into an integer for later checks
                time_left = (game_start_int + game_length) - current_time #calculate time left in the game
                if time_left <= 0: #if question is answered correctly AND time_left expires, print a final message and call functions to end the game
                    print("")
                    print(f"Game over! Your final score is {score}. You answered {q_counter} questions on {attempt_counter} attempts.")
                    print("")
                    
                    name = input("Enter your name in order to make it to the rafters (the leaderboard): ").title()
                    accuracy = round((q_counter / attempt_counter) * 100, 2)
                    add_to_leaderboard(name, score, accuracy)

                    break
                else: #If question is answered correctly and time is still left, print a pessage with updated score/states and time_left
                    print("")
                    print(f"Correct! You've earned {q_points} points! Your current score is: {score}. You've answered {q_counter} questions on {attempt_counter} attempts and have {time_left} seconds left!!")
                    print("")
                
            else: #if answer attempt is incorrect...
                attempt_counter += 1 #add to global attempt tracker which will be used to calculate accuracy
                local_attempt_counter +=1 # add to local attempt tracker which will be printed below
                print("")
                print(f"Incorrect, please try again. You have attempted this question {local_attempt_counter} times.")
                print("")

if __name__ == '__main__':
    run()