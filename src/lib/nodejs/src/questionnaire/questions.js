const { Choice } = require("./choice")
const { Question } = require("./question")

module.exports.frontendQuestions = [
    new Question(
        "What comes to your mind when I say 'Svelte'?",
        [
            new Choice("A", "Just another Javascript framework"),
            new Choice("B", "It’s a new language"),
            new Choice("C", "Smallest bundle size"),
            new Choice("D", "Not sure man"),
        ],
        "C",
        "frontend"
    ),
    new Question(
        "What's used to style HTML files?",
        [
            new Choice("A", "Condensed Style Sheets"),
            new Choice("B", "Cascaded Style Scripts"),
            new Choice("C", "Cascaded Style Sheet"),
            new Choice("D", "I don't know my guy"),
        ],
        "C",
        "frontend"
    ),
    new Question(
        "Google applications mostly use Material design for their UI",
        [
            new Choice("A", "Yes, they do"),
            new Choice("B", "Nah, they use Bootstrap"),
            new Choice("C", "They use Tailwind CSS"),
            new Choice("D", "I have no idea about this"),
        ],
        "A",
        "frontend"
    ),
    new Question(
        "The Angular framework was created by Google",
        [
            new Choice("A", "Definitely"),
            new Choice("B", "No, it’s by Facebook"),
            new Choice("C", "It’s developed by Netflix for their UIs"),
            new Choice(
                "D", "I don’t know much about frontend development frameworks"),
        ],
        "A",
        "frontend"
    ),
    new Question(
        "What does React, Vue and Angular have in common?",
        [
            new Choice("A", "They are languages"),
            new Choice("B", "They're frameworks from different languages"),
            new Choice("C", "All compile to HTML, CSS and JS files"),
            new Choice("D", "I have no idea about these guys"),
        ],
        "C",
        "frontend"
    )
]


module.exports.backendQuestions = [
    new Question(
        "Ever heard of 'Laravel’? What's it used for?",
        [
            new Choice("A", "Development of the backend applications"),
            new Choice("B", "Native applications"),
            new Choice("C", "Frontend development"),
            new Choice("D", "Never heard of it"),
        ],
        "A",
        "backend"
    ),
    new Question(
        "Redis cannot be used as a standalone server database",
        [
            new Choice("A", "It can"),
            new Choice("B", "Redis is not a database"),
            new Choice("C", "True"),
            new Choice("D", "I don't know what Redis is"),
        ],
        "C",
        "backend"
    ),
    new Question(
        "How would you use caching to reduce your server response times?",
        [
            new Choice("A", "Cache common requests"),
            new Choice("B", "It's not a way to reduce response times"),
            new Choice("C", "Cache all responses"),
            new Choice("D", "I don't know the answer to this"),
        ],
        "A",
        "backend"
    ),
    new Question(
        "Which of the statements below is true when it comes to Docker?",
        [
            new Choice("A", "It's an alternative to Kubernetes"),
            new Choice("B", "Used for containerization of applications"),
            new Choice("C", "Used to monitor backend applications"),
            new Choice(
                "D", "I have no idea what Docker is"),
        ],
        "B",
        "backend"
    ),
    new Question(
        "What's the largest file size that can be carried in a single request?",
        [
            new Choice("A", "50MB"),
            new Choice("B", "10MB"),
            new Choice("C", "100MB"),
            new Choice("D", "Not sure man"),
        ],
        "A",
        "backend"
    )
]


module.exports.devopsQuestions = [
    new Question(
        "Travis CI and Github actions serve almost the same functionality",
        [
            new Choice("A", "I don't think so"),
            new Choice("B", "Yessir, they do"),
            new Choice("C", "Github actions is a version control system"),
            new Choice("D", "I don't know these two technologies"),
        ],
        "B",
        "devops"
    ),
    new Question(
        "Docker was here long before Kubernetes",
        [
            new Choice("A", "This is a big ass lie"),
            new Choice("B", "That's a fact"),
            new Choice("C", "Both were developed around the same time"),
            new Choice("D", "I have no idea what Docker or Kubernetes is"),
        ],
        "A",
        "devops"
    ),
    new Question(
        "Prometheus is famous for monitoring server applications",
        [
            new Choice("A", "I agree"),
            new Choice("B", "Statement is false"),
            new Choice("C", "It only collects information"),
            new Choice("D", "Didn't catch that"),
        ],
        "A",
        "devops"
    ),
    new Question(
        "Kali is a Linux distro",
        [
            new Choice("A", "Not!"),
            new Choice("B", "It's a flavor of Ubuntu"),
            new Choice("C", "It is!"),
            new Choice(
                "D", "I don't mess with Linux"),
        ],
        "C",
        "devops"
    ),
    new Question(
        "What does Google Cloud Platform, Azure and Heroku have in common?",
        [
            new Choice("A", "All have IaaS solutions"),
            new Choice("B", "They're the top cloud providers"),
            new Choice("C", "They all provide PaaS solutions"),
            new Choice("D", "They nothing in common"),
        ],
        "C",
        "devops"
    )
]


module.exports.mobileQuestions = [
    new Question(
        "It's cheaper to host my applications on Apple app store than Google play store",
        [
            new Choice("A", "That’s a lie my guy"),
            new Choice(
                "B", "Sure, Apple offer the cheapest hosting for mobile apps"),
            new Choice("C", "They offer almost the same pricing"),
            new Choice("D", "I don't host my apps here"),
        ],
        "A",
        "mobile"
    ),
    new Question(
        "Which one of the following describes what Swift does?",
        [
            new Choice("A", "It’s used for developing iOS apps"),
            new Choice(
                "B", "It can be used for developing Safari web extensions"),
            new Choice("C", "Second name of a very famous music artist"),
            new Choice("D", "I don’t know anything about Swift"),
        ],
        "A",
        "mobile"
    ),
    new Question(
        "Cross platform development allows me to implement one design for all my apps",
        [
            new Choice(
                "A", "You have to implement different designs using native UI SDKs"),
            new Choice(
                "B", "This is true, the design will be the same for all apps"),
            new Choice(
                "C", "It’s one codebase but designs come out differently"),
            new Choice("D", "I have no idea"),
        ],
        "B",
        "mobile"
    ),
    new Question(
        "Large scale mobile applications can be built without user journeys and design prototypes",
        [
            new Choice(
                "A", "User journeys are not required for large projects"),
            new Choice(
                "B", "That’s impossible, user’s journeys should be a prerequisite"),
            new Choice(
                "C", "Design prototypes are created at the same time an MVP is developed"),
            new Choice(
                "D", "I don’t do mobile development"),
        ],
        "B",
        "mobile"
    ),
    new Question(
        "Which one of the following best describes what Java SDK is for?",
        [
            new Choice("A", "It’s for developing backend applications"),
            new Choice(
                "B", "It’s for developing different versions of Java"),
            new Choice("C", "It’s used for android app development"),
            new Choice("D", "I’m not well versed with Java"),
        ],
        "C",
        "mobile"
    )
]
