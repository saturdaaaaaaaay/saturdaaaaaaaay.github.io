export default async function Page() {
    return (
        <main className="flex flex-col items-center justify-between">
            <div>
                <h1>Work Experience</h1>
                <div>
                    <h2>Department Technical Director at DreamWorks Animation</h2>
                    <h3>December 2021 - January 2025</h3>
                    <ul>
                        <li>Developed tools for use in Maya using Python, MEL, and PyQT.</li>
                        <li>Supported artists which tasks such as publishing assets and debugging existing pipeline tools.</li>
                    </ul>
                </div>
                <div>
                    <h2>Core Production Services (CorPS) Intern at DreamWorks Animation</h2>
                    <h3>June 2021 - December 2021</h3>
                    <ul>
                        <li>Wrote autoamted tests using PyTest to monitor the status and function of RESTful API endpoints of one of the CorPS team's microservices.</li>
                    </ul>
                </div>
                <div>
                    <h2>Project Intern with Advanced Media Lab</h2>
                    <h3>January 2021 - April 2021</h3>
                    <ul>
                        <li>Developed materials and text displays with Blueprints in Unreal Engine 4 for an education VR game.</li>
                    </ul>
                    <iframe className="p-4" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6783499477794861056" height="542" width="504" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
                    <iframe className="p-4" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6780654299925102592" height="542" width="504" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
                </div>
                <div>
                    <h2>CS Teacher's Assistant</h2>
                    <h3>August 2019 - November 2020</h3>
                    <ul>
                        <li>Reviewed students' assignments & exams for an object-oriented programming and provided feedback.</li>
                    </ul>
                </div>
                <div>
                    <h2>Student Tech at Northern Arizona University ITS</h2>
                    <h3>August 2018 - April 2021</h3>
                    <ul>
                        <li>Provided technical support to NAU students and staff over the phone.</li>
                        <li>Wrote up and updated detailed incident tickets for each customer.</li>
                        <li>Responded to emails, self-reported tickets, and voicemails.</li>
                        <li>Monitored campus server rooms.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}