from .choice import Choice
from .question import Question

frontend_questions = [
    Question(
        statement="What comes to your mind when I say 'Svelte'?",
        choices=[
            Choice(letter="A", statement="Just another Javascript framework"),
            Choice(letter="B", statement="It’s a new language"),
            Choice(letter="C", statement="Smallest bundle size"),
            Choice(letter="D", statement="Not sure man"),
        ],
        answer="C",
        tag="frontend"
    ),
    Question(
        statement="What's used to style HTML files?",
        choices=[
            Choice(letter="A", statement="Condensed Style Sheets"),
            Choice(letter="B", statement="Cascaded Style Scripts"),
            Choice(letter="C", statement="Cascaded Style Sheet"),
            Choice(letter="D", statement="I don't know my guy"),
        ],
        answer="C",
        tag="frontend"
    ),
    Question(
        statement="Google applications mostly use Material design for their UI",
        choices=[
            Choice(letter="A", statement="Yes, they do"),
            Choice(letter="B", statement="Nah, they use Bootstrap"),
            Choice(letter="C", statement="They use Tailwind CSS"),
            Choice(letter="D", statement="I have no idea about this"),
        ],
        answer="A",
        tag="frontend"
    ),
    Question(
        statement="The Angular framework was created by Google",
        choices=[
            Choice(letter="A", statement="Definitely"),
            Choice(letter="B", statement="No, it’s by Facebook"),
            Choice(letter="C", statement="It’s developed by Netflix for their UIs"),
            Choice(
                letter="D", statement="I don’t know much about frontend development frameworks"),
        ],
        answer="A",
        tag="frontend"
    ),
    Question(
        statement="What does React, Vue and Angular have in common?",
        choices=[
            Choice(letter="A", statement="They are languages"),
            Choice(letter="B", statement="They're frameworks from different languages"),
            Choice(letter="C", statement="All compile to HTML, CSS and JS files"),
            Choice(letter="D", statement="I have no idea about these guys"),
        ],
        answer="C",
        tag="frontend"
    )
]


backend_questions = [
    Question(
        statement="Ever heard of 'Laravel’? What's it used for?",
        choices=[
            Choice(letter="A", statement="Development of the backend applications"),
            Choice(letter="B", statement="Native applications"),
            Choice(letter="C", statement="Frontend development"),
            Choice(letter="D", statement="Never heard of it"),
        ],
        answer="A",
        tag="backend"
    ),
    Question(
        statement="Redis cannot be used as a standalone server database",
        choices=[
            Choice(letter="A", statement="It can"),
            Choice(letter="B", statement="Redis is not a database"),
            Choice(letter="C", statement="True"),
            Choice(letter="D", statement="I don't know what Redis is"),
        ],
        answer="C",
        tag="backend"
    ),
    Question(
        statement="How would you use caching to reduce your server response times?",
        choices=[
            Choice(letter="A", statement="Cache common requests"),
            Choice(letter="B", statement="It's not a way to reduce response times"),
            Choice(letter="C", statement="Cache all responses"),
            Choice(letter="D", statement="I don't know the answer to this"),
        ],
        answer="A",
        tag="backend"
    ),
    Question(
        statement="Which of the statements below is true when it comes to Docker?",
        choices=[
            Choice(letter="A", statement="It's an alternative to Kubernetes"),
            Choice(letter="B", statement="Used for containerization of applications"),
            Choice(letter="C", statement="Used to monitor backend applications"),
            Choice(
                letter="D", statement="I have no idea what Docker is"),
        ],
        answer="B",
        tag="backend"
    ),
    Question(
        statement="What's the largest file size that can be carried in a single request?",
        choices=[
            Choice(letter="A", statement="50MB"),
            Choice(letter="B", statement="10MB"),
            Choice(letter="C", statement="100MB"),
            Choice(letter="D", statement="Not sure man"),
        ],
        answer="A",
        tag="backend"
    )
]


