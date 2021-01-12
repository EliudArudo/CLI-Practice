package questionnaire

// FrontendQuestions slice
var FrontendQuestions = []Question{
	Question{
		Statement: "What comes to your mind when I say 'Svelte'?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "Just another Javascript framework"},
			Choice{Letter: "B", Statement: "It’s a new language"},
			Choice{Letter: "C", Statement: "Smallest bundle size"},
			Choice{Letter: "D", Statement: "Not sure man"},
		},
		Answer: "C",
		Tag:    "frontend",
	},
	Question{
		Statement: "What's used to style HTML files?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "Condensed Style Sheets"},
			Choice{Letter: "B", Statement: "Cascaded Style Scripts"},
			Choice{Letter: "C", Statement: "Cascaded Style Sheet"},
			Choice{Letter: "D", Statement: "I don't know my guy"},
		},
		Answer: "C",
		Tag:    "frontend",
	},
	Question{
		Statement: "Google applications mostly use Material design for their UI",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "Yes, they do"},
			Choice{Letter: "B", Statement: "Nah, they use Bootstrap"},
			Choice{Letter: "C", Statement: "They use Tailwind CSS"},
			Choice{Letter: "D", Statement: "I have no idea about this"},
		},
		Answer: "A",
		Tag:    "frontend",
	},
	Question{
		Statement: "The Angular framework was created by Google",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "Definitely"},
			Choice{Letter: "B", Statement: "No, it’s by Facebook"},
			Choice{Letter: "C", Statement: "It’s developed by Netflix for their UIs"},
			Choice{
				Letter: "D", Statement: "I don’t know much about frontend development frameworks"},
		},
		Answer: "A",
		Tag:    "frontend",
	},
	Question{
		Statement: "What does React, Vue and Angular have in common?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "They are languages"},
			Choice{Letter: "B", Statement: "They're frameworks from different languages"},
			Choice{Letter: "C", Statement: "All compile to HTML, CSS and JS files"},
			Choice{Letter: "D", Statement: "I have no idea about these guys"},
		},
		Answer: "C",
		Tag:    "frontend",
	},
}

// BackendQuestions slice
var BackendQuestions = []Question{
	Question{
		Statement: "Ever heard of 'Laravel’? What's it used for?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "Development of the backend applications"},
			Choice{Letter: "B", Statement: "Native applications"},
			Choice{Letter: "C", Statement: "Frontend development"},
			Choice{Letter: "D", Statement: "Never heard of it"},
		},
		Answer: "A",
		Tag:    "backend",
	},
	Question{
		Statement: "Redis cannot be used as a standalone server database",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "It can"},
			Choice{Letter: "B", Statement: "Redis is not a database"},
			Choice{Letter: "C", Statement: "True"},
			Choice{Letter: "D", Statement: "I don't know what Redis is"},
		},
		Answer: "C",
		Tag:    "backend",
	},
	Question{
		Statement: "How would you use caching to reduce your server response times?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "Cache common requests"},
			Choice{Letter: "B", Statement: "It's not a way to reduce response times"},
			Choice{Letter: "C", Statement: "Cache all responses"},
			Choice{Letter: "D", Statement: "I don't know the answer to this"},
		},
		Answer: "A",
		Tag:    "backend",
	},
	Question{
		Statement: "Which of the statements below is true when it comes to Docker?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "It's an alternative to Kubernetes"},
			Choice{Letter: "B", Statement: "Used for containerization of applications"},
			Choice{Letter: "C", Statement: "Used to monitor backend applications"},
			Choice{
				Letter: "D", Statement: "I have no idea what Docker is"},
		},
		Answer: "B",
		Tag:    "backend",
	},
	Question{
		Statement: "What's the largest file size that can be carried in a single request?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "50MB"},
			Choice{Letter: "B", Statement: "10MB"},
			Choice{Letter: "C", Statement: "100MB"},
			Choice{Letter: "D", Statement: "Not sure man"},
		},
		Answer: "A",
		Tag:    "backend",
	},
}

