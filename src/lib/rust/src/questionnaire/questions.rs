use crate::questionnaire::{choice, question};

use choice::Choice;
use question::Question;


/* 
  Rust does not allow global variables unless it's const,
  If it's const, there cannot be allowcations in a variable, for example, choice: Vec<Choice>
*/

pub fn fetch_frontend_questions() -> Vec<Question> {
    let frontend_questions = vec![
            Question{
                statement:"What comes to your mind when I say 'Svelte'?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"Just another Javascript framework".to_string()},
                    Choice{letter:"B".to_string(), statement:"It’s a new language".to_string()},
                    Choice{letter:"C".to_string(), statement:"Smallest bundle size".to_string()},
                    Choice{letter:"D".to_string(), statement:"Not sure man".to_string()},
                ],
                answer:"C".to_string(),
                tag:"frontend".to_string()
        },
            Question{
                statement:"What's used to style HTML files?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"Condensed Style Sheets".to_string()},
                    Choice{letter:"B".to_string(), statement:"Cascaded Style Scripts".to_string()},
                    Choice{letter:"C".to_string(), statement:"Cascaded Style Sheet".to_string()},
                    Choice{letter:"D".to_string(), statement:"I don't know my guy".to_string()},
                ],
                answer:"C".to_string(),
                tag:"frontend".to_string()
        },
            Question{
                statement:"Google applications mostly use Material design for their UI".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"Yes, they do".to_string()},
                    Choice{letter:"B".to_string(), statement:"Nah, they use Bootstrap".to_string()},
                    Choice{letter:"C".to_string(), statement:"They use Tailwind CSS".to_string()},
                    Choice{letter:"D".to_string(), statement:"I have no idea about this".to_string()},
                ],
                answer:"A".to_string(),
                tag:"frontend".to_string()
        },
            Question{
                statement:"The Angular framework was created by Google".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"Definitely".to_string()},
                    Choice{letter:"B".to_string(), statement:"No, it’s by Facebook".to_string()},
                    Choice{letter:"C".to_string(), statement:"It’s developed by Netflix for their UIs".to_string()},
                    Choice{
                        letter:"D".to_string(), statement:"I don’t know much about frontend development frameworks".to_string()},
                ],
                answer:"A".to_string(),
                tag:"frontend".to_string()
        },
            Question{
                statement:"What does React, Vue and Angular have in common?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"They are languages".to_string()},
                    Choice{letter:"B".to_string(), statement:"They're frameworks from different languages".to_string()},
                    Choice{letter:"C".to_string(), statement:"All compile to HTML, CSS and JS files".to_string()},
                    Choice{letter:"D".to_string(), statement:"I have no idea about these guys".to_string()},
                ],
                answer:"C".to_string(),
                tag:"frontend".to_string()
            }
        ];  

        return frontend_questions;
}


pub fn fetch_backend_questions() -> Vec<Question> {
        let backend_questions =vec![
            Question{
                statement:"Ever heard of 'Laravel’? What's it used for?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"Development of the backend applications".to_string()},
                    Choice{letter:"B".to_string(), statement:"Native applications".to_string()},
                    Choice{letter:"C".to_string(), statement:"Frontend development".to_string()},
                    Choice{letter:"D".to_string(), statement:"Never heard of it".to_string()},
                ],
                answer:"A".to_string(),
                tag:"backend".to_string()
        },
            Question{
                statement:"Redis cannot be used as a standalone server database".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"It can".to_string()},
                    Choice{letter:"B".to_string(), statement:"Redis is not a database".to_string()},
                    Choice{letter:"C".to_string(), statement:"True".to_string()},
                    Choice{letter:"D".to_string(), statement:"I don't know what Redis is".to_string()},
                ],
                answer:"C".to_string(),
                tag:"backend".to_string()
        },
            Question{
                statement:"How would you use caching to reduce your server response times?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"Cache common requests".to_string()},
                    Choice{letter:"B".to_string(), statement:"It's not a way to reduce response times".to_string()},
                    Choice{letter:"C".to_string(), statement:"Cache all responses".to_string()},
                    Choice{letter:"D".to_string(), statement:"I don't know the answer to this".to_string()},
                ],
                answer:"A".to_string(),
                tag:"backend".to_string()
        },
            Question{
                statement:"Which of the statements below is true when it comes to Docker?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"It's an alternative to Kubernetes".to_string()},
                    Choice{letter:"B".to_string(), statement:"Used for containerization of applications".to_string()},
                    Choice{letter:"C".to_string(), statement:"Used to monitor backend applications".to_string()},
                    Choice{
                        letter:"D".to_string(), statement:"I have no idea what Docker is".to_string()},
                ],
                answer:"B".to_string(),
                tag:"backend".to_string()
        },
            Question{
                statement:"What's the largest file size that can be carried in a single request?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"50MB".to_string()},
                    Choice{letter:"B".to_string(), statement:"10MB".to_string()},
                    Choice{letter:"C".to_string(), statement:"100MB".to_string()},
                    Choice{letter:"D".to_string(), statement:"Not sure man".to_string()},
                ],
                answer:"A".to_string(),
                tag:"backend".to_string()
            }
        ];

        return backend_questions;
}



