import React from 'react';


export default function CommonHeader() {
    // JSON data for h1 and p content
    const headerData = {
        title: "Our Himalayan Blog",
        description: [
            "Discover stories about Nepalese culture, artisan ship, and the lives behind our",
            "handcrafted treasures."
        ]
    };

    return (
        <header className="bg-secondary text-white py-8 text-center">
            <div className="max-w-6xl mx-auto py-14 px-4">
                <h1 className="text-5xl font-bold mb-2 tracking-wide">{headerData.title}</h1>
                <p className="text-xl opacity-2 ">
                    {headerData.description.map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < headerData.description.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </header>
    );
}