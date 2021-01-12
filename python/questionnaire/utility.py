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


def fetch_user_evaluation(default_message, correct_questions):
    message = ""

    developer_rating = {
        "frontend": 0,
        "backend": 0,
        "devops": 0,
        "mobile": 0
    }

    for question in correct_questions:
        tag = question.tag
        developer_rating[tag] += 1

    frontend = "frontend"
    backend = "backend"
    devops = "devops"
    mobile = "mobile"

    passing_limit = 3
    failure_limit = 2

    is_frontend_developer = developer_rating.get(frontend) > failure_limit and developer_rating.get(
        backend) <= failure_limit and developer_rating.get(devops) <= failure_limit and developer_rating.get(mobile) <= failure_limit

    is_backend_developer = developer_rating.get(frontend) <= failure_limit and developer_rating.get(
        backend) > failure_limit and developer_rating.get(devops) <= failure_limit and developer_rating.get(mobile) <= failure_limit

    is_devops_engineer = developer_rating.get(frontend) < failure_limit and developer_rating.get(
        backend) < failure_limit and developer_rating.get(devops) > failure_limit and developer_rating.get(mobile) < failure_limit

    is_mobile_developer = developer_rating.get(frontend) < failure_limit and developer_rating.get(
        backend) < failure_limit and developer_rating.get(devops) < failure_limit and developer_rating.get(mobile) > failure_limit

    is_full_stack_developer = developer_rating.get(frontend) > failure_limit and developer_rating.get(
        backend) > failure_limit and developer_rating.get(devops) < failure_limit

    is_software_engineer = developer_rating.get(frontend) > failure_limit and developer_rating.get(
        backend) > failure_limit and developer_rating.get(devops) >= failure_limit

    is_all_rounder = developer_rating.get(frontend) >= failure_limit and developer_rating.get(
        backend) >= failure_limit and developer_rating.get(devops) >= failure_limit and developer_rating.get(mobile) >= failure_limit

    # print("frontend developer: " + str(is_frontend_developer))
    # print("backend developer: " + str(is_backend_developer))
    # print("devops developer: " + str(is_devops_engineer))
    # print("mobile developer: " + str(is_mobile_developer))
    # print("fullstack developer: " + str(is_full_stack_developer))
    # print("software engineer: " + str(is_software_engineer))
    # print("all rounder: " + str(is_all_rounder))

    if is_all_rounder:
        message = "WOW! Looks like we got an all rounder, congratulations!!!"
    elif is_software_engineer:
        message = "You're definitely a Software engineer :-)"
    elif is_full_stack_developer:
        message = "Congratulations, Oh Fullstack developer!"
    elif is_devops_engineer:
        message = "You're definitely a DevOps engineer"
    elif is_mobile_developer:
        message = "Looks like you are a mobile developer!"
    elif is_backend_developer:
        message = "Another great backend developer!"
    elif is_frontend_developer:
        message = "Looks like you are a frontend developer, right?"
    else:
        message = default_message

    message += "\n"

    return message
