//Question_1 : For the given JSON iterate over all for loops (for, for in, for of)

let personDetails = [{"Name":"Santhosh"},{ "DOB":"29.09.2001"},{"Gender":"Male"},{"Address":"8/67 J P Kovil West Street"},{"City":"Kumbakonam"}];

console.log(personDetails);

/*---------------------------------------------------------------------------*/

// Using for loop :

for (let i=0;i<personDetails.length;i++){
    console.log(personDetails[i]);
}

/*---------------------------------------------------------------------------*/

// Using for in loop :

for (let i = 0; i < personDetails.length; i++) {
    for (let key in personDetails[i]) {
        console.log(`DOB: ${personDetails[1].DOB}`);
    }
}

/*---------------------------------------------------------------------------*/

// Using for of loop :

for (let detail of personDetails) {
    for (let key in detail) {
        if (detail.hasOwnProperty(key) && key === "Address") {
            console.log(`Address: ${detail[key]}`);
        }
    }
}

/*---------------------------------------------------------------------------*/

//Question_2 : 

const myResume = [{
    "name": {"first Name": "Santhosh", "Last Name": "Srinivasan"},
    "contact": {
      "address": "8/67 J P Kovil west street, Kumbakonam",
      "phone": "6385916880",
      "email": "santhoshsrinivasan29092001@gmail.com"
    }},
    {"summary": "Experienced software engineer with a strong background in web development and full-stack development. Proven track record of delivering high-quality software solutions in a timely manner."},
    {"education": [
      {
        "degree": "Bachelor of Engineering in Electronics and Communication Engineering",
        "CollegeName": "Anjalai Ammal Mahalingam Engineering College",
        "university": "Anna University",
        "graduation_year": 2023
      },
      {
        "degree": "Higher Secondary",
        "School": "Sri Matha Matric Higher Secondary School",
        "graduation_year": 2019
      },
      {
        "degree": "SSLC",
        "School": "Sri Matha Matric Higher Secondary School",
        "graduation_year": 2017
      }
    ]},
    {"experience": [
      {
        "position": "R & D Engineer",
        "company": "Elcompo Electronics Industries Private Limited",
        "location": "Perungudi, Chennai",
        "start_date": "01-06-2023",
        "end_date": "30-09-2023",
        "responsibilities": [
            "Conduct research to understand current industry trends, technologies, and best practices.",
            "Analyze existing products or processes to identify areas for improvement and innovation.",
            "Identify technical challenges and work on solutions to overcome them.",
            "Prepare reports and presentations to communicate research findings and progress to management."
        ]
      },
    ],
    },
    {"skills": [
      "JavaScript",
      "Python",
      "HTML/CSS",
      "React",
      "Node.js",
      "Git",
    ],
    },
    {"languages": ["English (Fluent)", "Tamil (Fluent)", "Sowrastra (Fluent)"]},
    {"Internships": [
      {
        "Title" : "web Development", 
        "Location" : "MKM Software,Thanjavur"
      },
      {
        "Title" : "IOT in Embedded Systems", 
        "Location" : "Pantech Solutions, Chennai."
      },
      {
        "Title" : "Industrial Based Embedded Systems in IOT", 
        "Location" : "NSIC, Chennai."
      },
      {
        "Title" : "Master Class on EV Design", 
        "Location" : "Pantech Solutions, Chennai."
      }
    ]},
    {"certifications": ["Internship Certification in IoT In Embedded Systems", 
        "Successful Completion of Internship on HTML, CSS, JAVA SCRIPT",
        "In plant Training Certificate on Industrial Based Embedded with AI & IoT",
        "Merit Certificate on Entrepreneurship in 21st Century",
        "Merit Certificate for Paper Presentation",
        "Certification on National Conference held at SSM institute of Engineering & Technology",
        "Successfully completed 2days design thinking workshop organized by IEDP at SASTRA University",
        "Certification on Advanced Techniques in Communication Conference held at Arasu Engineering College",
        "Successfully Completed & Received Passing Grade in Digital Analytics and Regression, provided by IBM",
        "Received Smart Student Award During the Academic Year 2022-2023"]},
    {"projects": [
      {
        "title": "Surveillance Quad-Copter",
        "description": "A surveillance drone is generally integrated into a global security system,comprising different levels of security: perimeter fencing, video surveillance system coupled with an alarm system, on-site guarding or access control services by security officers, and sometimes remote video monitoring.",
      },
      {
        "title": "Home Automation using IOT",
        "description": "A home automation system will monitor and/or control home attributes such as lighting, climate, entertainment systems, and appliances.",
      },
      {
        "title": "Retail Store Stock Inventory Analytics - IBM Project",
        "description": "They help retailers understand their stock levels and predict demand for their products. The goal for retailers is to ensure they have enough stock to meet customer demand and to prevent stockouts, as well as to avoid the unnecessary costs of overstocking",
      },
      {
        "title": "Neural Network Based Intrusion Detection System in IoT Environment - Final Year project",
        "description": "An Intrusion Detection System (IDS) is used to secure device communication and identify intrusion in the network. For secure internet communication, many IDSs have been launched. When malicious behavior is detected on the network, it actively monitors and sends an alarm to the system administrator.",
      }
    ]
  }
]
console.log(myResume);

for(i=0;i<myResume.length;i++){
    console.log(myResume[i]);
}

