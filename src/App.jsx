import '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/css/style.css'
import '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/css/cvDisplay.css'
import '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/css/Components.css'
import '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/css/sidebar.css'
import { useState } from 'react'
import { HeaderComponents, EducationDisplay, HeaderPage, ContactComponents, ContactPage, SummaryPage, SummaryLabel, SkillsPage} from './jsx/Appcomponents'
export function App(){

    // Inputs
    const [input, Updated] = useState({

        Name: 'Name Here', 
        Occupation: 'Occupation Here', 
        Email: 'Email Here', 
        Phone: 'Phone Number', 
        Address: 'Address', 
        Website: 'Url...'
    })


    const handleFunctions = {

    Name: (e) => Updated({...input, Name: e.target.value}), 
    Occupation: (e) => Updated({...input, Occupation: e.target.value}), 
    Email: (e) => Updated({...input, Email: e.target.value}), 
    Phone: (e) => Updated({...input, Phone: e.target.value}), 
    Address:  (e) => Updated({...input, Address: e.target.value}), 
    Website: (e) => Updated({...input, Website: e.target.value})

    }

    // Education Info

        const [Schools, UpdateSchools] = useState([

            {id: 0, School: 'School Name', Field: 'Field of Study', Start: 'Start Term', End: 'End Term'}
        ])

        const AddSchool = () => {

            const newSchool = {id: crypto.randomUUID(), School: 'School Name', Field: 'Field of Study', Start: 'Start Term', End: 'End Term'}
            UpdateSchools([...Schools, newSchool])
            console.log(Schools)

        }

       const updateSchool = (id, newValue, Name) => {

            UpdateSchools(Schools.map(school => 
                school.id === id ? {...school, [Name]: newValue} : school
            ))
        }

    // SkillsInfo

        const [Skills, UpdateSkills] = useState ([

            {id: 0, Skill: 'Skill', Level: 'Level'}
        ])

        const AddSkill = () => {

            const newSkill = {id: crypto.randomUUID(), Skill: 'Skill', Level: 'Level'}
            UpdateSkills([...Skills, newSkill])
        }

        const updateSkills = (id, newValue, Name ) => {

            UpdateSkills(Skills.map(skill => 
                skill.id === id ? {...skill, [Name]: newValue} : skill
            ))
        }

    // Summary Info

        const [Summary, UpdateSummary] = useState({

            SummaryInput: ' ',
            Work: ' ', 
            References: ' '
        })

        const handleSummary = {

            Summary: (e) => UpdateSummary({...Summary, SummaryInput: e.target.value}),
            Work: (e) => UpdateSummary({...Summary, Work: e.target.value}), 
            References: (e) => UpdateSummary({...Summary, References: e.target.value})

        }






    return (

        <>
            <div className="App">

                <div className="sidebar">

                    <h1>Resume Editor</h1>

                    <h3>Information</h3>

                        <HeaderComponents Name={handleFunctions.Name} Occupation={handleFunctions.Occupation} />

                    <h3>Contact Details</h3>

                        <ContactComponents Email={handleFunctions.Email} Phone={handleFunctions.Phone} Address={handleFunctions.Address} Website={handleFunctions.Website}/>
                        
                    <h3>Education</h3>
                    

                    {Schools.map((school, i) => (

                        <>
                            <div className="EducationLabels">

                                    <div className='myLabels'>

                                        <label htmlFor="Education">
                                            <div>School Name</div>
                                            <input type="text" placeholder='School Name' onChange={(e) => updateSchool(school.id, e.target.value, "School")}/>
                                        </label>

                                        <label htmlFor="Field">
                                            <div>Field of Study</div>
                                            <input type="text" placeholder='Field of Study' onChange={(e) => updateSchool(school.id, e.target.value, "Field")}  />
                                        </label>
                                </div>

                                <div className='myLabels'>

                                        <label htmlFor="Start">
                                            <div>Start Term</div>
                                            <input type="number" placeholder='Start Term' name="Start" id="Start" max={2025} onChange={(e) => updateSchool(school.id, e.target.value, 'Start')}/>
                                        </label>

                                        <label htmlFor="End">
                                            <div>End Term</div>
                                            <input type="number" placeholder='End Term' name="End" id="End"  max={2025} onChange={(e) => updateSchool(school.id, e.target.value, 'End')}/>
                                        </label>

                                </div>
                            </div>
                            
                        </>
                    ))}
                        <button onClick={AddSchool}>Add Education</button>

                    <h3>Skills</h3>

                        {Skills.map((skill) => (

                            <>
            
                                <div className="SkillLabels">

                                    <div className="myLabels">
                                        <label htmlFor="Skill">
                                            <div>Skills</div>
                                            <input type="text" name='Skill' placeholder='Skill' onChange={(e) => updateSkills(skill.id, e.target.value, e.target.name)} />
                                        </label>

                                        <label htmlFor="level">
                                            <div>Level</div>
                                            <select name="Level" id="level" onChange={(e) => updateSkills(skill.id, e.target.value, e.target.name)} >
                                                <option value="Beginner">Beginner</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Expert">Expert</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
            
                            </>
                        ))}

                        <button onClick={AddSkill}>Add Skill</button>


                    <h3>Summary</h3>

                        <SummaryLabel Summary={handleSummary.Summary} Work={handleSummary.Work} References={handleSummary.References}/>





                </div>

                <div className="cvDisplay">

                    <div className="Header">

                        <div className="HeaderContent">

                            <HeaderPage Name={input.Name} Occupation={input.Occupation} />

                        </div>

                    </div>

                    <div className="cvBody">

                        <div className="sidePanel">

                        <h3>Contact Details</h3>

                            <ContactPage Email={input.Email} Phone={input.Phone} Address={input.Address} Website={input.Website}/>

                        <h3>Education</h3>

                            {Schools.map((School, i) => (<EducationDisplay schoolName={School.School} field={School.Field} startTerm={School.Start} endTerm={School.End} key={i}/>))}

                        <h3>Skills</h3>

                            {Skills.map((skill, i) => (<> <SkillsPage Skill={skill.Skill} Level={skill.Level} key={i} /> </>))}
                        </div>

                        <div className="cvRight">

                            <SummaryPage Summary={Summary.SummaryInput} Work={Summary.Work} References={Summary.References}/>

                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}