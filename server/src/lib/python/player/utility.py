def print_with_buffer(string, buffer_length):
    buffer = ""
    for i in range(buffer_length):
        if i < len(string):
            buffer += string[i]
        else:
            buffer += " "
    return buffer


def string_is_valid(string):
    try:
        str(string)
        if len(string) == 0:
            return False

        return True
    except:
        return False


def print_field_error_message():
    print("Please try again, invalid input")
