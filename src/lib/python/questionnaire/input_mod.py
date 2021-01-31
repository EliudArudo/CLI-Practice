def get_selection():
    print("==================================")
    selection = input("Enter your choice (Q to quit): ").upper()

    try:
        selection = selection.upper()
    except:
        selection = ""

    return selection
