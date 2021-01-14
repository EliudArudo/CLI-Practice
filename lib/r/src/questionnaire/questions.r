source("questionnaire/question.r")
source("questionnaire/choice.r")

frontendQuestions<- c(
    QuestionnaireQuestion(
        statement="What comes to your mind when I say 'Svelte'?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="Just another Javascript framework"),
            QuestionnaireChoice(letter="B", statement="It's a new language"),
            QuestionnaireChoice(letter="C", statement="Smallest bundle size"),
            QuestionnaireChoice(letter="D", statement="Not sure man")
        ),
        answer="C",
        tag="frontend"
    ),
    QuestionnaireQuestion(
        statement="What's used to style HTML files?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="Condensed Style Sheets"),
            QuestionnaireChoice(letter="B", statement="Cascaded Style Scripts"),
            QuestionnaireChoice(letter="C", statement="Cascaded Style Sheet"),
            QuestionnaireChoice(letter="D", statement="I don't know my guy")
        ),
        answer="C",
        tag="frontend"
    ),
    QuestionnaireQuestion(
        statement="Google applications mostly use Material design for their UI",
        choices= c(
            QuestionnaireChoice(letter="A", statement="Yes, they do"),
            QuestionnaireChoice(letter="B", statement="Nah, they use Bootstrap"),
            QuestionnaireChoice(letter="C", statement="They use Tailwind CSS"),
            QuestionnaireChoice(letter="D", statement="I have no idea about this")
        ),
        answer="A",
        tag="frontend"
    ),
    QuestionnaireQuestion(
        statement="The Angular framework was created by Google",
        choices= c(
            QuestionnaireChoice(letter="A", statement="Definitely"),
            QuestionnaireChoice(letter="B", statement="No, it's by Facebook"),
            QuestionnaireChoice(letter="C", statement="It's developed by Netflix for their UIs"),
            QuestionnaireChoice(
                letter="D", statement="I don't know much about frontend development frameworks")
        ),
        answer="A",
        tag="frontend"
    ),
    QuestionnaireQuestion(
        statement="What does React, Vue and Angular have in common?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="They are languages"),
            QuestionnaireChoice(letter="B", statement="They're frameworks from different languages"),
            QuestionnaireChoice(letter="C", statement="All compile to HTML, CSS and JS files"),
            QuestionnaireChoice(letter="D", statement="I have no idea about these guys")
        ),
        answer="C",
        tag="frontend"
    )
)


backendQuestions<- c(
    QuestionnaireQuestion(
        statement="Ever heard of 'Laravel'? What's it used for?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="Development of the backend applications"),
            QuestionnaireChoice(letter="B", statement="Native applications"),
            QuestionnaireChoice(letter="C", statement="Frontend development"),
            QuestionnaireChoice(letter="D", statement="Never heard of it")
        ),
        answer="A",
        tag="backend"
    ),
    QuestionnaireQuestion(
        statement="Redis cannot be used as a standalone server database",
        choices= c(
            QuestionnaireChoice(letter="A", statement="It can"),
            QuestionnaireChoice(letter="B", statement="Redis is not a database"),
            QuestionnaireChoice(letter="C", statement="True"),
            QuestionnaireChoice(letter="D", statement="I don't know what Redis is")
        ),
        answer="C",
        tag="backend"
    ),
    QuestionnaireQuestion(
        statement="How would you use caching to reduce your server response times?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="Cache common requests"),
            QuestionnaireChoice(letter="B", statement="It's not a way to reduce response times"),
            QuestionnaireChoice(letter="C", statement="Cache all responses"),
            QuestionnaireChoice(letter="D", statement="I don't know the answer to this")
        ),
        answer="A",
        tag="backend"
    ),
    QuestionnaireQuestion(
        statement="Which of the statements below is true when it comes to Docker?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="It's an alternative to Kubernetes"),
            QuestionnaireChoice(letter="B", statement="Used for containerization of applications"),
            QuestionnaireChoice(letter="C", statement="Used to monitor backend applications"),
            QuestionnaireChoice(
                letter="D", statement="I have no idea what Docker is")
        ),
        answer="B",
        tag="backend"
    ),
    QuestionnaireQuestion(
        statement="What's the largest file size that can be carried in a single request?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="50MB"),
            QuestionnaireChoice(letter="B", statement="10MB"),
            QuestionnaireChoice(letter="C", statement="100MB"),
            QuestionnaireChoice(letter="D", statement="Not sure man")
        ),
        answer="A",
        tag="backend"
    )
)


