// example, feel free to change the format
let experiences = [
    {
        title: "Founder",
        company: "Google",
        _location: "Mountain View, CA",
        start: "2018-01-01",
        end: "2018-12-31",
        description: "I founded google"
        tags: ["python"],
    },
    {
        title: "CEO",
        company: "Facebook",
        _location: "Menlo Park, CA",
        start: "2019-01-01",
        end: "2019-12-31",
        description: "I was the CEO of Facebook"
        tags: ["Fortran"],
    },
];

let projects = [ /* ... */ ];

// one array for each section

// pseudocode:
// for each section:
//      for each item in the section:
//              create a new element, maybe including multiple children
//              set the innerHTML of the element to the item's data
//              append the element to the section
