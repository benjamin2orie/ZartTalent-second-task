
/*
1.1 Creating a function that simulate an api call
to fetch student data
 */
const fetchStudentData = (id) =>{
    return new Promise((resolve, reject) =>{
        // simulate an api call delay with setTimeout
        setTimeout(() =>{
            // defining a set of valid ID's
            const validIds = [1,2,3,4,5,6,7,8,9,10];

            if(validIds.includes(id)){
                // Resolve with a student object for valid ID's
                resolve({id: id, name :` Sudent ID ${id}`, age:20  + id});
                
            } else{
                // Reject for invalid ID's
                reject(new Error('Invalid Student ID'));

                // Custom error handling
            }
        }, 1000); 
    });
}

// 1.2 getStudentInfo(id) that uses async await

const getStudentInfo = async(id) =>{
    try{
        const student = await fetchStudentData(id);
        console.log('Student data:', student);
    }
    catch (error){
        console.error('Error:', error.message);
    }
}

getStudentInfo(1);

// PART TWO: STUDENT DATA PROCESSor(ARRAY METHOD)

// creating an object array of 10 students




const studentDetails = [
    // an array object of student with their id, name, grade, and subject
    {
        id: 1,
        name:"Ogechi",
        grade:92,
        subjects: ["Html", "Css", "Rect",  "Tailwind"]
    },
   
    {
        id: 2,
        name:"Goodness",
        grade:92,
        subjects: ["Html", "CSS"]
    },
    {
        id: 3,
        name:"John Doe",
        grade:100,
        subjects: ["SoftwareEngineer", "Vuejs"]
    },
    {
        id: 4,
        name:"Miracle",
        grade:66,
        subjects: ["Express","Js"]
    },
    {
        id: 5,
        name:"Adeola",
        grade:89,
        subjects: ["Java", "Node js"]
    },
    {
        id: 6,
        name:"Jane",
        grade:98,
        subjects: ["Data Science", "Mysql", "Java"]
    },
    {
        id: 7,
        name:"Shalom",
        grade:80,
        subjects: ["Data Structure and Algorithms", "Ruby"]
    },
    {
        id: 8,
        name:"Emmanuel",
        grade:70,
        subjects: ["Python", "Mysql"]
    },
    {
        id: 9,
        name:"Codex",
        grade:50,
        subjects: ["MYSQL", "MogoDb"]
    },
    {
        id: 10,
        name:"Ben",
        grade:98,
        subjects: ["Javascript", "Html", "Hysql"]
    }
    
];


const getTopStudents = (studentDetails) => {
    return studentDetails.filter( student => student.grade > 90);
    // A: created a function that filter and return the students whose grade above 90
}

const topStudent = getTopStudents(studentDetails);
// Get student that is above 90

// console.log(topStudent);


// ES6 ARROW FUNCTION IMPLEMENTATION
const getStudentBySubject = (studentDetails, subject) => {
     return studentDetails.filter(student => student.subjects.includes(subject)); 
    };
    // B: created a function that return students with a specific subject

     const studentsWithSubject = getStudentBySubject(studentDetails, "Ruby"); 
    //  Getting students with a specific subject
    //  console.log(studentsWithSubject);


    function calculateAverageGrade(studentDetails){
    let totalGrades = studentDetails.reduce((sum, student) => sum  +  student.grade,0);
    let averageGrade = totalGrades / studentDetails.length;
    return averageGrade;
    
    // C: created a function that calculate and return the total average of the all the student
}

let averageGrade = calculateAverageGrade(studentDetails);
// console.log(averageGrade);



const addSubjectToAll = (studentDetails, newSubject) => {
     return studentDetails.map(student => { 
        return { 
            ...student, 
            subjects: [...student.subjects, newSubject] 
            
            // Array distructing and spred operator
        }; 
    }); 
};
// D: created a function that add new subject to all the student in an array of subject.

  const updatedStudents = addSubjectToAll(studentDetails, "Chemistry");
//   this add Chemistry to all the students subject
   console.log(updatedStudents);




// PART 3: STUDENT CLASS AND CONSTRUCTOR


class Student { 
    constructor(id, name, grade) {
         this.id = id; 
         this.name = name; 
         this.grade = grade; 
         this.subjects = []; 

        //  this is the constructor that create the instances of the studentDetails
        }
         addSubject(subject) { 
            this.subjects.push(subject);
            // this is an array method that add new subject
         } 
         removeSubject(subject) {
             const index = this.subjects.indexOf(subject);
              if (index > -1) { this.subjects.splice(index, 1); 

              } 
            } 
            getInfo() { 
                return `ID: ${this.id}, Name: ${this.name}, Grade: ${this.grade}, Subjects: ${this.subjects.join(", ")}`;
                // using template literal
             } 
            }

            const student1 = new Student(studentDetails[2].id, studentDetails[2].name, studentDetails[2].grade); 
            // this function get the id, name , grade, and add new subject called typescript to the sudent with an id of 3
            student1.addSubject("Math");
            //  this function add new subject called Math to the student with an id of 3
            student1.addSubject("typeScript");
            //  this function add new subject called typescript to the student with an id of 3
            student1.removeSubject("Math");
            //  this function remove the new subject called Math to the student with an id of 3
            console.log(student1.getInfo());
            // this printed out the student info


            // 3.2
            function TeacherAssistant(name, assignedSubject) {
                 this.name = name;
                 this.assignedSubject = assignedSubject;
                 } 
                 TeacherAssistant.prototype.assistStudent = function(student) {

                     if (!student.subjects.includes(this.assignedSubject)) {
                         student.addSubject(this.assignedSubject); 
                        } 
                    };
                         const student = new Student(studentDetails[7].id, studentDetails[7].name, studentDetails[7].grade);
                          const ta = new TeacherAssistant("Mr. Smith", "typescript"); 
                          ta.assistStudent(student); 
                          console.log(student)
                        //   console.log(student.getInfo());


            function getStudentSummary(student = { id: 0, name: 'Unknown', grade: 'N/A', subjects: [] }) {
                 return `Student Summary: ID: ${student.id}
                  Name: ${student.name} 
                  Grade: ${student.grade} 
                  Subjects: ${student.subjects.length > 0 ? 
                    student.subjects.join(', ') : 'No subjects assigned yet'}`;

                    // this function rturns the summary of student with an id of 8 with the default parameters
                 }

                    console.log(getStudentSummary(student)); 
                    console.log(getStudentSummary());
                    
                     

                    // LEET CODE CHALLENGE

                    function twoSum(nums, target) { 
                        const numMap = new Map(); 
                        for (let i = 0; i < nums.length; i++) {
                             const complement = target - nums[i]; 
                             if (numMap.has(complement)) {
                                 return [numMap.get(complement), i];
                                 } 
                                 numMap.set(nums[i], i);
                                 }
                                  throw new Error("No two sum solution");
                                //   throw an error message: No two sum solution 
                                 } 
                        const nums = [2, 7, 11, 15, 8]; 
                        const target = 15; 
                        console.log(twoSum(nums, target));
                    

// const updateuser = [...studentDetails];
// updateuser[0].subjects.push("Physics");
// const topSudents = getTopStudents(updateuser);

// const javaStudents = getStudentsBySubject(updateuser, "MYSQL");

// let averageGrade = calculateAverageGrade(updateuser);

// console.log(averageGrade)
 