devopsQuestions<- c(
    QuestionnaireQuestion(
        statement="Travis CI and Github actions serve almost the same functionality",
        choices= c(
            QuestionnaireChoice(letter="A", statement="I don't think so"),
            QuestionnaireChoice(letter="B", statement="Yessir, they do"),
            QuestionnaireChoice(letter="C", statement="Github actions is a version control system"),
            QuestionnaireChoice(letter="D", statement="I don't know these two technologies")
        ),
        answer="B",
        tag="devops"
    ),
    QuestionnaireQuestion(
        statement="Docker was here long before Kubernetes",
        choices= c(
            QuestionnaireChoice(letter="A", statement="This is a big ass lie"),
            QuestionnaireChoice(letter="B", statement="That's a fact"),
            QuestionnaireChoice(letter="C", statement="Both were developed around the same time"),
            QuestionnaireChoice(letter="D", statement="I have no idea what Docker or Kubernetes is")
        ),
        answer="A",
        tag="devops"
    ),
    QuestionnaireQuestion(
        statement="Prometheus is famous for monitoring server applications",
        choices= c(
            QuestionnaireChoice(letter="A", statement="I agree"),
            QuestionnaireChoice(letter="B", statement="Statement is false"),
            QuestionnaireChoice(letter="C", statement="It only collects information"),
            QuestionnaireChoice(letter="D", statement="Didn't catch that")
        ),
        answer="A",
        tag="devops"
    ),
    QuestionnaireQuestion(
        statement="Kali is a Linux distro",
        choices= c(
            QuestionnaireChoice(letter="A", statement="Not!"),
            QuestionnaireChoice(letter="B", statement="It's a flavor of Ubuntu"),
            QuestionnaireChoice(letter="C", statement="It is!"),
            QuestionnaireChoice(
                letter="D", statement="I don't mess with Linux")
        ),
        answer="C",
        tag="devops"
    ),
    QuestionnaireQuestion(
        statement="What does Google Cloud Platform, Azure and Heroku have in common?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="All have IaaS solutions"),
            QuestionnaireChoice(letter="B", statement="They're the top cloud providers"),
            QuestionnaireChoice(letter="C", statement="They all provide PaaS solutions"),
            QuestionnaireChoice(letter="D", statement="They nothing in common")
        ),
        answer="C",
        tag="devops"
    )
)


mobileQuestions<- c(
    QuestionnaireQuestion(
        statement="It's cheaper to host my applications on Apple app store than Google play store",
        choices= c(
            QuestionnaireChoice(letter="A", statement="That's a lie my guy"),
            QuestionnaireChoice(
                letter="B", statement="Sure, Apple offer the cheapest hosting for mobile apps"),
            QuestionnaireChoice(letter="C", statement="They offer almost the same pricing"),
            QuestionnaireChoice(letter="D", statement="I don't host my apps here")
        ),
        answer="A",
        tag="mobile"
    ),
    QuestionnaireQuestion(
        statement="Which one of the following describes what Swift does?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="It's used for developing iOS apps"),
            QuestionnaireChoice(
                letter="B", statement="It can be used for developing Safari web extensions"),
            QuestionnaireChoice(letter="C", statement="Second name of a very famous music artist"),
            QuestionnaireChoice(letter="D", statement="I don't know anything about Swift")
        ),
        answer="A",
        tag="mobile"
    ),
    QuestionnaireQuestion(
        statement="Cross platform development allows me to implement one design for all my apps",
        choices= c(
            QuestionnaireChoice(
                letter="A", statement="You have to implement different designs using native UI SDKs"),
            QuestionnaireChoice(
                letter="B", statement="This is true, the design will be the same for all apps"),
            QuestionnaireChoice(
                letter="C", statement="It's one codebase but designs come out differently"),
            QuestionnaireChoice(letter="D", statement="I have no idea")
        ),
        answer="B",
        tag="mobile"
    ),
    QuestionnaireQuestion(
        statement="Large scale mobile applications can be built without user journeys and design prototypes",
        choices= c(
            QuestionnaireChoice(
                letter="A", statement="User journeys are not required for large projects"),
            QuestionnaireChoice(
                letter="B", statement="That's impossible, user's journeys should be a prerequisite"),
            QuestionnaireChoice(
                letter="C", statement="Design prototypes are created at the same time an MVP is developed"),
            QuestionnaireChoice(
                letter="D", statement="I don't do mobile development")
        ),
        answer="B",
        tag="mobile"
    ),
    QuestionnaireQuestion(
        statement="Which one of the following best describes what Java SDK is for?",
        choices= c(
            QuestionnaireChoice(letter="A", statement="It's for developing backend applications"),
            QuestionnaireChoice(
                letter="B", statement="It's for developing different versions of Java"),
            QuestionnaireChoice(letter="C", statement="It's used for android app development"),
            QuestionnaireChoice(letter="D", statement="I'm not well versed with Java")
        ),
        answer="C",
        tag="mobile"
    )
)
