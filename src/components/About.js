import React from 'react';

const About = (props) => {
    const textColor = props.mode === 'dark' ? 'text-light' : 'text-dark';
    const bgColor = props.mode === 'dark' ? 'bg-dark' : 'bg-light';

    return (
        <div className={`container my-5 mx-10 ${bgColor} ${textColor}`}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button ${bgColor} ${textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Word Count
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show ${bgColor} ${textColor}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Word Count:</strong> This feature counts the number of words in your text. It's useful for ensuring your content meets specific word count requirements, such as for essays, articles, or social media posts.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${bgColor} ${textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Character Count
                        </button>
                    </h2>
                    <div id="collapseTwo" className={`accordion-collapse collapse ${bgColor} ${textColor}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Character Count:</strong> This feature provides the total number of characters in your text, including spaces. It helps in keeping track of character limits for platforms like Twitter or SMS messages.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${bgColor} ${textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Remove Extra Spaces
                        </button>
                    </h2>
                    <div id="collapseThree" className={`accordion-collapse collapse ${bgColor} ${textColor}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Remove Extra Spaces:</strong> This feature eliminates unnecessary spaces from your text, ensuring a clean and professional appearance. It removes leading, trailing, and multiple spaces between words.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${bgColor} ${textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Convert to Uppercase
                        </button>
                    </h2>
                    <div id="collapseFour" className={`accordion-collapse collapse ${bgColor} ${textColor}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Convert to Uppercase:</strong> This feature transforms all the text into uppercase letters. It's particularly useful for formatting headings or emphasizing text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${bgColor} ${textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Convert to Lowercase
                        </button>
                    </h2>
                    <div id="collapseFive" className={`accordion-collapse collapse ${bgColor} ${textColor}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Convert to Lowercase:</strong> This feature changes all the text to lowercase letters, which can be useful for standardizing text input or formatting.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className={`accordion-button collapsed ${bgColor} ${textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Copy Text
                        </button>
                    </h2>
                    <div id="collapseSix" className={`accordion-collapse collapse ${bgColor} ${textColor}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Copy Text:</strong> This feature allows you to quickly copy the processed text to your clipboard. It's convenient for transferring text to other applications or documents.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
