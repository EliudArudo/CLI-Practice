from option import Option
import player.main as player
import questionnaire.main as questionnaire


def print_options():
    print("MAIN MENU")
    print("===================================")
    print("Please select one of the following: ")

    options = [
        Option(index=1, title="Music player"),
        Option(index=2, title="Developer trivia"),
        Option(index=3, title="Quit (or Q)")
    ]

    for option in options:
        option.print()
    print("")


def display_menu():

    while True:
        print_options()
        try:
            selection = input("Selection: ").upper()
            print("")

            if selection == "1":
                player.display()
            elif selection == "2":
                questionnaire.display()
            elif selection == '3' or selection == "Q":
                print("Thanks for playing our games!")
                break
            else:
                print("Didn't catch that, please select \n")
        except:
            pass


def main():
    display_menu()


main()
