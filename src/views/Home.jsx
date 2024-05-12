export default function Home() {
    return (
        <div>Home
            <div className="score_container">
                <div className="highlight me-4">
                    <h1>Your Result</h1>
                    <div className="circle">
                        <span className="mb-1">76</span>
                        <p>of 100</p>
                    </div>

                    <span>Great</span>
                    <p>
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </div>
                <div className="content p-3">
                    <h2 className="summary text-center">Summary</h2>
                    <div className="summary-item fw-bold green">
                        <p>Team one</p>
                        <span>92</span>
                    </div>
                    <div className="summary-item fw-bold red">
                        <p>Team two</p>
                        <span>80</span>
                    </div>
                    <div className="summary-item fw-bold orange">
                        <p>Team three</p>
                        <span>61</span>
                    </div>
                    <div className="summary-item fw-bold cobalt">
                        <p>Team four</p>
                        <span>72</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
