#import "modernpro-cv-custom.typ": *
#import "@preview/cmarker:0.1.6"
#set page("us-letter", margin: 0.5in)

#let show-list(list) = {
  for (elem) in list {
    if (elem == list.at(-1)) [#elem]
    else [#elem, ]
  }
}

#let yaml = yaml("data-tiktok.yaml")

#let contacts-data = yaml.contacts
#let education-data = yaml.education
#let experience-data = yaml.experience
#let projects-data = yaml.projects
#let skills-data = yaml.skills

#set par(spacing: 0.9em)

#show: cv-single.with(
  continue-header: "false",
  name: "Hannah Hsiao",
  lastupdated: "false",
  address: none,
  pagecount: "true",
  date: datetime.today().display(),
  contacts: contacts-data
)

#section("Education")

#{
  set par(spacing: 0.8em)
  education(
    institution: "Georgia Institute of Technology", 
    major: "Master of Science in Computer Science, Concentration in Artificial Intelligence", 
    date: "expected May 2027", 
    location: "Atlanta, GA", 
    gpa: "4.0" 
  )  
  oneline-two(
    entry1: emph([Bachelor of Science in Computer Science, Concentration in Intelligence and Devices]), 
    entry2: emph([Aug 2023 — May 2026])
  )
  
  [- Relevant Coursework: #show-list(education-data)]
}

#sectionsep

#section("Experience")

// #{
//   for (position, institution, location, date, description, subsectionHeading) in experience-data {
//     [
//       #job(position: position, 
//            institution: institution, 
//            date: date, 
//            location: location,
//            subsectionHeading: if (subsectionHeading != none) {
//               heading3(subsectionHeading)
//             },
//            description: if (description != none) {
//              for (content) in description {
//                [ - #content]
//              }
//            }
//          )
         
//     ]
//   }
// }

#{
  for (position, institution, location, date, description, tools) in experience-data {
    [
      #job(position: position, 
           institution: institution, 
           date: date, 
           location: location,
           tools: tools,
           description: if (description != none) {
             if (type(description) == dictionary) {
               for (title, (date, description)) in description {
                 [#title]
                 h(1fr)
                 text(11pt, style: "italic", fill: headings-colour, weight: "regular")[#date \ ]
                 for (content) in description {
                   [ - #cmarker.render(content)]
                 }
               }
             } else {
               for (content) in description {
                 [ - #cmarker.render(content)]
               }
             }
           }
         )
         
    ]
  }
}


#sectionsep

#section("Projects")

#{
  for (title, caption, description, tools) in projects-data {
    [
      #project(title: title, 
           tools: tools,
           caption: caption,
           info: if (description != none) {
             for (content) in description {
               [ - #cmarker.render(content)]
             }
           })
           
    ]
  }
}

#sectionsep

#section("Skills and Competencies")

#{
  for (category, content) in skills-data {
    [*#category*: #cmarker.render(content) \ ]

  }
}
