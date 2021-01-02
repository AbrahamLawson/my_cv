import React, { useMemo } from 'react'
import Typical from 'react-typical'

const AboutMe = ({ id, }) => {
    const typicalSteps = [
        '', 1000,
        'Abraham Lawson 👨', 1200,
        '', 1000,
        'a FullStack Developer 📱 ', 1000,
    ]
    const memoTypical = useMemo(() => (
        <Typical
            steps={typicalSteps}
            wrapper={'b'}
            loop={Infinity}
        />
    ), [])
    return (
        <div id={id} className="col-12 min-vh-100">
            <h1 className="text-center title p-2 bg-white shadow">About Me</h1>
            <div className="col-12 py-3 text-white">
                <p className="font-weight-bold m-0">Hello ,</p>
                <p className="m-0">
                    I am {' '}
                    {memoTypical}
                </p>
                <p>
                    I love learning new things every day 💡  and keeping up with the new technologies 🖥 
                </p>
                <div className="row align-items-center my-3">
                    <img
                        alt="Mobile Development"
                        className="col-6 bg-white rounded p-2 shadow"
                        src="https://www.mindinventory.com/blog/wp-content/uploads/2018/12/app-development-framework.png"
                    />
                    <p className="col-6 font-italic">
                        I want to build applications with my knowledge. From there, bringing technology closer to everyone
                    </p>
                </div>
                <div className="row align-items-center my-3">
                    <p className="col-6 font-italic">
                        I try my best every day to learn new knowledge.
                    </p>
                    <img
                        alt="Mobile Development"
                        className="col-6 bg-white rounded p-2 shadow"
                        src="https://s3-ap-southeast-2.amazonaws.com/geg-gug-webapp/images/1557364192-work_while_you_study_banner.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
export default AboutMe