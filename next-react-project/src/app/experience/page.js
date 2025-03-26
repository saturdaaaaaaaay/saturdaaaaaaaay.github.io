export default async function Page() {
    return (
        <main className="flex flex-col items-center justify-between">
            <h1>Work Experience</h1>
            <div className="px-5 mx-1">
                <div>
                    <h2>Department Technical Director</h2>
                    <h3 className="italic">DreamWorks Animation</h3>
                    <h3>December 2021 - January 2025</h3>
                    <ul>
                        <li>Developed tools for use in Maya using Python, MEL, and PyQT.</li>
                        <li>Supported artists with tasks such as publishing assets and debugging existing pipeline tools.</li>
                    </ul>
                </div>
                <div>
                    <h2>Core Production Services (CorPS) Intern</h2>
                    <h3 className="italic">DreamWorks Animation</h3>
                    <h3>June 2021 - December 2021</h3>
                    <ul>
                        <li>Wrote automated tests using PyTest to monitor the status and function of RESTful API endpoints of one of the CorPS team's microservices.</li>
                    </ul>
                </div>
                <div>
                    <h2>Project Intern</h2>
                    <h3 className="italic">Advanced Media Lab at NAU</h3>
                    <h3>January 2021 - April 2021</h3>
                    <ul>
                        <li>Developed materials and text displays with Blueprints in Unreal Engine 4 for an educational VR game.</li>
                    </ul>
                    <details>
                        <summary className="cursor-pointer">Demos</summary>
                        <div className="bg-[#454757] rounded-3xl">
                            <iframe className="m-4" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6783499477794861056" height="542" width="504" allowFullScreen="" title="Embedded post"></iframe>
                            <iframe className="m-4" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6780654299925102592" height="542" width="504" allowFullScreen="" title="Embedded post"></iframe>
                        </div>
                    </details>
                </div>
                <div>
                    <h2>CS Teacher's Assistant</h2>
                    <h3 className="italic">Northern Arizona University</h3>
                    <h3>August 2019 - November 2020</h3>
                    <ul>
                        <li>Reviewed students' assignments & exams for an object-oriented programming course and provided feedback.</li>
                    </ul>
                </div>
                <div>
                    <h2>Student Tech</h2>
                    <h3 className="italic">Northern Arizona University ITS</h3>
                    <h3>August 2018 - April 2021</h3>
                    <ul>
                        <li>Provided technical support to NAU students and staff over the phone.</li>
                        <li>Wrote up and updated detailed incident tickets for each customer.</li>
                        <li>Responded to emails, self-reported tickets, and voicemails.</li>
                        <li>Monitored campus server rooms.</li>
                    </ul>
                </div>
            </div>

            <h1>Education</h1>
            <div className="px-1 mx-1">
                <div>
                    <h2>Northern Arizona University</h2>
                    <h3 className="italic">Bachelor of Science in Computer Science</h3>
                    <h3>Graduated Magna Cum Laude in December 2021</h3>
                    <ul>
                        <li>CS212: Web Programming -- HTML, CSS, JavaScript</li>
                        <li>CS249: Data Structures -- Java</li>
                        <li>CS345: Principles of Database Systems -- SQL, NoSQL</li>
                        <li>CS413: Virtual Worlds -- JavaScript</li>
                        <li>CS430: Computer Graphics -- C, JavaScript</li>
                        <li>CS460: Computer Networks -- JavaScript</li>
                    </ul>
                    <h2>Rio Salado College</h2>
                    <h3 className="italic">Associate of Arts</h3>
                    <h3>Graduated with Honors in May 2018</h3>
                </div>
            </div>

            <h1>Certifications</h1>
            <div>
                <h2>LinkedIn Learning Courses</h2>
                <ul>
                    <li>COBOL Essential Training</li>
                    <li>TypeScript Essential Training</li>
                    <li>Drupal 9 Essential Training (Courses 1-6)</li>
                    <li>React Essential Training</li>
                    <li>Learning Docker</li>
                    <li>Learning Kubernetes</li>
                    <li>Learning MySQL Development</li>
                    <li>Python Object-Oriented Programming</li>
                    <li>Python Essential Training</li>
                </ul>
            </div>
        </main>
    );
}