devops_questions = [
    Question(
        statement="Travis CI and Github actions serve almost the same functionality",
        choices=[
            Choice(letter="A", statement="I don't think so"),
            Choice(letter="B", statement="Yessir, they do"),
            Choice(letter="C", statement="Github actions is a version control system"),
            Choice(letter="D", statement="I don't know these two technologies"),
        ],
        answer="B",
        tag="devops"
    ),
    Question(
        statement="Docker was here long before Kubernetes",
        choices=[
            Choice(letter="A", statement="This is a big ass lie"),
            Choice(letter="B", statement="That's a fact"),
            Choice(letter="C", statement="Both were developed around the same time"),
            Choice(letter="D", statement="I have no idea what Docker or Kubernetes is"),
        ],
        answer="A",
        tag="devops"
    ),
    Question(
        statement="Prometheus is famous for monitoring server applications",
        choices=[
            Choice(letter="A", statement="I agree"),
            Choice(letter="B", statement="Statement is false"),
            Choice(letter="C", statement="It only collects information"),
            Choice(letter="D", statement="Didn't catch that"),
        ],
        answer="A",
        tag="devops"
    ),
    Question(
        statement="Kali is a Linux distro",
        choices=[
            Choice(letter="A", statement="Not!"),
            Choice(letter="B", statement="It's a flavor of Ubuntu"),
            Choice(letter="C", statement="It is!"),
            Choice(
                letter="D", statement="I don't mess with Linux"),
        ],
        answer="C",
        tag="devops"
    ),
    Question(
        statement="What does Google Cloud Platform, Azure and Heroku have in common?",
        choices=[
            Choice(letter="A", statement="All have IaaS solutions"),
            Choice(letter="B", statement="They're the top cloud providers"),
            Choice(letter="C", statement="They all provide PaaS solutions"),
            Choice(letter="D", statement="They nothing in common"),
        ],
        answer="C",
        tag="devops"
    )
]


mobile_questions = [
    Question(
        statement="It's cheaper to host my applications on Apple app store than Google play store",
        choices=[
            Choice(letter="A", statement="That’s a lie my guy"),
            Choice(
                letter="B", statement="Sure, Apple offer the cheapest hosting for mobile apps"),
            Choice(letter="C", statement="They offer almost the same pricing"),
            Choice(letter="D", statement="I don't host my apps here"),
        ],
        answer="A",
        tag="mobile"
    ),
    Question(
        statement="Which one of the following describes what Swift does?",
        choices=[
            Choice(letter="A", statement="It’s used for developing iOS apps"),
            Choice(
                letter="B", statement="It can be used for developing Safari web extensions"),
            Choice(letter="C", statement="Second name of a very famous music artist"),
            Choice(letter="D", statement="I don’t know anything about Swift"),
        ],
        answer="A",
        tag="mobile"
    ),
    Question(
        statement="Cross platform development allows me to implement one design for all my apps",
        choices=[
            Choice(
                letter="A", statement="You have to implement different designs using native UI SDKs"),
            Choice(
                letter="B", statement="This is true, the design will be the same for all apps"),
            Choice(
                letter="C", statement="It’s one codebase but designs come out differently"),
            Choice(letter="D", statement="I have no idea"),
        ],
        answer="B",
        tag="mobile"
    ),
    Question(
        statement="Large scale mobile applications can be built without user journeys and design prototypes",
        choices=[
            Choice(
                letter="A", statement="User journeys are not required for large projects"),
            Choice(
                letter="B", statement="That’s impossible, user’s journeys should be a prerequisite"),
            Choice(
                letter="C", statement="Design prototypes are created at the same time an MVP is developed"),
            Choice(
                letter="D", statement="I don’t do mobile development"),
        ],
        answer="B",
        tag="mobile"
    ),
    Question(
        statement="Which one of the following best describes what Java SDK is for?",
        choices=[
            Choice(letter="A", statement="It’s for developing backend applications"),
            Choice(
                letter="B", statement="It’s for developing different versions of Java"),
            Choice(letter="C", statement="It’s used for android app development"),
            Choice(letter="D", statement="I’m not well versed with Java"),
        ],
        answer="C",
        tag="mobile"
    )
]
