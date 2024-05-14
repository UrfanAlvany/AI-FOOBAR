import React from 'react';

const About = () => {
    return (
        <section className="rounded-2xl text-black py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl font-bold mb-10">About & Usage</h2>
                <div className="flex items-start justify-center">
                    <div className="flex flex-grow min-h-[10em] gap-10">
                        <article className="w-1/2">
                            <h3 className="text-xl font-semibold mb-2">About Intellyse Project</h3>
                            <ul className="list-disc list-inside">
                                <li>Adaptive AI Technology: Dynamically selects between GPT-3.5 and GPT-4.0 models based on the complexity of the query to provide accurate and efficient solutions.</li>
                                <li>Real-time Assistance: Offers instant responses to your queries, helping you remain productive and focused.</li>
                                <li>Scalable and Robust: Designed to handle a wide range of queries, from simple syntax questions to complex algorithmic problems.</li>
                                <li>User-Friendly Interface: Easy-to-navigate interface with clear instructions and responsive design, suitable for developers of all skill levels.</li>
                            </ul>
                        </article>
                        <div className="flex-grow-0 flex-shrink-0 w-px bg-black self-stretch mx-5"></div>
                        <article className="w-1/2">
                            <h3 className="text-xl font-semibold mb-2">How to Use</h3>
                            <ul className="list-disc list-inside">
                                <li>Select a Feature: Start by choosing the desired feature from the left sidebar...</li>
                                <li>Engage with AI: Once you select Open AI,you will be directed to a chat interface...</li>
                                <li>Input Your Data: Enter your question in the chat input field...</li>
                                <li>AI-Generated Solutions: After submitting your question...</li>
                                <li>Review and Iterate: You can review the AI-generated output...</li>
                            </ul>
                            <p className="text-sm mt-4 italic">Note: All responses in the chat interface are rendered using a special code snippet renderer to ensure accurate formatting and readability of programming code.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