// DevOpsQuestions slice
var DevOpsQuestions = []Question{
	Question{
		Statement: "Travis CI and Github actions serve almost the same functionality",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "I don't think so"},
			Choice{Letter: "B", Statement: "Yessir, they do"},
			Choice{Letter: "C", Statement: "Github actions is a version control system"},
			Choice{Letter: "D", Statement: "I don't know these two technologies"},
		},
		Answer: "B",
		Tag:    "devops",
	},
	Question{
		Statement: "Docker was here long before Kubernetes",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "This is a big ass lie"},
			Choice{Letter: "B", Statement: "That's a fact"},
			Choice{Letter: "C", Statement: "Both were developed around the same time"},
			Choice{Letter: "D", Statement: "I have no idea what Docker or Kubernetes is"},
		},
		Answer: "A",
		Tag:    "devops",
	},
	Question{
		Statement: "Prometheus is famous for monitoring server applications",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "I agree"},
			Choice{Letter: "B", Statement: "Statement is false"},
			Choice{Letter: "C", Statement: "It only collects information"},
			Choice{Letter: "D", Statement: "Didn't catch that"},
		},
		Answer: "A",
		Tag:    "devops",
	},
	Question{
		Statement: "Kali is a Linux distro",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "Not!"},
			Choice{Letter: "B", Statement: "It's a flavor of Ubuntu"},
			Choice{Letter: "C", Statement: "It is!"},
			Choice{
				Letter: "D", Statement: "I don't mess with Linux"},
		},
		Answer: "C",
		Tag:    "devops",
	},
	Question{
		Statement: "What does Google Cloud Platform, Azure and Heroku have in common?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "All have IaaS solutions"},
			Choice{Letter: "B", Statement: "They're the top cloud providers"},
			Choice{Letter: "C", Statement: "They all provide PaaS solutions"},
			Choice{Letter: "D", Statement: "They nothing in common"},
		},
		Answer: "C",
		Tag:    "devops",
	},
}

// MobileQuestions slice
var MobileQuestions = []Question{
	Question{
		Statement: "It's cheaper to host my applications on Apple app store than Google play store",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "That’s a lie my guy"},
			Choice{
				Letter: "B", Statement: "Sure, Apple offer the cheapest hosting for mobile apps"},
			Choice{Letter: "C", Statement: "They offer almost the same pricing"},
			Choice{Letter: "D", Statement: "I don't host my apps here"},
		},
		Answer: "A",
		Tag:    "mobile",
	},
	Question{
		Statement: "Which one of the following describes what Swift does?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "It’s used for developing iOS apps"},
			Choice{
				Letter: "B", Statement: "It can be used for developing Safari web extensions"},
			Choice{Letter: "C", Statement: "Second name of a very famous music artist"},
			Choice{Letter: "D", Statement: "I don’t know anything about Swift"},
		},
		Answer: "A",
		Tag:    "mobile",
	},
	Question{
		Statement: "Cross platform development allows me to implement one design for all my apps",
		Choices: []Choice{
			Choice{
				Letter: "A", Statement: "You have to implement different designs using native UI SDKs"},
			Choice{
				Letter: "B", Statement: "This is true, the design will be the same for all apps"},
			Choice{
				Letter: "C", Statement: "It’s one codebase but designs come out differently"},
			Choice{Letter: "D", Statement: "I have no idea"},
		},
		Answer: "B",
		Tag:    "mobile",
	},
	Question{
		Statement: "Large scale mobile applications can be built without user journeys and design prototypes",
		Choices: []Choice{
			Choice{
				Letter: "A", Statement: "User journeys are not required for large projects"},
			Choice{
				Letter: "B", Statement: "That’s impossible, user’s journeys should be a prerequisite"},
			Choice{
				Letter: "C", Statement: "Design prototypes are created at the same time an MVP is developed"},
			Choice{
				Letter: "D", Statement: "I don’t do mobile development"},
		},
		Answer: "B",
		Tag:    "mobile",
	},
	Question{
		Statement: "Which one of the following best describes what Java SDK is for?",
		Choices: []Choice{
			Choice{Letter: "A", Statement: "It’s for developing backend applications"},
			Choice{
				Letter: "B", Statement: "It’s for developing different versions of Java"},
			Choice{Letter: "C", Statement: "It’s used for android app development"},
			Choice{Letter: "D", Statement: "I’m not well versed with Java"},
		},
		Answer: "C",
		Tag:    "mobile",
	},
}
