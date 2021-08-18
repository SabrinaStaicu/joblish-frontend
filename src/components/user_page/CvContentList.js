import React from 'react'

export default function CvContentList({resumeData}) {
    return (
        resumeData.map((data => (
            <div style={{marginBottom: '10%'}}>
                <h4>{data.name}</h4>
                {data.description}
            </div>
        )))
    )
}

