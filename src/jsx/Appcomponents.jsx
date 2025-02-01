import mail from '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/assets/Reference/envelope-solid.png'
import phone from '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/assets/Reference/phone-solid.png'
import address from '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/assets/Reference/maps-and-flags.png'
import url from '/Users/elijahmoye/Desktop/Cv_Application-CVAPPLICATION/cvApplication/src/assets/Reference/url.png'

    export const HeaderComponents = ({Name, Occupation}) => {

        return (

            <>
                    <div className="Information">

                        <div className="myLabels">
                            <label htmlFor="">
                                <div>Name</div>
                                <input type="text" placeholder='John Doe' onChange={Name} />
                            </label>


                            <label htmlFor="">
                                <div>Occupation</div>
                                <input type="text" placeholder='Finacial Advisor' onChange={Occupation} />
                            </label>
                        </div>
                    </div>
            </>
        )
    }

    export const HeaderPage = ({Name, Occupation}) => {
        
        return (

            <>
                <div className="HeaderContent">

                    <h2>{Name}</h2>
                    <div>{Occupation}</div>
                </div>
            </>
        )
    }

    export const ContactComponents = ({Email, Phone, Address, Website}) => {

        return (

            <>  

                    <div className="contactDetailsLabels">

                        <div className='myLabels'>

                            <label htmlFor="Email">
                                <div>Email</div>
                                <input type="email" name="Email" id="Email" onChange={Email} required />
                            </label>

                            <label htmlFor="Phone">
                                <div>Phone Number</div>
                                <input type="tel" name="phone" id="Phone" placeholder='XXX-XXX-XXXX' onChange={Phone} />
                                <div>(optional)</div>
                            </label>

                        </div>

                        <div className='myLabels'>

                            <label htmlFor="Address">
                                <div>Address</div>
                                <input type="text" name='Address' onChange={Address} />
                            </label>

                            <label htmlFor="Website">
                                <div>Website</div>
                                <input type="url" name="Website" id="Website" onChange={Website} />
                            </label>

                        </div>
                    </div>
            </>
        )
    }

    export const ContactPage = ({Email, Phone, Address, Website}) => {

        return (   

            <>

                <div className='contactDetails'>

                    <div className="contacts">
                        <img src={mail} alt="" height={'20px'} width={'20px'}/>
                        <div>{Email}</div>
                    </div>

                    <div className="contacts">
                        <img src={phone} alt="" height={'20px'} width={'20px'}/>
                        <div>{Phone}</div>
                    </div>

                    <div className="contacts">
                        <img src={address} alt="" height={'20px'} width={'20px'}/>
                        <div>{Address}</div>
                    </div>

                    <div className="contacts">
                        <img src={url} alt="" height={'20px'} width={'20px'}/>
                        <div>{Website}</div>
                    </div>
                </div>


            </>
        
        )

    }


      export const  EducationDisplay = ({schoolName, field, startTerm, endTerm}) => {

            return (

                <>

                        <div className="educationDetails">
                            <div><strong>{schoolName}</strong></div>
                            <div>{field}</div>
                            <div>{startTerm} - {endTerm}</div>
                        </div>
                   
                </>
            )
    }


    export const SkillsPage = ({Skill, Level}) => {

        return (

            <>
                <div className="SkillDetails">

                    <div className="displaySkills">

                            <div>{Skill} - {Level}</div>
                    </div>

                </div>
            </>
        )
    }

    export const SummaryLabel = ({Summary, Work, References}) => {


        return (

            <>
                <div className="SummaryLabels">

                    <div className="myLabels">
                    
                        <label htmlFor="Summary">
                            <textarea name="Summary" id="Summary" rows='10' cols='40' onChange={Summary} placeholder='Give a breif intro about yourself'></textarea>
                        </label>
                    </div>
                </div>

                <h3>Work Experience</h3>

                    <div className="SummaryLabels">

                        <div className="myLabels">
                    
                            <label htmlFor="Work Experience">
                                <textarea name="Summary" id="Summary" rows='10' cols='40' onChange={Work} placeholder='Tell us some prior Work Experiences'></textarea>
                            </label>
                        </div>
                    </div>


                <h3>Refrences</h3>

                    <div className="SummaryLabels">

                        <div className="myLabels">
                    
                            <label htmlFor="References">
                                <textarea name="References" id="References" rows='10' cols='40' onChange={References} placeholder='Please provide any References if any'></textarea>
                            </label>
                        </div>
                    </div>

            </>
        )
    }
    

    export const SummaryPage = ({Summary, Work, References}) => {

        const style = {

            display: 'flex',
            justifyContent: 'flex-start',
            width: '600px',
            borderBottom: '1px solid black'
        }

        const styleBox = {

            width: '600px', 
            height: '150px',
            border: '1px solid black'

        }

        return (

            <>
                <div className="SummaryDetails">

                    <h3 style={style}>Summary</h3>

                         <div style={styleBox}>

                            <div>{Summary}</div>

                         </div>
                         

                    <h3 style={style}>Work Experience</h3>

                        <div style={styleBox}>

                            <div>{Work}</div>

                        </div>

                    <h3 style={style}>References</h3>

                        <div style={styleBox}>

                            <div>{References}</div>

                        </div>
                    
                </div>
            </>
        )
    }

    
    
    


    