pub fn fetch_devops_questions() -> Vec<Question> {
    let devops_questions:Vec<Question> =vec![
            Question{
                statement:"Travis CI and Github actions serve almost the same functionality".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"I don't think so".to_string()},
                    Choice{letter:"B".to_string(), statement:"Yessir, they do".to_string()},
                    Choice{letter:"C".to_string(), statement:"Github actions is a version control system".to_string()},
                    Choice{letter:"D".to_string(), statement:"I don't know these two technologies".to_string()},
                ],
                answer:"B".to_string(),
                tag:"devops".to_string()
        },
            Question{
                statement:"Docker was here long before Kubernetes".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"This is a big ass lie".to_string()},
                    Choice{letter:"B".to_string(), statement:"That's a fact".to_string()},
                    Choice{letter:"C".to_string(), statement:"Both were developed around the same time".to_string()},
                    Choice{letter:"D".to_string(), statement:"I have no idea what Docker or Kubernetes is".to_string()},
                ],
                answer:"A".to_string(),
                tag:"devops".to_string()
        },
            Question{
                statement:"Prometheus is famous for monitoring server applications".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"I agree".to_string()},
                    Choice{letter:"B".to_string(), statement:"Statement is false".to_string()},
                    Choice{letter:"C".to_string(), statement:"It only collects information".to_string()},
                    Choice{letter:"D".to_string(), statement:"Didn't catch that".to_string()},
                ],
                answer:"A".to_string(),
                tag:"devops".to_string()
        },
            Question{
                statement:"Kali is a Linux distro".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"Not!".to_string()},
                    Choice{letter:"B".to_string(), statement:"It's a flavor of Ubuntu".to_string()},
                    Choice{letter:"C".to_string(), statement:"It is!".to_string()},
                    Choice{
                        letter:"D".to_string(), statement:"I don't mess with Linux".to_string()},
                ],
                answer:"C".to_string(),
                tag:"devops".to_string()
        },
            Question{
                statement:"What does Google Cloud Platform, Azure and Heroku have in common?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"All have IaaS solutions".to_string()},
                    Choice{letter:"B".to_string(), statement:"They're the top cloud providers".to_string()},
                    Choice{letter:"C".to_string(), statement:"They all provide PaaS solutions".to_string()},
                    Choice{letter:"D".to_string(), statement:"They nothing in common".to_string()},
                ],
                answer:"C".to_string(),
                tag:"devops".to_string()
            }
        ];

    return devops_questions;
}


pub fn fetch_mobile_questions() -> Vec<Question> {
    let mobile_questions:Vec<Question> =vec![
            Question{
                statement:"It's cheaper to host my applications on Apple app store than Google play store".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"That’s a lie my guy".to_string()},
                    Choice{
                        letter:"B".to_string(), statement:"Sure, Apple offer the cheapest hosting for mobile apps".to_string()},
                    Choice{letter:"C".to_string(), statement:"They offer almost the same pricing".to_string()},
                    Choice{letter:"D".to_string(), statement:"I don't host my apps here".to_string()},
                ],
                answer:"A".to_string(),
                tag:"mobile".to_string()
        },
            Question{
                statement:"Which one of the following describes what Swift does?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"It’s used for developing iOS apps".to_string()},
                    Choice{
                        letter:"B".to_string(), statement:"It can be used for developing Safari web extensions".to_string()},
                    Choice{letter:"C".to_string(), statement:"Second name of a very famous music artist".to_string()},
                    Choice{letter:"D".to_string(), statement:"I don’t know anything about Swift".to_string()},
                ],
                answer:"A".to_string(),
                tag:"mobile".to_string()
        },
            Question{
                statement:"Cross platform development allows me to implement one design for all my apps".to_string(),
                choices: vec![
                    Choice{
                        letter:"A".to_string(), statement:"You have to implement different designs using native UI SDKs".to_string()},
                    Choice{
                        letter:"B".to_string(), statement:"This is true, the design will be the same for all apps".to_string()},
                    Choice{
                        letter:"C".to_string(), statement:"It’s one codebase but designs come out differently".to_string()},
                    Choice{letter:"D".to_string(), statement:"I have no idea".to_string()},
                ],
                answer:"B".to_string(),
                tag:"mobile".to_string()
        },
            Question{
                statement:"Large scale mobile applications can be built without user journeys and design prototypes".to_string(),
                choices: vec![
                    Choice{
                        letter:"A".to_string(), statement:"User journeys are not required for large projects".to_string()},
                    Choice{
                        letter:"B".to_string(), statement:"That’s impossible, user’s journeys should be a prerequisite".to_string()},
                    Choice{
                        letter:"C".to_string(), statement:"Design prototypes are created at the same time an MVP is developed".to_string()},
                    Choice{
                        letter:"D".to_string(), statement:"I don’t do mobile development".to_string()},
                ],
                answer:"B".to_string(),
                tag:"mobile".to_string()
        },
            Question{
                statement:"Which one of the following best describes what Java SDK is for?".to_string(),
                choices: vec![
                    Choice{letter:"A".to_string(), statement:"It’s for developing backend applications".to_string()},
                    Choice{
                        letter:"B".to_string(), statement:"It’s for developing different versions of Java".to_string()},
                    Choice{letter:"C".to_string(), statement:"It’s used for android app development".to_string()},
                    Choice{letter:"D".to_string(), statement:"I’m not well versed with Java".to_string()},
                ],
                answer:"C".to_string(),
                tag:"mobile".to_string()
            }
        ];

    return mobile_questions;
}
