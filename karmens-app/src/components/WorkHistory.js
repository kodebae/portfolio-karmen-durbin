import { useState } from 'react';

export const WorkHistory = () => {

    const data = [
        {
            company: 'Bestimate',
            title: 'Software Engineer Apprentice',
            date: 'June 2021 - Dec 2021',
            description: 'Engineered web scrapers that sped up collection processes by 53%, and collected data from websites that required real human interactions. Accelerated data collection processes by 9% and automated web scrapers. Optimized the data collection process by removing bugs which improved app runtime by 42%. Minimized system failures by 26% and performed preventive maintenance. Extracted raw XML data from web pages with Python, Scrapy, and BeautifulSoup, formatted and wrote collected data to CSV files.'
        },
        {
            company: 'MicroFund',
            title: 'Software Engineer Intern',
            date: 'Jan 2021 - Feb 2021',
            description: 'Reduced app load time to 3 seconds by identifying and removing unnecessary image files. Performed unit & load testing for the portal which reduced the error rate by 52%. Secured API endpoints and protected admin and user data, improved app security by 63%. Re-architected a high-performance RDBMS using Java Spring Boot. Installed, upgraded, and maintained SQL server and Postgres databases.'
        },
        {
            company: 'Freelance',
            title: 'Frontend Web Developer',
            date: 'May 2015 - April 2020',
            description: 'Designed and implemented customer-centric web applications, and provided efficient solutions to increase brand awareness by 47%. Boosted site engagement by 57% and reduced bounce rate with SEO strategies. Enhanced user engagement by 33% and implemented A/B testing. Calibrated workarounds for accessibility barriers and applied strategy to increase compliance. Optimized SEM processes and standardized existing technology requirements.'
        }
    ]

    const [selected, setSelected] = useState(null);

    const toggle = (idx) => {
        if (selected === idx) {
            return setSelected(null);
        }

        setSelected(idx);
    };

    return (
        <div className="wrapper">
            <div className="accordion">
                {data.map((items, idx) => (
                    <div className="work-data">
                        <div className="main-title" onClick={() => toggle(idx)}>
                            <h4>{items.company}</h4>
                            <h4>{selected === idx ? '-' : '+'}</h4>
                        </div>
                    
                        <div
                            className={selected === idx ? 'content show' : 'content'}>
                            <h5 className="drk-text">{items.title}</h5>
                            <h6 className="drk-text">{items.date}</h6>
                            <hr className="hr-line"></hr>
                            <p className="con-p">{items.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

// accordion drop down component used in skills component section