import random
from .questions import frontend_questions, backend_questions, devops_questions, mobile_questions
from .input_mod import get_selection
from .utility import fetch_user_evaluation


class Questionnaire:
    def __init__(self, questions, fetch_user_evaluation):
        self.questions = questions
        self.correct_questions = []
        self.fetch_user_evaluation = fetch_user_evaluation

    def initialize(self):
        print(
            "===== DEVELOPER TRIVIA ================================================")
        print("Hi there! We have some questions for you: ")
        print("Please answer them without looking.")
        print("In case you don't know the answer, it's okay to choose option (D)")
        print("=======================================================================")

    def debug_question(self, question):
        print("......... " + question.tag + " ..... (" +
              question.answer + ") ....................")
        developer_rating = {
            "frontend": 0,
            "backend": 0,
            "devops": 0,
            "mobile": 0
        }

        for question in self.correct_questions:
            tag = question.tag
            developer_rating[tag] += 1

        for key in developer_rating:
            print(key + " : " + str(developer_rating.get(key)))

        print("......................................................")

    def print_question(self, index, question):
        print(str(index) + ". " + question.statement)
        print("")
        for choice in question.choices:
            print(choice.letter + ") " + choice.statement)

        # Debug
        # self.debug_question(question)

    def fetch_question_at_index(self, index):
        try:
            question = self.questions[index]
            return question
        except:
            return None

    def pop_a_question(self):
        try:
            question = self.questions.pop()
            return question
        except:
            return None

    def evaluate_question(self, question, answer):
        if question.answer == answer:
            self.correct_questions.append(question)

    def evaluate_user(self):
        default_message = "You're a great developer, keep pushing!"

        message = self.fetch_user_evaluation(
            default_message, self.correct_questions)

        print(message)


def prepare_questions():
    frontend_questions_copy = frontend_questions.copy()
    backend_questions_copy = backend_questions.copy()
    devops_questions_copy = devops_questions.copy()
    mobile_questions_copy = mobile_questions.copy()

    init_array = [frontend_questions_copy, backend_questions_copy,
                  devops_questions_copy, mobile_questions_copy]
    questions = []

    while len(init_array) != 0:
        random_index = random.randint(0, len(init_array) - 1)

        if len(init_array[random_index]) == 0:
            init_array.pop(random_index)
        else:
            question = init_array[random_index].pop()
            questions.append(question)

    return questions


def display():
    questions = prepare_questions()
    questionnaire = Questionnaire(questions, fetch_user_evaluation)

    questionnaire.initialize()

    index = 1

    while True:
        print("")
        question = questionnaire.pop_a_question()

        if question != None:
            questionnaire.print_question(index, question)
            answer = get_selection()

            if answer == "A" or answer == "B" or answer == "C" or answer == "D":
                questionnaire.evaluate_question(question, answer)
            elif answer == "Q":
                break
            else:
                print("\nYour choice was invalid, please try again")
                continue

        else:
            break

        index += 1

    questionnaire.evaluate_user()
